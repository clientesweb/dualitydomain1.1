import { Footer, Navbar } from "../components"
import { About, Explore, GetStarted, Hero, Insights, WhatsNew, World, Projects } from "../sections"
import Head from "next/head"

const Home = () => (
  <>
    <Head>
      <title>Duality Domain | Desarrollo Web Profesional en Villa del Dique, Córdoba</title>
      <meta
        name="description"
        content="Empresa líder en desarrollo web profesional ubicada en Villa del Dique, Córdoba, Argentina. Especializada en sitios web, e-commerce, SEO y aplicaciones web personalizadas. Más de 20 años de experiencia transformando negocios digitales en LATAM."
      />
      <meta
        name="keywords"
        content="desarrollo web Villa del Dique, diseño web Córdoba, empresa desarrollo web Argentina, e-commerce personalizado, SEO Villa del Dique, aplicaciones web Córdoba, sitios web profesionales, desarrollo web LATAM, agencia digital Argentina, programación web Villa del Dique, tiendas online Córdoba, optimización web SEO, UX UI design Argentina, desarrollo responsive, páginas web empresariales, landing pages profesionales, mantenimiento web, hosting web Argentina"
      />
      <link rel="canonical" href="https://www.dualitydomain.com" />

      {/* Open Graph */}
      <meta property="og:type" content="website" />
      <meta property="og:url" content="https://www.dualitydomain.com/" />
      <meta property="og:title" content="Duality Domain | Desarrollo Web Profesional en Villa del Dique, Córdoba" />
      <meta
        property="og:description"
        content="Empresa líder en desarrollo web profesional ubicada en Villa del Dique, Córdoba, Argentina. Especializada en sitios web, e-commerce, SEO y aplicaciones web personalizadas."
      />
      <meta property="og:image" content="https://www.dualitydomain.com/og-image.jpg" />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:image:alt" content="Duality Domain - Desarrollo Web Profesional - Villa del Dique, Córdoba" />
      <meta property="og:locale" content="es_AR" />
      <meta property="og:site_name" content="Duality Domain" />

      {/* Twitter */}
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content="https://www.dualitydomain.com/" />
      <meta
        property="twitter:title"
        content="Duality Domain | Desarrollo Web Profesional en Villa del Dique, Córdoba"
      />
      <meta
        property="twitter:description"
        content="Empresa líder en desarrollo web profesional ubicada en Villa del Dique, Córdoba, Argentina. Especializada en sitios web, e-commerce, SEO y aplicaciones web personalizadas."
      />
      <meta property="twitter:image" content="https://www.dualitydomain.com/og-image.jpg" />

      {/* Structured Data - WebSite */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebSite",
            "@id": "https://www.dualitydomain.com/#website",
            name: "Duality Domain",
            description: "Empresa líder en desarrollo web profesional ubicada en Villa del Dique, Córdoba, Argentina.",
            url: "https://www.dualitydomain.com",
            potentialAction: {
              "@type": "SearchAction",
              target: "https://www.dualitydomain.com/blog?search={search_term_string}",
              "query-input": "required name=search_term_string",
            },
            publisher: {
              "@type": "Organization",
              "@id": "https://www.dualitydomain.com/#organization",
            },
            inLanguage: "es-AR",
            copyrightYear: 2024,
            copyrightHolder: {
              "@type": "Organization",
              "@id": "https://www.dualitydomain.com/#organization",
            },
          }),
        }}
      />

      {/* Structured Data - BreadcrumbList */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            itemListElement: [
              {
                "@type": "ListItem",
                position: 1,
                name: "Inicio",
                item: "https://www.dualitydomain.com",
              },
              {
                "@type": "ListItem",
                position: 2,
                name: "Servicios",
                item: "https://www.dualitydomain.com/#explore",
              },
              {
                "@type": "ListItem",
                position: 3,
                name: "Proyectos",
                item: "https://www.dualitydomain.com/#projects",
              },
              {
                "@type": "ListItem",
                position: 4,
                name: "Blog",
                item: "https://www.dualitydomain.com/blog",
              },
            ],
          }),
        }}
      />
    </Head>
    <div className="bg-primary-black overflow-hidden">
      <Navbar />
      <Hero />
      <div className="relative">
        <About />
        <div className="gradient-03 z-0" />
        <Explore />
      </div>
      <div className="relative">
        <Projects />
        <div className="gradient-04 z-0" />
      </div>
      <div className="relative">
        <GetStarted />
        <div className="gradient-04 z-0" />
        <WhatsNew />
      </div>
      <World />
      <div className="relative">
        <Insights />
        <div className="gradient-04 z-0" />
      </div>
      <Footer />
    </div>
  </>
)

export default Home
