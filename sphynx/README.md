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

The quote form sends inquiries through [Web3Forms](https://web3forms.com/) to the email address verified when its access key is created. Create an access key for `renzumendoza@gmail.com`, add it to Vercel as `VITE_WEB3FORMS_ACCESS_KEY`, and redeploy. The access key is designed for browser-side forms and is public in the built client. For local development, set it in `.env.local` (see `.env.example`).

The form submits JSON directly to Web3Forms. File attachments require a paid Web3Forms plan, so the free integration does not include file uploads. Form data is handled by Web3Forms; review its privacy terms before collecting customer information.

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
