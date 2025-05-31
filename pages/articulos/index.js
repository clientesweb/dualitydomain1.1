"use client"

import Head from "next/head"
import Link from "next/link"
import Image from "next/image"
import { useState, useEffect } from "react"
import { Navbar, Footer } from "../../components"
import WhatsAppButton from "../../components/WhatsAppButton"
import { insights } from "../../constants"
import styles from "../../styles"

const ArticulosIndex = () => {
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    setIsLoading(false)
  }, [])

  if (isLoading) {
    return (
      <div className="bg-primary-black min-h-screen flex items-center justify-center">
        <div className="text-white">Cargando artículos...</div>
      </div>
    )
  }

  return (
    <>
      <Head>
        <title>Artículos sobre Desarrollo Web | Duality Domain - Blog Técnico Villa del Dique</title>
        <meta
          name="description"
          content="Descubre artículos especializados sobre desarrollo web, SEO, e-commerce y UX/UI escritos por expertos de Duality Domain en Villa del Dique, Córdoba. Consejos prácticos y estrategias para mejorar tu presencia digital."
        />
        <meta
          name="keywords"
          content="artículos desarrollo web, blog desarrollo web, SEO tips, e-commerce consejos, UX UI design, Villa del Dique, Córdoba, Argentina, desarrollo web profesional, optimización web, diseño responsivo, tiendas online"
        />
        <link rel="canonical" href="https://www.dualitydomain.com/articulos" />
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=5" />
        <meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1" />
        <meta name="author" content="Duality Domain" />
        <meta name="publisher" content="Duality Domain" />

        {/* Preload critical resources */}
        <link rel="preload" href="/logo.png" as="image" />
        <link rel="preload" href="/como-tener-un-buen-diseno-web.png" as="image" />

        {/* Open Graph */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.dualitydomain.com/articulos" />
        <meta property="og:title" content="Artículos sobre Desarrollo Web | Duality Domain - Blog Técnico" />
        <meta
          property="og:description"
          content="Descubre artículos especializados sobre desarrollo web, SEO, e-commerce y UX/UI. Consejos prácticos y estrategias para mejorar tu presencia digital."
        />
        <meta property="og:image" content="https://www.dualitydomain.com/og-image.jpg" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:locale" content="es_AR" />
        <meta property="og:site_name" content="Duality Domain" />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@dualitydomain" />
        <meta name="twitter:creator" content="@dualitydomain" />
        <meta name="twitter:title" content="Artículos sobre Desarrollo Web | Duality Domain" />
        <meta
          name="twitter:description"
          content="Descubre artículos especializados sobre desarrollo web, SEO, e-commerce y UX/UI."
        />
        <meta name="twitter:image" content="https://www.dualitydomain.com/og-image.jpg" />

        {/* Additional SEO */}
        <meta name="theme-color" content="#25618B" />
        <meta name="msapplication-TileColor" content="#1A232E" />
        <link rel="alternate" type="application/rss+xml" title="Duality Domain Blog RSS" href="/rss.xml" />

        {/* Structured Data - Blog */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Blog",
              "@id": "https://www.dualitydomain.com/articulos#blog",
              name: "Blog de Desarrollo Web - Duality Domain",
              description:
                "Artículos especializados sobre desarrollo web, SEO, e-commerce y UX/UI por expertos de Duality Domain en Villa del Dique, Córdoba.",
              url: "https://www.dualitydomain.com/articulos",
              publisher: {
                "@type": "Organization",
                "@id": "https://www.dualitydomain.com/#organization",
                name: "Duality Domain",
                url: "https://www.dualitydomain.com",
                logo: {
                  "@type": "ImageObject",
                  url: "https://www.dualitydomain.com/logo.png",
                },
                address: {
                  "@type": "PostalAddress",
                  streetAddress: "Ruta 5, km 107",
                  addressLocality: "Villa del Dique",
                  addressRegion: "Córdoba",
                  postalCode: "X5856",
                  addressCountry: "AR",
                },
              },
              inLanguage: "es-AR",
              blogPost: insights.map((insight) => ({
                "@type": "BlogPosting",
                "@id": `https://www.dualitydomain.com/articulos/${insight.id}#article`,
                headline: insight.title,
                description: insight.subtitle,
                url: `https://www.dualitydomain.com/articulos/${insight.id}`,
                datePublished: insight.date,
                dateModified: insight.date,
                author: {
                  "@type": "Person",
                  name: insight.author,
                  jobTitle: insight.authorRole,
                },
                publisher: {
                  "@type": "Organization",
                  "@id": "https://www.dualitydomain.com/#organization",
                },
                image: {
                  "@type": "ImageObject",
                  url: `https://www.dualitydomain.com${insight.imgUrl}`,
                  width: 1200,
                  height: 630,
                },
                mainEntityOfPage: {
                  "@type": "WebPage",
                  "@id": `https://www.dualitydomain.com/articulos/${insight.id}`,
                },
                keywords: ["desarrollo web", "SEO", "e-commerce", "UX/UI", "Villa del Dique", "Córdoba"],
              })),
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
                  name: "Artículos",
                  item: "https://www.dualitydomain.com/articulos",
                },
              ],
            }),
          }}
        />

        {/* Structured Data - WebSite */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebSite",
              "@id": "https://www.dualitydomain.com/#website",
              name: "Duality Domain",
              url: "https://www.dualitydomain.com",
              potentialAction: {
                "@type": "SearchAction",
                target: {
                  "@type": "EntryPoint",
                  urlTemplate: "https://www.dualitydomain.com/articulos?q={search_term_string}",
                },
                "query-input": "required name=search_term_string",
              },
              publisher: {
                "@type": "Organization",
                "@id": "https://www.dualitydomain.com/#organization",
              },
            }),
          }}
        />
      </Head>

      <div className="bg-primary-black min-h-screen relative">
        <Navbar />

        <main className="bg-primary-black w-full min-h-screen">
          <section className={`${styles.paddings} bg-primary-black`}>
            <div className={`${styles.innerWidth} mx-auto flex flex-col bg-primary-black`}>
              {/* Breadcrumb Navigation */}
              <nav aria-label="Breadcrumb" className="mb-4 xs:mb-5 sm:mb-6 md:mb-7 lg:mb-8 xl:mb-10">
                <ol className="flex items-center space-x-1 xs:space-x-1 sm:space-x-2 md:space-x-2 text-xs xs:text-sm sm:text-sm md:text-base lg:text-lg xl:text-xl text-secondary-white">
                  <li>
                    <Link
                      href="/"
                      className="hover:text-white transition-colors focus:outline-none focus:ring-2 focus:ring-[#25618B] rounded px-1"
                      aria-label="Ir a página de inicio"
                    >
                      Inicio
                    </Link>
                  </li>
                  <li aria-hidden="true" className="text-secondary-white">
                    /
                  </li>
                  <li className="text-white font-medium" aria-current="page">
                    Artículos
                  </li>
                </ol>
              </nav>

              {/* Page Header */}
              <header className="text-center mb-8 xs:mb-10 sm:mb-12 md:mb-14 lg:mb-16 xl:mb-20 2xl:mb-24">
                <h1 className="font-bold text-white text-xl xs:text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl 2xl:text-7xl 3xl:text-8xl leading-tight mb-3 xs:mb-4 sm:mb-5 md:mb-6 lg:mb-8 xl:mb-10 px-2 xs:px-3 sm:px-4">
                  Artículos sobre Desarrollo Web
                </h1>
                <p className="text-secondary-white text-sm xs:text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl 2xl:text-4xl max-w-xs xs:max-w-sm sm:max-w-md md:max-w-2xl lg:max-w-4xl xl:max-w-5xl 2xl:max-w-6xl mx-auto leading-relaxed px-3 xs:px-4 sm:px-6 md:px-8">
                  Descubre consejos prácticos, estrategias y las mejores prácticas en desarrollo web, SEO, e-commerce y
                  experiencia de usuario. Conocimiento especializado para impulsar tu presencia digital.
                </p>
              </header>

              {/* Articles Grid */}
              <section aria-label="Lista de artículos">
                <div className="grid grid-cols-1 xs:grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-3 3xl:grid-cols-4 gap-4 xs:gap-5 sm:gap-6 md:gap-7 lg:gap-8 xl:gap-10 2xl:gap-12">
                  {insights.map((insight, index) => (
                    <article
                      key={insight.id}
                      className="bg-[#323f5d] rounded-lg xs:rounded-xl sm:rounded-xl md:rounded-2xl lg:rounded-2xl xl:rounded-3xl overflow-hidden hover:bg-[#445175] focus-within:bg-[#445175] transition-all duration-300 group w-full max-w-sm xs:max-w-md sm:max-w-none mx-auto"
                    >
                      <Link
                        href={`/articulos/${insight.id}`}
                        className="block focus:outline-none focus:ring-4 focus:ring-[#25618B] rounded-lg xs:rounded-xl sm:rounded-xl md:rounded-2xl lg:rounded-2xl xl:rounded-3xl"
                        aria-label={`Leer artículo: ${insight.title}`}
                      >
                        <div className="relative h-32 xs:h-36 sm:h-40 md:h-44 lg:h-48 xl:h-52 2xl:h-56 3xl:h-64 overflow-hidden">
                          <Image
                            src={insight.imgUrl || "/placeholder.svg"}
                            alt={`Imagen del artículo: ${insight.title}`}
                            width={400}
                            height={200}
                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                            loading={index < 3 ? "eager" : "lazy"}
                            sizes="(max-width: 375px) 100vw, (max-width: 640px) 100vw, (max-width: 1024px) 50vw, (max-width: 1280px) 33vw, (max-width: 1920px) 33vw, 25vw"
                          />
                        </div>

                        <div className="p-3 xs:p-4 sm:p-5 md:p-6 lg:p-7 xl:p-8 2xl:p-10">
                          <div className="flex justify-between items-center mb-2 xs:mb-3 sm:mb-3 md:mb-4">
                            <span className="bg-[#25618B] text-white text-xs xs:text-xs sm:text-sm md:text-sm lg:text-base xl:text-lg px-2 xs:px-3 sm:px-3 md:px-4 py-1 xs:py-1 sm:py-1 md:py-2 rounded-full font-medium">
                              Artículo
                            </span>
                            <time
                              dateTime={insight.date}
                              className="text-secondary-white text-xs xs:text-xs sm:text-sm md:text-sm lg:text-base xl:text-lg font-medium"
                            >
                              {insight.date}
                            </time>
                          </div>

                          <h2 className="text-white font-bold text-sm xs:text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl 2xl:text-4xl mb-2 xs:mb-3 sm:mb-3 md:mb-4 lg:mb-5 group-hover:text-[#25618B] transition-colors leading-tight">
                            {insight.title}
                          </h2>

                          <p className="text-secondary-white text-xs xs:text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl leading-relaxed mb-3 xs:mb-4 sm:mb-4 md:mb-5 lg:mb-6 line-clamp-2 xs:line-clamp-3 sm:line-clamp-3 md:line-clamp-4">
                            {insight.subtitle}
                          </p>

                          <div className="flex items-center justify-between">
                            <div className="flex items-center gap-2 xs:gap-2 sm:gap-3 md:gap-3 lg:gap-4">
                              <div
                                className="w-6 h-6 xs:w-7 xs:h-7 sm:w-8 sm:h-8 md:w-9 md:h-9 lg:w-10 lg:h-10 xl:w-12 xl:h-12 bg-[#25618B] rounded-full flex items-center justify-center flex-shrink-0"
                                aria-hidden="true"
                              >
                                <span className="text-white text-xs xs:text-xs sm:text-sm md:text-sm lg:text-base xl:text-lg font-bold">
                                  {insight.author
                                    .split(" ")
                                    .map((n) => n[0])
                                    .join("")}
                                </span>
                              </div>
                              <div className="min-w-0 flex-1">
                                <p className="text-white text-xs xs:text-sm sm:text-sm md:text-base lg:text-lg xl:text-xl font-medium truncate">
                                  {insight.author}
                                </p>
                                <p className="text-secondary-white text-xs xs:text-xs sm:text-sm md:text-sm lg:text-base xl:text-lg truncate">
                                  {insight.authorRole}
                                </p>
                              </div>
                            </div>

                            <div
                              className="text-[#25618B] group-hover:translate-x-1 transition-transform flex-shrink-0"
                              aria-hidden="true"
                            >
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-4 w-4 xs:h-5 xs:w-5 sm:h-5 sm:w-5 md:h-6 md:w-6 lg:h-7 lg:w-7 xl:h-8 xl:w-8"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                              >
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                              </svg>
                            </div>
                          </div>
                        </div>
                      </Link>
                    </article>
                  ))}
                </div>
              </section>

              {/* Call to Action */}
              <aside className="text-center mt-8 xs:mt-10 sm:mt-12 md:mt-14 lg:mt-16 xl:mt-20 2xl:mt-24 p-4 xs:p-5 sm:p-6 md:p-7 lg:p-8 xl:p-10 2xl:p-12 bg-[#323f5d] rounded-lg xs:rounded-xl sm:rounded-xl md:rounded-2xl lg:rounded-2xl xl:rounded-3xl max-w-xs xs:max-w-sm sm:max-w-2xl md:max-w-4xl lg:max-w-5xl xl:max-w-6xl 2xl:max-w-7xl mx-auto">
                <h2 className="text-white font-bold text-lg xs:text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl 2xl:text-6xl mb-3 xs:mb-4 sm:mb-5 md:mb-6 lg:mb-8 xl:mb-10">
                  ¿Necesitas ayuda con tu proyecto?
                </h2>
                <p className="text-secondary-white text-sm xs:text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl 2xl:text-4xl mb-4 xs:mb-5 sm:mb-6 md:mb-7 lg:mb-8 xl:mb-10 2xl:mb-12 leading-relaxed px-2 xs:px-3 sm:px-4 md:px-6 lg:px-8">
                  Si tienes preguntas específicas sobre alguno de estos temas o necesitas ayuda personalizada para tu
                  proyecto, no dudes en contactarnos.
                </p>
                <Link
                  href="/solicitar-demo"
                  className="inline-block bg-[#25618B] text-white py-2 xs:py-3 sm:py-3 md:py-4 lg:py-5 xl:py-6 px-4 xs:px-5 sm:px-6 md:px-8 lg:px-10 xl:px-12 rounded-lg xs:rounded-xl sm:rounded-xl md:rounded-2xl hover:bg-[#1a4a6e] focus:bg-[#1a4a6e] transition-colors font-semibold text-sm xs:text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl focus:outline-none focus:ring-4 focus:ring-[#25618B]/50 min-h-[44px] min-w-[44px]"
                  aria-label="Solicitar consulta gratuita sobre desarrollo web"
                >
                  Solicitar consulta gratuita
                </Link>
              </aside>
            </div>
          </section>
        </main>

        <Footer />
        <WhatsAppButton />
      </div>
    </>
  )
}

export default ArticulosIndex
