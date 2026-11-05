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

The inquiry form validates its fields in the browser and submits `multipart/form-data` to the URL configured by `VITE_INQUIRY_ENDPOINT`. The endpoint must accept the named form fields and optional `attachment`, deliver the inquiry to the designated company email, and return a successful HTTP status only after delivery. Configure the receiving email and any spam controls on that backend or form service; do not put email credentials or private keys in the frontend.

Copy `.env.example` to `.env.local` and set the endpoint URL. Without a configured endpoint, the form clearly reports that it cannot send and provides a link to the official SPHYNX website; it will not show a false success message.

The frontend includes a honeypot field as a basic spam signal. Production delivery should also apply server-side validation, upload limits and spam protection.

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
