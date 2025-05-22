"use client"

import { useRouter } from "next/router"
import { useEffect, useState } from "react"
import { Navbar, Footer } from "../../components"
import { insights } from "../../constants"
import Image from "next/image"
import Link from "next/link"
import styles from "../../styles"

const BlogPostPage = () => {
  const router = useRouter()
  const { id } = router.query
  const [post, setPost] = useState(null)

  useEffect(() => {
    if (id) {
      const foundPost = insights.find((p) => p.id === id)
      setPost(foundPost)
    }
  }, [id])

  if (!post) {
    return (
      <div className="bg-primary-black min-h-screen flex items-center justify-center">
        <div className="text-white text-center">
          <h2 className="text-2xl font-bold mb-4">Cargando artículo...</h2>
          <Link href="/blog" className="text-[#25618B] hover:underline">
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
        <div className={`${styles.innerWidth} mx-auto flex flex-col`}>
          <div className="mb-8">
            <Link href="/blog" className="text-[#25618B] hover:underline flex items-center gap-2">
              <span>←</span> Volver al blog
            </Link>
          </div>

          <div className="relative h-[400px] w-full mb-8 rounded-[20px] overflow-hidden">
            <Image
              src={post.imgUrl || "/placeholder.svg"}
              alt={post.title}
              width={1200}
              height={400}
              className="w-full h-full object-cover"
            />
          </div>

          <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4">
            <h1 className="font-bold text-white text-[32px] md:text-[48px] leading-tight">{post.title}</h1>
            <div className="bg-[rgba(0,0,0,0.3)] p-4 rounded-lg">
              <div className="text-white">
                <p className="text-sm opacity-60">Publicado el {post.date}</p>
                <p className="font-semibold mt-1">{post.author}</p>
                <p className="text-sm opacity-60">{post.authorRole}</p>
              </div>
            </div>
          </div>

          <div
            className="prose prose-lg prose-invert max-w-none bg-[rgba(0,0,0,0.2)] p-8 rounded-[20px]"
            dangerouslySetInnerHTML={{ __html: post.content }}
          />

          <div className="mt-16 flex flex-col md:flex-row justify-between items-center gap-8">
            <div>
              <h3 className="text-white font-bold text-[24px] mb-4">¿Te gustó este artículo?</h3>
              <p className="text-secondary-white">
                Compártelo en tus redes sociales o contáctanos para discutir cómo podemos ayudarte con tu proyecto.
              </p>
            </div>
            <Link
              href="#"
              className="bg-[#25618B] text-white py-3 px-6 rounded-lg hover:bg-[#1a4a6e] transition-colors"
            >
              Contactar ahora
            </Link>
          </div>

          <div className="mt-16">
            <h3 className="text-white font-bold text-[24px] mb-8 text-center">
              Otros artículos que te pueden interesar
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {insights
                .filter((p) => p.id !== post.id)
                .slice(0, 3)
                .map((relatedPost, index) => (
                  <div key={relatedPost.id} className="bg-[rgba(0,0,0,0.3)] rounded-[20px] overflow-hidden">
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
                      <h3 className="text-white font-bold text-[18px] mb-3">{relatedPost.title}</h3>
                      <Link href={`/blog/${relatedPost.id}`} className="text-[#25618B] hover:underline">
                        Leer artículo →
                      </Link>
                    </div>
                  </div>
                ))}
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}

export default BlogPostPage
