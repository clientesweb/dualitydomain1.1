"use client"

import Head from "next/head"
import Link from "next/link"
import Image from "next/image"
import { useState, useEffect, useMemo } from "react"
import { motion } from "framer-motion"
import { Navbar, Footer } from "../../components"
import WhatsAppButton from "../../components/WhatsAppButton"
import { insights } from "../../constants"
import styles from "../../styles"
import { staggerContainer, fadeIn } from "../../utils/motion"

const ArticleDesignConversions = () => {
  const [isLoading, setIsLoading] = useState(true)
  const [imageError, setImageError] = useState(false)
  const [readingProgress, setReadingProgress] = useState(0)

  // Memoizar el artículo para evitar re-renders
  const article = useMemo(() => insights.find((insight) => insight.id === "diseno-web-conversiones"), [])

  // Memoizar artículos relacionados
  const relatedArticles = useMemo(
    () => insights.filter((insight) => insight.id !== article?.id).slice(0, 2),
    [article?.id],
  )

  useEffect(() => {
    setIsLoading(false)

    // Scroll progress tracking
    const handleScroll = () => {
      const scrollTop = window.scrollY
      const docHeight = document.documentElement.scrollHeight - window.innerHeight
      const progress = (scrollTop / docHeight) * 100
      setReadingProgress(Math.min(progress, 100))
    }

    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const handleImageError = () => {
    setImageError(true)
  }

  if (!article) {
    return (
      <div className="bg-primary-black min-h-screen flex items-center justify-center">
        <div className="text-white text-center max-w-md mx-auto px-4">
          <h1 className="text-2xl font-bold mb-4">Artículo no encontrado</h1>
          <p className="text-secondary-white mb-6">Lo sentimos, no pudimos encontrar el artículo que buscas.</p>
          <Link
            href="/articulos"
            className="inline-block bg-[#25618B] text-white py-3 px-6 rounded-lg hover:bg-[#1a4a6e] transition-colors focus:outline-none focus:ring-2 focus:ring-[#25618B] focus:ring-offset-2 focus:ring-offset-[#1A232E]"
          >
            Volver a artículos
          </Link>
        </div>
      </div>
    )
  }

  if (isLoading) {
    return (
      <div className="bg-primary-black min-h-screen flex items-center justify-center">
        <div className="text-white" role="status" aria-live="polite">
          <span className="sr-only">Cargando artículo...</span>
          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-white"></div>
        </div>
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
        {/* Reading progress bar */}
        <div
          className="fixed top-0 left-0 h-1 bg-[#25618B] z-50 transition-all duration-150"
          style={{ width: `${readingProgress}%` }}
          role="progressbar"
          aria-label="Progreso de lectura del artículo"
          aria-valuenow={readingProgress}
          aria-valuemin={0}
          aria-valuemax={100}
        />

        {/* Skip to content */}
        <a href="#article-content" className="skip-to-content">
          Saltar al contenido del artículo
        </a>

        <Navbar />

        <main className="relative z-10 w-full">
          <article className={`${styles.paddings} relative z-20`}>
            <div className="gradient-02 z-0" />
            <motion.div
              variants={staggerContainer}
              initial="hidden"
              whileInView="show"
              viewport={{ once: false, amount: 0.25 }}
              className={`${styles.innerWidth} mx-auto flex flex-col relative z-30`}
            >
              {/* Breadcrumb Navigation mejorado */}
              <motion.nav
                variants={fadeIn("down", "tween", 0.1, 1)}
                aria-label="Navegación de migas de pan"
                className="mb-4 sm:mb-6 relative z-40"
              >
                <ol className="flex items-center space-x-2 text-sm text-secondary-white">
                  <li>
                    <Link
                      href="/"
                      className="hover:text-white transition-colors focus:outline-none focus:ring-2 focus:ring-[#25618B] focus:ring-offset-2 focus:ring-offset-[#1A232E] rounded-sm px-1"
                      aria-label="Ir a la página de inicio"
                    >
                      Inicio
                    </Link>
                  </li>
                  <li aria-hidden="true">/</li>
                  <li>
                    <Link
                      href="/articulos"
                      className="hover:text-white transition-colors focus:outline-none focus:ring-2 focus:ring-[#25618B] focus:ring-offset-2 focus:ring-offset-[#1A232E] rounded-sm px-1"
                      aria-label="Volver a la lista de artículos"
                    >
                      Artículos
                    </Link>
                  </li>
                  <li aria-hidden="true">/</li>
                  <li className="text-white font-medium" aria-current="page">
                    Diseño Web
                  </li>
                </ol>
              </motion.nav>

              {/* Article Header mejorado */}
              <motion.header
                variants={fadeIn("up", "tween", 0.2, 1)}
                className="text-center mb-8 sm:mb-12 relative z-40"
              >
                <p className="font-normal text-sm text-secondary-white uppercase tracking-wider">| Desarrollo Web</p>
                <h1 className="mt-2 sm:mt-4 font-bold text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl text-white leading-tight mb-4 sm:mb-6 px-2 sm:px-4">
                  {article.title}
                </h1>
                <p className="font-normal text-base sm:text-lg lg:text-xl text-secondary-white max-w-4xl mx-auto mb-6 sm:mb-8 px-2 sm:px-4 leading-relaxed">
                  {article.subtitle}
                </p>

                {/* Author and Date Info mejorado */}
                <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 mb-6 sm:mb-8 px-2 sm:px-4">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 sm:w-14 sm:h-14 bg-[#25618B] rounded-full flex items-center justify-center flex-shrink-0">
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
                  <div className="flex items-center gap-4 text-secondary-white text-sm">
                    <time dateTime="2025-05-31" className="flex items-center gap-1">
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
                        <path
                          fillRule="evenodd"
                          d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z"
                          clipRule="evenodd"
                        />
                      </svg>
                      {article.date}
                    </time>
                    <span className="flex items-center gap-1">
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
                        <path
                          fillRule="evenodd"
                          d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z"
                          clipRule="evenodd"
                        />
                      </svg>
                      5 min de lectura
                    </span>
                  </div>
                </div>
              </motion.header>

              {/* Featured Image mejorado */}
              <motion.figure variants={fadeIn("up", "tween", 0.3, 1)} className="mb-8 sm:mb-12 relative z-40">
                <div className="relative h-48 sm:h-64 md:h-80 lg:h-96 xl:h-[500px] rounded-xl sm:rounded-2xl lg:rounded-3xl overflow-hidden mx-2 sm:mx-0 bg-gray-800">
                  {!imageError ? (
                    <Image
                      src={article.imgUrl || "/placeholder.svg"}
                      alt={`Imagen del artículo: ${article.title}`}
                      fill
                      className="object-cover"
                      priority
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 90vw, 80vw"
                      onError={handleImageError}
                    />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center bg-gray-700">
                      <div className="text-center text-gray-400">
                        <svg className="w-16 h-16 mx-auto mb-4" fill="currentColor" viewBox="0 0 20 20">
                          <path
                            fillRule="evenodd"
                            d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z"
                            clipRule="evenodd"
                          />
                        </svg>
                        <span className="text-lg">Imagen no disponible</span>
                      </div>
                    </div>
                  )}
                </div>
              </motion.figure>

              {/* Article Content mejorado */}
              <motion.section
                id="article-content"
                variants={fadeIn("up", "tween", 0.4, 1)}
                className="max-w-4xl mx-auto relative z-40 px-2 sm:px-4 lg:px-0"
              >
                <div
                  className="blog-content prose prose-invert max-w-none text-white leading-relaxed article-scroll"
                  dangerouslySetInnerHTML={{ __html: article.content }}
                />
              </motion.section>

              {/* Call to Action mejorado */}
              <motion.aside
                variants={fadeIn("up", "tween", 0.5, 1)}
                className="mt-12 sm:mt-16 p-6 sm:p-8 bg-[#25618B] rounded-xl sm:rounded-2xl lg:rounded-3xl text-center max-w-4xl mx-auto relative z-40 mx-2 sm:mx-4 lg:mx-auto hover:bg-[#1e5577] transition-colors duration-300"
              >
                <h2 className="text-white font-bold text-xl sm:text-2xl lg:text-3xl mb-4">
                  ¿Listo para mejorar las conversiones de tu sitio web?
                </h2>
                <p className="text-white text-sm sm:text-base lg:text-lg mb-6 sm:mb-8 leading-relaxed max-w-2xl mx-auto">
                  Nuestro equipo de expertos puede ayudarte a implementar estas estrategias en tu sitio web. Solicita
                  una consulta gratuita y descubre cómo podemos aumentar tus conversiones.
                </p>
                <Link
                  href="/solicitar-demo"
                  className="inline-block bg-white text-[#25618B] py-3 sm:py-4 px-6 sm:px-8 rounded-xl sm:rounded-2xl hover:bg-gray-100 focus:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-[#25618B] transition-all duration-300 font-semibold text-sm sm:text-base"
                  aria-label="Solicitar una consulta gratuita para mejorar conversiones"
                >
                  Solicitar consulta gratuita
                </Link>
              </motion.aside>

              {/* Related Articles mejorado */}
              <motion.section
                variants={fadeIn("up", "tween", 0.6, 1)}
                className="mt-12 sm:mt-16 relative z-40 px-2 sm:px-4 lg:px-0"
                aria-label="Artículos relacionados"
              >
                <h2 className="text-white font-bold text-xl sm:text-2xl lg:text-3xl mb-6 sm:mb-8 text-center">
                  Artículos relacionados
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
                  {relatedArticles.map((relatedArticle, index) => (
                    <article key={relatedArticle.id} className="group">
                      <Link
                        href={`/articulos/${relatedArticle.id}`}
                        className="block bg-[rgba(0,0,0,0.3)] rounded-xl sm:rounded-2xl overflow-hidden hover:bg-[rgba(255,255,255,0.05)] transition-all duration-300 border border-[#6a6a6a] hover:border-[#25618B] focus:outline-none focus:ring-2 focus:ring-[#25618B] focus:ring-offset-2 focus:ring-offset-[#1A232E]"
                        aria-label={`Leer artículo relacionado: ${relatedArticle.title}`}
                      >
                        <div className="relative h-40 sm:h-48 overflow-hidden bg-gray-800">
                          <Image
                            src={relatedArticle.imgUrl || "/placeholder.svg"}
                            alt={`Imagen del artículo: ${relatedArticle.title}`}
                            fill
                            className="object-cover group-hover:scale-105 transition-transform duration-300"
                            sizes="(max-width: 768px) 100vw, 50vw"
                            loading="lazy"
                          />
                        </div>
                        <div className="p-4 sm:p-6">
                          <h3 className="text-white font-bold text-base sm:text-lg lg:text-xl mb-2 sm:mb-3 group-hover:text-[#25618B] transition-colors duration-300 leading-tight">
                            {relatedArticle.title}
                          </h3>
                          <p className="text-secondary-white text-sm sm:text-base leading-relaxed line-clamp-3">
                            {relatedArticle.subtitle}
                          </p>
                          <div className="mt-3 sm:mt-4 flex items-center text-[#25618B] text-sm font-medium">
                            <span>Leer más</span>
                            <svg
                              className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform duration-300"
                              fill="none"
                              stroke="currentColor"
                              viewBox="0 0 24 24"
                            >
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                            </svg>
                          </div>
                        </div>
                      </Link>
                    </article>
                  ))}
                </div>
              </motion.section>
            </motion.div>
          </article>
        </main>

        <Footer />
        <WhatsAppButton />
      </div>
    </>
  )
}

export default ArticleDesignConversions
