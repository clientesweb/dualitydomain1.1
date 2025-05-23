import { Navbar, Footer } from "../../components"
import { insights } from "../../constants"
import Image from "next/image"
import Link from "next/link"
import Head from "next/head"

const BlogPage = () => {
  return (
    <div style={{ backgroundColor: "#1A232E", color: "white", minHeight: "100vh" }}>
      <Head>
        <title>Blog | Duality Domain - Desarrollo Web Profesional</title>
        <meta
          name="description"
          content="Artículos, guías y recursos sobre desarrollo web, e-commerce, SEO y UX para ayudarte a mejorar tu presencia digital."
        />
      </Head>

      <Navbar />

      <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "40px 20px" }}>
        <div style={{ textAlign: "center", marginBottom: "60px" }}>
          <h1 style={{ color: "white", fontSize: "42px", fontWeight: "bold", lineHeight: "1.2" }}>
            Blog de Duality Domain
          </h1>
          <p style={{ color: "#c7c7c7", fontSize: "18px", maxWidth: "800px", margin: "16px auto 0" }}>
            Artículos, guías y recursos para ayudarte a mejorar tu presencia digital y hacer crecer tu negocio online.
          </p>
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))",
            gap: "30px",
          }}
        >
          {insights.map((post) => (
            <div
              key={post.id}
              style={{
                backgroundColor: "rgba(0,0,0,0.3)",
                borderRadius: "20px",
                overflow: "hidden",
              }}
            >
              <div style={{ position: "relative", height: "240px" }}>
                <Image src={post.imgUrl || "/placeholder.svg"} alt={post.title} layout="fill" objectFit="cover" />
              </div>
              <div style={{ padding: "24px" }}>
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    marginBottom: "12px",
                  }}
                >
                  <span style={{ color: "white", fontSize: "14px", opacity: "0.6" }}>{post.date}</span>
                  <span style={{ color: "white", fontSize: "14px", opacity: "0.6" }}>{post.author}</span>
                </div>
                <h3 style={{ color: "white", fontSize: "22px", fontWeight: "bold", marginBottom: "12px" }}>
                  {post.title}
                </h3>
                <p style={{ color: "#c7c7c7", marginBottom: "16px" }}>{post.subtitle}</p>
                <Link
                  href={`/blog/${post.id}`}
                  style={{
                    display: "inline-block",
                    backgroundColor: "#25618B",
                    color: "white",
                    padding: "8px 16px",
                    borderRadius: "8px",
                    textDecoration: "none",
                  }}
                >
                  Leer artículo
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>

      <Footer />
    </div>
  )
}

export default BlogPage
