const root = '/pics/'

export const image = (path) => `${root}${path.split('/').map(encodeURIComponent).join('/')}`

export const products = [
  {
    slug: 'curtain-wall',
    name: 'Curtain Wall',
    eyebrow: 'Architectural systems',
    description:
      "A non-structural exterior covering that brings glass and aluminum together for a clean, contemporary building envelope. Explore curtain wall systems for commercial and architectural projects.",
    image: 'products/Curtain-Wall-1024x769.png',
    alt: 'Curtain wall glass and aluminum system',
    applications: ['Building exteriors', 'Commercial architecture', 'Glass facades'],
  },
  {
    slug: 'spider-fittings',
    name: 'Spider Fittings',
    eyebrow: 'Structural glazing',
    description:
      'Glass mounting hardware for creating open, light-filled architectural spaces. SPHYNX offers fin spider and point-fix spider fitting systems.',
    image: 'products/Spider-Fittings-1024x769.png',
    alt: 'Spider fitting glass mounting system',
    applications: ['Glass facades', 'Entrances', 'Architectural glazing'],
  },
  {
    slug: 'residential-windows-doors',
    name: 'Residential Windows & Doors',
    eyebrow: 'Residential systems',
    description:
      'Explore residential window and sliding-door options from SPHYNX. Discuss the right configuration for your home and project requirements with our team.',
    image: 'window-3d-view-sphynx-removebg-preview.png',
    alt: '3D visualization of a Sphynx aluminum window',
    contain: true,
    gallery: [
      'products/residential/Awning-window-sphynxglass.jpg',
      'products/residential/residential-sliding-door-e1697870774236.webp',
      'products/residential/sliding-door-sphynxglass-e1697871522458.jpg',
    ],
    applications: ['Residential windows', 'Sliding doors'],
  },
]

const makeProjects = (folder, category, files) =>
  files.map((project) => {
    const file = typeof project === 'string' ? project : project.image
    const title =
      typeof project === 'string'
        ? file
            .replace(/\.[^.]+$/, '')
            .replace(/[-_]+/g, ' ')
            .replace(/\b\w/g, (letter) => letter.toUpperCase())
        : project.title

    return { title, image: `${folder}/${file}`, category }
  })

export const projects = [
  ...makeProjects('recent projects', 'Recent', [
    {
      image: 'Centuria-Medical-Center-sphynxglass-e1697968504103.jpg',
      title: 'Centuria Medical Center Sliding Doors',
    },
    {
      image: 'ACE-Medical-Center-Sta-Maria-Bulacan.png',
      title: 'ACE Medical Center, Sta. Maria Bulacan',
    },
    {
      image: 'alabel-municipal-hall-sphynx-project.jpg',
      title: 'Alabel Municipal Hall',
    },
    {
      image: 'breeze-spa-sphynx-project-e1697968459550.jpg',
      title: 'Breeze Spa Glass Work',
    },
    {
      image: 'Citymall-Dipolog.jpg',
      title: 'Citymall Dipolog',
    },
    {
      image: 'Citymall-Tuguegarao.jpg',
      title: 'Citymall Tuguegarao',
    },
    {
      image: 'Cotabato-Regional-and-Medical-Center.jpg',
      title: 'Cotabato Regional and Medical Center',
    },
    {
      image: 'Cotabato-Regional-Blood-Center.jpg',
      title: 'Cotabato Regional Blood Center',
    },
    {
      image: 'Crown-Equities-Inc.png',
      title: 'Crown Equities Inc',
    },
    {
      image: 'DB-Schenker.jpg',
      title: 'DB Schenker',
    },
    {
      image: 'Dunkin-Donuts.jpg',
      title: 'Dunkin Donuts, Cavite',
    },
    {
      image: 'etching-projects.jpg',
      title: 'Office Glass Projects',
    },
    {
      image: 'etching-projects2.jpg',
      title: 'Office Glass Projects',
    },
    {
      image: 'kalayan-hospital-sphynx-project.jpg',
      title: 'Kalayan Hospital',
    },
    {
      image: 'late-hotel-tagaytay-sphynx-project-e1697968028119.jpg',
      title: 'Lake Hotel, Tagaytay',
    },
    {
      image: 'Malabon-Medical-Center.jpg',
      title: 'Malabon Medical Center',
    },
    {
      image: 'Metro-Pacific-South-Hub.jpg',
      title: 'Metro Pacific South Hub',
    },
    {
      image: 'Municipality-of-Alabel.jpeg',
      title: 'Municipality of Alabel',
    },
    {
      image: 'okada-project-sphynx-glass-e1697968327570.jpg',
      title: 'Okada Glass Work',
    },
    {
      image: 'Philam-life-bldg-sphynx-project3.jpg',
      title: 'AIA Tower, Makati City',
    },
    {
      image: 'Quezon City Hall glass canopy.jpg',
      title: 'Quezon City Hall Glass Canopy',
    },
    {
      image: 'Marinduque Provincial Hospital Boac Newly Renovated Building_v3.jpg',
      title: 'Marinduque Provincial Hospital',
    },
    {
      image: 'After Tree Dessert Cafe in SM Mall of Asia.jpg',
      title: 'After Tree Dessert Cafe,SM Mall of Asia',
    },
    {
      image: 'Sannovex-Pharmaceuticals.jpg',
      title: 'Sannovex Pharmaceuticals',
    },
    {
      image: 'shangrila-project-sphynxglass-e1697968441691.jpg',
      title: 'The Rise, Makati City',
    },
    {
      image: 'sphynx-glass-project-e1697968523725.jpg',
      title: 'Alabel Municipal Hall',
    },
    {
      image: 'sphynxglass-project-e1697968298175.jpg',
      title: 'Glass Door Project',
    },
  ]),
  ...makeProjects('finished projects', 'Finished', [
    {
      image: 'ABB-Inc.-Project-2-e1697998276383.jpg',
      title: 'ABB Inc. Project',
    },
    {
      image: 'AIM-project-e1697997753245.jpg',
      title: 'AIM Project',
    },
    {
      image: 'Andoks-project.jpg',
      title: 'Andoks Project',
    },
    {
      image: 'Asian-Tower-Project-e1697997510136.jpg',
      title: 'Asian Tower Project',
    },
    {
      image: 'Assumption-college-project-e1697997778563.jpg',
      title: 'Assumption College Project',
    },
    {
      image: 'bangko-central-project-e1697997449612.webp',
      title: 'Bangko Central Project',
    },
    {
      image: 'delasalle-project.jpg',
      title: 'De La Salle University Project',
    },
    {
      image: 'glodies-coffe-shop-project-e1697997678674.jpg',
      title: 'Goldies Coffee Shop Project',
    },
    {
      image: 'Heritage-Park.jpg',
      title: 'Heritage Park',
    },
    {
      image: 'Land-Registration-Authority-Project-e1697997583249.jpg',
      title: 'Land Registration Authority Project',
    },
    {
      image: 'Malabon-3.png',
      title: 'Malabon Project',
    },
    {
      image: 'maxs-project-e1697997707724.jpg',
      title: 'Max’s Restaurant, Cebu',
    },
    {
      image: 'Philippine-Stock-Exchange-Glass-Project-1.jpg',
      title: 'Philippine Stock Exchange Glass Project',
    },
    {
      image: 'red-ribbon-project.jpg',
      title: 'Red Ribbon Project',
    },
    {
      image: 'the-coffee-bean-shop.jpg',
      title: 'The Coffee Bean Shop',
    },
  ]),
  ...makeProjects('residential projects', 'Residential', [
    '1.png',
    '2.png',
    '3.png',
    '4.png',
    '5.png',
    '6.png',
    '7.png',
    '8.png',
    '9.png',
    '11.png',
  ]),
  ...makeProjects('commercial projects', 'Commercial', [
    'Automatic-slidingdoor-sphynxglass-1.jpg',
    'window-blinds-sphynxglass-e1697871387165.webp',
  ]),
  ...makeProjects('custom glass creation', 'Custom Glass', [
    'polymeric-etching2-window-sphynxglass-e1697870719704.jpg',
    'table-glass-sphynxglass-e1697871777395.jpg',
    'unique-mirrors-sphynxglass-e1697870963730.jpg',
  ]),
  ...makeProjects('architecture facades', 'Facades', [
    'architectural-glass-sphynxglass-e1697821702965.jpg',
    'spider_glazing_glass-sphynxglass-e1697871185694.jpg',
  ]),
]

