"use client"

import Head from "next/head"
import Link from "next/link"
import Image from "next/image"
import { Navbar, Footer } from "../../components"
import { insights } from "../../constants"
import styles from "../../styles"

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
      </Head>

      <div className="bg-primary-black min-h-screen">
        <Navbar />

        <div className="bg-primary-black w-full min-h-screen">
          <section className={`${styles.paddings} bg-primary-black`}>
            <div className={`${styles.innerWidth} mx-auto flex flex-col bg-primary-black`}>
              <div className="text-center mb-12">
                <h1 className="font-bold text-white text-[32px] md:text-[48px] lg:text-[64px] leading-tight">
                  Artículos sobre Desarrollo Web
                </h1>
                <p className="mt-4 text-secondary-white text-[16px] md:text-[18px] max-w-3xl mx-auto">
                  Descubre consejos prácticos, estrategias y las mejores prácticas en desarrollo web, SEO, e-commerce y
                  experiencia de usuario. Conocimiento especializado para impulsar tu presencia digital.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {insights.map((insight, index) => (
                  <article
                    key={insight.id}
                    className="bg-[#323f5d] rounded-[24px] overflow-hidden hover:bg-[#445175] transition-all duration-300 group"
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
                  </article>
                ))}
              </div>

              <div className="text-center mt-12 p-8 bg-[#323f5d] rounded-[24px]">
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
              </div>
            </div>
          </section>
        </div>

        <Footer />
      </div>
    </>
  )
}

export default ArticulosIndex
