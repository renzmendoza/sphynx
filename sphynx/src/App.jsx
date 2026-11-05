import { useEffect, useMemo, useState } from 'react'
import { brands, capabilities, image, products, projects } from './siteData'
import './App.css'

const projectFilters = [
  'All',
  'Recent',
  'Finished',
  'Residential',
  'Commercial',
  'Custom Glass',
  'Facades',
]
const currentYear = new Date().getFullYear()

const routeInfo = () => {
  const [path = 'home', query = ''] = window.location.hash
    .replace(/^#\/?/, '')
    .split('?')
  return { path, params: new URLSearchParams(query) }
}

function Arrow({ diagonal = false }) {
  return (
    <svg
      aria-hidden="true"
      className="arrow-icon"
      viewBox="0 0 20 20"
      fill="none"
    >
      {diagonal ? (
        <path d="M5 15 15 5M6 5h9v9" />
      ) : (
        <path d="M3 10h13m-5-5 5 5-5 5" />
      )}
    </svg>
  )
}

function Header({ page }) {
  const [menuOpen, setMenuOpen] = useState(false)
  const [activeDropdown, setActiveDropdown] = useState(null)

  useEffect(() => {
    if (!activeDropdown) return undefined

    const closeOnOutsideClick = (event) => {
      if (event.target instanceof Element && !event.target.closest('.nav-dropdown')) {
        setActiveDropdown(null)
      }
    }
    const closeOnEscape = (event) => {
      if (event.key === 'Escape') {
        setActiveDropdown(null)
        document.getElementById(`${activeDropdown}-trigger`)?.focus()
      }
    }

    document.addEventListener('pointerdown', closeOnOutsideClick)
    document.addEventListener('keydown', closeOnEscape)
    return () => {
      document.removeEventListener('pointerdown', closeOnOutsideClick)
      document.removeEventListener('keydown', closeOnEscape)
    }
  }, [activeDropdown])

  const toggleDropdown = (dropdown) => {
    if (window.matchMedia('(max-width: 760px)').matches) {
      setActiveDropdown((active) => active === dropdown ? null : dropdown)
    } else {
      setActiveDropdown(dropdown)
    }
  }

  const nav = (
    <>
      <a className={page === 'home' ? 'active' : ''} href="#/">
        Home
      </a>
      <a className={page === 'about' ? 'active' : ''} href="#/about">
        About
      </a>
      <div
        className={`nav-dropdown ${activeDropdown === 'products' ? 'is-open' : ''}`}
        onMouseEnter={() => {
          if (!window.matchMedia('(max-width: 760px)').matches) setActiveDropdown('products')
        }}
        onMouseLeave={() => {
          if (!window.matchMedia('(max-width: 760px)').matches) setActiveDropdown(null)
        }}
      >
        <button
          aria-controls="products-menu"
          aria-expanded={activeDropdown === 'products'}
          className={`nav-dropdown-trigger ${page.startsWith('products') ? 'active' : ''}`}
          id="products-trigger"
          onClick={() => toggleDropdown('products')}
          type="button"
        >
          Products <span className="chevron" aria-hidden="true" />
        </button>
        <div className="dropdown-panel" id="products-menu">
          <a href="#/products">All products</a>
          {products.map((product) => (
            <a key={product.slug} href={`#/products/${product.slug}`}>
              {product.name}
            </a>
          ))}
        </div>
      </div>
      <div
        className={`nav-dropdown ${activeDropdown === 'projects' ? 'is-open' : ''}`}
        onMouseEnter={() => {
          if (!window.matchMedia('(max-width: 760px)').matches) setActiveDropdown('projects')
        }}
        onMouseLeave={() => {
          if (!window.matchMedia('(max-width: 760px)').matches) setActiveDropdown(null)
        }}
      >
        <button
          aria-controls="projects-menu"
          aria-expanded={activeDropdown === 'projects'}
          className={`nav-dropdown-trigger ${page === 'projects' ? 'active' : ''}`}
          id="projects-trigger"
          onClick={() => toggleDropdown('projects')}
          type="button"
        >
          Projects <span className="chevron" aria-hidden="true" />
        </button>
        <div className="dropdown-panel" id="projects-menu">
          <a href="#/projects">All projects</a>
          {projectFilters.slice(1).map((filter) => (
            <a href={`#/projects?category=${encodeURIComponent(filter)}`} key={filter}>
              {filter === 'Facades' ? 'Architectural facades' : filter}
            </a>
          ))}
        </div>
      </div>
      <a className={page === 'contact' ? 'active' : ''} href="#/contact">
        Contact
      </a>
      <a className="button button-gold nav-quote" href="#/contact">
        Get a quote <Arrow diagonal />
      </a>
    </>
  )

  return (
    <header className="site-header">
      <div className="header-inner">
        <a className="brand-mark" href="#/" aria-label="Sphynx Glass and Aluminum home">
          <img
            src={image('gold logo for navigation.png')}
            alt="Sphynx Glass and Aluminum"
            width="178"
            height="60"
          />
        </a>
        <nav
          className={`desktop-nav ${menuOpen ? 'mobile-open' : ''}`}
          aria-label="Main navigation"
          onClick={(event) => {
            if (event.target instanceof Element && event.target.closest('a')) {
              setMenuOpen(false)
              setActiveDropdown(null)
            }
          }}
          onBlur={(event) => {
            if (!event.currentTarget.contains(event.relatedTarget)) setActiveDropdown(null)
          }}
        >
          {nav}
        </nav>
        <button
          aria-label={menuOpen ? 'Close navigation menu' : 'Open navigation menu'}
          aria-expanded={menuOpen}
          className={`menu-toggle ${menuOpen ? 'is-open' : ''}`}
          onClick={() => {
            if (menuOpen) setActiveDropdown(null)
            setMenuOpen(!menuOpen)
          }}
          type="button"
        >
          <span />
          <span />
        </button>
      </div>
    </header>
  )
}

function SectionHeading({ eyebrow, title, copy, light = false }) {
  return (
    <div className={`section-heading ${light ? 'on-dark' : ''}`}>
      {eyebrow && <span className="eyebrow">{eyebrow}</span>}
      <h2>{title}</h2>
      {copy && <p>{copy}</p>}
    </div>
  )
}

function ProjectCard({ project, onOpen, index }) {
  return (
    <button
      className={`project-card project-card-${(index % 3) + 1}`}
      onClick={onOpen}
      type="button"
      aria-label={`View ${project.title}, ${project.category} project`}
    >
      <img src={image(project.image)} alt={project.title} loading="lazy" />
      <span className="project-overlay">
        <span className="project-category">{project.category}</span>
        <span className="project-title">{project.title}</span>
        <span className="project-open" aria-hidden="true">
          <Arrow diagonal />
        </span>
      </span>
    </button>
  )
}

function Lightbox({ items, activeIndex, setActiveIndex, onClose }) {
  const item = items[activeIndex]

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === 'Escape') onClose()
      if (event.key === 'ArrowRight') setActiveIndex((index) => (index + 1) % items.length)
      if (event.key === 'ArrowLeft')
        setActiveIndex((index) => (index - 1 + items.length) % items.length)
    }
    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [items.length, onClose, setActiveIndex])

  if (!item) return null

  return (
    <div className="lightbox" role="dialog" aria-modal="true" aria-label="Project image viewer" onClick={onClose}>
      <button className="lightbox-close" onClick={onClose} type="button" aria-label="Close image viewer">
        ×
      </button>
      <button
        className="lightbox-arrow previous"
        onClick={(event) => {
          event.stopPropagation()
          setActiveIndex((index) => (index - 1 + items.length) % items.length)
        }}
        type="button"
        aria-label="Previous image"
      >
        ‹
      </button>
      <figure onClick={(event) => event.stopPropagation()}>
        <img src={image(item.image)} alt={item.title} />
        <figcaption>
          <span>{item.title}</span>
          <span>{item.category}</span>
        </figcaption>
      </figure>
      <button
        className="lightbox-arrow next"
        onClick={(event) => {
          event.stopPropagation()
          setActiveIndex((index) => (index + 1) % items.length)
        }}
        type="button"
        aria-label="Next image"
      >
        ›
      </button>
    </div>
  )
}

