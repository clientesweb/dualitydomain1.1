"use client"

import { useRouter } from "next/router"
import { useEffect, useState } from "react"
import { Navbar, Footer } from "../../components"
import { insights } from "../../constants"
import Image from "next/image"
import Link from "next/link"
import Head from "next/head"
import styles from "../../styles"
import { motion } from "framer-motion"
import { fadeIn, staggerContainer } from "../../utils/motion"

const BlogPostPage = () => {
  const router = useRouter()
  const { id } = router.query
  const [post, setPost] = useState(null)
  const [relatedPosts, setRelatedPosts] = useState([])

  useEffect(() => {
    if (id) {
      const foundPost = insights.find((p) => p.id === id)
      setPost(foundPost)

      // Get related posts (excluding current post)
      if (foundPost) {
        const related = insights.filter((p) => p.id !== id).slice(0, 3)
        setRelatedPosts(related)
      }
    }
  }, [id])

  if (!post) {
    return (
      <div className="bg-primary-black min-h-screen flex items-center justify-center">
        <div className="text-white text-center">
          <div className="w-16 h-16 border-4 border-[#25618B] border-t-transparent rounded-full animate-spin mx-auto mb-6"></div>
          <h2 className="text-2xl font-bold mb-4">Cargando artículo...</h2>
          <Link href="/blog" className="text-[#25618B] hover:underline">
            Volver al blog
          </Link>
        </div>
      </div>
    )
  }

  return (
    <>
      <Head>
        <title>{post.title} | Blog de Duality Domain</title>
        <meta name="description" content={post.subtitle} />
        <meta property="og:title" content={`${post.title} | Blog de Duality Domain`} />
        <meta property="og:description" content={post.subtitle} />
        <meta property="og:image" content={post.imgUrl} />
        <meta property="og:type" content="article" />
        <meta property="article:published_time" content={post.date} />
        <meta property="article:author" content={post.author} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={post.title} />
        <meta name="twitter:description" content={post.subtitle} />
        <meta name="twitter:image" content={post.imgUrl} />
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
            {/* Breadcrumb Navigation */}
            <motion.div variants={fadeIn("up", "tween", 0.1, 1)} className="mb-8">
              <Link href="/blog" className="text-[#25618B] hover:text-white transition-colors flex items-center gap-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M19 12H5M12 19l-7-7 7-7" />
                </svg>
                Volver al blog
              </Link>
            </motion.div>

            {/* Article Header */}
            <motion.div variants={fadeIn("up", "tween", 0.2, 1)} className="mb-12">
              <div className="flex flex-wrap gap-4 mb-4">
                <span className="bg-[#25618B] text-white text-sm px-4 py-1 rounded-full">{post.date}</span>
                <div className="flex items-center gap-2 bg-[#323f5d] px-4 py-1 rounded-full">
                  <div className="w-6 h-6 rounded-full bg-[#25618B] flex items-center justify-center text-white font-bold text-sm">
                    {post.author.charAt(0)}
                  </div>
                  <span className="text-white text-sm">{post.author}</span>
                  <span className="text-secondary-white text-xs">• {post.authorRole}</span>
                </div>
              </div>

              <h1 className="font-bold text-white text-[32px] md:text-[48px] leading-tight mb-6">{post.title}</h1>
              <p className="text-secondary-white text-[18px] max-w-3xl">{post.subtitle}</p>
            </motion.div>

            {/* Featured Image */}
            <motion.div variants={fadeIn("up", "tween", 0.3, 1)} className="mb-12">
              <div className="relative h-[300px] md:h-[500px] w-full rounded-[24px] overflow-hidden">
                <Image
                  src={post.imgUrl || "/placeholder.svg"}
                  alt={post.title}
                  width={1200}
                  height={500}
                  className="w-full h-full object-cover"
                />
              </div>
            </motion.div>

            {/* Article Content */}
            <motion.article
              variants={fadeIn("up", "tween", 0.4, 1)}
              className="bg-[#1A232E] border border-[#304f6e] p-8 md:p-12 rounded-[24px] shadow-xl mb-12"
            >
              <div
                className="prose prose-lg max-w-none text-white"
                style={{
                  "--tw-prose-headings": "rgb(255, 255, 255)",
                  "--tw-prose-body": "rgb(220, 220, 220)",
                  "--tw-prose-bold": "rgb(255, 255, 255)",
                  "--tw-prose-links": "rgb(59, 130, 246)",
                  "--tw-prose-counters": "rgb(220, 220, 220)",
                  "--tw-prose-bullets": "rgb(220, 220, 220)",
                }}
                dangerouslySetInnerHTML={{ __html: post.content }}
              />
            </motion.article>

            {/* Author Bio */}
            <motion.div
              variants={fadeIn("up", "tween", 0.5, 1)}
              className="bg-[#1A232E] border border-[#304f6e] p-8 rounded-[24px] mb-12"
            >
              <div className="flex flex-col md:flex-row items-center md:items-start gap-6">
                <div className="w-20 h-20 rounded-full bg-[#304f6e] flex items-center justify-center text-white font-bold text-2xl flex-shrink-0">
                  {post.author.charAt(0)}
                </div>
                <div>
                  <h3 className="text-white font-bold text-[20px] mb-2">Sobre {post.author}</h3>
                  <p className="text-secondary-white mb-2">{post.authorRole} en Duality Domain</p>
                  <p className="text-secondary-white">
                    Especialista en desarrollo web con amplia experiencia en el sector. Apasionado por crear soluciones
                    digitales que ayuden a las empresas a crecer y destacar en el mundo online.
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Share and CTA */}
            <motion.div
              variants={fadeIn("up", "tween", 0.6, 1)}
              className="bg-[#1A232E] border border-[#304f6e] p-8 rounded-[24px] mb-12"
            >
              <div className="flex flex-col md:flex-row justify-between items-center gap-8">
                <div>
                  <h3 className="text-white font-bold text-[24px] mb-4">¿Te gustó este artículo?</h3>
                  <p className="text-secondary-white">
                    Compártelo en tus redes sociales o contáctanos para discutir cómo podemos ayudarte con tu proyecto.
                  </p>
                </div>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Link
                    href="/solicitar-demo"
                    className="bg-[#25618B] text-white py-3 px-6 rounded-full hover:bg-[#1a4a6e] transition-colors text-center"
                  >
                    Contactar ahora
                  </Link>
                  <div className="flex gap-2 justify-center">
                    <a
                      href={`https://twitter.com/intent/tweet?text=${encodeURIComponent(
                        post.title,
                      )}&url=${encodeURIComponent(`https://dualitydomain.com/blog/${post.id}`)}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-[#1DA1F2] text-white p-3 rounded-full hover:opacity-80 transition-opacity"
                      aria-label="Compartir en Twitter"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="20"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                      >
                        <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
                      </svg>
                    </a>
                    <a
                      href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(
                        `https://dualitydomain.com/blog/${post.id}`,
                      )}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-[#1877F2] text-white p-3 rounded-full hover:opacity-80 transition-opacity"
                      aria-label="Compartir en Facebook"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="20"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                      >
                        <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z" />
                      </svg>
                    </a>
                    <a
                      href={`https://www.linkedin.com/shareArticle?mini=true&url=${encodeURIComponent(
                        `https://dualitydomain.com/blog/${post.id}`,
                      )}&title=${encodeURIComponent(post.title)}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-[#0A66C2] text-white p-3 rounded-full hover:opacity-80 transition-opacity"
                      aria-label="Compartir en LinkedIn"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="20"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                      >
                        <path d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z" />
                      </svg>
                    </a>
                    <a
                      href={`https://wa.me/?text=${encodeURIComponent(
                        `${post.title} - https://dualitydomain.com/blog/${post.id}`,
                      )}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-[#25D366] text-white p-3 rounded-full hover:opacity-80 transition-opacity"
                      aria-label="Compartir en WhatsApp"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="20"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                      >
                        <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z" />
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Related Articles */}
            {relatedPosts.length > 0 && (
              <motion.div variants={fadeIn("up", "tween", 0.7, 1)}>
                <h3 className="text-white font-bold text-[28px] mb-8 border-b border-[#304f6e] pb-4">
                  Artículos relacionados
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  {relatedPosts.map((relatedPost, index) => (
                    <div
                      key={relatedPost.id}
                      className="bg-[#1A232E] border border-[#304f6e] rounded-[24px] overflow-hidden hover:shadow-[0_0_15px_rgba(37,97,139,0.5)] transition-all duration-300 transform hover:-translate-y-1"
                    >
                      <div className="relative h-[180px]">
                        <Image
                          src={relatedPost.imgUrl || "/placeholder.svg"}
                          alt={relatedPost.title}
                          width={400}
                          height={180}
                          className="w-full h-full object-cover"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-[#1A232E] to-transparent opacity-70"></div>
                        <div className="absolute bottom-4 left-4 right-4">
                          <span className="inline-block bg-[#25618B] text-white text-xs px-3 py-1 rounded-full mb-2">
                            {relatedPost.date}
                          </span>
                        </div>
                      </div>
                      <div className="p-6">
                        <h4 className="text-white font-bold text-[18px] mb-3 line-clamp-2 min-h-[54px]">
                          {relatedPost.title}
                        </h4>
                        <p className="text-secondary-white text-sm mb-4 line-clamp-2">{relatedPost.subtitle}</p>
                        <Link
                          href={`/blog/${relatedPost.id}`}
                          className="inline-block bg-[#25618B] text-white py-2 px-4 rounded-full hover:bg-[#1a4a6e] transition-colors text-sm"
                        >
                          Leer artículo
                        </Link>
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            )}
          </motion.div>
        </section>

        <Footer />
      </div>
    </>
  )
}

export default BlogPostPage
