"use client"

import Head from "next/head"
import Link from "next/link"
import Image from "next/image"
import { useState, useEffect } from "react"
import { Navbar, Footer } from "../../components"
import { insights } from "../../constants"
import styles from "../../styles"

const ArticleEcommerceElements = () => {
  const [isLoading, setIsLoading] = useState(true)
  const article = insights.find((insight) => insight.id === "elementos-tienda-online")

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
        <title>{article.title} | Duality Domain - E-commerce Villa del Dique</title>
        <meta name="description" content={article.subtitle} />
        <meta
          name="keywords"
          content="tienda online elementos, e-commerce esenciales, comercio electrónico, tienda virtual, e-commerce Villa del Dique, desarrollo e-commerce Córdoba"
        />
        <link rel="canonical" href="https://www.dualitydomain.com/articulos/elementos-tienda-online" />
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=5" />

        {/* Preload critical resources */}
        <link rel="preload" href={article.imgUrl} as="image" />
        <link rel="preload" href="/logo.png" as="image" />

        {/* Open Graph */}
        <meta property="og:type" content="article" />
        <meta property="og:url" content="https://www.dualitydomain.com/articulos/elementos-tienda-online" />
        <meta property="og:title" content={article.title} />
        <meta property="og:description" content={article.subtitle} />
        <meta property="og:image" content={`https://www.dualitydomain.com${article.imgUrl}`} />
        <meta property="og:article:published_time" content="2025-06-15" />
        <meta property="og:article:author" content={article.author} />

        {/* Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "BlogPosting",
              "@id": "https://www.dualitydomain.com/articulos/elementos-tienda-online#article",
              headline: article.title,
              description: article.subtitle,
              image: `https://www.dualitydomain.com${article.imgUrl}`,
              datePublished: "2025-06-15",
              dateModified: "2025-06-15",
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
                "@id": "https://www.dualitydomain.com/articulos/elementos-tienda-online",
              },
              articleSection: "E-commerce",
              keywords: [
                "tienda online",
                "e-commerce",
                "comercio electrónico",
                "elementos esenciales",
                "tienda virtual",
              ],
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
                    <span className="line-clamp-1">{article.title}</span>
                  </li>
                </ol>
              </nav>

              {/* Article Header */}
              <header className="text-center mb-6 xs:mb-7 sm:mb-8 md:mb-10 lg:mb-12 xl:mb-16 2xl:mb-20 bg-primary-black">
                <h1 className="font-bold text-white text-lg xs:text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl 2xl:text-6xl 3xl:text-7xl leading-tight mb-3 xs:mb-4 sm:mb-5 md:mb-6 lg:mb-8 xl:mb-10 px-2 xs:px-3 sm:px-4 md:px-6">
                  {article.title}
                </h1>
                <p className="text-secondary-white text-sm xs:text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl 2xl:text-4xl max-w-xs xs:max-w-sm sm:max-w-md md:max-w-2xl lg:max-w-4xl xl:max-w-5xl 2xl:max-w-6xl mx-auto mb-4 xs:mb-5 sm:mb-6 md:mb-8 lg:mb-10 xl:mb-12 px-3 xs:px-4 sm:px-6 md:px-8 leading-relaxed">
                  {article.subtitle}
                </p>

                {/* Author and Date Info */}
                <div className="flex flex-col xs:flex-col sm:flex-row items-center justify-center gap-3 xs:gap-4 sm:gap-5 md:gap-6 lg:gap-8 mb-4 xs:mb-5 sm:mb-6 md:mb-8 lg:mb-10 xl:mb-12 px-3 xs:px-4 sm:px-6">
                  <div className="flex items-center gap-2 xs:gap-3 sm:gap-3 md:gap-4">
                    <div
                      className="w-8 h-8 xs:w-9 xs:h-9 sm:w-10 sm:h-10 md:w-12 md:h-12 lg:w-14 lg:h-14 xl:w-16 xl:h-16 bg-[#25618B] rounded-full flex items-center justify-center flex-shrink-0"
                      aria-hidden="true"
                    >
                      <span className="text-white font-bold text-xs xs:text-sm sm:text-sm md:text-base lg:text-lg xl:text-xl">
                        {article.author
                          .split(" ")
                          .map((n) => n[0])
                          .join("")}
                      </span>
                    </div>
                    <div className="text-left">
                      <p className="text-white font-semibold text-sm xs:text-base sm:text-base md:text-lg lg:text-xl xl:text-2xl">
                        {article.author}
                      </p>
                      <p className="text-secondary-white text-xs xs:text-sm sm:text-sm md:text-base lg:text-lg xl:text-xl">
                        {article.authorRole}
                      </p>
                    </div>
                  </div>
                  <div className="text-secondary-white text-sm xs:text-base sm:text-base md:text-lg lg:text-xl xl:text-2xl">
                    <time dateTime="2025-06-15" className="font-medium">
                      {article.date}
                    </time>
                  </div>
                </div>
              </header>

              {/* Featured Image */}
              <figure className="mb-6 xs:mb-7 sm:mb-8 md:mb-10 lg:mb-12 xl:mb-16 2xl:mb-20 bg-primary-black">
                <div className="relative h-40 xs:h-48 sm:h-56 md:h-64 lg:h-80 xl:h-96 2xl:h-[500px] 3xl:h-[600px] rounded-lg xs:rounded-xl sm:rounded-xl md:rounded-2xl lg:rounded-2xl xl:rounded-3xl overflow-hidden max-w-xs xs:max-w-sm sm:max-w-full mx-auto">
                  <Image
                    src={article.imgUrl || "/placeholder.svg"}
                    alt={`Imagen del artículo: ${article.title}`}
                    fill
                    className="object-cover"
                    priority
                    sizes="(max-width: 375px) 100vw, (max-width: 640px) 100vw, (max-width: 1024px) 90vw, (max-width: 1280px) 80vw, (max-width: 1920px) 70vw, 60vw"
                  />
                </div>
                <figcaption className="sr-only">Imagen ilustrativa sobre {article.title}</figcaption>
              </figure>

              {/* Article Content */}
              <section className="max-w-xs xs:max-w-sm sm:max-w-2xl md:max-w-3xl lg:max-w-4xl xl:max-w-5xl 2xl:max-w-6xl mx-auto bg-primary-black p-3 xs:p-4 sm:p-5 md:p-6 lg:p-8 xl:p-10 2xl:p-12 rounded-lg xs:rounded-xl sm:rounded-xl md:rounded-2xl">
                <div
                  className="blog-content prose prose-invert max-w-none text-white text-xs xs:text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl 2xl:text-3xl leading-relaxed"
                  dangerouslySetInnerHTML={{ __html: article.content }}
                />
              </section>

              {/* Call to Action */}
              <aside className="mt-8 xs:mt-10 sm:mt-12 md:mt-14 lg:mt-16 xl:mt-20 2xl:mt-24 p-4 xs:p-5 sm:p-6 md:p-7 lg:p-8 xl:p-10 2xl:p-12 bg-[#25618B] rounded-lg xs:rounded-xl sm:rounded-xl md:rounded-2xl lg:rounded-2xl xl:rounded-3xl text-center max-w-xs xs:max-w-sm sm:max-w-2xl md:max-w-4xl lg:max-w-5xl xl:max-w-6xl 2xl:max-w-7xl mx-auto">
                <h2 className="text-white font-bold text-lg xs:text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl 2xl:text-6xl mb-3 xs:mb-4 sm:mb-5 md:mb-6 lg:mb-8 xl:mb-10">
                  ¿Necesitas una tienda online profesional?
                </h2>
                <p className="text-white text-sm xs:text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl 2xl:text-4xl mb-4 xs:mb-5 sm:mb-6 md:mb-7 lg:mb-8 xl:mb-10 2xl:mb-12 leading-relaxed px-2 xs:px-3 sm:px-4 md:px-6 lg:px-8">
                  Creamos tiendas online que incorporan todos estos elementos esenciales y más. Solicita una consulta
                  gratuita y descubre cómo podemos ayudarte a vender más online.
                </p>
                <Link
                  href="/solicitar-demo"
                  className="inline-block bg-white text-[#25618B] py-2 xs:py-3 sm:py-3 md:py-4 lg:py-5 xl:py-6 px-4 xs:px-5 sm:px-6 md:px-8 lg:px-10 xl:px-12 rounded-lg xs:rounded-xl sm:rounded-xl md:rounded-2xl hover:bg-gray-100 focus:bg-gray-100 transition-colors font-semibold text-sm xs:text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl focus:outline-none focus:ring-4 focus:ring-white/50 min-h-[44px] min-w-[44px]"
                  aria-label="Solicitar consulta gratuita sobre desarrollo de tienda online"
                >
                  Solicitar consulta gratuita
                </Link>
              </aside>

              {/* Related Articles */}
              <section
                className="mt-8 xs:mt-10 sm:mt-12 md:mt-14 lg:mt-16 xl:mt-20 2xl:mt-24 bg-primary-black"
                aria-labelledby="related-articles"
              >
                <h2
                  id="related-articles"
                  className="text-white font-bold text-lg xs:text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl 2xl:text-6xl mb-4 xs:mb-5 sm:mb-6 md:mb-7 lg:mb-8 xl:mb-10 2xl:mb-12 text-center"
                >
                  Artículos relacionados
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 gap-4 xs:gap-5 sm:gap-6 md:gap-7 lg:gap-8 xl:gap-10 2xl:gap-12">
                  {insights
                    .filter((insight) => insight.id !== article.id)
                    .slice(0, 2)
                    .map((relatedArticle, index) => (
                      <article
                        key={relatedArticle.id}
                        className="bg-[#323f5d] rounded-lg xs:rounded-xl sm:rounded-xl md:rounded-2xl lg:rounded-2xl xl:rounded-3xl overflow-hidden hover:bg-[#445175] focus-within:bg-[#445175] transition-all duration-300 group max-w-xs xs:max-w-sm sm:max-w-md md:max-w-none mx-auto w-full"
                      >
                        <Link
                          href={`/articulos/${relatedArticle.id}`}
                          className="block focus:outline-none focus:ring-4 focus:ring-[#25618B] rounded-lg xs:rounded-xl sm:rounded-xl md:rounded-2xl lg:rounded-2xl xl:rounded-3xl"
                          aria-label={`Leer artículo: ${relatedArticle.title}`}
                        >
                          <div className="relative h-28 xs:h-32 sm:h-36 md:h-40 lg:h-44 xl:h-48 2xl:h-52 overflow-hidden">
                            <Image
                              src={relatedArticle.imgUrl || "/placeholder.svg"}
                              alt={`Imagen del artículo: ${relatedArticle.title}`}
                              width={400}
                              height={200}
                              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                              loading="lazy"
                              sizes="(max-width: 375px) 100vw, (max-width: 640px) 100vw, (max-width: 768px) 100vw, 50vw"
                            />
                          </div>
                          <div className="p-3 xs:p-4 sm:p-5 md:p-6 lg:p-7 xl:p-8">
                            <h3 className="text-white font-bold text-sm xs:text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl mb-2 xs:mb-3 sm:mb-3 md:mb-4 group-hover:text-[#25618B] transition-colors leading-tight">
                              {relatedArticle.title}
                            </h3>
                            <p className="text-secondary-white text-xs xs:text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl leading-relaxed line-clamp-2 xs:line-clamp-2 sm:line-clamp-3 md:line-clamp-3">
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

export default ArticleEcommerceElements