function HomePage() {
  const recent = projects.filter((project) => project.category === 'Recent').slice(0, 5)
  const services = [
    {
      name: 'Residential',
      image: 'residential projects/3.png',
      copy: 'Thoughtful glass and aluminum details for the spaces you call home.',
      category: 'Residential',
    },
    {
      name: 'Commercial',
      image: 'commercial projects/Automatic-slidingdoor-sphynxglass-1.jpg',
      copy: 'Practical, considered installations for the places where business happens.',
      category: 'Commercial',
    },
    {
      name: 'Custom glass',
      image: 'custom glass creation/unique-mirrors-sphynxglass-e1697870963730.jpg',
      copy: 'Made-to-order glass details, mirrors and decorative creations.',
      category: 'Custom Glass',
    },
    {
      name: 'Architectural facades',
      image: 'architecture facades/architectural-glass-sphynxglass-e1697821702965.jpg',
      copy: 'Distinctive glass exteriors that bring architectural ideas to life.',
      category: 'Facades',
    },
  ]

  return (
    <>
      <section className="hero">
        <img
          className="hero-image"
          src={image('architecture facades/architectural-glass-sphynxglass-e1697821702965.jpg')}
          alt=""
          fetchPriority="high"
        />
        <div className="hero-shade" />
        <div className="hero-content page-width">
          <span className="eyebrow">Sphynx Glass and Aluminum</span>
          <h1>Designed with glass.<br /><em>BUILT TO LAST.</em></h1>
          <p>
            Your trusted partner for glass and aluminum solutions, from residential
            installations to commercial and architectural projects.
          </p>
          <div className="hero-actions">
            <a className="button button-gold" href="#/projects">
              Explore our projects <Arrow />
            </a>
            <a className="text-link light-link" href="#/contact">
              Request a quote <Arrow diagonal />
            </a>
          </div>
          <div className="hero-index"><span>01</span><i /> Built to last</div>
        </div>
        <div className="hero-side-label">GLASS / ALUMINUM / ARCHITECTURE</div>
      </section>

      <section className="intro-section page-width section-pad">
        <div className="intro-index">01 <span>— WHO WE ARE</span></div>
        <div className="intro-content">
          <SectionHeading
            eyebrow="Expertise you can build on"
            title={<>Made for the <em>way forward.</em></>}
          />
          <div className="intro-columns">
            <p className="lead-copy">
              SPHYNX Glass and Aluminum supplies, fabricates and installs glass and
              aluminum solutions for residential, commercial and industrial projects.
            </p>
            <div>
              <p>
                We bring together quality workmanship, durable materials and
                professional installation—with pricing and project delivery shaped
                around your needs.
              </p>
              <a className="text-link" href="#/about">Learn more about us <Arrow /></a>
            </div>
          </div>
        </div>
      </section>

      <section className="capability-band">
        <div className="page-width capability-layout">
          <div className="capability-copy">
            <span className="eyebrow">Our capabilities</span>
            <h2>Built on expertise. <em>Driven by precision.</em></h2>
            <p>
              From glass processing to aluminum finishing, explore the capabilities
              behind our work.
            </p>
            <a className="text-link light-link" href="#/about">Discover our capabilities <Arrow /></a>
          </div>
          <div className="capability-grid">
            {capabilities.slice(0, 3).map((item, index) => (
              <article className={`capability-item capability-${index + 1}`} key={item.title}>
                <img src={image(item.image)} alt={item.title} loading="lazy" />
                <span>0{index + 1}</span><h3>{item.title}</h3>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="services-section page-width section-pad">
        <SectionHeading
          eyebrow="What we do"
          title={<>Solutions for <em>every scale.</em></>}
          copy="Explore our work across homes, businesses and the built environment."
        />
        <div className="service-grid">
          {services.map((service, index) => (
            <a
              className="service-card"
              href={`#/projects?category=${encodeURIComponent(service.category)}`}
              key={service.name}
            >
              <img src={image(service.image)} alt="" loading="lazy" />
              <div className="service-card-bottom">
                <span>0{index + 1} / PROJECTS</span>
                <h3>{service.name}</h3>
                <p>{service.copy}</p>
                <span className="service-link">Explore projects <Arrow /></span>
              </div>
            </a>
          ))}
        </div>
      </section>

      <section className="products-section">
        <div className="page-width section-pad">
          <div className="section-topline">
            <SectionHeading
              eyebrow="Products and solutions"
              title={<>Designed to <em>perform.</em></>}
              copy="Explore selected glass and aluminum systems offered by SPHYNX."
            />
            <a className="text-link" href="#/products">View all products <Arrow /></a>
          </div>
          <div className="product-preview-grid">
            {products.map((product, index) => (
              <a className="product-preview" href={`#/products/${product.slug}`} key={product.slug}>
                <div className={`product-preview-image ${product.contain ? 'contain-image' : ''}`}>
                  <img src={image(product.image)} alt={product.alt} loading="lazy" />
                  <span className="product-number">0{index + 1}</span>
                  <span className="round-arrow"><Arrow diagonal /></span>
                </div>
                <span className="eyebrow">{product.eyebrow}</span>
                <h3>{product.name}</h3>
                <p>{product.description}</p>
              </a>
            ))}
          </div>
        </div>
      </section>

      <section className="work-section page-width section-pad">
        <div className="section-topline">
          <SectionHeading
            eyebrow="Selected work"
            title={<>Our latest <em>work.</em></>}
            copy="A selection of projects from our recent portfolio."
          />
          <a className="text-link" href="#/projects">View all projects <Arrow /></a>
        </div>
        <div className="home-project-grid">
          {recent.map((project, index) => (
            <a
              className="home-project"
              href={`#/projects?category=${encodeURIComponent(project.category)}`}
              key={project.image}
            >
              <img src={image(project.image)} alt={project.title} loading="lazy" />
              <span>{project.category} / 0{index + 1}</span>
              <h3>{project.title}</h3>
            </a>
          ))}
        </div>
      </section>

      <section className="advantage-section">
        <div className="page-width section-pad">
          <SectionHeading
            eyebrow="The Sphynx advantage"
            title={<>Good work is built <em>on trust.</em></>}
            light
          />
          <div className="advantage-grid">
            {[
              ['01', 'Flexible pricing', 'Solutions shaped around project requirements and budget.'],
              ['02', 'Thoughtful terms', 'Payment arrangements can be discussed around project needs.'],
              ['03', 'Competitive quotations', 'Clear pricing for construction and architectural projects.'],
              ['04', 'Professional installation', 'Qualified installers and experienced project personnel.'],
              ['05', 'Quality materials', 'Durable materials selected for long-term performance.'],
              ['06', 'On-time delivery', 'A commitment to completing work within agreed schedules.'],
            ].map(([number, title, description]) => (
              <article className="advantage-item" key={number}>
                <span>{number}</span>
                <h3>{title}</h3>
                <p>{description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <BrandStrip />

      <section className="closing-cta">
        <img src={image('architecture facades/spider_glazing_glass-sphynxglass-e1697871185694.jpg')} alt="" loading="lazy" />
        <div className="closing-overlay" />
        <div className="closing-content page-width">
          <span className="eyebrow">Have a project in mind?</span>
          <h2>Let’s build something <em>exceptional.</em></h2>
          <p>Let our team help you find the right glass and aluminum solution.</p>
          <a className="button button-gold" href="#/contact">Request a quote <Arrow diagonal /></a>
        </div>
      </section>
    </>
  )
}

function BrandStrip() {
  return (
    <section className="brands-section">
      <div className="page-width brands-heading">
        <span className="eyebrow">A few familiar names</span>
        <h2>Trusted by industry leaders.</h2>
      </div>
      <div className="brand-marquee" aria-label="Client and partner logos">
        <div className="brand-track">
          {[...brands, ...brands].map((brand, index) => (
            <div className="brand-logo-container" key={`${brand.name}-${index}`} aria-hidden={index >= brands.length}>
              <img src={image(brand.image)} alt={index >= brands.length ? '' : brand.name} loading="lazy" />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function PageIntro({ label, title, copy, className = '' }) {
  return (
    <section className={`page-intro page-width ${className}`}>
      <span className="eyebrow">{label}</span>
      <h1>{title}</h1>
      {copy && <p>{copy}</p>}
    </section>
  )
}

function ProductsPage() {
  return (
    <>
      <PageIntro
        label="Products / Systems"
        title={<>Built around <em>the view.</em></>}
        copy="A considered selection of glass and aluminum systems for architectural and commercial projects."
      />
      <section className="catalog-grid page-width">
        {products.map((product, index) => (
          <article className="catalog-card" key={product.slug}>
            <a className={`catalog-image ${product.contain ? 'contain-image' : ''}`} href={`#/products/${product.slug}`}>
              <img src={image(product.image)} alt={product.alt} />
              <span>0{index + 1}</span>
            </a>
            <div className="catalog-copy">
              <span className="eyebrow">{product.eyebrow}</span>
              <h2>{product.name}</h2>
              <p>{product.description}</p>
              <a className="text-link" href={`#/products/${product.slug}`}>
                Explore product <Arrow />
              </a>
            </div>
          </article>
        ))}
      </section>
      <QuoteBand />
    </>
  )
}

function ProductDetail({ slug }) {
  const product = products.find((item) => item.slug === slug)
  const [activeImage, setActiveImage] = useState(null)
  if (!product) {
    return (
      <main className="page-width not-found">
        <span className="eyebrow">Product not found</span>
        <h1>Let’s find the right solution.</h1>
        <a className="text-link" href="#/products">Browse products <Arrow /></a>
      </main>
    )
  }
  const relatedProjects = projects
    .filter((project) => project.category === 'Facades' || project.category === 'Commercial')
    .slice(0, 3)
  const gallery = [product.image, ...(product.gallery ?? [])].map((path, index) => ({
    title: index === 0 ? product.name : `${product.name} — image ${index + 1}`,
    image: path,
    category: 'Product',
  }))

  return (
    <>
      <section className="detail-hero page-width">
        <div className="detail-copy">
          <span className="eyebrow">{product.eyebrow} / Product {String(products.indexOf(product) + 1).padStart(2, '0')}</span>
          <h1>{product.name}<br /><em>systems.</em></h1>
          <p>{product.description}</p>
          <a className="button button-gold" href={`#/contact?product=${product.slug}`}>
            Request a quote <Arrow diagonal />
          </a>
        </div>
        <div className={`detail-hero-image ${product.contain ? 'contain-image' : ''}`}><img src={image(product.image)} alt={product.alt} /></div>
      </section>
      {product.gallery && (
        <section className="product-gallery page-width">
          <div className="section-topline">
            <SectionHeading eyebrow="Product gallery" title="Look a little closer." />
            <span className="eyebrow">{String(gallery.length).padStart(2, '0')} images</span>
          </div>
          <div className="product-gallery-grid">
            {gallery.map((item, index) => (
              <button
                className={index === 0 && product.contain ? 'contain-image' : ''}
                key={`${item.image}-${index}`}
                onClick={() => setActiveImage(index)}
                type="button"
                aria-label={`Expand ${item.title}`}
              >
                <img src={image(item.image)} alt={index === 0 ? product.alt : item.title} loading="lazy" />
                <span>0{index + 1}</span>
              </button>
            ))}
          </div>
          {activeImage !== null && (
            <Lightbox
              activeIndex={activeImage}
              items={gallery}
              onClose={() => setActiveImage(null)}
              setActiveIndex={setActiveImage}
            />
          )}
        </section>
      )}
      <section className="detail-overview page-width section-pad">
        <SectionHeading
          eyebrow="Product overview"
          title={<>A clear approach <em>to good design.</em></>}
          copy={product.description}
        />
        <div className="application-panel">
          <span className="eyebrow">Considered for</span>
          <ul>{product.applications.map((application) => <li key={application}>{application}</li>)}</ul>
          <p>Talk with our team about project requirements, available configurations and installation details.</p>
        </div>
      </section>
      <section className="related-section page-width section-pad">
        <SectionHeading eyebrow="In context" title="Related project work" />
        <div className="related-grid">
          {relatedProjects.map((project) => (
            <a href="#/projects" key={project.image}>
              <img src={image(project.image)} alt={project.title} loading="lazy" />
              <span>{project.category}</span><h3>{project.title}</h3>
              <Arrow diagonal />
            </a>
          ))}
        </div>
      </section>
      <QuoteBand product={product} />
    </>
  )
}

function ProjectsPage({ initialCategory }) {
  const [filter, setFilter] = useState(
    projectFilters.includes(initialCategory) ? initialCategory : 'All',
  )
  const [activeIndex, setActiveIndex] = useState(null)
  const visibleProjects = useMemo(
    () => (filter === 'All' ? projects : projects.filter((item) => item.category === filter)),
    [filter],
  )

  return (
    <>
      <PageIntro
        label="Projects / Portfolio"
        title={<>Made to last. <em>Made to matter.</em></>}
        copy="A look at selected residential, commercial and architectural projects from the SPHYNX portfolio."
      />
      <section className="gallery-section page-width">
        <div className="gallery-toolbar">
          <span className="eyebrow">{String(visibleProjects.length).padStart(2, '0')} projects</span>
          <div className="filter-list" aria-label="Filter projects">
            {projectFilters.map((category) => (
              <button
                aria-pressed={filter === category}
                className={filter === category ? 'selected' : ''}
                key={category}
                onClick={() => setFilter(category)}
                type="button"
              >
                {category === 'Facades' ? 'Facades' : category}
              </button>
            ))}
          </div>
        </div>
        <div className="project-grid">
          {visibleProjects.map((project, index) => (
            <ProjectCard
              index={index}
              key={project.image}
              onOpen={() => setActiveIndex(index)}
              project={project}
            />
          ))}
        </div>
      </section>
      {activeIndex !== null && (
        <Lightbox
          activeIndex={activeIndex}
          items={visibleProjects}
          onClose={() => setActiveIndex(null)}
          setActiveIndex={setActiveIndex}
        />
      )}
      <QuoteBand category={filter === 'All' ? '' : filter} />
    </>
  )
}

function AboutPage() {
  return (
    <>
      <PageIntro
        label="About Sphynx"
        title={<>Expertise you <em>can build on.</em></>}
        copy="SPHYNX Glass and Aluminum is a solutions provider for residential, commercial, industrial and government projects."
      />
      <section className="about-story page-width section-pad">
        <div className="about-story-image">
          <img src={image(capabilities[0].image)} alt="Glass tempering capability" />
          <span>Craft, capability, care.</span>
        </div>
        <div className="about-story-copy">
          <span className="eyebrow">Our approach</span>
          <h2>Quality work. <em>Built to last.</em></h2>
          <p>
            From supply and fabrication to installation, we focus on the details
            that make glass and aluminum work beautifully in a space.
          </p>
          <p>
            Our work is grounded in durable materials, professional installation,
            competitive quotations and a commitment to finishing on schedule.
          </p>
          <a className="text-link" href="#/projects">Explore our projects <Arrow /></a>
        </div>
      </section>
      <section className="about-services section-pad">
        <div className="page-width">
          <SectionHeading
            eyebrow="What we make and install"
            title={<>Glass, aluminum <em>and more.</em></>}
            copy="From glass supply and advanced processing to precise installation, our services support residential, commercial and architectural projects."
          />
          <div className="about-service-grid">
            <article className="about-service-card glass-supply-card">
              <img
                className="about-service-image"
                src={image('companys capabilities/Insulating-glass-sphynxglass-e1698000972334-768x528.jpg')}
                alt="Insulating glass production"
                loading="lazy"
              />
              <span className="eyebrow">Glass products and supply</span>
              <h3>Selected materials. <em>Advanced production.</em></h3>
              <p>
                We select quality glass and invest in production equipment to meet
                demanding project requirements. Low-E (low-emissivity) glass uses
                a thin, nearly invisible silver or multi-layer metal coating to
                improve comfort and building energy performance.
              </p>
              <ul className="service-benefits">
                <li>Superior daylight control</li>
                <li>Reduced solar heat</li>
                <li>Improved energy efficiency</li>
              </ul>
              <h4>Glass production equipment</h4>
              <ul className="equipment-list">
                <li>Tempered glass production line</li>
                <li>Automatic insulated glass unit (IGU) production line</li>
                <li>Bent tempered glass production line</li>
                <li>Double-edge machine</li>
                <li>Horizontal edge grinding and cleaning line</li>
              </ul>
            </article>
            <article className="about-service-card">
              <img
                className="about-service-image"
                src={image('commercial projects/Automatic-slidingdoor-sphynxglass-1.jpg')}
                alt="Glass and aluminum installation"
                loading="lazy"
              />
              <span className="eyebrow">Glass and aluminum installation</span>
              <h3>Careful installation. <em>Made for each space.</em></h3>
              <p>
                Our installation team brings precision and attention to quality to
                every project. Solutions include frameless glass doors, glass
                railings and aluminum frames for homes, commercial spaces,
                storefronts and other applications.
              </p>
              <p>
                Each installation is tailored to the project, balancing the
                appearance and functionality of the finished space.
              </p>
            </article>
            <article className="about-service-card">
              <img
                className="about-service-image"
                src={image('architecture facades/architectural-glass-sphynxglass-e1697821702965.jpg')}
                alt="Architectural glass and panel facade"
                loading="lazy"
              />
              <span className="eyebrow">Aluminum composite panels</span>
              <h3>Durable panels. <em>Distinctive exteriors.</em></h3>
              <p>
                We install aluminum composite panels for commercial and residential
                projects. Their versatile finish supports contemporary facades and
                renovations, bringing together functionality, visual appeal and
                durability built to withstand the test of time.
              </p>
            </article>
          </div>
        </div>
      </section>
      <section className="vision-section">
        <div className="page-width vision-grid">
          <article><span className="eyebrow">Our vision</span><h2>Keep moving <em>forward.</em></h2><p>To continue growing and reaching more customers with high-standard products at competitive prices, while continuously improving our technology and capabilities.</p></article>
          <article><span className="eyebrow">Our mission</span><h2>Good service. <em>Real value.</em></h2><ul><li>Provide innovative products at reasonable costs.</li><li>Deliver quality services and complete work on schedule.</li><li>Provide durable materials that stand the test of time.</li></ul></article>
        </div>
      </section>
      <section className="capability-gallery page-width section-pad">
        <SectionHeading eyebrow="Our capabilities" title={<>A closer look <em>at the process.</em></>} />
        <div className="capability-gallery-grid">
          {capabilities.map((item, index) => (
            <article key={item.title}>
              <img src={image(item.image)} alt={item.title} loading="lazy" />
              <span>0{index + 1} / CAPABILITY</span><h3>{item.title}</h3>
              <p>{item.description}</p>
            </article>
          ))}
        </div>
      </section>
      <QuoteBand />
    </>
  )
}

function ContactPage({ params }) {
  const productSlug = params.get('product')
  const initialProduct = products.find((product) => product.slug === productSlug)?.name ?? ''
  const projectTypeByCategory = {
    Residential: 'Residential',
    Commercial: 'Commercial',
    'Custom Glass': 'Custom Glass Creation',
    Facades: 'Architectural Facades',
  }
  const initialProjectType = projectTypeByCategory[params.get('category')] ?? ''
  const endpoint = import.meta.env.VITE_INQUIRY_ENDPOINT?.trim()
  const [sending, setSending] = useState(false)
  const [status, setStatus] = useState(null)

  async function submitInquiry(event) {
    event.preventDefault()
    if (sending) return
    const form = event.currentTarget
    const formData = new FormData(form)
    if (formData.get('website')) {
      setStatus({ type: 'error', text: 'Unable to submit this request. Please try again.' })
      return
    }
    if (!endpoint) {
      setStatus({
        type: 'error',
        text: 'Quote requests are not connected yet. Please visit the official SPHYNX website to get in touch.',
      })
      return
    }
    setSending(true)
    setStatus(null)
    try {
      const response = await fetch(endpoint, { method: 'POST', body: formData })
      if (!response.ok) throw new Error(`Inquiry endpoint returned ${response.status}`)
      setStatus({ type: 'success', text: 'Thank you. Your quote request has been sent.' })
      form.reset()
    } catch (error) {
      console.error('Quote request could not be delivered:', error)
      setStatus({
        type: 'error',
        text: 'We could not deliver your request just now. Please try again later or contact SPHYNX using the contact information on this page.',
      })
    } finally {
      setSending(false)
    }
  }

  return (
    <>
      <PageIntro
        label="Contact / Get a quote"
        title={<>Let's work <em>TOGETHER.</em></>}
        className="contact-intro"
        copy="Tell us a little about your project and our team can help you explore the right solution."
      />
      <section className="contact-layout page-width">
        <div className="contact-details">
          <span className="eyebrow contact-details-heading"><i aria-hidden="true" className="bi bi-geo-alt-fill" /> Office locations</span>
          <div className="office-block">
            <span><i aria-hidden="true" className="bi bi-geo-alt" /> MAKATI OFFICE</span>
            <p>Unit 235, Mile Long Building, Amorsolo Street corner Rufino Street, Barangay San Lorenzo, Makati City.</p>
            <a href="https://maps.google.com/?q=Unit+235+Mile+Long+Building+Amorsolo+Rufino+Makati+City" target="_blank" rel="noreferrer">Get directions <Arrow diagonal /></a>
          </div>
          <div className="office-block">
            <span><i aria-hidden="true" className="bi bi-geo-alt" /> PASAY OFFICE</span>
            <p>2955 EDSA Corner Taft Avenue, Pasay City.</p>
            <a href="https://maps.google.com/?q=2955+EDSA+Corner+Taft+Avenue+Pasay+City" target="_blank" rel="noreferrer">Get directions <Arrow diagonal /></a>
          </div>
          <div className="office-hours">
            <span><i aria-hidden="true" className="bi bi-clock-fill" /> BUSINESS HOURS</span>
            <p className="office-schedule">
              <span><i aria-hidden="true" className="bi bi-calendar-week" /> Monday to Friday</span>
              <span><i aria-hidden="true" className="bi bi-clock" /> 8:00 AM – 5:00 PM</span>
            </p>
          </div>
        </div>
        <form className="inquiry-form" onSubmit={submitInquiry}>
          <div className="form-heading">
            <span className="eyebrow">Request a quote</span>
            <h2>Tell us about <em>your project.</em></h2>
          </div>
          <div className="form-row">
            <label>First name<input name="firstName" autoComplete="given-name" required /></label>
            <label>Last name<input name="lastName" autoComplete="family-name" required /></label>
          </div>
          <div className="form-row">
            <label>Email address<input name="email" type="email" autoComplete="email" required /></label>
            <label>Phone number<input name="phone" type="tel" autoComplete="tel" pattern="[+0-9 ]{7,20}" title="Enter a valid phone number using digits, spaces, and an optional plus sign" required /></label>
          </div>
          <label>Company name <span>(optional)</span><input name="company" autoComplete="organization" /></label>
          <div className="form-row">
            <label>Project type
              <select name="projectType" defaultValue={initialProjectType} required>
                <option value="" disabled>Select project type</option>
                {['Residential', 'Commercial', 'Industrial', 'Government', 'Custom Glass Creation', 'Architectural Facades', 'Other'].map((value) => <option key={value}>{value}</option>)}
              </select>
            </label>
            <label>Product of interest
              <select name="productInterest" defaultValue={initialProduct} required>
                <option value="" disabled>Select a product</option>
                {products.map((product) => <option key={product.slug}>{product.name}</option>)}
                <option>Other available products</option><option>Not sure yet</option>
              </select>
            </label>
          </div>
          <div className="form-row">
            <label>Project location<input name="location" autoComplete="address-level2" required /></label>
            <label>Estimated budget <span>(optional)</span><input name="budget" inputMode="text" /></label>
          </div>
          <label>Project description<textarea name="description" rows="5" required /></label>
          <label>Attach a file or image <span>(optional)</span><input className="file-input" name="attachment" type="file" accept=".pdf,.png,.jpg,.jpeg,.webp" /></label>
          <label className="honeypot" aria-hidden="true">Website<input name="website" tabIndex="-1" autoComplete="off" /></label>
          {status && <p className={`form-status ${status.type}`} role={status.type === 'error' ? 'alert' : 'status'}>{status.text}</p>}
          {!endpoint && <p className="endpoint-note">Inquiry delivery needs to be configured before this form can send. Please contact SPHYNX using the office information on this page.</p>}
          <button className="button button-dark form-submit" type="submit" disabled={sending}>
            {sending ? 'Sending…' : 'Request a quote'} <Arrow />
          </button>
        </form>
      </section>
    </>
  )
}

function QuoteBand({ product, category }) {
  return (
    <section className="quote-band">
      <div className="page-width quote-band-inner">
        <div><span className="eyebrow">Have a project in mind?</span><h2>Let’s talk about <em>what’s possible.</em></h2></div>
        <a
          className="button button-gold"
          href={
            product
              ? `#/contact?product=${product.slug}`
              : category
                ? `#/contact?category=${encodeURIComponent(category)}`
                : '#/contact'
          }
        >
          Request a quote <Arrow diagonal />
        </a>
      </div>
    </section>
  )
}

function Footer() {
  return (
    <footer className="site-footer">
      <div className="page-width footer-main">
        <div className="footer-brand">
          <img src={image('logos/logo white with text.png')} alt="Sphynx Glass and Aluminum" />
          <p>Glass and aluminum solutions for residential, commercial and industrial projects.</p>
        </div>
        <div className="footer-links">
          <span>Explore</span><a href="#/">Home</a><a href="#/about">About us</a><a href="#/products">Products</a><a href="#/projects">Projects</a>
        </div>
        <div className="footer-links">
          <span>Products</span>{products.map((product) => <a href={`#/products/${product.slug}`} key={product.slug}>{product.name}</a>)}
        </div>
        <div className="footer-links">
          <span>Get in touch</span><a href="#/contact">Request a quote</a><p>Monday to Friday<br />8:00 AM – 5:00 PM</p>
        </div>
      </div>
      <div className="page-width footer-bottom"><span>© {currentYear} SPHYNX Glass and Aluminum</span><span>Engineering glass. Defining spaces.</span></div>
    </footer>
  )
}

function App() {
  const [route, setRoute] = useState(routeInfo)
  const page = route.path.split('/')[0] || 'home'
  const productSlug = page === 'products' ? route.path.split('/')[1] : ''
  const projectCategory = route.params.get('category')

  useEffect(() => {
    const updateRoute = () => {
      setRoute(routeInfo())
      window.scrollTo({
        top: 0,
        behavior: window.matchMedia('(prefers-reduced-motion: reduce)').matches ? 'auto' : 'smooth',
      })
    }
    window.addEventListener('hashchange', updateRoute)
    return () => window.removeEventListener('hashchange', updateRoute)
  }, [])

  useEffect(() => {
    const titles = {
      home: 'SPHYNX Glass and Aluminum | Engineering Glass. Defining Spaces.',
      about: 'About SPHYNX | Glass and Aluminum',
      products: productSlug
        ? `${products.find((item) => item.slug === productSlug)?.name ?? 'Product'} | SPHYNX`
        : 'Glass and Aluminum Products | SPHYNX',
      projects: 'Glass and Aluminum Projects | SPHYNX',
      contact: 'Request a Quote | SPHYNX Glass and Aluminum',
    }
    document.title = titles[page] ?? 'SPHYNX Glass and Aluminum'
    const descriptions = {
      home: 'Glass and aluminum solutions for residential, commercial and industrial projects. Explore SPHYNX products, capabilities and project work.',
      about: 'Learn about SPHYNX Glass and Aluminum, our approach, vision, mission and capabilities.',
      products: 'Explore curtain wall and spider fitting systems from SPHYNX Glass and Aluminum.',
      projects: 'Explore residential, commercial, custom glass and architectural facade projects by SPHYNX.',
      contact: 'Tell SPHYNX about your glass and aluminum project and request a quotation.',
    }
    document
      .querySelector('meta[name="description"]')
      ?.setAttribute('content', descriptions[page] ?? descriptions.home)
  }, [page, productSlug])

  let content
  if (page === 'products' && productSlug) content = <ProductDetail slug={productSlug} />
  else if (page === 'products') content = <ProductsPage />
  else if (page === 'projects') content = <ProjectsPage key={projectCategory ?? 'all'} initialCategory={projectCategory} />
  else if (page === 'about') content = <AboutPage />
  else if (page === 'contact') content = <ContactPage params={route.params} />
  else content = <HomePage />

  return (
    <>
      <a className="skip-link" href="#main-content">Skip to content</a>
      <Header page={page} />
      <main id="main-content">{content}</main>
      <Footer />
    </>
  )
}

export default App
