"use client"

import { useRouter } from "next/router"
import { useEffect, useState } from "react"
import { Navbar, Footer } from "../../components"
import { insights } from "../../constants"
import Image from "next/image"
import Link from "next/link"
import Head from "next/head"
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

            <article className="bg-[rgba(255,255,255,0.05)] p-8 rounded-[20px] shadow-xl">
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
            </article>

            <div className="mt-16 flex flex-col md:flex-row justify-between items-center gap-8 bg-[rgba(0,0,0,0.3)] p-8 rounded-[20px]">
              <div>
                <h3 className="text-white font-bold text-[24px] mb-4">¿Te gustó este artículo?</h3>
                <p className="text-secondary-white">
                  Compártelo en tus redes sociales o contáctanos para discutir cómo podemos ayudarte con tu proyecto.
                </p>
              </div>
              <div className="flex gap-4">
                <Link
                  href="#"
                  className="bg-[#25618B] text-white py-3 px-6 rounded-lg hover:bg-[#1a4a6e] transition-colors"
                >
                  Contactar ahora
                </Link>
                <div className="flex gap-2">
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
                </div>
              </div>
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
                        <p className="text-secondary-white text-sm mb-4 line-clamp-2">{relatedPost.subtitle}</p>
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
    </>
  )
}

export default BlogPostPage
