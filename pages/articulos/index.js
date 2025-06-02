"use client"

import Head from "next/head"
import Link from "next/link"
import Image from "next/image"
import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { Navbar, Footer } from "../../components"
import WhatsAppButton from "../../components/WhatsAppButton"
import { insights } from "../../constants"
import styles from "../../styles"
import { staggerContainer, fadeIn } from "../../utils/motion"

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
                  url: insight.imgUrl,
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

      <div className="bg-primary-black overflow-hidden">
        <div className="absolute w-[50%] inset-0 gradient-01" />
        <Navbar />

        <main className="bg-primary-black w-full min-h-screen relative z-10">
          <motion.section
            variants={staggerContainer}
            initial="hidden"
            whileInView="show"
            viewport={{ once: false, amount: 0.25 }}
            className={`${styles.paddings} bg-primary-black relative z-10`}
          >
            <div className={`${styles.innerWidth} mx-auto flex flex-col bg-primary-black`}>
              {/* Breadcrumb Navigation */}
              <motion.nav
                variants={fadeIn("down", "tween", 0.1, 1)}
                aria-label="Breadcrumb"
                className="mb-6 sm:mb-8 md:mb-10 lg:mb-12"
              >
                <ol className="flex items-center space-x-2 text-sm sm:text-base text-secondary-white">
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
              </motion.nav>

              {/* Page Header */}
              <motion.header
                variants={fadeIn("up", "tween", 0.2, 1)}
                className="text-center mb-12 sm:mb-16 md:mb-20 lg:mb-24"
              >
                <div className="relative">
                  <h4 className="text-[#25618B] font-medium text-[14px] sm:text-[16px] uppercase tracking-wider mb-2">
                    | Recursos y Conocimiento
                  </h4>
                  <h1 className="font-bold text-white text-[32px] sm:text-[48px] md:text-[64px] lg:text-[80px] leading-tight mb-4 sm:mb-6">
                    Artículos sobre desarrollo web
                  </h1>
                  <p className="text-secondary-white text-[16px] sm:text-[18px] md:text-[20px] max-w-4xl mx-auto leading-relaxed px-4">
                    Descubre consejos prácticos, estrategias y las mejores prácticas en desarrollo web, SEO, e-commerce
                    y experiencia de usuario. Conocimiento especializado para impulsar tu presencia digital.
                  </p>
                </div>
              </motion.header>

              {/* Articles Grid */}
              <motion.section variants={fadeIn("up", "tween", 0.3, 1)} aria-label="Lista de artículos">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 md:gap-10">
                  {insights.map((insight, index) => (
                    <motion.article
                      key={insight.id}
                      variants={fadeIn("up", "spring", index * 0.1, 0.75)}
                      className="bg-[rgba(0,0,0,0.3)] rounded-[20px] sm:rounded-[24px] overflow-hidden hover:bg-[rgba(255,255,255,0.05)] transition-all duration-300 group border-[1px] border-[#6a6a6a] hover:border-[#25618B]"
                    >
                      <Link
                        href={`/articulos/${insight.id}`}
                        className="block focus:outline-none focus:ring-4 focus:ring-[#25618B] rounded-[20px] sm:rounded-[24px]"
                        aria-label={`Leer artículo: ${insight.title}`}
                      >
                        <div className="relative h-[200px] sm:h-[220px] md:h-[240px] overflow-hidden">
                          <Image
                            src={insight.imgUrl || "/placeholder.svg"}
                            alt={`Imagen del artículo: ${insight.title}`}
                            fill
                            className="object-cover group-hover:scale-105 transition-transform duration-300"
                            loading={index < 3 ? "eager" : "lazy"}
                            sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                          />
                        </div>

                        <div className="p-6 sm:p-8">
                          <div className="flex justify-between items-center mb-4">
                            <span className="bg-[#25618B] text-white text-xs sm:text-sm px-3 py-1 rounded-full font-medium">
                              Artículo
                            </span>
                            <time
                              dateTime={insight.date}
                              className="text-secondary-white text-xs sm:text-sm font-medium"
                            >
                              {insight.date}
                            </time>
                          </div>

                          <h2 className="text-white font-bold text-[20px] sm:text-[24px] md:text-[28px] mb-4 group-hover:text-[#25618B] transition-colors leading-tight">
                            {insight.title}
                          </h2>

                          <p className="text-secondary-white text-[14px] sm:text-[16px] leading-relaxed mb-6 line-clamp-3">
                            {insight.subtitle}
                          </p>

                          <div className="flex items-center justify-between">
                            <div className="flex items-center gap-3">
                              <div
                                className="w-10 h-10 sm:w-12 sm:h-12 bg-[#25618B] rounded-full flex items-center justify-center flex-shrink-0"
                                aria-hidden="true"
                              >
                                <span className="text-white text-sm sm:text-base font-bold">
                                  {insight.author
                                    .split(" ")
                                    .map((n) => n[0])
                                    .join("")}
                                </span>
                              </div>
                              <div className="min-w-0 flex-1">
                                <p className="text-white text-sm sm:text-base font-medium truncate">{insight.author}</p>
                                <p className="text-secondary-white text-xs sm:text-sm truncate">{insight.authorRole}</p>
                              </div>
                            </div>

                            <div
                              className="text-[#25618B] group-hover:translate-x-1 transition-transform flex-shrink-0"
                              aria-hidden="true"
                            >
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-5 w-5 sm:h-6 sm:w-6"
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
                    </motion.article>
                  ))}
                </div>
              </motion.section>

              {/* Call to Action */}
              <motion.aside
                variants={fadeIn("up", "tween", 0.4, 1)}
                className="text-center mt-16 sm:mt-20 md:mt-24 p-8 sm:p-10 md:p-12 bg-[rgba(0,0,0,0.3)] rounded-[24px] sm:rounded-[32px] max-w-4xl mx-auto border-[1px] border-[#6a6a6a]"
              >
                <h2 className="text-white font-bold text-[24px] sm:text-[32px] md:text-[40px] mb-4 sm:mb-6">
                  ¿Necesitas ayuda con tu proyecto?
                </h2>
                <p className="text-secondary-white text-[16px] sm:text-[18px] md:text-[20px] mb-8 sm:mb-10 leading-relaxed max-w-2xl mx-auto">
                  Si tienes preguntas específicas sobre alguno de estos temas o necesitas ayuda personalizada para tu
                  proyecto, no dudes en contactarnos.
                </p>
                <Link
                  href="/solicitar-demo"
                  className="inline-block bg-[#25618B] text-white py-4 px-8 sm:py-5 sm:px-10 rounded-[32px] hover:bg-[#1a4a6e] focus:bg-[#1a4a6e] transition-colors font-semibold text-[16px] sm:text-[18px] focus:outline-none focus:ring-4 focus:ring-[#25618B]/50 min-h-[44px] min-w-[44px]"
                  aria-label="Solicitar consulta gratuita sobre desarrollo web"
                >
                  Solicitar consulta gratuita
                </Link>
              </motion.aside>
            </div>
          </motion.section>
        </main>

        <Footer />
        <WhatsAppButton />
      </div>
    </>
  )
}

export default ArticulosIndex
