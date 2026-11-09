const root = '/pics/'

export const image = (path) =>
  path
    ? `${root}${path
        .split('/')
        .map((segment) => encodeURIComponent(segment).replace(/%2C/gi, ','))
        .join('/')}`
    : null

const productImagePaths = {
  'Low-E Glass': 'glass products/low-e.jpg',
  'Single Silver Sunlight Shading Low-E Glass':
    'glass products/Single Silver Sunlight Shading Low-E Glass.jpg',
  'Single Silver High Transmittance Low-E Glass':
    'glass products/Single Silver High Transmittance Low-E Glass.jpg',
  'Architectural Glass': 'glass products/Architectural Glass.jpg',
  'Tempered Glass': 'glass products/Tempered Glass.jpg',
  'Table Glass': 'glass products/Table Glass.jpg',
  Mirrors: 'glass products/Mirrors.jpg',
  'Etched Glass': 'glass products/Etched Glass.jpg',
  'Graphic-Coated Glass': 'glass products/Graphic-Coated Glass.jpg',
  'Building and Partition Tint': 'glass products/Building and Partition Tint.jpg',
  'Beveled Glass': 'glass products/Beveled Glass.jpg',
  'Sensa Decco Backdrop Glass': 'glass products/Sensa Decco Backdrop Glass.jpg',
  'Sliding Doors': 'glass doors and windows/Sliding Doors.jpg',
  'Awning Windows': 'glass doors and windows/Awning Windows.jpg',
  'Casement Windows': 'glass doors and windows/Casement Windows.jpg',
  'Glass Swing Doors': 'glass doors and windows/Glass Swing Doors.jpg',
  'Frameless Sliding Glass Doors': 'glass doors and windows/Frameless Sliding Glass Doors.jpg',
  'Automatic Sensor-Type Frameless Sliding Glass Doors':
    'glass doors and windows/Automatic Sensor-Type Frameless Sliding Glass Doors.jpg',
  'Frameless Shower Enclosures': 'glass doors and windows/Frameless Shower Enclosures.jpg',
  'Sliding and Swing Shower Enclosures':
    'glass doors and windows/Sliding and Swing Shower Enclosures.jpg',
  'Patch-Fitting Tempered Glass Doors':
    'glass doors and windows/Patch-Fitting Tempered Glass Doors.jpg',
  'Swing Amplemesh Screen Doors':
    'glass doors and windows/Swing Amplemesh Screen Doors.jpg',
  'Curtain Wall Systems': 'Architectural Systems/Curtain Wall Systems.jpg',
  'Spider Fittings for Glass': 'Architectural Systems/Spider Fittings for Glass.jpg',
  'Wall Storefronts': 'Architectural Systems/Wall Storefronts.jpg',
  'Aluminum Folding Doors': 'Architectural Systems/Aluminum Folding Doors.jpg',
  'Stainless Steel Railings': 'Architectural Systems/Stainless Steel Railings.jpg',
  'Ventilation Systems (Louvers)': 'Architectural Systems/Ventilation Systems (Louvers).jpg',
  'Acrylic Sheets': 'other products/Acrylic Sheets.jpg',
  'Polycarbonate Sheets': 'other products/Polycarbonate Sheets.jpg',
  'Window Blinds (Horizontal, Vertical, and Roll-Up)':
    'other products/Window Blinds (Horizontal, Vertical, and Roll-Up).jpg',
  'Wardrobe Mirrors': 'other products/Wardrobe Mirrors.jpg',
  'Glass Showcases': 'other products/Glass Showcases.jpg',
  Aquariums: 'other products/Aquariums.jpg',
}

