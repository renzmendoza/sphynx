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
  files.map((file) => ({
    title: file
      .replace(/\.[^.]+$/, '')
      .replace(/[-_]+/g, ' ')
      .replace(/\b\w/g, (letter) => letter.toUpperCase()),
    image: `${folder}/${file}`,
    category,
  }))

export const projects = [
  ...makeProjects('recent projects', 'Recent', [
    '4-storey-batangas-hospital-project-sphynxglass-e1697968415809.jpg',
    'ACE-Medical-Center-Sta-Maria-Bulacan.png',
    'alabel-municipal-hall-sphynx-project.jpg',
    'breeze-spa-sphynx-project-e1697968459550.jpg',
    'Centuria-Medical-Center-sphynxglass-e1697968504103.jpg',
    'Citymall-Dipolog.jpg',
    'Citymall-Tuguegarao.jpg',
    'Cotabato-Regional-and-Medical-Center.jpg',
    'Cotabato-Regional-Blood-Center.jpg',
    'Crown-Equities-Inc.png',
    'DB-Schenker.jpg',
    'Dunkin-Donuts.jpg',
    'etching-projects.jpg',
    'etching-projects2.jpg',
    'kalayan-hospital-sphynx-project.jpg',
    'late-hotel-tagaytay-sphynx-project-e1697968028119.jpg',
    'Malabon-Medical-Center.jpg',
    'Metro-Pacific-South-Hub.jpg',
    'Municipality-of-Alabel.jpeg',
    'okada-project-sphynx-glass-e1697968327570.jpg',
    'Philam-life-bldg-sphynx-project3.jpg',
    'Sannovex-Pharmaceuticals.jpg',
    'shangrila-project-sphynxglass-e1697968441691.jpg',
    'sphynx-glass-project-e1697968523725.jpg',
    'sphynxglass-project-e1697968298175.jpg',
  ]),
  ...makeProjects('finished projects', 'Finished', [
    'ABB-Inc.-Project-2-e1697998276383.jpg',
    'AIM-project-e1697997753245.jpg',
    'Andoks-project.jpg',
    'Asian-Tower-Project-e1697997510136.jpg',
    'Assumption-college-project-e1697997778563.jpg',
    'bangko-central-project-e1697997449612.webp',
    'delasalle-project.jpg',
    'glodies-coffe-shop-project-e1697997678674.jpg',
    'Heritage-Park.jpg',
    'Land-Registration-Authority-Project-e1697997583249.jpg',
    'Malabon-3.png',
    'maxs-project-e1697997707724.jpg',
    'Philippine-Stock-Exchange-Glass-Project-1.jpg',
    'red-ribbon-project.jpg',
    'the-coffee-bean-shop.jpg',
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
  ['The-Heritage-Hotel-Manila-2-removebg-preview-1.png', 'The Heritage Hotel Manila'],
  ['The-Peninsula-Manila.svg', 'The Peninsula Manila'],
].map(([file, name]) => ({ image: `brands/${file}`, name }))
