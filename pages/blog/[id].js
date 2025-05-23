"use client"

import { useRouter } from "next/router"
import { useEffect, useState } from "react"
import { Navbar, Footer } from "../../components"
import { insights } from "../../constants"
import Image from "next/image"
import Link from "next/link"
import Head from "next/head"

// Componente de blog extremadamente simplificado con estilos inline
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
      <div style={{ backgroundColor: "#1A232E", minHeight: "100vh", padding: "20px", color: "white" }}>
        <Navbar />
        <div style={{ textAlign: "center", marginTop: "100px" }}>
          <h2 style={{ color: "white !important", fontSize: "24px", fontWeight: "bold" }}>Cargando artículo...</h2>
          <Link href="/blog" style={{ color: "#25618B", textDecoration: "underline" }}>
            Volver al blog
          </Link>
        </div>
      </div>
    )
  }

  // Extraer el contenido HTML y convertirlo a texto plano
  const stripHtml = (html) => {
    const tmp = document.createElement("DIV")
    tmp.innerHTML = html
    return tmp.textContent || tmp.innerText || ""
  }

  // Función para renderizar el contenido del blog de manera extremadamente simple
  const renderSimpleContent = () => {
    // Dividir el contenido en párrafos
    const paragraphs = stripHtml(post.content).split("\n\n")

    return (
      <div style={{ color: "white !important" }}>
        {paragraphs.map((paragraph, index) => (
          <p
            key={index}
            style={{
              color: "white !important",
              marginBottom: "20px",
              lineHeight: "1.6",
              fontSize: "16px",
            }}
          >
            {paragraph}
          </p>
        ))}
      </div>
    )
  }

  return (
    <div style={{ backgroundColor: "#1A232E", color: "white !important", minHeight: "100vh" }}>
      <Head>
        <title>{post.title} | Blog de Duality Domain</title>
        <meta name="description" content={post.subtitle} />
      </Head>

      <Navbar />

      <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "40px 20px" }}>
        <div style={{ marginBottom: "20px" }}>
          <Link
            href="/blog"
            style={{
              color: "#25618B",
              textDecoration: "underline",
              display: "flex",
              alignItems: "center",
              gap: "8px",
            }}
          >
            <span>←</span> Volver al blog
          </Link>
        </div>

        <div
          style={{
            position: "relative",
            height: "400px",
            width: "100%",
            marginBottom: "30px",
            borderRadius: "20px",
            overflow: "hidden",
          }}
        >
          <Image src={post.imgUrl || "/placeholder.svg"} alt={post.title} layout="fill" objectFit="cover" />
        </div>

        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            marginBottom: "30px",
            gap: "20px",
          }}
        >
          <h1 style={{ color: "white !important", fontSize: "32px", fontWeight: "bold", lineHeight: "1.2" }}>
            {post.title}
          </h1>
          <div
            style={{
              backgroundColor: "rgba(0,0,0,0.3)",
              padding: "16px",
              borderRadius: "8px",
            }}
          >
            <p style={{ color: "white !important", opacity: "0.6", fontSize: "14px" }}>Publicado el {post.date}</p>
            <p style={{ color: "white !important", fontWeight: "600", marginTop: "4px" }}>{post.author}</p>
            <p style={{ color: "white !important", opacity: "0.6", fontSize: "14px" }}>{post.authorRole}</p>
          </div>
        </div>

        {/* Contenido del artículo con estilos inline forzados */}
        <div
          style={{
            backgroundColor: "rgba(0,0,0,0.5)",
            padding: "32px",
            borderRadius: "20px",
            marginBottom: "60px",
            color: "white !important",
          }}
        >
          <h2 style={{ color: "white !important", fontSize: "28px", fontWeight: "bold", marginBottom: "20px" }}>
            {post.title}
          </h2>
          <p style={{ color: "white !important", marginBottom: "20px", lineHeight: "1.6" }}>{post.subtitle}</p>

          {/* Contenido del artículo */}
          <div style={{ color: "white !important", fontSize: "16px", lineHeight: "1.8" }}>
            <p style={{ color: "white !important", marginBottom: "20px" }}>
              En Duality Domain nos especializamos en crear soluciones digitales personalizadas que combinan creatividad
              y excelencia técnica para impulsar el crecimiento de los negocios.
            </p>
            <p style={{ color: "white !important", marginBottom: "20px" }}>
              Este artículo explora cómo las estrategias digitales modernas pueden transformar tu presencia online y
              conectar con tu audiencia de manera efectiva.
            </p>
            <p style={{ color: "white !important", marginBottom: "20px" }}>
              Nuestro equipo de expertos está listo para ayudarte a implementar estas estrategias y llevar tu negocio al
              siguiente nivel.
            </p>
            <p style={{ color: "white !important", marginBottom: "20px" }}>
              Contáctanos hoy para descubrir cómo podemos ayudarte a alcanzar tus objetivos digitales.
            </p>
          </div>
        </div>

        <div
          style={{
            marginTop: "60px",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            alignItems: "center",
            gap: "30px",
          }}
        >
          <div>
            <h3 style={{ color: "white !important", fontSize: "24px", fontWeight: "bold", marginBottom: "16px" }}>
              ¿Te gustó este artículo?
            </h3>
            <p style={{ color: "white !important", opacity: "0.8" }}>
              Compártelo en tus redes sociales o contáctanos para discutir cómo podemos ayudarte con tu proyecto.
            </p>
          </div>
          <Link
            href="/solicitar-demo"
            style={{
              backgroundColor: "#25618B",
              color: "white",
              padding: "12px 24px",
              borderRadius: "8px",
              fontWeight: "500",
              textDecoration: "none",
            }}
          >
            Contactar ahora
          </Link>
        </div>

        <div style={{ marginTop: "60px" }}>
          <h3
            style={{
              color: "white !important",
              fontSize: "24px",
              fontWeight: "bold",
              marginBottom: "30px",
              textAlign: "center",
            }}
          >
            Otros artículos que te pueden interesar
          </h3>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))",
              gap: "30px",
            }}
          >
            {insights
              .filter((p) => p.id !== post.id)
              .slice(0, 3)
              .map((relatedPost) => (
                <div
                  key={relatedPost.id}
                  style={{
                    backgroundColor: "rgba(0,0,0,0.3)",
                    borderRadius: "20px",
                    overflow: "hidden",
                  }}
                >
                  <div style={{ position: "relative", height: "180px" }}>
                    <Image
                      src={relatedPost.imgUrl || "/placeholder.svg"}
                      alt={relatedPost.title}
                      layout="fill"
                      objectFit="cover"
                    />
                  </div>
                  <div style={{ padding: "24px" }}>
                    <h3
                      style={{ color: "white !important", fontSize: "18px", fontWeight: "bold", marginBottom: "12px" }}
                    >
                      {relatedPost.title}
                    </h3>
                    <Link href={`/blog/${relatedPost.id}`} style={{ color: "#25618B", textDecoration: "underline" }}>
                      Leer artículo →
                    </Link>
                  </div>
                </div>
              ))}
          </div>
        </div>
      </div>

      <Footer />
    </div>
  )
}

// Estas funciones son necesarias para las rutas dinámicas en Next.js
export async function getStaticPaths() {
  const paths = insights.map((post) => ({
    params: { id: post.id },
  }))

  return {
    paths,
    fallback: false,
  }
}

export async function getStaticProps({ params }) {
  const post = insights.find((p) => p.id === params.id)

  if (!post) {
    return {
      notFound: true,
    }
  }

  return {
    props: {
      post,
    },
  }
}

export default BlogPostPage
