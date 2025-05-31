"use client"

import Head from "next/head"
import Link from "next/link"
import Image from "next/image"
import { Navbar, Footer } from "../../components"
import { insights } from "../../constants"
import styles from "../../styles"

const ArticleSEOImportance = () => {
  const article = insights.find((insight) => insight.id === "importancia-seo")

  if (!article) {
    return <div>Artículo no encontrado</div>
  }

  return (
    <>
      <Head>
        <title>{article.title} | Duality Domain - SEO Villa del Dique</title>
        <meta name="description" content={article.subtitle} />
        <meta
          name="keywords"
          content="SEO importancia, posicionamiento web, optimización SEO, estrategia digital, SEO Villa del Dique, posicionamiento web Córdoba"
        />
        <link rel="canonical" href="https://www.dualitydomain.com/articulos/importancia-seo" />
      </Head>

      <div className="bg-primary-black min-h-screen">
        <Navbar />

        <div className="bg-primary-black w-full min-h-screen">
          <article className={`${styles.paddings} bg-primary-black`}>
            <div className={`${styles.innerWidth} mx-auto flex flex-col bg-primary-black`}>
              {/* Breadcrumb */}
              <nav className="mb-8">
                <ol className="flex items-center space-x-2 text-sm text-secondary-white">
                  <li>
                    <Link href="/" className="hover:text-white transition-colors">
                      Inicio
                    </Link>
                  </li>
                  <li>/</li>
                  <li>
                    <Link href="/articulos" className="hover:text-white transition-colors">
                      Artículos
                    </Link>
                  </li>
                  <li>/</li>
                  <li className="text-white">{article.title}</li>
                </ol>
              </nav>

              {/* Header */}
              <header className="text-center mb-12 bg-primary-black">
                <h1 className="font-bold text-white text-[28px] md:text-[40px] lg:text-[48px] leading-tight mb-6">
                  {article.title}
                </h1>
                <p className="text-secondary-white text-[16px] md:text-[18px] max-w-3xl mx-auto mb-8">
                  {article.subtitle}
                </p>

                <div className="flex flex-col md:flex-row items-center justify-center gap-4 mb-8">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 bg-[#25618B] rounded-full flex items-center justify-center">
                      <span className="text-white font-bold">
                        {article.author
                          .split(" ")
                          .map((n) => n[0])
                          .join("")}
                      </span>
                    </div>
                    <div className="text-left">
                      <p className="text-white font-semibold">{article.author}</p>
                      <p className="text-secondary-white text-sm">{article.authorRole}</p>
                    </div>
                  </div>
                  <div className="text-secondary-white text-sm">
                    <time dateTime="2025-06-28">{article.date}</time>
                  </div>
                </div>
              </header>

              {/* Featured Image */}
              <div className="mb-12 bg-primary-black">
                <div className="relative h-[300px] md:h-[400px] lg:h-[500px] rounded-[24px] overflow-hidden">
                  <Image
                    src={article.imgUrl || "/placeholder.svg"}
                    alt={article.title}
                    fill
                    className="object-cover"
                    priority
                  />
                </div>
              </div>

              {/* Article Content */}
              <div className="max-w-4xl mx-auto bg-primary-black p-6 rounded-lg">
                <div
                  className="blog-content prose prose-invert max-w-none text-white"
                  dangerouslySetInnerHTML={{ __html: article.content }}
                />
              </div>

              {/* Call to Action */}
              <div className="mt-16 p-8 bg-[#25618B] rounded-[24px] text-center">
                <h3 className="text-white font-bold text-[24px] md:text-[32px] mb-4">
                  ¿Quieres mejorar el SEO de tu sitio web?
                </h3>
                <p className="text-white text-[16px] md:text-[18px] mb-6 max-w-2xl mx-auto">
                  Nuestros especialistas en SEO pueden ayudarte a implementar una estrategia completa para mejorar tu
                  posicionamiento. Solicita una auditoría SEO gratuita.
                </p>
                <Link
                  href="/solicitar-demo"
                  className="inline-block bg-white text-[#25618B] py-3 px-8 rounded-lg hover:bg-gray-100 transition-colors font-semibold"
                >
                  Solicitar auditoría SEO gratuita
                </Link>
              </div>

              {/* Related Articles */}
              <section className="mt-16 bg-primary-black">
                <h3 className="text-white font-bold text-[24px] md:text-[32px] mb-8 text-center">
                  Artículos relacionados
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  {insights
                    .filter((insight) => insight.id !== article.id)
                    .slice(0, 2)
                    .map((relatedArticle) => (
                      <Link
                        key={relatedArticle.id}
                        href={`/articulos/${relatedArticle.id}`}
                        className="bg-[#323f5d] rounded-[24px] overflow-hidden hover:bg-[#445175] transition-all duration-300 group"
                      >
                        <div className="relative h-[150px] overflow-hidden">
                          <Image
                            src={relatedArticle.imgUrl || "/placeholder.svg"}
                            alt={relatedArticle.title}
                            width={400}
                            height={150}
                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                          />
                        </div>
                        <div className="p-6">
                          <h4 className="text-white font-bold text-[18px] mb-2 group-hover:text-[#25618B] transition-colors">
                            {relatedArticle.title}
                          </h4>
                          <p className="text-secondary-white text-[14px] line-clamp-2">{relatedArticle.subtitle}</p>
                        </div>
                      </Link>
                    ))}
                </div>
              </section>
            </div>
          </article>
        </div>

        <Footer />
      </div>
    </>
  )
}

export default ArticleSEOImportance
