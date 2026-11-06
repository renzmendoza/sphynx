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

The quote form sends submissions directly from the browser to `renzumendoza@gmail.com` through FormSubmit's standard HTML form endpoint, avoiding cross-origin AJAX restrictions. No custom domain or API key is required. The optional attachment is limited to 3 MB. Form data is submitted directly to FormSubmit, a third-party service.

On the first submission, FormSubmit sends an activation message to the recipient address. Open that message and confirm the form; submissions will not be forwarded until activation is complete. Afterward, test the form and check the recipient inbox and spam folder.

The form includes FormSubmit's honeypot field. Review FormSubmit's service terms and privacy practices before using the form for personal information.

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