export const products = [
  {
    slug: 'low-e-glass',
    name: 'Low-E Glass',
    category: 'Glass Products',
    categorySlug: 'glass-products',
    eyebrow: 'Glass products',
    description:
      'Low-E glass uses a silver-based coating to provide high visible-light transmission and reflect infrared radiation. The profile lists sunlight-shading and high-transmittance options.',
    applications: ['Sunlight-shading glazing', 'High-transmittance glazing'],
    image: productImagePaths['Low-E Glass'],
  },
  {
    slug: 'single-silver-sunlight-shading-low-e-glass',
    name: 'Single Silver Sunlight Shading Low-E Glass',
    category: 'Glass Products',
    categorySlug: 'glass-products',
    eyebrow: 'Low-E glass',
    description:
      'The profile describes moderate visible-light transmission, solar shading with a shading coefficient below 0.5, and reduced summer heat transfer.',
    applications: ['Solar-shading glazing', 'Projects requiring moderate visible-light transmission'],
    image: productImagePaths['Single Silver Sunlight Shading Low-E Glass'],
  },
  {
    slug: 'single-silver-high-transmittance-low-e-glass',
    name: 'Single Silver High Transmittance Low-E Glass',
    category: 'Glass Products',
    categorySlug: 'glass-products',
    eyebrow: 'Low-E glass',
    description:
      'The profile describes high visible-light and solar transmission, a shading coefficient above 0.5, and infrared reflection for insulation.',
    applications: ['High-transmittance glazing', 'Colder regions', 'Transparent building designs'],
    image: productImagePaths['Single Silver High Transmittance Low-E Glass'],
  },
  ...[
    ['Architectural Glass', 'Architectural glass for building and glazing projects.'],
    ['Tempered Glass', 'Tempered glass supplied to project requirements.'],
    ['Table Glass', 'Glass for table applications.'],
    ['Mirrors', 'Mirror products, including mirrors for cabinet and wardrobe applications.'],
    ['Etched Glass', 'Etching for mirrors and glass partitions.'],
    ['Graphic-Coated Glass', 'Graphic-coated glass for project applications.'],
    ['Building and Partition Tint', 'Tint for buildings and glass partitions.'],
    ['Beveled Glass', 'Beveling services for table glass and mirrors.'],
    ['Sensa Decco Backdrop Glass', 'Decorative backdrop glass listed as Sensa Decco in the company profile.'],
  ].map(([name, description]) => ({
    slug: name.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, ''),
    name,
    category: 'Glass Products',
    categorySlug: 'glass-products',
    eyebrow: 'Glass products',
    description,
    applications: [],
    image: productImagePaths[name] ?? null,
  })),
  ...[
    ['Sliding Doors', 'Sliding doors for residential and commercial projects.'],
    ['Awning Windows', 'Awning windows for residential and commercial projects.'],
    ['Casement Windows', 'Casement windows for residential and commercial projects.'],
    ['Glass Swing Doors', 'Swing glass doors for residential and commercial projects.'],
    ['Frameless Sliding Glass Doors', 'Frameless sliding glass doors for residential and commercial applications.'],
    ['Automatic Sensor-Type Frameless Sliding Glass Doors', 'Automatic sensor-type frameless sliding glass doors for project applications.'],
    ['Frameless Shower Enclosures', 'Frameless glass shower enclosures.'],
    ['Sliding and Swing Shower Enclosures', 'Shower enclosures with sliding or swing door configurations.'],
    ['Patch-Fitting Tempered Glass Doors', 'Tempered glass doors with patch fittings.'],
    ['Swing Amplemesh Screen Doors', 'Swing screen doors listed as Amplemesh in the company profile.'],
  ].map(([name, description]) => ({
    slug: name.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, ''),
    name,
    category: 'Glass Doors and Windows',
    categorySlug: 'glass-doors-and-windows',
    eyebrow: 'Glass doors and windows',
    description,
    applications: [],
    image: productImagePaths[name] ?? null,
  })),
  ...[
    ['Curtain Wall Systems', 'Curtain wall systems for architectural and commercial projects.'],
    ['Spider Fittings for Glass', 'Spider fittings for glass installations.'],
    ['Wall Storefronts', 'Wall storefront systems for commercial applications.'],
    ['Aluminum Folding Doors', 'Aluminum folding doors for project applications.'],
    ['Stainless Steel Railings', 'Stainless steel railings for residential and commercial applications.'],
    ['Ventilation Systems (Louvers)', 'Louver systems for ventilation applications.'],
  ].map(([name, description]) => ({
    slug: name.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, ''),
    name,
    category: 'Architectural Systems',
    categorySlug: 'architectural-systems',
    eyebrow: 'Architectural systems',
    description,
    applications: [],
    image: productImagePaths[name] ?? null,
  })),
  ...[
    ['Acrylic Sheets', 'Acrylic sheets for project applications.'],
    ['Polycarbonate Sheets', 'Polycarbonate sheets for project applications.'],
    ['Window Blinds (Horizontal, Vertical, and Roll-Up)', 'Window blinds available in horizontal, vertical, and roll-up styles.'],
    ['Wardrobe Mirrors', 'F-10 sliding wardrobe mirrors for cabinet applications.'],
    ['Glass Showcases', 'Glass showcases for display applications.'],
    ['Aquariums', 'Glass aquariums for project applications.'],
  ].map(([name, description]) => ({
    slug: name.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, ''),
    name,
    category: 'Other Products',
    categorySlug: 'other-products',
    eyebrow: 'Other products',
    description,
    applications: [],
    image: productImagePaths[name] ?? null,
  })),
]

