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
        <title>Blog de Desarrollo Web | Duality Domain - Guías y Recursos</title>
        <meta
          name="description"
          content="Artículos especializados sobre desarrollo web, e-commerce, SEO y UX. Guías prácticas y recursos para mejorar tu presencia digital y hacer crecer tu negocio online en Villa del Dique, Córdoba."
        />
        <meta
          name="keywords"
          content="blog desarrollo web, guías SEO, tutoriales e-commerce, artículos UX, recursos desarrollo web, blog tecnología Villa del Dique, consejos diseño web Córdoba"
        />
        <link rel="canonical" href="https://dualitydomain.com/blog" />

        {/* Open Graph */}
        <meta property="og:title" content="Blog de Desarrollo Web | Duality Domain - Guías y Recursos" />
        <meta
          property="og:description"
          content="Artículos especializados sobre desarrollo web, e-commerce, SEO y UX. Guías prácticas y recursos para mejorar tu presencia digital."
        />
        <meta property="og:image" content="https://dualitydomain.com/og-image.jpg" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://dualitydomain.com/blog" />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Blog de Desarrollo Web | Duality Domain - Guías y Recursos" />
        <meta
          property="twitter:description"
          content="Artículos especializados sobre desarrollo web, e-commerce, SEO y UX. Guías prácticas y recursos para mejorar tu presencia digital."
        />
        <meta name="twitter:image" content="https://dualitydomain.com/og-image.jpg" />

        {/* Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Blog",
              name: "Blog de Duality Domain",
              description: "Artículos especializados sobre desarrollo web, e-commerce, SEO y UX",
              url: "https://dualitydomain.com/blog",
              publisher: {
                "@type": "Organization",
                name: "Duality Domain",
                logo: {
                  "@type": "ImageObject",
                  url: "https://dualitydomain.com/logo.png",
                },
              },
              blogPost: insights.map((post) => ({
                "@type": "BlogPosting",
                headline: post.title,
                description: post.subtitle,
                url: `https://dualitydomain.com/blog/${post.id}`,
                datePublished: post.date,
                author: {
                  "@type": "Person",
                  name: post.author,
                },
                image: `https://dualitydomain.com${post.imgUrl}`,
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
            <div className="text-center mb-16 relative z-10">
              <motion.h1
                variants={fadeIn("up", "tween", 0.2, 1)}
                className="font-bold text-white text-[42px] md:text-[64px] leading-tight"
              >
                Blog de Desarrollo Web
              </motion.h1>
              <motion.p
                variants={fadeIn("up", "tween", 0.3, 1)}
                className="mt-4 text-secondary-white text-[18px] max-w-3xl mx-auto"
              >
                Artículos especializados, guías prácticas y recursos para ayudarte a mejorar tu presencia digital y
                hacer crecer tu negocio online.
              </motion.p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 relative z-10">
              {insights.map((post, index) => (
                <motion.article
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
                      <time className="text-white text-sm opacity-60">{post.date}</time>
                      <span className="text-white text-sm opacity-60">{post.author}</span>
                    </div>
                    <h2 className="text-white font-bold text-[22px] mb-3">{post.title}</h2>
                    <p className="text-secondary-white mb-4">{post.subtitle}</p>
                    <Link
                      href={`/blog/${post.id}`}
                      className="inline-block bg-[#25618B] text-white py-2 px-4 rounded-lg hover:bg-[#1a4a6e] transition-colors"
                    >
                      Leer artículo
                    </Link>
                  </div>
                </motion.article>
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
