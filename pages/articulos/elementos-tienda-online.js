"use client"

import Head from "next/head"
import Link from "next/link"
import Image from "next/image"
import { motion } from "framer-motion"
import { Navbar, Footer } from "../../components"
import { insights } from "../../constants"
import styles from "../../styles"
import { fadeIn, staggerContainer } from "../../utils/motion"

const ArticleEcommerceElements = () => {
  const article = insights.find((insight) => insight.id === "elementos-tienda-online")

  if (!article) {
    return <div>Artículo no encontrado</div>
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

        {/* Open Graph */}
        <meta property="og:type" content="article" />
        <meta property="og:url" content="https://www.dualitydomain.com/articulos/elementos-tienda-online" />
        <meta property="og:title" content={article.title} />
        <meta property="og:description" content={article.subtitle} />
        <meta property="og:image" content={`https://www.dualitydomain.com${article.imgUrl}`} />
        <meta property="og:article:published_time" content="2025-06-15" />
        <meta property="og:article:author" content={article.author} />

        {/* Twitter */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://www.dualitydomain.com/articulos/elementos-tienda-online" />
        <meta property="twitter:title" content={article.title} />
        <meta property="twitter:description" content={article.subtitle} />
        <meta property="twitter:image" content={`https://www.dualitydomain.com${article.imgUrl}`} />

        {/* Structured Data - Article */}
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

      <div className="bg-primary-black overflow-hidden min-h-screen">
        <Navbar />

        <article className={`${styles.paddings} relative`}>
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="show"
            viewport={{ once: false, amount: 0.25 }}
            className={`${styles.innerWidth} mx-auto flex flex-col relative z-50`}
          >
            {/* Breadcrumb */}
            <motion.nav variants={fadeIn("up", "tween", 0.1, 1)} className="mb-8 relative z-50">
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
                <li className="text-white">{article.title}</li>
              </ol>
            </motion.nav>

            {/* Header */}
            <motion.header variants={fadeIn("up", "tween", 0.2, 1)} className="text-center mb-12 relative z-50">
              <h1 className="font-bold text-white text-[28px] md:text-[40px] lg:text-[48px] leading-tight mb-6">
                {article.title}
              </h1>
              <p className="text-secondary-white text-[16px] md:text-[18px] max-w-3xl mx-auto mb-8">
                {article.subtitle}
              </p>

              <div className="flex flex-col md:flex-row items-center justify-center gap-4 mb-8">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-[#25618B] rounded-full flex items-center justify-center">
                    <span className="text-white font-bold">
                      {article.author
                        .split(" ")
                        .map((n) => n[0])
                        .join("")}
                    </span>
                  </div>
                  <div className="text-left">
                    <p className="text-white font-semibold">{article.author}</p>
                    <p className="text-secondary-white text-sm">{article.authorRole}</p>
                  </div>
                </div>
                <div className="text-secondary-white text-sm">
                  <time dateTime="2025-06-15">{article.date}</time>
                </div>
              </div>
            </motion.header>

            {/* Featured Image */}
            <motion.div variants={fadeIn("up", "tween", 0.3, 1)} className="mb-12 relative z-50">
              <div className="relative h-[300px] md:h-[400px] lg:h-[500px] rounded-[24px] overflow-hidden">
                <Image
                  src={article.imgUrl || "/placeholder.svg"}
                  alt={article.title}
                  fill
                  className="object-cover"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#1A232E] to-transparent opacity-30"></div>
              </div>
            </motion.div>

            {/* Article Content */}
            <motion.div variants={fadeIn("up", "tween", 0.4, 1)} className="max-w-4xl mx-auto relative z-50">
              <div
                className="blog-content prose prose-invert max-w-none"
                dangerouslySetInnerHTML={{ __html: article.content }}
              />
            </motion.div>

            {/* Call to Action */}
            <motion.div
              variants={fadeIn("up", "tween", 0.5, 1)}
              className="mt-16 p-8 bg-gradient-to-r from-[#25618B] to-[#1a4a6e] rounded-[24px] text-center relative z-50"
            >
              <h3 className="text-white font-bold text-[24px] md:text-[32px] mb-4">
                ¿Necesitas una tienda online profesional?
              </h3>
              <p className="text-white text-[16px] md:text-[18px] mb-6 max-w-2xl mx-auto">
                Creamos tiendas online que incorporan todos estos elementos esenciales y más. Solicita una consulta
                gratuita y descubre cómo podemos ayudarte a vender más online.
              </p>
              <Link
                href="/solicitar-demo"
                className="inline-block bg-white text-[#25618B] py-3 px-8 rounded-lg hover:bg-gray-100 transition-colors font-semibold"
              >
                Solicitar consulta gratuita
              </Link>
            </motion.div>

            {/* Related Articles */}
            <motion.section variants={fadeIn("up", "tween", 0.6, 1)} className="mt-16 relative z-50">
              <h3 className="text-white font-bold text-[24px] md:text-[32px] mb-8 text-center">
                Artículos relacionados
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {insights
                  .filter((insight) => insight.id !== article.id)
                  .slice(0, 2)
                  .map((relatedArticle) => (
                    <Link
                      key={relatedArticle.id}
                      href={`/articulos/${relatedArticle.id}`}
                      className="bg-[rgba(0,0,0,0.3)] backdrop-blur-sm rounded-[24px] overflow-hidden hover:bg-[rgba(0,0,0,0.5)] transition-all duration-300 group"
                    >
                      <div className="relative h-[150px] overflow-hidden">
                        <Image
                          src={relatedArticle.imgUrl || "/placeholder.svg"}
                          alt={relatedArticle.title}
                          width={400}
                          height={150}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                        />
                      </div>
                      <div className="p-6">
                        <h4 className="text-white font-bold text-[18px] mb-2 group-hover:text-[#25618B] transition-colors">
                          {relatedArticle.title}
                        </h4>
                        <p className="text-secondary-white text-[14px] line-clamp-2">{relatedArticle.subtitle}</p>
                      </div>
                    </Link>
                  ))}
              </div>
            </motion.section>
          </motion.div>
        </article>

        <Footer />
      </div>
    </>
  )
}

export default ArticleEcommerceElements
