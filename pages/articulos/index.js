"use client"

import Head from "next/head"
import Link from "next/link"
import Image from "next/image"
import { motion } from "framer-motion"
import { Navbar, Footer } from "../../components"
import { insights } from "../../constants"
import styles from "../../styles"
import { fadeIn, staggerContainer } from "../../utils/motion"

const ArticulosIndex = () => {
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

        {/* Open Graph */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.dualitydomain.com/articulos" />
        <meta property="og:title" content="Artículos sobre Desarrollo Web | Duality Domain - Blog Técnico" />
        <meta
          property="og:description"
          content="Descubre artículos especializados sobre desarrollo web, SEO, e-commerce y UX/UI. Consejos prácticos y estrategias para mejorar tu presencia digital."
        />
        <meta property="og:image" content="https://www.dualitydomain.com/og-image.jpg" />

        {/* Twitter */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://www.dualitydomain.com/articulos" />
        <meta property="twitter:title" content="Artículos sobre Desarrollo Web | Duality Domain - Blog Técnico" />
        <meta
          property="twitter:description"
          content="Descubre artículos especializados sobre desarrollo web, SEO, e-commerce y UX/UI. Consejos prácticos y estrategias para mejorar tu presencia digital."
        />
        <meta property="twitter:image" content="https://www.dualitydomain.com/og-image.jpg" />

        {/* Structured Data - Blog */}
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

      <div className="bg-primary-black overflow-hidden">
        <Navbar />

        <section className={`${styles.paddings} relative z-10`}>
          <div className="absolute w-[50%] inset-0 gradient-01 z-0" />

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="show"
            viewport={{ once: false, amount: 0.25 }}
            className={`${styles.innerWidth} mx-auto flex flex-col relative z-10`}
          >
            <div className="text-center mb-12">
              <motion.h1
                variants={fadeIn("up", "tween", 0.2, 1)}
                className="font-bold text-white text-[32px] md:text-[48px] lg:text-[64px] leading-tight"
              >
                Artículos sobre Desarrollo Web
              </motion.h1>
              <motion.p
                variants={fadeIn("up", "tween", 0.3, 1)}
                className="mt-4 text-secondary-white text-[16px] md:text-[18px] max-w-3xl mx-auto"
              >
                Descubre consejos prácticos, estrategias y las mejores prácticas en desarrollo web, SEO, e-commerce y
                experiencia de usuario. Conocimiento especializado para impulsar tu presencia digital.
              </motion.p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {insights.map((insight, index) => (
                <motion.article
                  key={insight.id}
                  variants={fadeIn("up", "spring", index * 0.2, 1)}
                  className="bg-[rgba(0,0,0,0.3)] backdrop-blur-sm rounded-[24px] overflow-hidden hover:bg-[rgba(0,0,0,0.5)] transition-all duration-300 group"
                >
                  <Link href={`/articulos/${insight.id}`}>
                    <div className="relative h-[200px] overflow-hidden">
                      <Image
                        src={insight.imgUrl || "/placeholder.svg"}
                        alt={insight.title}
                        width={400}
                        height={200}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#1A232E] to-transparent opacity-60"></div>
                    </div>

                    <div className="p-6">
                      <div className="flex justify-between items-center mb-3">
                        <span className="bg-[#25618B] text-white text-xs px-3 py-1 rounded-full">Artículo</span>
                        <span className="text-secondary-white text-xs">{insight.date}</span>
                      </div>

                      <h2 className="text-white font-bold text-[20px] md:text-[24px] mb-3 group-hover:text-[#25618B] transition-colors">
                        {insight.title}
                      </h2>

                      <p className="text-secondary-white text-[14px] md:text-[16px] leading-relaxed mb-4 line-clamp-3">
                        {insight.subtitle}
                      </p>

                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <div className="w-8 h-8 bg-[#25618B] rounded-full flex items-center justify-center">
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

                        <div className="text-[#25618B] group-hover:translate-x-1 transition-transform">
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
                </motion.article>
              ))}
            </div>

            <motion.div
              variants={fadeIn("up", "tween", 0.5, 1)}
              className="text-center mt-12 p-8 bg-[rgba(0,0,0,0.3)] rounded-[24px]"
            >
              <h3 className="text-white font-bold text-[24px] mb-4">¿Necesitas ayuda con tu proyecto?</h3>
              <p className="text-secondary-white text-[16px] mb-6 max-w-2xl mx-auto">
                Si tienes preguntas específicas sobre alguno de estos temas o necesitas ayuda personalizada para tu
                proyecto, no dudes en contactarnos.
              </p>
              <Link
                href="/solicitar-demo"
                className="inline-block bg-[#25618B] text-white py-3 px-8 rounded-lg hover:bg-[#1a4a6e] transition-colors font-semibold"
              >
                Solicitar consulta gratuita
              </Link>
            </motion.div>
          </motion.div>
        </section>

        <Footer />
      </div>
    </>
  )
}

export default ArticulosIndex