export const productCategories = [
  { slug: 'glass-products', name: 'Glass Products' },
  { slug: 'glass-doors-and-windows', name: 'Glass Doors and Windows' },
  { slug: 'architectural-systems', name: 'Architectural Systems' },
  { slug: 'other-products', name: 'Other Products' },
]

export const companyStrengths = [
  { title: 'Qualified, experienced installers', icon: 'bi-person-check' },
  { title: 'Dedicated engineering department', icon: 'bi-rulers' },
  { title: 'Glass tempering and insulating capabilities', icon: 'bi-layers' },
  { title: 'Commercial and residential installations', icon: 'bi-buildings' },
  { title: 'Anodizing and powder coating', icon: 'bi-palette' },
  { title: 'Warehouse facilities for material availability', icon: 'bi-building' },
  { title: 'Company delivery vehicle', icon: 'bi-truck' },
  { title: 'Proper equipment for business operations', icon: 'bi-tools' },
  { title: 'Customer-focused service and timely project completion', icon: 'bi-clock-history' },
]

export const services = [
  { title: 'Budgeting', icon: 'bi-calculator' },
  { title: 'Pricing and Cost Estimating', icon: 'bi-currency-exchange' },
  { title: 'Preconstruction Design', icon: 'bi-pencil-square' },
  { title: 'Product Feasibility', icon: 'bi-clipboard-check' },
  { title: 'Powder Coating of Aluminum Products', icon: 'bi-palette' },
  { title: 'Repair and Remodeling of Aluminum Products', icon: 'bi-wrench-adjustable' },
]

export const serviceProcess = [
  'Get the client’s requirements',
  'Suggest suitable glass and aluminum options',
  'Present glass samples',
  'Take measurements and prepare a quotation',
]