export const capabilities = [
  {
    title: 'Glass tempering',
    image: 'companys capabilities/glass-tempering-sphynxglass-e1698000910916.jpg',
    description: 'Enhancing the strength and safety of glass through a precision tempering process.',
  },
  {
    title: 'Insulating glass',
    image:
      'companys capabilities/Insulating-glass-sphynxglass-e1698000972334-768x528.jpg',
    description: 'Glass insulating provides energy-efficient solutions that enhance insulation and sustainability.',
  },
  {
    title: 'Aluminum extrusion',
    image:
      'companys capabilities/aluminum-extruding-scaled-e1698000952288-768x527.jpg',
    description: 'Creating custom aluminum profiles and shapes for unique design and structural requirements.',
  },
  {
    title: 'Surface finishing',
    image: 'companys capabilities/Powder-Coating-Sphynxglass-768x527.jpg',
    description: 'Powder coating finishing gives aluminum profiles a durable, consistent surface.',
  },
  {
    title: 'Aluminum anodizing',
    image: 'companys capabilities/glass_anodizing-sphynxglass-e1698000877320.jpg',
    description: 'Glass anodizing achieves premium metal surface finishes, corrosion resistance and aesthetic appeal.',
  },
]

export const brands = [
  ['AIM-1.svg', 'AIM'],
  ['Andoks.svg', 'Andok’s'],
  ['ASL-1.svg', 'ASL'],
  ['BSP-2.svg', 'Bangko Sentral ng Pilipinas'],
  ['DLSU-2.svg', 'De La Salle University'],
  ['Dunkin.svg', 'Dunkin’'],
  ['MAX-Restaurant.svg', 'Max’s Restaurant'],
  ['Meralco.svg', 'Meralco'],
  ['Netopia.svg', 'Netopia'],
  ['PAF-1.svg', 'Philippine Air Force'],
  ['Red-Ribbon-1.svg', 'Red Ribbon'],
  ['logo.png', 'Philippine Marina'],
  ['After Tree Cafe logo.png', 'After Tree Cafe'],
  ['The-Heritage-Hotel-Manila-2-removebg-preview-1.png', 'The Heritage Hotel Manila'],
  ['The-Peninsula-Manila.svg', 'The Peninsula Manila'],
].map(([file, name]) => ({ image: `brands/${file}`, name }))
