const recipient = 'renzumendoza@gmail.com'
const maxAttachmentBytes = 3 * 1024 * 1024
const allowedProjectTypes = new Set([
  'Residential',
  'Commercial',
  'Industrial',
  'Government',
  'Custom Glass Creation',
  'Architectural Facades',
  'Other',
])
const allowedProducts = new Set([
  'Curtain Wall',
  'Spider Fittings',
  'Residential Windows & Doors',
  'Other available products',
  'Not sure yet',
])
const allowedAttachments = new Map([
  ['.pdf', 'application/pdf'],
  ['.png', 'image/png'],
  ['.jpg', 'image/jpeg'],
  ['.jpeg', 'image/jpeg'],
  ['.webp', 'image/webp'],
])

function respond(res, status, message) {
  res.statusCode = status
  res.setHeader('Content-Type', 'application/json; charset=utf-8')
  res.setHeader('Cache-Control', 'no-store')
  res.end(JSON.stringify({ message }))
}

function cleanLine(value) {
  return value.trim().replace(/[\r\n]+/g, ' ')
}

function parseInquiry(body) {
  if (!body || typeof body !== 'object' || Array.isArray(body)) return null
  const stringField = (name, maxLength) => {
    const value = body[name]
    return typeof value === 'string' && value.trim().length <= maxLength
      ? value.trim()
      : null
  }

  const firstName = stringField('firstName', 100)
  const lastName = stringField('lastName', 100)
  const email = stringField('email', 254)
  const phone = stringField('phone', 24)
  const company = stringField('company', 200)
  const projectType = stringField('projectType', 80)
  const productInterest = stringField('productInterest', 100)
  const location = stringField('location', 200)
  const budget = stringField('budget', 100)
  const description = stringField('description', 5000)
  const website = stringField('website', 500)

  if (website) return { spam: true }
  if (
    !firstName ||
    !lastName ||
    !email ||
    !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email) ||
    !phone ||
    !/^[+0-9 ()-]{7,24}$/.test(phone) ||
    company === null ||
    !allowedProjectTypes.has(projectType) ||
    !allowedProducts.has(productInterest) ||
    !location ||
    budget === null ||
    !description
  ) return null

  return {
    firstName: cleanLine(firstName),
    lastName: cleanLine(lastName),
    email,
    phone: cleanLine(phone),
    company: cleanLine(company),
    projectType,
    productInterest,
    location: cleanLine(location),
    budget: cleanLine(budget),
    description: description.trim(),
    attachment: body.attachment,
  }
}

function parseAttachment(attachment) {
  if (attachment === undefined) return null
  if (
    !attachment ||
    typeof attachment !== 'object' ||
    typeof attachment.name !== 'string' ||
    typeof attachment.type !== 'string' ||
    typeof attachment.content !== 'string' ||
    attachment.content.length > Math.ceil(maxAttachmentBytes / 3) * 4 + 4
  ) return undefined

  const extension = attachment.name.toLowerCase().match(/\.[^.]+$/)?.[0]
  const expectedType = allowedAttachments.get(extension)
  if (!expectedType || attachment.type !== expectedType) return undefined
  if (!/^(?:[A-Za-z0-9+/]{4})*(?:[A-Za-z0-9+/]{2}==|[A-Za-z0-9+/]{3}=)?$/.test(attachment.content)) return undefined

  const content = Buffer.from(attachment.content, 'base64')
  if (
    content.length === 0 ||
    content.length > maxAttachmentBytes ||
    content.toString('base64') !== attachment.content
  ) return undefined

  return {
    filename: attachment.name.replace(/[^a-zA-Z0-9._-]/g, '_').slice(-100),
    content: attachment.content,
  }
}

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    res.setHeader('Allow', 'POST')
    return respond(res, 405, 'Method not allowed.')
  }

  const contentLengthHeader = req.headers['content-length']
  const contentLength = Number(contentLengthHeader ?? 0)
  if (
    contentLengthHeader &&
    (!Number.isFinite(contentLength) || contentLength > 4_500_000)
  ) return respond(res, 413, 'Request is too large.')

  const inquiry = parseInquiry(req.body)
  if (inquiry?.spam) return respond(res, 200, 'Request received.')
  if (!inquiry) return respond(res, 400, 'Please check the form fields and try again.')
  if (!process.env.RESEND_API_KEY || !process.env.INQUIRY_FROM_EMAIL) {
    console.error('Quote delivery is missing RESEND_API_KEY or INQUIRY_FROM_EMAIL.')
    return respond(
      res,
      503,
      'Email delivery is not configured. Add RESEND_API_KEY and INQUIRY_FROM_EMAIL to the Vercel project settings, then redeploy.',
    )
  }

  const attachment = parseAttachment(inquiry.attachment)
  if (attachment === undefined) {
    return respond(res, 400, 'The attachment is invalid or exceeds the 3 MB limit.')
  }

  const fullName = `${inquiry.firstName} ${inquiry.lastName}`
  const text = [
    'New SPHYNX quote request',
    '',
    `Name: ${fullName}`,
    `Email: ${inquiry.email}`,
    `Phone: ${inquiry.phone}`,
    `Company: ${inquiry.company || 'Not provided'}`,
    `Project type: ${inquiry.projectType}`,
    `Product of interest: ${inquiry.productInterest}`,
    `Project location: ${inquiry.location}`,
    `Estimated budget: ${inquiry.budget || 'Not provided'}`,
    '',
    'Project description:',
    inquiry.description,
  ].join('\n')

  let response
  try {
    response = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${process.env.RESEND_API_KEY}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        from: process.env.INQUIRY_FROM_EMAIL,
        to: [recipient],
        reply_to: inquiry.email,
        subject: `SPHYNX quote request - ${fullName}`,
        text,
        ...(attachment ? { attachments: [attachment] } : {}),
      }),
      signal: AbortSignal.timeout(10000),
    })
  } catch (error) {
    console.error('Resend request failed:', error instanceof Error ? error.message : 'Unknown error')
    return respond(res, 502, 'We could not deliver your request just now. Please try again later.')
  }

  if (!response.ok) {
    console.error(`Resend rejected quote email with status ${response.status}.`)
    const message = [401, 403, 422].includes(response.status)
      ? 'Email delivery setup needs attention. Please contact the site administrator.'
      : response.status === 429
        ? 'The email service is busy. Please wait a moment and try again.'
        : 'The email service is temporarily unavailable. Please try again later.'
    return respond(res, 502, message)
  }

  return respond(res, 200, 'Thank you. Your quote request has been sent.')
}
