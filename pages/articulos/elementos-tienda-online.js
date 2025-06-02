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
          content="tienda online elementos, e-commerce esenciales, comercio electrónico, tienda virtual, e-commerce Villa del Dique, desarrollo e-commerce Córdoba, elementos tienda online, diseño e-commerce"
        />
        <link rel="canonical" href="https://www.dualitydomain.com/articulos/elementos-tienda-online" />
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=5" />
        <meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1" />
        <meta name="author" content={article.author} />
        <meta name="publisher" content="Duality Domain" />

        {/* Open Graph */}
        <meta property="og:type" content="article" />
        <meta property="og:url" content="https://www.dualitydomain.com/articulos/elementos-tienda-online" />
        <meta property="og:title" content={article.title} />
        <meta property="og:description" content={article.subtitle} />
        <meta property="og:image" content={article.imgUrl} />
        <meta property="og:locale" content="es_AR" />
        <meta property="og:site_name" content="Duality Domain" />

        <meta name="theme-color" content="#25618B" />
      </Head>

      <div className="bg-primary-black overflow-hidden">
        <Navbar />

        <section className={`${styles.paddings} relative z-10`}>
          <div className="gradient-02 z-0" />
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="show"
            viewport={{ once: false, amount: 0.25 }}
            className={`${styles.innerWidth} mx-auto flex flex-col`}
          >
            {/* Breadcrumb Navigation */}
            <motion.nav variants={fadeIn("down", "tween", 0.1, 1)} aria-label="Breadcrumb" className="mb-6">
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
                <li className="text-white font-medium">E-commerce</li>
              </ol>
            </motion.nav>

            {/* Article Header */}
            <motion.header variants={fadeIn("up", "tween", 0.2, 1)} className="text-center mb-12">
              <p className="font-normal text-[14px] text-secondary-white uppercase tracking-wider">| E-commerce</p>
              <h1 className="mt-[8px] font-bold md:text-[64px] text-[40px] text-white leading-tight mb-6">
                {article.title}
              </h1>
              <p className="font-normal text-[18px] text-secondary-white max-w-4xl mx-auto mb-8">{article.subtitle}</p>

              {/* Author and Date Info */}
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-[#25618B] rounded-full flex items-center justify-center">
                    <span className="text-white font-bold text-sm">
                      {article.author
                        .split(" ")
                        .map((n) => n[0])
                        .join("")}
                    </span>
                  </div>
                  <div className="text-left">
                    <p className="text-white font-semibold text-base">{article.author}</p>
                    <p className="text-secondary-white text-sm">{article.authorRole}</p>
                  </div>
                </div>
                <div className="text-secondary-white text-sm">
                  <time dateTime="2025-06-15">{article.date}</time>
                </div>
              </div>
            </motion.header>

            {/* Featured Image */}
            <motion.figure variants={fadeIn("up", "tween", 0.3, 1)} className="mb-12">
              <div className="relative h-[300px] sm:h-[400px] md:h-[500px] rounded-[32px] overflow-hidden">
                <Image
                  src={article.imgUrl || "/placeholder.svg"}
                  alt={article.title}
                  fill
                  className="object-cover"
                  priority
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 90vw, 80vw"
                />
              </div>
            </motion.figure>

            {/* Article Content */}
            <motion.section variants={fadeIn("up", "tween", 0.4, 1)} className="max-w-4xl mx-auto">
              <div
                className="blog-content prose prose-invert max-w-none text-white leading-relaxed"
                dangerouslySetInnerHTML={{ __html: article.content }}
              />
            </motion.section>

            {/* Call to Action */}
            <motion.aside
              variants={fadeIn("up", "tween", 0.5, 1)}
              className="mt-16 p-8 bg-[#25618B] rounded-[32px] text-center max-w-4xl mx-auto"
            >
              <h2 className="text-white font-bold text-[32px] mb-4">¿Necesitas una tienda online profesional?</h2>
              <p className="text-white text-[18px] mb-8 leading-relaxed">
                Creamos tiendas online que incorporan todos estos elementos esenciales y más. Solicita una consulta
                gratuita y descubre cómo podemos ayudarte a vender más online.
              </p>
              <Link
                href="/solicitar-demo"
                className="inline-block bg-white text-[#25618B] py-4 px-8 rounded-[32px] hover:bg-gray-100 transition-colors font-semibold text-[16px]"
              >
                Solicitar consulta gratuita
              </Link>
            </motion.aside>

            {/* Related Articles */}
            <motion.section variants={fadeIn("up", "tween", 0.6, 1)} className="mt-16">
              <h2 className="text-white font-bold text-[32px] mb-8 text-center">Artículos relacionados</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {insights
                  .filter((insight) => insight.id !== article.id)
                  .slice(0, 2)
                  .map((relatedArticle) => (
                    <Link
                      key={relatedArticle.id}
                      href={`/articulos/${relatedArticle.id}`}
                      className="bg-[rgba(0,0,0,0.3)] rounded-[24px] overflow-hidden hover:bg-[rgba(255,255,255,0.05)] transition-colors group border-[1px] border-[#6a6a6a]"
                    >
                      <div className="relative h-[200px] overflow-hidden">
                        <Image
                          src={relatedArticle.imgUrl || "/placeholder.svg"}
                          alt={relatedArticle.title}
                          fill
                          className="object-cover group-hover:scale-105 transition-transform duration-300"
                          sizes="(max-width: 768px) 100vw, 50vw"
                        />
                      </div>
                      <div className="p-6">
                        <h3 className="text-white font-bold text-[20px] mb-3 group-hover:text-[#25618B] transition-colors">
                          {relatedArticle.title}
                        </h3>
                        <p className="text-secondary-white text-[14px] leading-relaxed">{relatedArticle.subtitle}</p>
                      </div>
                    </Link>
                  ))}
              </div>
            </motion.section>
          </motion.div>
        </section>

        <Footer />
        <WhatsAppButton />
      </div>
    </>
  )
}

export default ArticleEcommerceElements
