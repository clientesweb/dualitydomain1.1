import { Navbar, Footer } from "../../components"
import { insights } from "../../constants"
import Image from "next/image"
import Link from "next/link"
import Head from "next/head"
import styles from "../../styles"

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
          name="twitter:description"
          content="Artículos, guías y recursos sobre desarrollo web, e-commerce, SEO y UX para ayudarte a mejorar tu presencia digital."
        />
        <meta name="twitter:image" content="/og-image.jpg" />
      </Head>

      <div className="bg-primary-black overflow-hidden">
        <Navbar />

        <section className={`${styles.paddings} relative z-10`}>
          <div className={`${styles.innerWidth} mx-auto flex flex-col`}>
            <div className="text-center mb-16">
              <h1 className="font-bold text-white text-[42px] md:text-[64px] leading-tight">Blog de Duality Domain</h1>
              <p className="mt-4 text-secondary-white text-[18px] max-w-3xl mx-auto">
                Artículos, guías y recursos para ayudarte a mejorar tu presencia digital y hacer crecer tu negocio
                online.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {insights.map((post, index) => (
                <div
                  key={post.id}
                  className="bg-[rgba(0,0,0,0.3)] rounded-[20px] overflow-hidden hover:shadow-lg transition-shadow duration-300 transform hover:-translate-y-1"
                >
                  <div className="relative h-[240px]">
                    <Image
                      src={post.imgUrl || "/placeholder.svg"}
                      alt={post.title}
                      width={400}
                      height={240}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute top-4 right-4 bg-[#25618B] text-white text-xs px-3 py-1 rounded-full">
                      {post.date}
                    </div>
                  </div>
                  <div className="p-6">
                    <div className="flex items-center mb-4">
                      <div className="w-8 h-8 rounded-full bg-[#304f6e] flex items-center justify-center text-white font-bold mr-2">
                        {post.author.charAt(0)}
                      </div>
                      <div>
                        <p className="text-white text-sm">{post.author}</p>
                        <p className="text-secondary-white text-xs">{post.authorRole}</p>
                      </div>
                    </div>
                    <h3 className="text-white font-bold text-[22px] mb-3 line-clamp-2">{post.title}</h3>
                    <p className="text-secondary-white mb-4 line-clamp-3">{post.subtitle}</p>
                    <Link
                      href={`/blog/${post.id}`}
                      className="inline-block bg-[#25618B] text-white py-2 px-4 rounded-lg hover:bg-[#1a4a6e] transition-colors"
                    >
                      Leer artículo
                    </Link>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-16 bg-[rgba(0,0,0,0.3)] p-8 rounded-[20px] text-center">
              <h3 className="text-white font-bold text-[24px] mb-4">¿Quieres recibir nuestros artículos?</h3>
              <p className="text-secondary-white mb-6 max-w-2xl mx-auto">
                Suscríbete a nuestro newsletter y recibe los últimos artículos, guías y recursos directamente en tu
                bandeja de entrada.
              </p>
              <form className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
                <input
                  type="email"
                  placeholder="Tu correo electrónico"
                  className="flex-1 bg-[rgba(255,255,255,0.1)] text-white px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#25618B]"
                  required
                />
                <button
                  type="submit"
                  className="bg-[#25618B] text-white py-3 px-6 rounded-lg hover:bg-[#1a4a6e] transition-colors"
                >
                  Suscribirse
                </button>
              </form>
            </div>
          </div>
        </section>

        <Footer />
      </div>
    </>
  )
}

export default BlogPage
