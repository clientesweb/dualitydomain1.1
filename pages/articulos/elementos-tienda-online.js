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

      <div className="bg-primary-black overflow-hidden">
        <Navbar />

        <article className={`${styles.paddings} relative z-10`}>
          <div className="absolute w-[50%] inset-0 gradient-01 z-0" />

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="show"
            viewport={{ once: false, amount: 0.25 }}
            className={`${styles.innerWidth} mx-auto flex flex-col relative z-10`}
          >
            {/* Breadcrumb */}
            <motion.nav variants={fadeIn("up", "tween", 0.1, 1)} className="mb-6 md:mb-8">
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
                <li className="text-white truncate">{article.title}</li>
              </ol>
            </motion.nav>

            {/* Header */}
            <motion.header variants={fadeIn("up", "tween", 0.2, 1)} className="text-center mb-8 md:mb-12">
              <h1 className="font-bold text-white text-[24px] sm:text-[32px] md:text-[40px] lg:text-[48px] leading-tight mb-4 md:mb-6 px-4">
                {article.title}
              </h1>
              <p className="text-secondary-white text-[14px] sm:text-[16px] md:text-[18px] max-w-3xl mx-auto mb-6 md:mb-8 px-4">
                {article.subtitle}
              </p>

              <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-6 md:mb-8 px-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 md:w-12 md:h-12 bg-[#25618B] rounded-full flex items-center justify-center">
                    <span className="text-white font-bold text-sm md:text-base">
                      {article.author
                        .split(" ")
                        .map((n) => n[0])
                        .join("")}
                    </span>
                  </div>
                  <div className="text-left">
                    <p className="text-white font-semibold text-sm md:text-base">{article.author}</p>
                    <p className="text-secondary-white text-xs md:text-sm">{article.authorRole}</p>
                  </div>
                </div>
                <div className="text-secondary-white text-xs md:text-sm">
                  <time dateTime="2025-06-15">{article.date}</time>
                </div>
              </div>
            </motion.header>

            {/* Featured Image */}
            <motion.div variants={fadeIn("up", "tween", 0.3, 1)} className="mb-8 md:mb-12">
              <div className="relative h-[200px] sm:h-[300px] md:h-[400px] lg:h-[500px] rounded-[16px] md:rounded-[24px] overflow-hidden mx-4">
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
            <motion.div variants={fadeIn("up", "tween", 0.4, 1)} className="w-full">
              <div className="max-w-4xl mx-auto px-4">
                <div
                  className="blog-content prose prose-invert max-w-none w-full"
                  dangerouslySetInnerHTML={{ __html: article.content }}
                />
              </div>
            </motion.div>

            {/* Call to Action */}
            <motion.div
              variants={fadeIn("up", "tween", 0.5, 1)}
              className="mt-12 md:mt-16 p-6 md:p-8 bg-gradient-to-r from-[#25618B] to-[#1a4a6e] rounded-[16px] md:rounded-[24px] text-center mx-4"
            >
              <h3 className="text-white font-bold text-[20px] sm:text-[24px] md:text-[32px] mb-4">
                ¿Necesitas una tienda online profesional?
              </h3>
              <p className="text-white text-[14px] sm:text-[16px] md:text-[18px] mb-6 max-w-2xl mx-auto">
                Creamos tiendas online que incorporan todos estos elementos esenciales y más. Solicita una consulta
                gratuita y descubre cómo podemos ayudarte a vender más online.
              </p>
              <Link
                href="/solicitar-demo"
                className="inline-block bg-white text-[#25618B] py-3 px-6 md:px-8 rounded-lg hover:bg-gray-100 transition-colors font-semibold text-sm md:text-base"
              >
                Solicitar consulta gratuita
              </Link>
            </motion.div>

            {/* Related Articles */}
            <motion.section variants={fadeIn("up", "tween", 0.6, 1)} className="mt-12 md:mt-16 px-4">
              <h3 className="text-white font-bold text-[20px] sm:text-[24px] md:text-[32px] mb-6 md:mb-8 text-center">
                Artículos relacionados
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
                {insights
                  .filter((insight) => insight.id !== article.id)
                  .slice(0, 2)
                  .map((relatedArticle) => (
                    <Link
                      key={relatedArticle.id}
                      href={`/articulos/${relatedArticle.id}`}
                      className="bg-[rgba(0,0,0,0.3)] backdrop-blur-sm rounded-[16px] md:rounded-[24px] overflow-hidden hover:bg-[rgba(0,0,0,0.5)] transition-all duration-300 group"
                    >
                      <div className="relative h-[120px] sm:h-[150px] overflow-hidden">
                        <Image
                          src={relatedArticle.imgUrl || "/placeholder.svg"}
                          alt={relatedArticle.title}
                          width={400}
                          height={150}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                        />
                      </div>
                      <div className="p-4 md:p-6">
                        <h4 className="text-white font-bold text-[16px] md:text-[18px] mb-2 group-hover:text-[#25618B] transition-colors line-clamp-2">
                          {relatedArticle.title}
                        </h4>
                        <p className="text-secondary-white text-[12px] md:text-[14px] line-clamp-2">
                          {relatedArticle.subtitle}
                        </p>
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
