"use client"

import Head from "next/head"
import Link from "next/link"
import Image from "next/image"
import { useState, useEffect } from "react"
import { Navbar, Footer } from "../../components"
import WhatsAppButton from "../../components/WhatsAppButton"
import { insights } from "../../constants"
import styles from "../../styles"

const ArticulosIndex = () => {
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    setIsLoading(false)
  }, [])

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
        <title>Artículos sobre Desarrollo Web | Duality Domain - Blog Técnico Villa del Dique</title>
        <meta
          name="description"
          content="Descubre artículos especializados sobre desarrollo web, SEO, e-commerce y UX/UI escritos por expertos de Duality Domain en Villa del Dique, Córdoba. Consejos prácticos y estrategias para mejorar tu presencia digital."
        />
        <meta
          name="keywords"
          content="artículos desarrollo web, blog desarrollo web, SEO tips, e-commerce consejos, UX UI design, Villa del Dique, Córdoba, Argentina, desarrollo web profesional, optimización web, diseño responsivo, tiendas online"
        />
        <link rel="canonical" href="https://www.dualitydomain.com/articulos" />
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=5" />
        <meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1" />
        <meta name="author" content="Duality Domain" />
        <meta name="publisher" content="Duality Domain" />

        {/* Open Graph */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.dualitydomain.com/articulos" />
        <meta property="og:title" content="Artículos sobre Desarrollo Web | Duality Domain - Blog Técnico" />
        <meta
          property="og:description"
          content="Descubre artículos especializados sobre desarrollo web, SEO, e-commerce y UX/UI. Consejos prácticos y estrategias para mejorar tu presencia digital."
        />
        <meta property="og:image" content="https://www.dualitydomain.com/og-image.jpg" />
        <meta property="og:locale" content="es_AR" />
        <meta property="og:site_name" content="Duality Domain" />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Artículos sobre Desarrollo Web | Duality Domain" />
        <meta
          name="twitter:description"
          content="Descubre artículos especializados sobre desarrollo web, SEO, e-commerce y UX/UI."
        />
        <meta name="twitter:image" content="https://www.dualitydomain.com/og-image.jpg" />

        <meta name="theme-color" content="#25618B" />
      </Head>

      <div className="bg-primary-black overflow-hidden">
        <Navbar />

        <section className={`${styles.paddings} relative z-10`}>
          <div className="gradient-02 z-0" />
          <div className={`${styles.innerWidth} mx-auto flex flex-col`}>
            {/* Breadcrumb Navigation */}
            <nav aria-label="Breadcrumb" className="mb-6">
              <ol className="flex items-center space-x-2 text-sm text-secondary-white">
                <li>
                  <Link href="/" className="hover:text-white transition-colors">
                    Inicio
                  </Link>
                </li>
                <li>/</li>
                <li className="text-white font-medium">Artículos</li>
              </ol>
            </nav>

            {/* Page Header */}
            <div className="text-center mb-16">
              <p className="font-normal text-[14px] text-secondary-white uppercase tracking-wider">
                | Recursos y Conocimiento
              </p>
              <h1 className="mt-[8px] font-bold md:text-[64px] text-[40px] text-white leading-tight">
                Artículos sobre desarrollo web
              </h1>
              <p className="mt-[16px] font-normal text-[18px] text-secondary-white max-w-3xl mx-auto">
                Descubre consejos prácticos, estrategias y las mejores prácticas en desarrollo web, SEO, e-commerce y
                experiencia de usuario. Conocimiento especializado para impulsar tu presencia digital.
              </p>
            </div>

            {/* Articles Grid */}
            <div className="flex flex-col gap-[30px]">
              {insights.map((insight, index) => (
                <Link key={insight.id} href={`/articulos/${insight.id}`}>
                  <div className="flex md:flex-row flex-col gap-4 hover:bg-[rgba(255,255,255,0.05)] transition-colors p-4 rounded-xl group cursor-pointer">
                    <Image
                      src={insight.imgUrl || "/placeholder.svg"}
                      alt={insight.title}
                      width={270}
                      height={250}
                      className="md:w-[270px] w-full h-[250px] rounded-[32px] object-cover"
                    />

                    <div className="flex w-full justify-between items-center">
                      <div className="flex-1 md:ml-[62px] flex flex-col max-w-[650px]">
                        <h4 className="font-normal lg:text-[42px] text-[26px] text-white group-hover:text-[#25618B] transition-colors">
                          {insight.title}
                        </h4>
                        <p className="mt-[16px] font-normal lg:text-[20px] text-[14px] text-secondary-white">
                          {insight.subtitle}
                        </p>
                        <p className="mt-[16px] text-[#25618B] font-semibold flex items-center gap-2">
                          Leer artículo completo
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5 group-hover:translate-x-1 transition-transform"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                          </svg>
                        </p>
                      </div>
                      <div className="lg:flex hidden items-center justify-center w-[100px] h-[100px] rounded-full bg-transparent border-[1px] border-white">
                        <div className="w-[40%] h-[40%] flex items-center justify-center">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-6 w-6 text-white"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                            />
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                            />
                          </svg>
                        </div>
                      </div>
                    </div>
                  </div>
                </Link>
              ))}
            </div>

            {/* Call to Action */}
            <div className="text-center mt-16 p-8 bg-[rgba(0,0,0,0.3)] rounded-[32px] max-w-4xl mx-auto border-[1px] border-[#6a6a6a]">
              <h2 className="text-white font-bold text-[32px] mb-6">¿Necesitas ayuda con tu proyecto?</h2>
              <p className="text-secondary-white text-[18px] mb-8 leading-relaxed max-w-2xl mx-auto">
                Si tienes preguntas específicas sobre alguno de estos temas o necesitas ayuda personalizada para tu
                proyecto, no dudes en contactarnos.
              </p>
              <Link
                href="/solicitar-demo"
                className="inline-block bg-[#25618B] text-white py-4 px-8 rounded-[32px] hover:bg-[#1a4a6e] transition-colors font-semibold text-[16px]"
              >
                Solicitar consulta gratuita
              </Link>
            </div>
          </div>
        </section>

        <Footer />
        <WhatsAppButton />
      </div>
    </>
  )
}

export default ArticulosIndex
