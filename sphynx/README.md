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

The quote form opens a prefilled email draft addressed to `renzumendoza@gmail.com` using the visitor's default email app. No backend, email service account, or API key is required. Visitors must review and send the draft themselves. Browsers cannot attach a selected file through a `mailto:` link, so the form reminds visitors to attach it manually in their email app.

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