const projectCategoryOverrides = {
  'Asian Institute of Management': 'Schools',
  'Andok’s branches': 'Restaurants, Bars, and Coffee Shops',
  'Assumption College Project': 'Schools',
  'De La Salle University – School of Design and Arts': 'Schools',
  'Centuria Medical Center Sliding Doors': 'Hospitals',
  'ACE Medical Center, Sta. Maria Bulacan': 'Hospitals',
  'Cotabato Regional Blood Center': 'Hospitals',
  'Crown Equities Inc': 'Government and Private Institutions',
  'DB Schenker': 'Government and Private Institutions',
  'Citymall Dipolog': 'Supermarkets, Malls, and Spas',
  'Citymall Tuguegarao': 'Supermarkets, Malls, and Spas',
  'Breeze Spa Glass Work': 'Supermarkets, Malls, and Spas',
  'Dunkin Donuts, Cavite': 'Restaurants, Bars, and Coffee Shops',
  'Lake Hotel, Tagaytay': 'Hotels and Condominiums',
  'Goldies Coffee Shop': 'Restaurants, Bars, and Coffee Shops',
  'Cotabato Regional and Medical Center': 'Hospitals',
  'Kalayaan Hospital – Kawit, Cavite': 'Hospitals',
  'Malabon Medical Center': 'Hospitals',
  'MPT South Hub – Imus, Cavite': 'Government and Private Institutions',
  'Okada Glass Work': 'Hotels and Condominiums',
  'Sannovex Pharmaceuticals': 'Government and Private Institutions',
  'Max’s Restaurant – Tutuban Branch': 'Restaurants, Bars, and Coffee Shops',
  'Philippine Stock Exchange': 'Government and Private Institutions',
  'Red Ribbon': 'Restaurants, Bars, and Coffee Shops',
  'Coffee Bean Shop': 'Restaurants, Bars, and Coffee Shops',
  'Marinduque Provincial Hospital': 'Hospitals',
  'Quezon City Hall Glass Canopy': 'Government and Private Institutions',
  'After Tree Dessert Restaurant at MOA': 'Restaurants, Bars, and Coffee Shops',
  'Malabon Hospital and Medical Center': 'Hospitals',
  'Alabel Municipal Hall': 'Government and Private Institutions',
  'Municipality of Alabel': 'Government and Private Institutions',
  'The Rise, Makati City': 'Hotels and Condominiums',
  'AIA Tower, Makati City': 'Government and Private Institutions',
  'ABB Inc.': 'Government and Private Institutions',
  'Bangko Sentral ng Pilipinas': 'Government and Private Institutions',
  'Land Registration Authority': 'Government and Private Institutions',
}

const portfolioCategories = new Set([
  'Restaurants, Bars, and Coffee Shops',
  'Supermarkets, Malls, and Spas',
  'Schools',
  'Hotels and Condominiums',
  'Government and Private Institutions',
  'Residential Projects',
  'Hospitals',
])

const projectImagePaths = {
  'Andok’s branches': 'finished projects/Andoks-project.jpg',
  'Asian Institute of Management': 'finished projects/AIM-project-e1697997753245.jpg',
  'ABB Inc.': 'finished projects/ABB-Inc.-Project-2-e1697998276383.jpg',
  'Alabel Municipal Hall': 'recent projects/alabel-municipal-hall-sphynx-project.jpg',
  'Citymall Dipolog': 'recent projects/Citymall-Dipolog.jpg',
  'Citymall Tuguegarao': 'recent projects/Citymall-Tuguegarao.jpg',
  'Coffee Bean Shop': 'finished projects/the-coffee-bean-shop.jpg',
  'Goldies Coffee Shop': 'finished projects/glodies-coffe-shop-project-e1697997678674.jpg',
  'De La Salle University – School of Design and Arts':
    'finished projects/delasalle-project.jpg',
  'Kalayaan Hospital – Kawit, Cavite':
    'recent projects/kalayan-hospital-sphynx-project.jpg',
  'Malabon Medical Center': 'recent projects/Malabon-Medical-Center.jpg',
  'Marinduque Provincial Hospital':
    'recent projects/Marinduque Provincial Hospital Boac Newly Renovated Building_v3.jpg',
  'MPT South Hub – Imus, Cavite': 'recent projects/Metro-Pacific-South-Hub.jpg',
  'Max’s Restaurant – Tutuban Branch': 'finished projects/maxs-project-e1697997707724.jpg',
  'Metro North Hospital': 'company-profile/projects/metro-north-hospital.jpg',
  'After Tree Dessert Restaurant at MOA':
    'recent projects/After Tree Dessert Cafe in SM Mall of Asia.jpg',
  'Philippine Stock Exchange':
    'finished projects/Philippine-Stock-Exchange-Glass-Project-1.jpg',
  'Quezon City Hall Glass Canopy':
    'recent projects/Quezon City Hall glass canopy.jpg',
  'Red Ribbon': 'finished projects/red-ribbon-project.jpg',
}

