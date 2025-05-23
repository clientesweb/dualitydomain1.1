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
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    if (id) {
      const foundPost = insights.find((p) => p.id === id)
      setPost(foundPost)
      setLoading(false)
    }
  }, [id])

  if (loading) {
    return (
      <div className="bg-primary-black min-h-screen flex items-center justify-center">
        <div className="text-white text-center">
          <h2 className="text-2xl font-bold mb-4">Cargando artículo...</h2>
        </div>
      </div>
    )
  }

  if (!post) {
    return (
      <div className="bg-primary-black min-h-screen flex items-center justify-center">
        <div className="text-white text-center">
          <h2 className="text-2xl font-bold mb-4">Artículo no encontrado</h2>
          <Link href="/blog" className="text-[#25618B] hover:underline">
            Volver al blog
          </Link>
        </div>
      </div>
    )
  }

  // Función simple para renderizar el contenido
  const renderContent = () => {
    if (post.id === "blog-1") {
      return (
        <div className="text-white space-y-6">
          <h2 className="text-3xl font-bold text-white mb-6">
            Cómo un buen diseño web puede aumentar tus conversiones
          </h2>

          <p className="text-gray-300 leading-relaxed">
            En el competitivo mundo digital actual, tener un sitio web no es suficiente. La calidad del diseño de tu
            sitio web puede ser el factor determinante entre el éxito y el fracaso de tu presencia online. Un buen
            diseño web no solo atrae visualmente a los usuarios, sino que también los guía estratégicamente hacia la
            conversión.
          </p>

          <h3 className="text-2xl font-semibold text-white mt-8 mb-4">
            ¿Qué es la conversión y por qué es importante?
          </h3>

          <p className="text-gray-300 leading-relaxed">
            La conversión se refiere a cuando un visitante de tu sitio web realiza la acción deseada, ya sea completar
            una compra, suscribirse a un boletín, descargar un recurso o contactar con tu empresa. Las tasas de
            conversión son un indicador clave del rendimiento de tu sitio web y, en última instancia, del éxito de tu
            negocio online.
          </p>

          <h3 className="text-2xl font-semibold text-white mt-8 mb-4">
            Elementos de diseño que aumentan las conversiones
          </h3>

          <h4 className="text-xl font-semibold text-white mt-6 mb-3">1. Diseño visual atractivo y profesional</h4>

          <p className="text-gray-300 leading-relaxed">
            El 75% de los usuarios juzgan la credibilidad de una empresa basándose en el diseño de su sitio web. Un
            diseño visual atractivo y profesional genera confianza y anima a los usuarios a permanecer en tu sitio y
            explorar tus ofertas.
          </p>

          <h4 className="text-xl font-semibold text-white mt-6 mb-3">2. Navegación intuitiva</h4>

          <p className="text-gray-300 leading-relaxed">
            Una estructura de navegación clara y lógica permite a los usuarios encontrar fácilmente lo que están
            buscando. Si los usuarios no pueden encontrar rápidamente la información que necesitan, es probable que
            abandonen tu sitio. La regla de los tres clics sugiere que los usuarios deberían poder encontrar cualquier
            información en tu sitio con no más de tres clics.
          </p>

          <h4 className="text-xl font-semibold text-white mt-6 mb-3">3. Llamadas a la acción (CTA) efectivas</h4>

          <p className="text-gray-300 leading-relaxed">
            Las CTA son botones o enlaces que guían a los usuarios hacia la conversión. Para ser efectivas, deben ser
            visibles, usar un lenguaje persuasivo y crear un sentido de urgencia. El color, tamaño y ubicación de tus
            CTA pueden tener un impacto significativo en las tasas de conversión.
          </p>

          <h4 className="text-xl font-semibold text-white mt-6 mb-3">4. Diseño responsivo</h4>

          <p className="text-gray-300 leading-relaxed">
            Con más del 50% del tráfico web proveniente de dispositivos móviles, es esencial que tu sitio web se vea y
            funcione bien en todos los dispositivos. Un diseño responsivo se adapta automáticamente al tamaño de la
            pantalla del dispositivo, proporcionando una experiencia óptima para todos los usuarios.
          </p>

          <h4 className="text-xl font-semibold text-white mt-6 mb-3">5. Velocidad de carga</h4>

          <p className="text-gray-300 leading-relaxed">
            La velocidad de carga es un factor crucial para la experiencia del usuario y las conversiones. Estudios
            muestran que el 40% de los usuarios abandonan un sitio que tarda más de 3 segundos en cargar. Optimizar
            imágenes, minimizar el código y utilizar la caché del navegador son algunas formas de mejorar la velocidad
            de carga.
          </p>

          <h3 className="text-2xl font-semibold text-white mt-8 mb-4">Casos de éxito</h3>

          <p className="text-gray-300 leading-relaxed">
            Numerosas empresas han experimentado aumentos significativos en sus tasas de conversión después de rediseñar
            sus sitios web. Por ejemplo, una empresa de comercio electrónico aumentó sus ventas en un 35% después de
            simplificar su proceso de compra y mejorar la navegación de su sitio.
          </p>

          <h3 className="text-2xl font-semibold text-white mt-8 mb-4">Conclusión</h3>

          <p className="text-gray-300 leading-relaxed">
            Un buen diseño web es una inversión que puede generar un retorno significativo al aumentar las conversiones.
            Al centrarte en crear una experiencia de usuario excepcional a través de un diseño atractivo, una navegación
            intuitiva, CTA efectivas, un diseño responsivo y una carga rápida, puedes transformar tu sitio web en una
            poderosa herramienta de conversión.
          </p>

          <p className="text-gray-300 leading-relaxed">
            En Duality Domain, nos especializamos en crear diseños web que no solo se ven bien, sino que también están
            estratégicamente diseñados para aumentar las conversiones. Contáctanos hoy para descubrir cómo podemos
            ayudarte a mejorar el rendimiento de tu sitio web.
          </p>
        </div>
      )
    }

    if (post.id === "blog-2") {
      return (
        <div className="text-white space-y-6">
          <h2 className="text-3xl font-bold text-white mb-6">
            7 elementos esenciales que toda tienda online debe tener
          </h2>

          <p className="text-gray-300 leading-relaxed">
            En el mundo del comercio electrónico, la competencia es feroz. Para destacar y convertir visitantes en
            clientes, tu tienda online necesita ciertos elementos clave que mejoren la experiencia del usuario y generen
            confianza. Aquí te presentamos los 7 elementos esenciales que toda tienda online exitosa debe tener.
          </p>

          <h3 className="text-2xl font-semibold text-white mt-8 mb-4">1. Diseño limpio y profesional</h3>

          <p className="text-gray-300 leading-relaxed">
            El diseño de tu tienda online es la primera impresión que los visitantes tendrán de tu negocio. Un diseño
            limpio, profesional y coherente con tu marca transmite confianza y credibilidad. Evita el desorden visual,
            utiliza espacios en blanco estratégicamente y asegúrate de que tu paleta de colores y tipografía reflejen la
            identidad de tu marca.
          </p>

          <h3 className="text-2xl font-semibold text-white mt-8 mb-4">2. Navegación intuitiva y búsqueda eficiente</h3>

          <p className="text-gray-300 leading-relaxed">
            Los usuarios deben poder encontrar fácilmente lo que están buscando. Una estructura de categorías clara, un
            menú de navegación intuitivo y un buscador potente son fundamentales. Considera implementar filtros de
            búsqueda avanzados que permitan a los usuarios refinar sus resultados por precio, tamaño, color, etc.
          </p>

          <h3 className="text-2xl font-semibold text-white mt-8 mb-4">3. Fichas de producto detalladas</h3>

          <p className="text-gray-300 leading-relaxed">
            Tus fichas de producto deben proporcionar toda la información que los clientes necesitan para tomar una
            decisión de compra informada. Incluye:
          </p>

          <ul className="list-disc pl-6 text-gray-300 space-y-2">
            <li>Imágenes de alta calidad desde múltiples ángulos</li>
            <li>Descripciones detalladas y beneficios del producto</li>
            <li>Especificaciones técnicas</li>
            <li>Guías de tallas o dimensiones</li>
            <li>Opiniones y valoraciones de otros clientes</li>
            <li>Productos relacionados o complementarios</li>
          </ul>

          <h3 className="text-2xl font-semibold text-white mt-8 mb-4">4. Proceso de compra simplificado</h3>

          <p className="text-gray-300 leading-relaxed">
            Un proceso de compra complicado es una de las principales causas de abandono del carrito. Simplifica el
            proceso tanto como sea posible:
          </p>

          <ul className="list-disc pl-6 text-gray-300 space-y-2">
            <li>Minimiza el número de pasos para completar una compra</li>
            <li>Ofrece la opción de comprar como invitado</li>
            <li>Muestra una barra de progreso para que los usuarios sepan dónde están en el proceso</li>
            <li>Guarda la información del carrito para futuras visitas</li>
            <li>Implementa autorrelleno para formularios</li>
          </ul>

          <h3 className="text-2xl font-semibold text-white mt-8 mb-4">5. Múltiples opciones de pago seguras</h3>

          <p className="text-gray-300 leading-relaxed">
            Ofrecer diversas opciones de pago aumenta la probabilidad de conversión. Incluye métodos de pago populares
            como tarjetas de crédito, PayPal, transferencia bancaria y, si es posible, opciones locales relevantes para
            tu mercado. Asegúrate de que tu sitio cuente con certificados de seguridad visibles (como el candado HTTPS)
            para generar confianza en los compradores.
          </p>

          <h3 className="text-2xl font-semibold text-white mt-8 mb-4">6. Políticas claras y transparentes</h3>

          <p className="text-gray-300 leading-relaxed">
            La transparencia es clave para generar confianza. Asegúrate de que tus políticas de envío, devoluciones,
            privacidad y términos y condiciones sean fácilmente accesibles y estén escritas en un lenguaje claro y
            comprensible. Sé específico sobre los tiempos de entrega, costos de envío y proceso de devolución.
          </p>

          <h3 className="text-2xl font-semibold text-white mt-8 mb-4">7. Atención al cliente accesible</h3>

          <p className="text-gray-300 leading-relaxed">
            Ofrece múltiples canales para que los clientes puedan contactarte fácilmente si tienen preguntas o
            problemas:
          </p>

          <ul className="list-disc pl-6 text-gray-300 space-y-2">
            <li>Chat en vivo</li>
            <li>Formulario de contacto</li>
            <li>Correo electrónico</li>
            <li>Número de teléfono</li>
            <li>FAQ detallado</li>
            <li>Presencia en redes sociales</li>
          </ul>

          <h3 className="text-2xl font-semibold text-white mt-8 mb-4">Conclusión</h3>

          <p className="text-gray-300 leading-relaxed">
            Implementar estos 7 elementos esenciales en tu tienda online no solo mejorará la experiencia del usuario,
            sino que también aumentará la confianza de los compradores y, en última instancia, tus conversiones y
            ventas. Recuerda que una tienda online exitosa está en constante evolución, así que monitorea regularmente
            el comportamiento de tus usuarios y realiza mejoras continuas basadas en sus necesidades y feedback.
          </p>

          <p className="text-gray-300 leading-relaxed">
            En Duality Domain, nos especializamos en crear tiendas online que no solo se ven bien, sino que están
            estratégicamente diseñadas para convertir visitantes en clientes. Contáctanos hoy para descubrir cómo
            podemos ayudarte a mejorar tu presencia en el comercio electrónico.
          </p>
        </div>
      )
    }

    if (post.id === "blog-3") {
      return (
        <div className="text-white space-y-6">
          <h2 className="text-3xl font-bold text-white mb-6">La importancia del SEO en tu estrategia digital</h2>

          <p className="text-gray-300 leading-relaxed">
            En el vasto océano de internet, donde millones de sitios web compiten por la atención de los usuarios, ¿cómo
            aseguras que tu negocio sea visible para aquellos que buscan tus productos o servicios? La respuesta está en
            el SEO (Search Engine Optimization) o Optimización para Motores de Búsqueda.
          </p>

          <h3 className="text-2xl font-semibold text-white mt-8 mb-4">¿Qué es el SEO y por qué es importante?</h3>

          <p className="text-gray-300 leading-relaxed">
            El SEO es el conjunto de técnicas y estrategias que buscan mejorar la visibilidad y el posicionamiento de un
            sitio web en los resultados orgánicos (no pagados) de los motores de búsqueda como Google, Bing o Yahoo. Su
            importancia radica en varios factores clave:
          </p>

          <h4 className="text-xl font-semibold text-white mt-6 mb-3">1. Visibilidad y tráfico cualificado</h4>

          <p className="text-gray-300 leading-relaxed">
            El 93% de las experiencias online comienzan con un motor de búsqueda, y el 75% de los usuarios nunca pasan
            de la primera página de resultados. Un buen posicionamiento SEO te asegura visibilidad ante usuarios que ya
            están buscando activamente lo que ofreces, lo que resulta en tráfico altamente cualificado con mayor
            probabilidad de conversión.
          </p>

          <h4 className="text-xl font-semibold text-white mt-6 mb-3">2. Credibilidad y confianza</h4>

          <p className="text-gray-300 leading-relaxed">
            Los usuarios tienden a confiar más en los sitios web que aparecen en los primeros resultados de búsqueda,
            asociándolos con mayor autoridad y relevancia en su sector. Un buen posicionamiento SEO no solo aumenta tu
            visibilidad, sino también tu credibilidad ante potenciales clientes.
          </p>

          <h4 className="text-xl font-semibold text-white mt-6 mb-3">3. Mejor experiencia de usuario</h4>

          <p className="text-gray-300 leading-relaxed">
            Las prácticas de SEO moderno van de la mano con una mejor experiencia de usuario. Google premia los sitios
            web que ofrecen contenido relevante, navegación intuitiva, tiempos de carga rápidos y diseño responsivo,
            todos elementos que también mejoran la satisfacción del usuario.
          </p>

          <h4 className="text-xl font-semibold text-white mt-6 mb-3">4. Rentabilidad a largo plazo</h4>

          <p className="text-gray-300 leading-relaxed">
            A diferencia de la publicidad pagada, que cesa de generar tráfico cuando dejas de invertir, el SEO ofrece
            resultados sostenibles a largo plazo. Aunque requiere tiempo y esfuerzo inicial, una vez que alcanzas buenas
            posiciones, puedes mantenerlas con un mantenimiento relativamente menor.
          </p>

          <h3 className="text-2xl font-semibold text-white mt-8 mb-4">
            Componentes clave de una estrategia SEO efectiva
          </h3>

          <h4 className="text-xl font-semibold text-white mt-6 mb-3">SEO On-Page</h4>

          <p className="text-gray-300 leading-relaxed">
            Se refiere a las optimizaciones realizadas dentro de tu propio sitio web:
          </p>

          <ul className="list-disc pl-6 text-gray-300 space-y-2">
            <li>Investigación de palabras clave relevantes para tu negocio</li>
            <li>Optimización de títulos, meta descripciones y URLs</li>
            <li>Creación de contenido de calidad que responda a las necesidades de los usuarios</li>
            <li>Estructura de sitio web lógica y fácil de navegar</li>
            <li>Optimización de imágenes y multimedia</li>
            <li>Mejora de la velocidad de carga y rendimiento del sitio</li>
          </ul>

          <h4 className="text-xl font-semibold text-white mt-6 mb-3">SEO Off-Page</h4>

          <p className="text-gray-300 leading-relaxed">
            Incluye acciones realizadas fuera de tu sitio web para mejorar su autoridad y relevancia:
          </p>

          <ul className="list-disc pl-6 text-gray-300 space-y-2">
            <li>Construcción de enlaces (backlinks) de calidad desde sitios web relevantes y autoritarios</li>
            <li>Presencia y actividad en redes sociales</li>
            <li>Marketing de contenidos y guest blogging</li>
            <li>Menciones de marca en medios digitales</li>
          </ul>

          <h3 className="text-2xl font-semibold text-white mt-8 mb-4">Conclusión</h3>

          <p className="text-gray-300 leading-relaxed">
            En un mundo digital cada vez más competitivo, el SEO no es una opción, sino una necesidad para cualquier
            negocio que quiera tener éxito online. Una estrategia SEO bien implementada no solo mejora tu visibilidad en
            los motores de búsqueda, sino que también aumenta la calidad de tu tráfico, mejora la experiencia del
            usuario y, en última instancia, impulsa tus conversiones y ventas.
          </p>

          <p className="text-gray-300 leading-relaxed">
            En Duality Domain, entendemos la importancia del SEO en tu estrategia digital y ofrecemos servicios de
            optimización personalizados para ayudarte a alcanzar y mantener las primeras posiciones en los resultados de
            búsqueda. Contáctanos hoy para descubrir cómo podemos ayudarte a mejorar tu visibilidad online y atraer más
            clientes potenciales a tu negocio.
          </p>
        </div>
      )
    }

    return <div className="text-white">Contenido no disponible</div>
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
              {renderContent()}
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

// Esta función es necesaria para las rutas dinámicas en Next.js
export async function getStaticPaths() {
  const paths = insights.map((post) => ({
    params: { id: post.id },
  }))

  return {
    paths,
    fallback: false,
  }
}

// Esta función es necesaria para obtener los datos en tiempo de construcción
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
