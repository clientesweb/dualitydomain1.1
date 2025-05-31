"use client"

import Head from "next/head"
import Link from "next/link"
import Image from "next/image"
import { useState, useEffect } from "react"
import { Navbar, Footer } from "../../components"
import { insights } from "../../constants"
import styles from "../../styles"

const ArticleDesignConversions = () => {
  const [isLoading, setIsLoading] = useState(true)
  const article = insights.find((insight) => insight.id === "diseno-web-conversiones")

  useEffect(() => {
    setIsLoading(false)
  }, [])

  if (!article) {
    return (
      <div className="bg-primary-black min-h-screen flex items-center justify-center">
        <div className="text-white text-center">
          <h1 className="text-2xl font-bold mb-4">Artículo no encontrado</h1>
          <Link href="/articulos" className="text-[#25618B] hover:underline">
            Volver a artículos
          </Link>
        </div>
      </div>
    )
  }

  if (isLoading) {
    return (
      <div className="bg-primary-black min-h-screen flex items-center justify-center">
        <div className="text-white">Cargando...</div>
      </div>
    )
  }

  return (
    <>
      <Head>
        <title>{article.title} | Duality Domain - Desarrollo Web Villa del Dique</title>
        <meta name="description" content={article.subtitle} />
        <meta
          name="keywords"
          content="diseño web conversiones, UX UI design, optimización conversiones, diseño web Villa del Dique, desarrollo web Córdoba"
        />
        <link rel="canonical" href="https://www.dualitydomain.com/articulos/diseno-web-conversiones" />
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=5" />

        {/* Preload critical resources */}
        <link rel="preload" href={article.imgUrl} as="image" />
        <link rel="preload" href="/logo.png" as="image" />

        {/* Open Graph */}
        <meta property="og:type" content="article" />
        <meta property="og:url" content="https://www.dualitydomain.com/articulos/diseno-web-conversiones" />
        <meta property="og:title" content={article.title} />
        <meta property="og:description" content={article.subtitle} />
        <meta property="og:image" content={`https://www.dualitydomain.com${article.imgUrl}`} />
        <meta property="og:article:published_time" content="2025-05-31" />
        <meta property="og:article:author" content={article.author} />

        {/* Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "BlogPosting",
              "@id": "https://www.dualitydomain.com/articulos/diseno-web-conversiones#article",
              headline: article.title,
              description: article.subtitle,
              image: `https://www.dualitydomain.com${article.imgUrl}`,
              datePublished: "2025-05-31",
              dateModified: "2025-05-31",
              author: {
                "@type": "Person",
                name: article.author,
                jobTitle: article.authorRole,
              },
              publisher: {
                "@type": "Organization",
                "@id": "https://www.dualitydomain.com/#organization",
              },
              mainEntityOfPage: {
                "@type": "WebPage",
                "@id": "https://www.dualitydomain.com/articulos/diseno-web-conversiones",
              },
              articleSection: "Desarrollo Web",
              keywords: ["diseño web", "conversiones", "UX", "UI", "optimización web"],
            }),
          }}
        />
      </Head>

      <div className="bg-primary-black min-h-screen">
        <Navbar />

        <main className="bg-primary-black w-full min-h-screen">
          <article className={`${styles.paddings} bg-primary-black`}>
            <div className={`${styles.innerWidth} mx-auto flex flex-col bg-primary-black`}>
              {/* Breadcrumb Navigation */}
              <nav aria-label="Breadcrumb" className="mb-6 sm:mb-8">
                <ol className="flex items-center space-x-1 sm:space-x-2 text-sm text-secondary-white">
                  <li>
                    <Link
                      href="/"
                      className="hover:text-white transition-colors focus:outline-none focus:ring-2 focus:ring-[#25618B] rounded px-1"
                      aria-label="Ir a página de inicio"
                    >
                      Inicio
                    </Link>
                  </li>
                  <li aria-hidden="true">/</li>
                  <li>
                    <Link
                      href="/articulos"
                      className="hover:text-white transition-colors focus:outline-none focus:ring-2 focus:ring-[#25618B] rounded px-1"
                      aria-label="Ir a página de artículos"
                    >
                      Artículos
                    </Link>
                  </li>
                  <li aria-hidden="true">/</li>
                  <li className="text-white" aria-current="page">
                    {article.title}
                  </li>
                </ol>
              </nav>

              {/* Article Header */}
              <header className="text-center mb-8 sm:mb-12 bg-primary-black">
                <h1 className="font-bold text-white text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl leading-tight mb-4 sm:mb-6 px-2">
                  {article.title}
                </h1>
                <p className="text-secondary-white text-base sm:text-lg md:text-xl max-w-4xl mx-auto mb-6 sm:mb-8 px-4 leading-relaxed">
                  {article.subtitle}
                </p>

                {/* Author and Date Info */}
                <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 mb-6 sm:mb-8 px-4">
                  <div className="flex items-center gap-3">
                    <div
                      className="w-10 h-10 sm:w-12 sm:h-12 bg-[#25618B] rounded-full flex items-center justify-center flex-shrink-0"
                      aria-hidden="true"
                    >
                      <span className="text-white font-bold text-sm sm:text-base">
                        {article.author
                          .split(" ")
                          .map((n) => n[0])
                          .join("")}
                      </span>
                    </div>
                    <div className="text-left">
                      <p className="text-white font-semibold text-sm sm:text-base">{article.author}</p>
                      <p className="text-secondary-white text-xs sm:text-sm">{article.authorRole}</p>
                    </div>
                  </div>
                  <div className="text-secondary-white text-sm sm:text-base">
                    <time dateTime="2025-05-31" className="font-medium">
                      {article.date}
                    </time>
                  </div>
                </div>
              </header>

              {/* Featured Image */}
              <figure className="mb-8 sm:mb-12 bg-primary-black">
                <div className="relative h-48 sm:h-64 md:h-80 lg:h-96 xl:h-[500px] rounded-lg sm:rounded-xl md:rounded-2xl overflow-hidden">
                  <Image
                    src={article.imgUrl || "/placeholder.svg"}
                    alt={`Imagen del artículo: ${article.title}`}
                    fill
                    className="object-cover"
                    priority
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 90vw, 80vw"
                  />
                </div>
                <figcaption className="sr-only">Imagen ilustrativa sobre {article.title}</figcaption>
              </figure>

              {/* Article Content */}
              <section className="max-w-4xl mx-auto bg-primary-black p-4 sm:p-6 md:p-8 rounded-lg">
                <div
                  className="blog-content prose prose-invert max-w-none text-white text-sm sm:text-base md:text-lg leading-relaxed"
                  dangerouslySetInnerHTML={{ __html: article.content }}
                />
              </section>

              {/* Call to Action */}
              <aside className="mt-12 sm:mt-16 p-6 sm:p-8 bg-[#25618B] rounded-lg sm:rounded-xl md:rounded-2xl text-center">
                <h2 className="text-white font-bold text-xl sm:text-2xl md:text-3xl lg:text-4xl mb-4 sm:mb-6">
                  ¿Listo para mejorar las conversiones de tu sitio web?
                </h2>
                <p className="text-white text-sm sm:text-base md:text-lg mb-6 sm:mb-8 max-w-3xl mx-auto leading-relaxed px-2">
                  Nuestro equipo de expertos puede ayudarte a implementar estas estrategias en tu sitio web. Solicita
                  una consulta gratuita y descubre cómo podemos aumentar tus conversiones.
                </p>
                <Link
                  href="/solicitar-demo"
                  className="inline-block bg-white text-[#25618B] py-3 sm:py-4 px-6 sm:px-8 rounded-lg hover:bg-gray-100 focus:bg-gray-100 transition-colors font-semibold text-sm sm:text-base md:text-lg focus:outline-none focus:ring-4 focus:ring-white/50 min-h-[44px] min-w-[44px]"
                  aria-label="Solicitar consulta gratuita sobre optimización de conversiones"
                >
                  Solicitar consulta gratuita
                </Link>
              </aside>

              {/* Related Articles */}
              <section className="mt-12 sm:mt-16 bg-primary-black" aria-labelledby="related-articles">
                <h2
                  id="related-articles"
                  className="text-white font-bold text-xl sm:text-2xl md:text-3xl lg:text-4xl mb-6 sm:mb-8 text-center"
                >
                  Artículos relacionados
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
                  {insights
                    .filter((insight) => insight.id !== article.id)
                    .slice(0, 2)
                    .map((relatedArticle, index) => (
                      <article
                        key={relatedArticle.id}
                        className="bg-[#323f5d] rounded-lg sm:rounded-xl md:rounded-2xl overflow-hidden hover:bg-[#445175] focus-within:bg-[#445175] transition-all duration-300 group"
                      >
                        <Link
                          href={`/articulos/${relatedArticle.id}`}
                          className="block focus:outline-none focus:ring-4 focus:ring-[#25618B] rounded-lg sm:rounded-xl md:rounded-2xl"
                          aria-label={`Leer artículo: ${relatedArticle.title}`}
                        >
                          <div className="relative h-32 sm:h-40 md:h-48 overflow-hidden">
                            <Image
                              src={relatedArticle.imgUrl || "/placeholder.svg"}
                              alt={`Imagen del artículo: ${relatedArticle.title}`}
                              width={400}
                              height={200}
                              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                              loading="lazy"
                              sizes="(max-width: 768px) 100vw, 50vw"
                            />
                          </div>
                          <div className="p-4 sm:p-6">
                            <h3 className="text-white font-bold text-base sm:text-lg md:text-xl mb-2 sm:mb-3 group-hover:text-[#25618B] transition-colors leading-tight">
                              {relatedArticle.title}
                            </h3>
                            <p className="text-secondary-white text-sm sm:text-base leading-relaxed line-clamp-2 sm:line-clamp-3">
                              {relatedArticle.subtitle}
                            </p>
                          </div>
                        </Link>
                      </article>
                    ))}
                </div>
              </section>
            </div>
          </article>
        </main>

        <Footer />
      </div>
    </>
  )
}

export default ArticleDesignConversions
