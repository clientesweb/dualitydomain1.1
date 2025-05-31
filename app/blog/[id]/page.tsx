"use client"

import { useEffect, useState } from "react"
import { useParams, useRouter } from "next/navigation"
import { motion } from "framer-motion"
import { Navbar, Footer } from "../../../components"
import styles from "../../../styles"
import { fadeIn, staggerContainer } from "../../../utils/motion"
import { insights } from "../../../constants"
import Image from "next/image"
import Link from "next/link"

const BlogPostPage = () => {
  const params = useParams()
  const router = useRouter()
  const [post, setPost] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    if (params.id) {
      // Handle both string and array cases
      const postId = Array.isArray(params.id) ? params.id[0] : params.id

      // Find the post
      const foundPost = insights.find((p) => p.id === postId)

      if (foundPost) {
        setPost(foundPost)
      } else {
        // If not found, redirect to blog page
        router.push("/blog")
        return
      }
    }

    setLoading(false)
  }, [params.id, router])

  if (loading) {
    return (
      <div className="bg-primary-black min-h-screen flex items-center justify-center">
        <div className="text-white text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-[#25618B] mx-auto mb-4"></div>
          <h2 className="text-xl font-bold">Cargando artículo...</h2>
        </div>
      </div>
    )
  }

  if (!post) {
    return (
      <div className="bg-primary-black min-h-screen flex items-center justify-center">
        <div className="text-white text-center p-8 max-w-md">
          <h2 className="text-2xl font-bold mb-4">Artículo no encontrado</h2>
          <p className="mb-6 text-secondary-white">Lo sentimos, no pudimos encontrar el artículo que estás buscando.</p>
          <Link
            href="/blog"
            className="bg-[#25618B] text-white py-2 px-6 rounded-lg hover:bg-[#1a4a6e] transition-colors"
          >
            Volver al blog
          </Link>
        </div>
      </div>
    )
  }

  return (
    <div className="bg-primary-black overflow-hidden">
      <Navbar />

      <section className={`${styles.paddings} relative z-10`}>
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, amount: 0.25 }}
          className={`${styles.innerWidth} mx-auto flex flex-col`}
        >
          <div className="mb-8">
            <Link href="/blog" className="text-[#25618B] hover:underline flex items-center gap-2">
              <span>←</span> Volver al blog
            </Link>
          </div>

          <div className="relative h-[300px] md:h-[400px] w-full mb-8 rounded-[20px] overflow-hidden">
            <Image
              src={post.imgUrl || "/placeholder.svg"}
              alt={post.title}
              width={1200}
              height={400}
              className="w-full h-full object-cover"
            />
          </div>

          <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4">
            <h1 className="font-bold text-white text-[24px] md:text-[32px] lg:text-[48px] leading-tight">
              {post.title}
            </h1>
            <div className="bg-[rgba(0,0,0,0.3)] p-4 rounded-lg flex-shrink-0">
              <div className="text-white">
                <p className="text-sm opacity-60">Publicado el {post.date}</p>
                <p className="font-semibold mt-1">{post.author}</p>
                <p className="text-sm opacity-60">{post.authorRole}</p>
              </div>
            </div>
          </div>

          <motion.div
            variants={fadeIn("up", "tween", 0.2, 1)}
            className="bg-[rgba(0,0,0,0.2)] p-6 md:p-8 rounded-[20px] mb-16"
          >
            <div className="blog-content text-white" dangerouslySetInnerHTML={{ __html: post.content }} />
          </motion.div>

          <div className="mt-16 flex flex-col md:flex-row justify-between items-center gap-8">
            <div>
              <h3 className="text-white font-bold text-[20px] md:text-[24px] mb-4">¿Te gustó este artículo?</h3>
              <p className="text-secondary-white">
                Compártelo en tus redes sociales o contáctanos para discutir cómo podemos ayudarte con tu proyecto.
              </p>
            </div>
            <Link
              href="/solicitar-demo"
              className="bg-[#25618B] text-white py-3 px-6 rounded-lg hover:bg-[#1a4a6e] transition-colors whitespace-nowrap"
            >
              Contactar ahora
            </Link>
          </div>

          <div className="mt-16">
            <h3 className="text-white font-bold text-[20px] md:text-[24px] mb-8 text-center">
              Otros artículos que te pueden interesar
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {insights
                .filter((p) => p.id !== post.id)
                .slice(0, 3)
                .map((relatedPost, index) => (
                  <motion.div
                    key={relatedPost.id}
                    variants={fadeIn("up", "spring", index * 0.5, 1)}
                    className="bg-[rgba(0,0,0,0.3)] rounded-[20px] overflow-hidden"
                  >
                    <div className="relative h-[180px]">
                      <Image
                        src={relatedPost.imgUrl || "/placeholder.svg"}
                        alt={relatedPost.title}
                        width={400}
                        height={180}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="p-6">
                      <h3 className="text-white font-bold text-[16px] md:text-[18px] mb-3 line-clamp-2">
                        {relatedPost.title}
                      </h3>
                      <Link href={`/blog/${relatedPost.id}`} className="text-[#25618B] hover:underline">
                        Leer artículo →
                      </Link>
                    </div>
                  </motion.div>
                ))}
            </div>
          </div>
        </motion.div>
      </section>

      <Footer />
    </div>
  )
}

export default BlogPostPage
