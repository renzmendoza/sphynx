# SPHYNX Glass and Aluminum

A responsive React and Vite website featuring SPHYNX products, company capabilities, project galleries and a quotation request form. Images and logos are served from the supplied `public/pics` assets; the asset catalog is maintained in `src/siteData.js`.

## Development

```sh
npm install
npm run dev
```

## Production checks

```sh
npm run lint
npm run build
```

## Quote request delivery

The quote form posts to the Vercel serverless function at `/api/inquiries`. The function validates all fields, limits optional attachments to 3 MB, and sends the inquiry to `renzumendoza@gmail.com` through Resend. Resend credentials stay on the server and are never exposed to the browser.

To enable delivery:

1. Create a Resend account and verify a domain you control. Set up the sender address you want to use on that domain.
2. Create a Resend API key with permission to send email.
3. In the Vercel project settings, add `RESEND_API_KEY` and `INQUIRY_FROM_EMAIL` (the verified sender address), then redeploy. Do not use a `VITE_` prefix for secrets.
4. For local development, create `.env.local` from `.env.example`, fill in those values, and run `npx vercel dev` so the Vercel function is available locally.
5. Submit a test quote and verify delivery in `renzumendoza@gmail.com` (including its spam folder). Enable Vercel Firewall rate limiting before making the public form widely available.

The API uses a server-side fixed recipient, validates the email and required fields, and includes a honeypot spam check. It returns success only after Resend accepts the message. Resend requires a verified sender domain for reliable delivery.

## Routes

- `#/` — Home
- `#/about` — About SPHYNX
- `#/products` — Product catalog
- `#/products/curtain-wall` — Curtain wall
- `#/products/spider-fittings` — Spider fittings
- `#/products/residential-windows-doors` — Residential windows and doors
- `#/projects` — Filterable project gallery
- `#/contact` — Quote request and office information

Product inquiries can be preselected with `#/contact?product=curtain-wall`. Project category inquiries can be preselected with `#/contact?category=Residential`.
