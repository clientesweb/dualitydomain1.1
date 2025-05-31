"use client"

import Head from "next/head"
import Link from "next/link"
import Image from "next/image"
import { useState, useEffect } from "react"
import { Navbar, Footer } from "../../components"
import { insights } from "../../constants"
import styles from "../../styles"

const ArticulosIndex = () => {
  const [isLoading, setIsLoading] = useState(true)
  const [searchTerm, setSearchTerm] = useState("")
  const [filteredArticles, setFilteredArticles] = useState(insights)

  useEffect(() => {
    setIsLoading(false)
  }, [])

  useEffect(() => {
    const filtered = insights.filter(
      (article) =>
        article.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        article.subtitle.toLowerCase().includes(searchTerm.toLowerCase()) ||
        article.author.toLowerCase().includes(searchTerm.toLowerCase()),
    )
    setFilteredArticles(filtered)
  }, [searchTerm])

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
        <title>Artículos sobre Desarrollo Web | Duality Domain - Blog Técnico</title>
        <meta
          name="description"
          content="Descubre artículos especializados sobre desarrollo web, SEO, e-commerce y UX/UI. Consejos prácticos y estrategias para mejorar tu presencia digital en Villa del Dique, Córdoba."
        />
        <meta
          name="keywords"
          content="artículos desarrollo web, blog desarrollo web, SEO tips, e-commerce consejos, UX UI design, Villa del Dique, Córdoba, Argentina"
        />
        <link rel="canonical" href="https://www.dualitydomain.com/articulos" />
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=5" />

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

        {/* Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Blog",
              "@id": "https://www.dualitydomain.com/articulos#blog",
              name: "Blog de Duality Domain",
              description:
                "Artículos especializados sobre desarrollo web, SEO, e-commerce y UX/UI por expertos de Duality Domain.",
              url: "https://www.dualitydomain.com/articulos",
              publisher: {
                "@type": "Organization",
                "@id": "https://www.dualitydomain.com/#organization",
              },
              inLanguage: "es-AR",
              blogPost: insights.map((insight) => ({
                "@type": "BlogPosting",
                "@id": `https://www.dualitydomain.com/articulos/${insight.id}#article`,
                headline: insight.title,
                description: insight.subtitle,
                url: `https://www.dualitydomain.com/articulos/${insight.id}`,
                datePublished: insight.date,
                author: {
                  "@type": "Person",
                  name: insight.author,
                  jobTitle: insight.authorRole,
                },
                publisher: {
                  "@type": "Organization",
                  "@id": "https://www.dualitydomain.com/#organization",
                },
                image: `https://www.dualitydomain.com${insight.imgUrl}`,
              })),
            }),
          }}
        />
      </Head>

      <div className="bg-primary-black min-h-screen">
        <Navbar />

        <main className="bg-primary-black w-full min-h-screen">
          <section className={`${styles.paddings} bg-primary-black`}>
            <div className={`${styles.innerWidth} mx-auto flex flex-col bg-primary-black`}>
              {/* Page Header */}
              <header className="text-center mb-8 sm:mb-12">
                <h1 className="font-bold text-white text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl leading-tight mb-4 sm:mb-6">
                  Artículos sobre Desarrollo Web
                </h1>
                <p className="text-secondary-white text-base sm:text-lg md:text-xl max-w-4xl mx-auto mb-6 sm:mb-8 px-4 leading-relaxed">
                  Descubre consejos prácticos, estrategias y las mejores prácticas en desarrollo web, SEO, e-commerce y
                  experiencia de usuario. Conocimiento especializado para impulsar tu presencia digital.
                </p>

                {/* Search Bar */}
                <div className="max-w-md mx-auto mb-8 px-4">
                  <label htmlFor="search" className="sr-only">
                    Buscar artículos
                  </label>
                  <div className="relative">
                    <input
                      type="search"
                      id="search"
                      placeholder="Buscar artículos..."
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                      className="w-full bg-[#323f5d] text-white px-4 py-3 pl-10 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#25618B] border border-[#445175] hover:border-[#5b6898] transition-all"
                      aria-label="Buscar artículos por título, contenido o autor"
                    />
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <svg
                        className="h-5 w-5 text-secondary-white"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        aria-hidden="true"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                        />
                      </svg>
                    </div>
                  </div>
                </div>
              </header>

              {/* Articles Grid */}
              <section aria-label="Lista de artículos">
                {filteredArticles.length === 0 ? (
                  <div className="text-center py-12">
                    <p className="text-secondary-white text-lg mb-4">
                      No se encontraron artículos que coincidan con tu búsqueda.
                    </p>
                    <button
                      onClick={() => setSearchTerm("")}
                      className="text-[#25618B] hover:underline focus:outline-none focus:ring-2 focus:ring-[#25618B] rounded px-2 py-1"
                    >
                      Limpiar búsqueda
                    </button>
                  </div>
                ) : (
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
                    {filteredArticles.map((insight, index) => (
                      <article
                        key={insight.id}
                        className="bg-[#323f5d] rounded-lg sm:rounded-xl md:rounded-2xl overflow-hidden hover:bg-[#445175] focus-within:bg-[#445175] transition-all duration-300 group"
                      >
                        <Link
                          href={`/articulos/${insight.id}`}
                          className="block focus:outline-none focus:ring-4 focus:ring-[#25618B] rounded-lg sm:rounded-xl md:rounded-2xl"
                          aria-label={`Leer artículo: ${insight.title}`}
                        >
                          <div className="relative h-40 sm:h-48 md:h-52 overflow-hidden">
                            <Image
                              src={insight.imgUrl || "/placeholder.svg"}
                              alt={`Imagen del artículo: ${insight.title}`}
                              width={400}
                              height={200}
                              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                              loading={index < 3 ? "eager" : "lazy"}
                              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                            />
                          </div>

                          <div className="p-4 sm:p-6">
                            <div className="flex justify-between items-center mb-3">
                              <span className="bg-[#25618B] text-white text-xs px-3 py-1 rounded-full font-medium">
                                Artículo
                              </span>
                              <time dateTime={insight.date} className="text-secondary-white text-xs font-medium">
                                {insight.date}
                              </time>
                            </div>

                            <h2 className="text-white font-bold text-lg sm:text-xl md:text-2xl mb-3 group-hover:text-[#25618B] transition-colors leading-tight">
                              {insight.title}
                            </h2>

                            <p className="text-secondary-white text-sm sm:text-base leading-relaxed mb-4 line-clamp-3">
                              {insight.subtitle}
                            </p>

                            <div className="flex items-center justify-between">
                              <div className="flex items-center gap-2">
                                <div
                                  className="w-8 h-8 bg-[#25618B] rounded-full flex items-center justify-center flex-shrink-0"
                                  aria-hidden="true"
                                >
                                  <span className="text-white text-xs font-bold">
                                    {insight.author
                                      .split(" ")
                                      .map((n) => n[0])
                                      .join("")}
                                  </span>
                                </div>
                                <div>
                                  <p className="text-white text-sm font-medium">{insight.author}</p>
                                  <p className="text-secondary-white text-xs">{insight.authorRole}</p>
                                </div>
                              </div>

                              <div
                                className="text-[#25618B] group-hover:translate-x-1 transition-transform"
                                aria-hidden="true"
                              >
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  className="h-5 w-5"
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
                )}
              </section>

              {/* Call to Action */}
              <aside className="text-center mt-12 sm:mt-16 p-6 sm:p-8 bg-[#323f5d] rounded-lg sm:rounded-xl md:rounded-2xl">
                <h2 className="text-white font-bold text-xl sm:text-2xl md:text-3xl mb-4 sm:mb-6">
                  ¿Necesitas ayuda con tu proyecto?
                </h2>
                <p className="text-secondary-white text-sm sm:text-base md:text-lg mb-6 sm:mb-8 max-w-3xl mx-auto leading-relaxed px-2">
                  Si tienes preguntas específicas sobre alguno de estos temas o necesitas ayuda personalizada para tu
                  proyecto, no dudes en contactarnos.
                </p>
                <Link
                  href="/solicitar-demo"
                  className="inline-block bg-[#25618B] text-white py-3 sm:py-4 px-6 sm:px-8 rounded-lg hover:bg-[#1a4a6e] focus:bg-[#1a4a6e] transition-colors font-semibold text-sm sm:text-base md:text-lg focus:outline-none focus:ring-4 focus:ring-[#25618B]/50 min-h-[44px] min-w-[44px]"
                  aria-label="Solicitar consulta gratuita sobre desarrollo web"
                >
                  Solicitar consulta gratuita
                </Link>
              </aside>
            </div>
          </section>
        </main>

        <Footer />
      </div>
    </>
  )
}

export default ArticulosIndex