const projectLocations = {
  'Asian Institute of Management': '123 Paseo de Roxas, Legazpi Village, Makati',
  'Andok’s branches': '9 Locations',
  'Assumption College Project': 'San Lorenzo Village, Makati',
  'Citymall Dipolog': 'Dipolog City Branch',
  'Citymall Tuguegarao':
    'Brgy. Leonarda, Pan-Philippine Highway, Tuguegarao, Cagayan',
  'Dunkin Donuts, Cavite': '4 Locations in Cavite',
  'Goldies Coffee Shop': 'Pasong Tamo, Makati City',
  'Land Registration Authority': 'Diliman, Quezon City',
  'Malabon Medical Center':
    'Governor N. Pascual Avenue, Brgy. Catmon, Malabon City',
  'MPT South Hub – Imus, Cavite': 'Imus, Cavite',
  'Philippine Stock Exchange':
    '6780 Ayala Avenue, Legazpi Village, Makati',
  'Red Ribbon': 'Commissary, Libis, Quezon City',
  'Coffee Bean Shop': 'Robinsons Dasmariñas, Cavite',
  'Sannovex Pharmaceuticals': 'Basilan St., Brgy. Malamig, Mandaluyong City',
  'After Tree Dessert Restaurant at MOA': 'SM Mall of Asia, Pasay City',
  'De La Salle University – School of Design and Arts':
    '2401 Taft Avenue, Malate, Manila',
  'ABB Inc.': 'Sucat, Parañaque',
  'Bangko Sentral ng Pilipinas': '',
  'Max’s Restaurant – Tutuban Branch': 'Tutuban Branch',
  'Kalayaan Hospital – Kawit, Cavite': 'Kawit, Cavite',
}

