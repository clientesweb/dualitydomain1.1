"use client"

import Head from "next/head"
import Link from "next/link"
import Image from "next/image"
import { useState, useEffect } from "react"
import { Navbar, Footer } from "../../components"
import WhatsAppButton from "../../components/WhatsAppButton"
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
          content="diseño web conversiones, UX UI design, optimización conversiones, diseño web Villa del Dique, desarrollo web Córdoba, aumentar conversiones web, diseño centrado usuario"
        />
        <link rel="canonical" href="https://www.dualitydomain.com/articulos/diseno-web-conversiones" />
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=5" />
        <meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1" />
        <meta name="author" content={article.author} />
        <meta name="publisher" content="Duality Domain" />

        {/* Open Graph */}
        <meta property="og:type" content="article" />
        <meta property="og:url" content="https://www.dualitydomain.com/articulos/diseno-web-conversiones" />
        <meta property="og:title" content={article.title} />
        <meta property="og:description" content={article.subtitle} />
        <meta property="og:image" content={article.imgUrl} />
        <meta property="og:locale" content="es_AR" />
        <meta property="og:site_name" content="Duality Domain" />

        <meta name="theme-color" content="#25618B" />
      </Head>

      <div className="bg-primary-black overflow-hidden min-h-screen">
        <div style={{ position: "relative", zIndex: 1 }}>
          <Navbar />
        </div>

        <main style={{ position: "relative", zIndex: 10000, background: "#1A232E" }}>
          <article className={`${styles.paddings}`} style={{ position: "relative", zIndex: 10001 }}>
            <div
              className={`${styles.innerWidth} mx-auto flex flex-col`}
              style={{ position: "relative", zIndex: 10002 }}
            >
              {/* Breadcrumb Navigation */}
              <nav aria-label="Breadcrumb" className="mb-4 sm:mb-6" style={{ position: "relative", zIndex: 10003 }}>
                <ol className="flex items-center space-x-2 text-sm text-secondary-white">
                  <li>
                    <Link href="/" className="hover:text-white transition-colors">
                      Inicio
                    </Link>
                  </li>
                  <li>/</li>
                  <li>
                    <Link href="/articulos" className="hover:text-white transition-colors">
                      Artículos
                    </Link>
                  </li>
                  <li>/</li>
                  <li className="text-white font-medium">Diseño Web</li>
                </ol>
              </nav>

              {/* Article Header */}
              <header className="text-center mb-8 sm:mb-12" style={{ position: "relative", zIndex: 10003 }}>
                <p className="font-normal text-[14px] text-secondary-white uppercase tracking-wider">
                  | Desarrollo Web
                </p>
                <h1 className="mt-[8px] font-bold text-[28px] sm:text-[40px] md:text-[64px] text-white leading-tight mb-4 sm:mb-6 px-4">
                  {article.title}
                </h1>
                <p className="font-normal text-[16px] sm:text-[18px] text-secondary-white max-w-4xl mx-auto mb-6 sm:mb-8 px-4 leading-relaxed">
                  {article.subtitle}
                </p>

                {/* Author and Date Info */}
                <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-6 sm:mb-8 px-4">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 sm:w-12 sm:h-12 bg-[#25618B] rounded-full flex items-center justify-center">
                      <span className="text-white font-bold text-sm">
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
                  <div className="text-secondary-white text-sm">
                    <time dateTime="2025-05-31">{article.date}</time>
                  </div>
                </div>
              </header>

              {/* Featured Image */}
              <figure className="mb-8 sm:mb-12" style={{ position: "relative", zIndex: 10003 }}>
                <div className="relative h-[200px] sm:h-[300px] md:h-[400px] lg:h-[500px] rounded-[20px] sm:rounded-[32px] overflow-hidden mx-4 sm:mx-0">
                  <Image
                    src={article.imgUrl || "/placeholder.svg"}
                    alt={article.title}
                    fill
                    className="object-cover"
                    priority
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 90vw, 80vw"
                  />
                </div>
              </figure>

              {/* Article Content */}
              <section className="max-w-4xl mx-auto" style={{ position: "relative", zIndex: 10003 }}>
                <div
                  className="blog-content prose prose-invert max-w-none text-white leading-relaxed px-4 sm:px-6 md:px-8"
                  style={{ position: "relative", zIndex: 10004, color: "#e0e0e0" }}
                  dangerouslySetInnerHTML={{ __html: article.content }}
                />
              </section>

              {/* Call to Action */}
              <aside
                className="mt-12 sm:mt-16 p-6 sm:p-8 bg-[#25618B] rounded-[20px] sm:rounded-[32px] text-center max-w-4xl mx-auto mx-4 sm:mx-auto"
                style={{ position: "relative", zIndex: 10003 }}
              >
                <h2 className="text-white font-bold text-[24px] sm:text-[32px] mb-4">
                  ¿Listo para mejorar las conversiones de tu sitio web?
                </h2>
                <p className="text-white text-[16px] sm:text-[18px] mb-6 sm:mb-8 leading-relaxed">
                  Nuestro equipo de expertos puede ayudarte a implementar estas estrategias en tu sitio web. Solicita
                  una consulta gratuita y descubre cómo podemos aumentar tus conversiones.
                </p>
                <Link
                  href="/solicitar-demo"
                  className="inline-block bg-white text-[#25618B] py-3 sm:py-4 px-6 sm:px-8 rounded-[20px] sm:rounded-[32px] hover:bg-gray-100 transition-colors font-semibold text-[14px] sm:text-[16px]"
                >
                  Solicitar consulta gratuita
                </Link>
              </aside>

              {/* Related Articles */}
              <section className="mt-12 sm:mt-16 px-4 sm:px-0" style={{ position: "relative", zIndex: 10003 }}>
                <h2 className="text-white font-bold text-[24px] sm:text-[32px] mb-6 sm:mb-8 text-center">
                  Artículos relacionados
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
                  {insights
                    .filter((insight) => insight.id !== article.id)
                    .slice(0, 2)
                    .map((relatedArticle) => (
                      <Link
                        key={relatedArticle.id}
                        href={`/articulos/${relatedArticle.id}`}
                        className="bg-[rgba(0,0,0,0.3)] rounded-[20px] sm:rounded-[24px] overflow-hidden hover:bg-[rgba(255,255,255,0.05)] transition-colors group border-[1px] border-[#6a6a6a]"
                      >
                        <div className="relative h-[150px] sm:h-[200px] overflow-hidden">
                          <Image
                            src={relatedArticle.imgUrl || "/placeholder.svg"}
                            alt={relatedArticle.title}
                            fill
                            className="object-cover group-hover:scale-105 transition-transform duration-300"
                            sizes="(max-width: 768px) 100vw, 50vw"
                          />
                        </div>
                        <div className="p-4 sm:p-6">
                          <h3 className="text-white font-bold text-[16px] sm:text-[20px] mb-2 sm:mb-3 group-hover:text-[#25618B] transition-colors">
                            {relatedArticle.title}
                          </h3>
                          <p className="text-secondary-white text-[12px] sm:text-[14px] leading-relaxed">
                            {relatedArticle.subtitle}
                          </p>
                        </div>
                      </Link>
                    ))}
                </div>
              </section>
            </div>
          </article>
        </main>

        <div style={{ position: "relative", zIndex: 1 }}>
          <Footer />
          <WhatsAppButton />
        </div>
      </div>
    </>
  )
}

export default ArticleDesignConversions
