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
          {/* Cambiado el z-index del gradiente para que esté detrás del contenido */}
          <div className="absolute w-[50%] inset-0 gradient-01 z-0" />

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="show"
            viewport={{ once: false, amount: 0.25 }}
            className={`${styles.innerWidth} mx-auto flex flex-col relative z-10`}
          >
            <div className="text-center mb-16 relative z-10">
              <motion.h1
                variants={fadeIn("up", "tween", 0.2, 1)}
                className="font-bold text-white text-[42px] md:text-[64px] leading-tight"
              >
                Blog de Duality Domain
              </motion.h1>
              <motion.p
                variants={fadeIn("up", "tween", 0.3, 1)}
                className="mt-4 text-secondary-white text-[18px] max-w-3xl mx-auto"
              >
                Artículos, guías y recursos para ayudarte a mejorar tu presencia digital y hacer crecer tu negocio
                online.
              </motion.p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 relative z-10">
              {insights.map((post, index) => (
                <motion.div
                  key={post.id}
                  variants={fadeIn("up", "spring", index * 0.5, 1)}
                  className="bg-[rgba(0,0,0,0.3)] rounded-[20px] overflow-hidden relative z-10"
                >
                  <div className="relative h-[240px]">
                    <Image
                      src={post.imgUrl || "/placeholder.svg"}
                      alt={post.title}
                      width={400}
                      height={240}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="p-6">
                    <div className="flex justify-between items-center mb-3">
                      <span className="text-white text-sm opacity-60">{post.date}</span>
                      <span className="text-white text-sm opacity-60">{post.author}</span>
                    </div>
                    <h3 className="text-white font-bold text-[22px] mb-3">{post.title}</h3>
                    <p className="text-secondary-white mb-4">{post.subtitle}</p>
                    <Link
                      href={`/blog/${post.id}`}
                      className="inline-block bg-[#25618B] text-white py-2 px-4 rounded-lg hover:bg-[#1a4a6e] transition-colors"
                    >
                      Leer artículo
                    </Link>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </section>

        <Footer />
      </div>
    </>
  )
}

export default BlogPage
