"use client"

import { useRouter } from "next/router"
import { useEffect, useState } from "react"
import { Navbar, Footer } from "../../components"
import { insights } from "../../constants"
import Image from "next/image"
import Link from "next/link"
import Head from "next/head"

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
      <div
        style={{
          backgroundColor: "#000000",
          minHeight: "100vh",
          position: "relative",
          zIndex: 9999,
        }}
      >
        <Navbar />
        <div
          style={{
            textAlign: "center",
            marginTop: "100px",
            position: "relative",
            zIndex: 10000,
            padding: "20px",
          }}
        >
          <h2
            style={{
              color: "#FF0000",
              fontSize: "24px",
              fontWeight: "bold",
              border: "2px solid red",
              padding: "10px",
              backgroundColor: "white",
            }}
          >
            Cargando artículo...
          </h2>
          <Link
            href="/blog"
            style={{
              color: "#0000FF",
              textDecoration: "underline",
              fontSize: "18px",
              backgroundColor: "yellow",
              padding: "5px",
            }}
          >
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
      </Head>

      {/* Contenedor principal con z-index muy alto y sin overlays */}
      <div
        style={{
          backgroundColor: "#000000",
          minHeight: "100vh",
          position: "relative",
          zIndex: 9999,
          overflow: "visible",
        }}
      >
        <Navbar />

        {/* Contenido principal */}
        <div
          style={{
            maxWidth: "1200px",
            margin: "0 auto",
            padding: "40px 20px",
            position: "relative",
            zIndex: 10000,
            backgroundColor: "#111111",
            border: "3px solid #FF0000",
          }}
        >
          {/* Elemento de debug visible */}
          <div
            style={{
              backgroundColor: "#FF0000",
              color: "#FFFFFF",
              padding: "10px",
              marginBottom: "20px",
              fontSize: "18px",
              fontWeight: "bold",
              border: "2px solid white",
              textAlign: "center",
            }}
          >
            🔴 DEBUG: Si puedes ver este texto rojo, el contenedor funciona
          </div>

          {/* Navegación de vuelta */}
          <div style={{ marginBottom: "20px", position: "relative", zIndex: 10001 }}>
            <Link
              href="/blog"
              style={{
                color: "#00FF00",
                textDecoration: "underline",
                display: "flex",
                alignItems: "center",
                gap: "8px",
                fontSize: "18px",
                backgroundColor: "#000000",
                padding: "10px",
                border: "2px solid green",
              }}
            >
              <span>←</span> Volver al blog
            </Link>
          </div>

          {/* Imagen del artículo */}
          <div
            style={{
              position: "relative",
              height: "300px",
              width: "100%",
              marginBottom: "30px",
              border: "3px solid #0000FF",
              backgroundColor: "#333333",
            }}
          >
            <Image
              src={post.imgUrl || "/placeholder.svg"}
              alt={post.title}
              layout="fill"
              objectFit="cover"
              style={{ position: "relative", zIndex: 10002 }}
            />
          </div>

          {/* Título del artículo */}
          <div
            style={{
              marginBottom: "30px",
              position: "relative",
              zIndex: 10003,
              backgroundColor: "#222222",
              padding: "20px",
              border: "2px solid #FFFF00",
            }}
          >
            <h1
              style={{
                color: "#FFFFFF",
                fontSize: "32px",
                fontWeight: "bold",
                lineHeight: "1.2",
                marginBottom: "20px",
                textShadow: "2px 2px 4px #000000",
                backgroundColor: "#333333",
                padding: "10px",
              }}
            >
              {post.title}
            </h1>
            <div
              style={{
                backgroundColor: "#444444",
                padding: "16px",
                border: "1px solid #FFFFFF",
              }}
            >
              <p
                style={{
                  color: "#FFFF00",
                  fontSize: "14px",
                  marginBottom: "5px",
                }}
              >
                Publicado el {post.date}
              </p>
              <p
                style={{
                  color: "#00FFFF",
                  fontWeight: "600",
                  marginBottom: "5px",
                }}
              >
                {post.author}
              </p>
              <p
                style={{
                  color: "#FF00FF",
                  fontSize: "14px",
                }}
              >
                {post.authorRole}
              </p>
            </div>
          </div>

          {/* Contenido principal del artículo */}
          <div
            style={{
              backgroundColor: "#1a1a1a",
              padding: "40px",
              border: "5px solid #00FF00",
              marginBottom: "60px",
              position: "relative",
              zIndex: 10004,
            }}
          >
            {/* Elemento de debug dentro del contenido */}
            <div
              style={{
                backgroundColor: "#00FF00",
                color: "#000000",
                padding: "15px",
                marginBottom: "30px",
                fontSize: "16px",
                fontWeight: "bold",
                textAlign: "center",
                border: "3px solid #FFFFFF",
              }}
            >
              🟢 DEBUG: Si puedes ver este texto verde, el área de contenido funciona
            </div>

            <h2
              style={{
                color: "#FFFFFF",
                fontSize: "28px",
                fontWeight: "bold",
                marginBottom: "20px",
                backgroundColor: "#333333",
                padding: "15px",
                border: "2px solid #FFFFFF",
                textShadow: "1px 1px 2px #000000",
              }}
            >
              {post.title}
            </h2>

            <p
              style={{
                color: "#FFFFFF",
                fontSize: "18px",
                lineHeight: "1.6",
                marginBottom: "25px",
                backgroundColor: "#2a2a2a",
                padding: "20px",
                border: "1px solid #FFFFFF",
                textShadow: "1px 1px 1px #000000",
              }}
            >
              {post.subtitle}
            </p>

            {/* Contenido del artículo con colores extremos */}
            <div
              style={{
                backgroundColor: "#0a0a0a",
                padding: "30px",
                border: "3px solid #FFFF00",
                marginBottom: "20px",
              }}
            >
              <p
                style={{
                  color: "#FFFFFF",
                  fontSize: "16px",
                  lineHeight: "1.8",
                  marginBottom: "20px",
                  backgroundColor: "#333333",
                  padding: "15px",
                  border: "1px solid #FFFFFF",
                }}
              >
                🔵 CONTENIDO PRINCIPAL: En el competitivo mundo digital actual, tener un sitio web no es suficiente. La
                calidad del diseño de tu sitio web puede ser el factor determinante entre el éxito y el fracaso de tu
                presencia online.
              </p>

              <p
                style={{
                  color: "#00FFFF",
                  fontSize: "16px",
                  lineHeight: "1.8",
                  marginBottom: "20px",
                  backgroundColor: "#1a1a1a",
                  padding: "15px",
                  border: "1px solid #00FFFF",
                }}
              >
                🟡 PÁRRAFO 2: Un buen diseño web no solo atrae visualmente a los usuarios, sino que también los guía
                estratégicamente hacia la conversión. Las tasas de conversión son un indicador clave del rendimiento de
                tu sitio web.
              </p>

              <p
                style={{
                  color: "#FF00FF",
                  fontSize: "16px",
                  lineHeight: "1.8",
                  marginBottom: "20px",
                  backgroundColor: "#2a2a2a",
                  padding: "15px",
                  border: "1px solid #FF00FF",
                }}
              >
                🟣 PÁRRAFO 3: En Duality Domain, nos especializamos en crear diseños web que no solo se ven bien, sino
                que también están estratégicamente diseñados para aumentar las conversiones. Contáctanos hoy para
                descubrir cómo podemos ayudarte.
              </p>

              <h3
                style={{
                  color: "#FFFF00",
                  fontSize: "24px",
                  fontWeight: "bold",
                  marginTop: "30px",
                  marginBottom: "15px",
                  backgroundColor: "#000000",
                  padding: "10px",
                  border: "2px solid #FFFF00",
                }}
              >
                🟡 Elementos clave del diseño web
              </h3>

              <ul
                style={{
                  color: "#FFFFFF",
                  fontSize: "16px",
                  lineHeight: "1.6",
                  paddingLeft: "20px",
                  backgroundColor: "#1a1a1a",
                  padding: "20px",
                  border: "1px solid #FFFFFF",
                }}
              >
                <li style={{ marginBottom: "10px", color: "#00FF00" }}>✅ Diseño visual atractivo y profesional</li>
                <li style={{ marginBottom: "10px", color: "#00FFFF" }}>✅ Navegación intuitiva</li>
                <li style={{ marginBottom: "10px", color: "#FF00FF" }}>✅ Llamadas a la acción efectivas</li>
                <li style={{ marginBottom: "10px", color: "#FFFF00" }}>✅ Diseño responsivo</li>
                <li style={{ marginBottom: "10px", color: "#FF0000" }}>✅ Velocidad de carga optimizada</li>
              </ul>
            </div>
          </div>

          {/* Sección de contacto */}
          <div
            style={{
              backgroundColor: "#2a2a2a",
              padding: "30px",
              border: "3px solid #FF00FF",
              textAlign: "center",
              position: "relative",
              zIndex: 10005,
            }}
          >
            <h3
              style={{
                color: "#FFFFFF",
                fontSize: "24px",
                fontWeight: "bold",
                marginBottom: "16px",
                backgroundColor: "#000000",
                padding: "10px",
              }}
            >
              ¿Te gustó este artículo?
            </h3>
            <p
              style={{
                color: "#FFFFFF",
                marginBottom: "20px",
                fontSize: "16px",
                backgroundColor: "#1a1a1a",
                padding: "10px",
              }}
            >
              Contáctanos para discutir cómo podemos ayudarte con tu proyecto.
            </p>
            <Link
              href="/solicitar-demo"
              style={{
                backgroundColor: "#25618B",
                color: "#FFFFFF",
                padding: "15px 30px",
                borderRadius: "8px",
                fontWeight: "500",
                textDecoration: "none",
                border: "2px solid #FFFFFF",
                fontSize: "18px",
              }}
            >
              Contactar ahora
            </Link>
          </div>
        </div>

        <Footer />
      </div>
    </>
  )
}

// Funciones necesarias para Next.js
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