const profileProjects = [
  {
    title: 'De La Salle-College of Saint Benilde',
    category: 'Schools',
    location: 'Manila',
    image: 'dlsu-saint-benilde',
  },
  {
    title: 'Don Bosco Technical Institute Makati',
    category: 'Schools',
    location: 'Makati, Metro Manila',
    image: 'don-bosco-makati',
  },
  {
    title: 'Saint Pedro Poveda College',
    category: 'Schools',
    location: 'P. Poveda Street, Ortigas Center, Quezon City',
    image: 'saint-pedro-poveda-college',
  },
  {
    title: 'St. Scholastica’s College',
    category: 'Schools',
    location: '2560 Leon Guinto St., Malate, Manila',
    image: 'st-scholasticas-college',
  },
  {
    title: 'Colegio de San Juan de Dios',
    category: 'Schools',
    location: 'Roxas Boulevard, Pasay, Metro Manila',
    image: 'san-juan-de-dios-college',
  },
  {
    title: 'AIM Conference Center',
    category: 'Hotels and Condominiums',
    location: 'Benavidez corner Trasierra Streets, Legazpi Village, Makati',
    image: 'aim-conference-center',
  },
  {
    title: 'Bayview Park Hotel',
    category: 'Hotels and Condominiums',
    location: '1118 Roxas Boulevard, Ermita, Manila',
    image: 'bayview-park-hotel',
  },
  {
    title: 'Heritage Hotel',
    category: 'Hotels and Condominiums',
    location: 'Roxas Boulevard corner EDSA, Pasay',
    image: 'heritage-hotel',
  },
  {
    title: 'Manila Peninsula',
    category: 'Hotels and Condominiums',
    location: 'Corner of Ayala and Makati Avenues, Makati',
    image: 'manila-peninsula',
  },
  {
    title: 'Nichols Hotel',
    category: 'Hotels and Condominiums',
    location: 'Tambo, Parañaque',
    image: 'nichols-hotel',
  },
  {
    title: 'Oriental Garden',
    category: 'Hotels and Condominiums',
    location: 'Don Chino Roces Avenue, Makati',
    image: 'oriental-garden',
  },
  {
    title: 'Meralco Substation – San Joaquin',
    category: 'Government and Private Institutions',
    location: 'San Joaquin, Pasig',
    image: 'meralco-substation-san-joaquin',
  },
  {
    title: 'Netopia',
    category: 'Supermarkets, Malls, and Spas',
    location: '25 locations in Luzon',
    imagePath: 'Netopia-pic.jpg',
  },
  {
    title: 'DSWD – Batasan',
    category: 'Government and Private Institutions',
    location: 'Batasan Pambansa Complex, Quezon City',
    image: 'dswd-batasan',
  },
  {
    title: 'Metro North Hospital',
    category: 'Hospitals',
    location: '1001 Mindanao Avenue, Quezon City',
    image: 'metro-north-hospital',
  },
  {
    title: 'Altro Mondo Creative Space',
    category: 'Government and Private Institutions',
    location: 'Chino Roces Avenue, Makati',
    image: 'altro-mondo-creative-space',
  },
  {
    title: 'C&B Circle Mall Antipolo',
    category: 'Supermarkets, Malls, and Spas',
    location: 'Cristimar Avenue corner Sen. L. Sumulong Memorial Circle, Antipolo',
    image: 'c-and-b-circle-mall',
  },
  {
    title: 'Ciso’s Grill Restaurant Bar',
    category: 'Restaurants, Bars, and Coffee Shops',
    location: 'DLTB Co. Terminal, Brgy. Turbina, Calamba City, Laguna',
    image: 'cosis-grill-calamba',
  },
  {
    title: 'Gravy Baby MOA',
    category: 'Restaurants, Bars, and Coffee Shops',
    location: 'Mall of Asia',
    image: 'gravy-baby-moa',
  },
  {
    title: 'Surge Gym – MPlace Mall',
    category: 'Supermarkets, Malls, and Spas',
    location: 'MPlace Mall, Mother Ignacia Avenue, Quezon City',
    image: 'surge-gym-mplace',
  },
  {
    title: 'Surge Gym – Holy Spirit',
    category: 'Supermarkets, Malls, and Spas',
    location: 'Holy Spirit Drive, Quezon City',
    image: 'surge-gym-holy-spirit',
  },
  {
    title: 'Metropolitan Hospital',
    category: 'Hospitals',
    location: '1357 Masangkay St., Santa Cruz, Manila',
    image: 'metropolitan-hospital',
  },
  {
    title: 'Doksip Delos Reyes Residence',
    category: 'Residential Projects',
    location: 'Alabang',
    image: 'doksip-delos-reyes-residence',
  },
  {
    title: 'GOBO Office',
    category: 'Government and Private Institutions',
    location: 'Unit 402 Greenbelt Mansion, Perea St., Legazpi Village, Makati',
    image: 'gobo-office',
  },
].map((project) => ({
  ...project,
  id: `profile-${project.title.toLowerCase().replace(/[^a-z0-9]+/g, '-')}`,
  image: project.imagePath ?? `company-profile/projects/${project.image}.jpg`,
}))

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

    const id = `${category}-${title}-${file}`.toLowerCase().replace(/[^a-z0-9]+/g, '-')
    return {
      id,
      title,
      category:
        projectCategoryOverrides[title] ??
        (category === 'Residential' ? 'Residential Projects' : category),
      location:
        (typeof project === 'string' ? undefined : project.location) ??
        projectLocations[title],
      image: projectImagePaths[title] ?? `${folder}/${file}`,
    }
  })

