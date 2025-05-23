"use client"

import { Navbar, Footer } from "../../components"
import { insights } from "../../constants"
import Image from "next/image"
import Link from "next/link"
import Head from "next/head"
import styles from "../../styles"
import { motion } from "framer-motion"
import { fadeIn, staggerContainer } from "../../utils/motion"

const BlogPage = () => {
  return (
    <>
      <Head>
        <title>Blog | Duality Domain - Desarrollo Web Profesional</title>
        <meta
          name="description"
          content="Artículos, guías y recursos sobre desarrollo web, e-commerce, SEO y UX para ayudarte a mejorar tu presencia digital."
        />
        <meta property="og:title" content="Blog | Duality Domain - Desarrollo Web Profesional" />
        <meta
          property="og:description"
          content="Artículos, guías y recursos sobre desarrollo web, e-commerce, SEO y UX para ayudarte a mejorar tu presencia digital."
        />
        <meta property="og:image" content="/og-image.jpg" />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Blog | Duality Domain - Desarrollo Web Profesional" />
        <meta
          property="twitter:description"
          content="Artículos, guías y recursos sobre desarrollo web, e-commerce, SEO y UX para ayudarte a mejorar tu presencia digital."
        />
        <meta name="twitter:image" content="/og-image.jpg" />
      </Head>

      <div className="bg-primary-black overflow-hidden">
        <Navbar />

        <section className={`${styles.paddings} relative z-10`}>
          <div className="absolute w-[50%] inset-0 gradient-01" />

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="show"
            viewport={{ once: false, amount: 0.25 }}
            className={`${styles.innerWidth} mx-auto flex flex-col`}
          >
            {/* Hero Section */}
            <div className="relative mb-16 rounded-[32px] overflow-hidden">
              <div className="absolute inset-0 bg-[#323f5d] opacity-70 z-0"></div>
              <div className="relative z-10 py-16 px-8 md:py-24 md:px-16">
                <motion.div variants={fadeIn("up", "tween", 0.2, 1)} className="text-center">
                  <h1 className="font-bold text-white text-[42px] md:text-[64px] leading-tight mb-6">
                    Blog de Duality Domain
                  </h1>
                  <p className="text-secondary-white text-[18px] max-w-3xl mx-auto">
                    Artículos, guías y recursos para ayudarte a mejorar tu presencia digital y hacer crecer tu negocio
                    online.
                  </p>
                </motion.div>
              </div>
              <div className="absolute inset-0 bg-gradient-to-b from-transparent to-primary-black z-0"></div>
            </div>

            {/* Featured Post */}
            {insights.length > 0 && (
              <motion.div variants={fadeIn("up", "tween", 0.3, 1)} className="mb-16">
                <h2 className="text-white font-bold text-[32px] mb-8 border-b border-[#304f6e] pb-4">
                  Artículo Destacado
                </h2>
                <div className="bg-[#1A232E] border border-[#304f6e] rounded-[24px] overflow-hidden">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-0">
                    <div className="relative h-[300px] md:h-full">
                      <Image
                        src={insights[0].imgUrl || "/placeholder.svg"}
                        alt={insights[0].title}
                        width={600}
                        height={400}
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-r from-transparent to-[#1A232E] hidden md:block"></div>
                    </div>
                    <div className="p-8 flex flex-col justify-center">
                      <span className="inline-block bg-[#25618B] text-white text-sm px-4 py-1 rounded-full mb-4">
                        {insights[0].date}
                      </span>
                      <h3 className="text-white font-bold text-[28px] mb-4">{insights[0].title}</h3>
                      <p className="text-secondary-white mb-6">{insights[0].subtitle}</p>
                      <div className="flex items-center mb-6">
                        <div className="w-12 h-12 rounded-full bg-[#304f6e] flex items-center justify-center text-white font-bold text-lg mr-4">
                          {insights[0].author.charAt(0)}
                        </div>
                        <div>
                          <p className="text-white font-semibold">{insights[0].author}</p>
                          <p className="text-secondary-white text-sm">{insights[0].authorRole}</p>
                        </div>
                      </div>
                      <Link
                        href={`/blog/${insights[0].id}`}
                        className="inline-block bg-[#25618B] text-white py-3 px-8 rounded-full hover:bg-[#1a4a6e] transition-colors text-center font-medium"
                      >
                        Leer artículo completo
                      </Link>
                    </div>
                  </div>
                </div>
              </motion.div>
            )}

            {/* All Posts */}
            <motion.div variants={fadeIn("up", "tween", 0.4, 1)}>
              <h2 className="text-white font-bold text-[32px] mb-8 border-b border-[#304f6e] pb-4">
                Todos los Artículos
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {insights.map((post, index) => (
                  <div
                    key={post.id}
                    className="bg-[#1A232E] border border-[#304f6e] rounded-[24px] overflow-hidden hover:shadow-[0_0_15px_rgba(37,97,139,0.5)] transition-all duration-300 transform hover:-translate-y-1"
                  >
                    <div className="relative h-[220px]">
                      <Image
                        src={post.imgUrl || "/placeholder.svg"}
                        alt={post.title}
                        width={400}
                        height={220}
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute top-4 right-4">
                        <span className="inline-block bg-[#25618B] text-white text-xs px-3 py-1 rounded-full">
                          {post.date}
                        </span>
                      </div>
                    </div>
                    <div className="p-6">
                      <h3 className="text-white font-bold text-[22px] mb-3 line-clamp-2 min-h-[66px]">{post.title}</h3>
                      <p className="text-secondary-white mb-4 line-clamp-3 min-h-[72px]">{post.subtitle}</p>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center">
                          <div className="w-8 h-8 rounded-full bg-[#304f6e] flex items-center justify-center text-white font-bold text-sm mr-2">
                            {post.author.charAt(0)}
                          </div>
                          <span className="text-white text-sm">{post.author}</span>
                        </div>
                        <Link
                          href={`/blog/${post.id}`}
                          className="text-[#25618B] font-medium hover:text-white transition-colors"
                        >
                          Leer más →
                        </Link>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Newsletter Subscription */}
            <motion.div
              variants={fadeIn("up", "tween", 0.5, 1)}
              className="mt-16 bg-[#1A232E] border border-[#304f6e] p-8 rounded-[24px] text-center"
            >
              <h3 className="text-white font-bold text-[24px] mb-4">¿Quieres recibir nuestros artículos?</h3>
              <p className="text-secondary-white mb-6 max-w-2xl mx-auto">
                Suscríbete a nuestro newsletter y recibe los últimos artículos, guías y recursos directamente en tu
                bandeja de entrada.
              </p>
              <form className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
                <input
                  type="email"
                  placeholder="Tu correo electrónico"
                  className="flex-1 bg-[#323f5d] text-white px-4 py-3 rounded-full border border-[#304f6e] focus:outline-none focus:border-[#25618B]"
                  required
                />
                <button
                  type="submit"
                  className="bg-[#25618B] text-white py-3 px-6 rounded-full hover:bg-[#1a4a6e] transition-colors font-medium"
                >
                  Suscribirse
                </button>
              </form>
            </motion.div>
          </motion.div>
        </section>

        <Footer />
      </div>
    </>
  )
}

export default BlogPage
