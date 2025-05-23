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

  // Función para renderizar el contenido del blog de manera segura
  const renderBlogContent = () => {
    // Extraer el contenido HTML
    const contentHTML = post.content

    // Crear un elemento temporal para parsear el HTML
    const tempDiv = document.createElement("div")
    tempDiv.innerHTML = contentHTML

    // Extraer los elementos y aplicar estilos manualmente
    const elements = []

    // Función recursiva para procesar nodos
    const processNode = (node, index = 0) => {
      // Si es un nodo de texto, devolver el texto
      if (node.nodeType === Node.TEXT_NODE) {
        return node.textContent
      }

      // Si es un elemento, procesarlo según su tipo
      if (node.nodeType === Node.ELEMENT_NODE) {
        const tagName = node.tagName.toLowerCase()
        const children = Array.from(node.childNodes).map((child, i) => processNode(child, i))

        switch (tagName) {
          case "h1":
            return (
              <h1 key={`h1-${index}`} className="text-white text-4xl font-bold my-6">
                {children}
              </h1>
            )
          case "h2":
            return (
              <h2 key={`h2-${index}`} className="text-white text-3xl font-bold mt-8 mb-4">
                {children}
              </h2>
            )
          case "h3":
            return (
              <h3 key={`h3-${index}`} className="text-white text-2xl font-semibold mt-6 mb-3">
                {children}
              </h3>
            )
          case "h4":
            return (
              <h4 key={`h4-${index}`} className="text-white text-xl font-semibold mt-5 mb-2">
                {children}
              </h4>
            )
          case "p":
            return (
              <p key={`p-${index}`} className="text-[#e0e0e0] mb-4 leading-relaxed">
                {children}
              </p>
            )
          case "ul":
            return (
              <ul key={`ul-${index}`} className="list-disc pl-6 mb-4 text-[#e0e0e0]">
                {children}
              </ul>
            )
          case "li":
            return (
              <li key={`li-${index}`} className="mb-2 text-[#e0e0e0]">
                {children}
              </li>
            )
          case "strong":
          case "b":
            return (
              <strong key={`strong-${index}`} className="font-bold text-white">
                {children}
              </strong>
            )
          case "em":
          case "i":
            return (
              <em key={`em-${index}`} className="italic text-[#e0e0e0]">
                {children}
              </em>
            )
          case "a":
            return (
              <a
                key={`a-${index}`}
                href={node.getAttribute("href")}
                className="text-[#25618B] underline hover:text-[#1a4a6e]"
                target="_blank"
                rel="noopener noreferrer"
              >
                {children}
              </a>
            )
          case "blockquote":
            return (
              <blockquote
                key={`blockquote-${index}`}
                className="border-l-4 border-[#25618B] pl-4 italic text-[#c0c0c0] my-4"
              >
                {children}
              </blockquote>
            )
          default:
            return <div key={`div-${index}`}>{children}</div>
        }
      }

      return null
    }

    try {
      // Procesar cada nodo hijo del div temporal
      Array.from(tempDiv.childNodes).forEach((node, index) => {
        const processedNode = processNode(node, index)
        if (processedNode) {
          elements.push(processedNode)
        }
      })

      return elements
    } catch (error) {
      console.error("Error al renderizar el contenido del blog:", error)

      // Fallback: Mostrar el contenido como texto plano
      return <div className="text-white whitespace-pre-wrap">{contentHTML.replace(/<[^>]*>?/gm, "")}</div>
    }
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
          <div className="absolute w-[50%] inset-0 gradient-01 z-0" />

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="show"
            viewport={{ once: false, amount: 0.25 }}
            className={`${styles.innerWidth} mx-auto flex flex-col relative z-10`}
          >
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

            {/* Contenido del artículo */}
            <motion.div
              variants={fadeIn("up", "tween", 0.2, 1)}
              className="bg-[rgba(0,0,0,0.2)] p-8 rounded-[20px] mb-16"
            >
              {/* Renderizar el contenido del blog de manera segura */}
              {typeof window !== "undefined" ? (
                renderBlogContent()
              ) : (
                // Fallback para SSR
                <div className="text-white">
                  <p className="text-[#e0e0e0] mb-4">Cargando contenido...</p>
                </div>
              )}
            </motion.div>

            <div className="mt-16 flex flex-col md:flex-row justify-between items-center gap-8">
              <div>
                <h3 className="text-white font-bold text-[24px] mb-4">¿Te gustó este artículo?</h3>
                <p className="text-secondary-white">
                  Compártelo en tus redes sociales o contáctanos para discutir cómo podemos ayudarte con tu proyecto.
                </p>
              </div>
              <Link
                href="/solicitar-demo"
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
                        <h3 className="text-white font-bold text-[18px] mb-3">{relatedPost.title}</h3>
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
    </>
  )
}

export default BlogPostPage