const additionalProjects = [
  {
    id: 'fraser-place',
    title: 'Fraser Place',
    category: 'Hotels and Condominiums',
    image: 'Fraser Place.jpg',
  },
  {
    id: 'robinson-equitable-tower',
    title: 'Robinson Equitable Tower',
    category: 'Hotels and Condominiums',
    image: 'Robinson Equitable Tower.jpg',
  },
  {
    id: 'sti-san-jose',
    title: 'STI San Jose',
    category: 'Schools',
    image: 'STI – San Jose del Monte City, Bulacan.jpg',
  },
  {
    id: 'up-manila',
    title: 'UP Manila',
    category: 'Schools',
    image: 'up manila - college of nursing.png',
  },
  {
    id: 'dean-and-deluca',
    title: 'Dean & DeLuca',
    category: 'Supermarkets, Malls, and Spas',
    image: 'Dean and DeLuca – Taguig.jpg',
  },
]

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
      title: 'Kalayaan Hospital – Kawit, Cavite',
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
      title: 'MPT South Hub – Imus, Cavite',
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
      title: 'After Tree Dessert Restaurant at MOA',
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
      title: 'ABB Inc.',
    },
    {
      image: 'AIM-project-e1697997753245.jpg',
      title: 'Asian Institute of Management',
    },
    {
      image: 'Andoks-project.jpg',
      title: 'Andok’s branches',
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
      title: 'Bangko Sentral ng Pilipinas',
    },
    {
      image: 'delasalle-project.jpg',
      title: 'De La Salle University – School of Design and Arts',
    },
    {
      image: 'glodies-coffe-shop-project-e1697997678674.jpg',
      title: 'Goldies Coffee Shop',
    },
    {
      image: 'Heritage-Park.jpg',
      title: 'Heritage Park',
    },
    {
      image: 'Land-Registration-Authority-Project-e1697997583249.jpg',
      title: 'Land Registration Authority',
    },
    {
      image: 'Malabon-3.png',
      title: 'Malabon Hospital and Medical Center',
    },
    {
      image: 'maxs-project-e1697997707724.jpg',
      title: 'Max’s Restaurant – Tutuban Branch',
    },
    {
      image: 'Philippine-Stock-Exchange-Glass-Project-1.jpg',
      title: 'Philippine Stock Exchange',
    },
    {
      image: 'red-ribbon-project.jpg',
      title: 'Red Ribbon',
    },
    {
      image: 'the-coffee-bean-shop.jpg',
      title: 'Coffee Bean Shop',
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
    {
      image: 'Automatic-slidingdoor-sphynxglass-1.jpg',
      title: 'Automatic Sliding Door',
    },
    {
      image: 'window-blinds-sphynxglass-e1697871387165.webp',
      title: 'Window Blinds',
    },
  ]),
  ...makeProjects('custom glass creation', 'Custom Glass', [
    {
      image: 'polymeric-etching2-window-sphynxglass-e1697870719704.jpg',
      title: 'Polymeric Etching',
    },
    {
      image: 'table-glass-sphynxglass-e1697871777395.jpg',
      title: 'Table Glass',
    },
    {
      image: 'unique-mirrors-sphynxglass-e1697870963730.jpg',
      title: 'Unique Mirrors',
    },
  ]),
  ...makeProjects('architecture facades', 'Facades', [
    {
      image: 'architectural-glass-sphynxglass-e1697821702965.jpg',
      title: 'Architectural Glass',
    },
    {
      image: 'spider_glazing_glass-sphynxglass-e1697871185694.jpg',
      title: 'Spider Glazing Glass',
    },
  ]),
  ...profileProjects,
  ...additionalProjects,
].filter((project) => portfolioCategories.has(project.category))

export const capabilities = [
  {
    title: 'Glass tempering',
    image: 'companys capabilities/glass-tempering-sphynxglass-e1698000910916.jpg',
    description: 'Glass tempering is one of SPHYNX’s glass processing capabilities.',
  },
  {
    title: 'Insulating glass',
    image:
      'companys capabilities/Insulating-glass-sphynxglass-e1698000972334-768x528.jpg',
    description: 'Glass insulating is one of SPHYNX’s glass processing capabilities.',
  },
  {
    title: 'Engineering support',
    image: 'custom glass creation/polymeric-etching2-window-sphynxglass-e1697870719704.jpg',
    icon: 'bi-rulers',
    description: 'A dedicated engineering department supports the company’s project work.',
  },
  {
    title: 'Aluminum powder coating',
    image: 'companys capabilities/Powder-Coating-Sphynxglass-768x527.jpg',
    description: 'SPHYNX offers anodizing and powder coating as aluminum finishing capabilities.',
  }
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
