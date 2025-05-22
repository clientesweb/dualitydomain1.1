"use client"

import { useState } from "react"
import { Navbar, Footer } from "../components"
import Head from "next/head"
import styles from "../styles"
import { motion } from "framer-motion"
import { fadeIn, staggerContainer } from "../utils/motion"
import Image from "next/image"

const SolicitarDemo = () => {
  const [formData, setFormData] = useState({
    nombre: "",
    email: "",
    telefono: "",
    tipoProyecto: "",
    descripcionProyecto: "",
    presupuesto: "",
  })

  const [errors, setErrors] = useState({})
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
    // Limpiar error cuando el usuario empiece a escribir
    if (errors[name]) {
      setErrors((prev) => ({
        ...prev,
        [name]: "",
      }))
    }
  }

  const validateForm = () => {
    const newErrors = {}

    if (!formData.nombre.trim()) newErrors.nombre = "El nombre es requerido"
    if (!formData.email.trim()) {
      newErrors.email = "El email es requerido"
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "El email no es válido"
    }
    if (!formData.telefono.trim()) newErrors.telefono = "El teléfono es requerido"
    if (!formData.tipoProyecto) newErrors.tipoProyecto = "Selecciona el tipo de proyecto"
    if (!formData.descripcionProyecto.trim()) newErrors.descripcionProyecto = "La descripción del proyecto es requerida"

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = async (e) => {
    e.preventDefault()

    if (!validateForm()) {
      return
    }

    setIsSubmitting(true)

    // Crear mensaje para WhatsApp
    const mensaje = `🚀 *NUEVA SOLICITUD DE DEMO - DUALITY DOMAIN*

👤 *DATOS PERSONALES:*
• Nombre: ${formData.nombre}
• Email: ${formData.email}
• Teléfono: ${formData.telefono}

💼 *INFORMACIÓN DEL PROYECTO:*
• Tipo de proyecto: ${formData.tipoProyecto}
• Descripción: ${formData.descripcionProyecto}
${formData.presupuesto ? `• Presupuesto estimado: ${formData.presupuesto}` : ""}

---
Enviado desde: dualitydomain.com/solicitar-demo`

    // Codificar el mensaje para URL
    const mensajeCodificado = encodeURIComponent(mensaje)
    const numeroWhatsApp = "5493546501537" // Tu número sin espacios ni símbolos
    const urlWhatsApp = `https://wa.me/${numeroWhatsApp}?text=${mensajeCodificado}`

    // Abrir WhatsApp
    window.open(urlWhatsApp, "_blank")

    // Resetear formulario después de un breve delay
    setTimeout(() => {
      setFormData({
        nombre: "",
        email: "",
        telefono: "",
        tipoProyecto: "",
        descripcionProyecto: "",
        presupuesto: "",
      })
      setIsSubmitting(false)
    }, 1000)
  }

  return (
    <>
      <Head>
        <title>Solicitar Demo | Duality Domain - Desarrollo Web Profesional</title>
        <meta
          name="description"
          content="Solicita una demo personalizada de nuestros servicios de desarrollo web. Cuéntanos sobre tu proyecto y recibe una propuesta adaptada a tus necesidades."
        />
      </Head>

      <div className="bg-primary-black overflow-hidden">
        <Navbar />

        <section className={`${styles.paddings} relative z-10`}>
          <div className="absolute w-[50%] inset-0 gradient-01" />

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="show"
            viewport={{ once: false, amount: 0.25 }}
            className={`${styles.innerWidth} mx-auto flex flex-col`}
          >
            <div className="text-center mb-12">
              <motion.h1
                variants={fadeIn("up", "tween", 0.2, 1)}
                className="font-bold text-white text-[32px] md:text-[48px] lg:text-[64px] leading-tight"
              >
                Solicitar Demo
              </motion.h1>
              <motion.p
                variants={fadeIn("up", "tween", 0.3, 1)}
                className="mt-4 text-secondary-white text-[16px] md:text-[18px] max-w-3xl mx-auto"
              >
                Cuéntanos sobre tu proyecto y recibe una propuesta personalizada. Nuestro equipo te contactará para
                agendar una demo adaptada a tus necesidades específicas.
              </motion.p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <motion.div variants={fadeIn("right", "tween", 0.4, 1)} className="relative h-full hidden md:block">
                <div className="absolute inset-0 bg-[#323f5d] rounded-[24px] opacity-50" />
                <div className="relative h-full flex flex-col justify-center items-center p-8 z-10">
                  <Image
                    src="/get-started.png"
                    alt="Solicitar Demo"
                    width={400}
                    height={400}
                    className="w-full max-w-[400px] object-contain mb-8"
                  />
                  <div className="bg-[rgba(0,0,0,0.3)] p-6 rounded-[20px] w-full">
                    <h3 className="text-white font-bold text-[20px] mb-4">¿Qué sucede después?</h3>
                    <ul className="space-y-4">
                      <li className="flex items-start gap-3">
                        <div className="bg-[#25618B] w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                          <span className="text-white font-bold">1</span>
                        </div>
                        <p className="text-secondary-white">
                          Revisamos tu solicitud y analizamos los requerimientos de tu proyecto.
                        </p>
                      </li>
                      <li className="flex items-start gap-3">
                        <div className="bg-[#25618B] w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                          <span className="text-white font-bold">2</span>
                        </div>
                        <p className="text-secondary-white">
                          Te contactamos en 24 horas para agendar una reunión y conocer más detalles.
                        </p>
                      </li>
                      <li className="flex items-start gap-3">
                        <div className="bg-[#25618B] w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                          <span className="text-white font-bold">3</span>
                        </div>
                        <p className="text-secondary-white">
                          Preparamos una propuesta detallada con tiempos, costos y plan de trabajo.
                        </p>
                      </li>
                    </ul>
                  </div>
                </div>
              </motion.div>

              <motion.div
                variants={fadeIn("left", "tween", 0.4, 1)}
                className="glassmorphism p-6 md:p-8 rounded-[24px]"
              >
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label htmlFor="nombre" className="block text-white text-sm font-medium mb-2">
                      Nombre completo *
                    </label>
                    <input
                      type="text"
                      id="nombre"
                      name="nombre"
                      value={formData.nombre}
                      onChange={handleChange}
                      className={`w-full bg-[rgba(255,255,255,0.1)] text-white px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#25618B] ${
                        errors.nombre ? "border-2 border-red-500" : ""
                      }`}
                      placeholder="Tu nombre completo"
                    />
                    {errors.nombre && <p className="text-red-400 text-sm mt-1">{errors.nombre}</p>}
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-white text-sm font-medium mb-2">
                      Email *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className={`w-full bg-[rgba(255,255,255,0.1)] text-white px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#25618B] ${
                        errors.email ? "border-2 border-red-500" : ""
                      }`}
                      placeholder="tu@email.com"
                    />
                    {errors.email && <p className="text-red-400 text-sm mt-1">{errors.email}</p>}
                  </div>

                  <div>
                    <label htmlFor="telefono" className="block text-white text-sm font-medium mb-2">
                      Teléfono *
                    </label>
                    <input
                      type="tel"
                      id="telefono"
                      name="telefono"
                      value={formData.telefono}
                      onChange={handleChange}
                      className={`w-full bg-[rgba(255,255,255,0.1)] text-white px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#25618B] ${
                        errors.telefono ? "border-2 border-red-500" : ""
                      }`}
                      placeholder="+54 9 11 1234-5678"
                    />
                    {errors.telefono && <p className="text-red-400 text-sm mt-1">{errors.telefono}</p>}
                  </div>

                  <div>
                    <label htmlFor="tipoProyecto" className="block text-white text-sm font-medium mb-2">
                      Tipo de Proyecto *
                    </label>
                    <select
                      id="tipoProyecto"
                      name="tipoProyecto"
                      value={formData.tipoProyecto}
                      onChange={handleChange}
                      className={`w-full bg-[rgba(255,255,255,0.1)] text-white px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#25618B] ${
                        errors.tipoProyecto ? "border-2 border-red-500" : ""
                      }`}
                    >
                      <option value="">Selecciona el tipo de proyecto</option>
                      <option value="Sitio web corporativo">Sitio web corporativo</option>
                      <option value="E-commerce">E-commerce / Tienda online</option>
                      <option value="Aplicación web">Aplicación web</option>
                      <option value="Landing page">Landing page</option>
                      <option value="Blog/Portal de noticias">Blog/Portal de noticias</option>
                      <option value="Rediseño de sitio existente">Rediseño de sitio existente</option>
                      <option value="Optimización SEO">Optimización SEO</option>
                      <option value="Otro">Otro</option>
                    </select>
                    {errors.tipoProyecto && <p className="text-red-400 text-sm mt-1">{errors.tipoProyecto}</p>}
                  </div>

                  <div>
                    <label htmlFor="descripcionProyecto" className="block text-white text-sm font-medium mb-2">
                      Descripción del Proyecto *
                    </label>
                    <textarea
                      id="descripcionProyecto"
                      name="descripcionProyecto"
                      value={formData.descripcionProyecto}
                      onChange={handleChange}
                      rows={4}
                      className={`w-full bg-[rgba(255,255,255,0.1)] text-white px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#25618B] ${
                        errors.descripcionProyecto ? "border-2 border-red-500" : ""
                      }`}
                      placeholder="Describe tu proyecto, qué necesitas, objetivos principales, etc."
                    />
                    {errors.descripcionProyecto && (
                      <p className="text-red-400 text-sm mt-1">{errors.descripcionProyecto}</p>
                    )}
                  </div>

                  <div>
                    <label htmlFor="presupuesto" className="block text-white text-sm font-medium mb-2">
                      Presupuesto Estimado (ARS)
                    </label>
                    <select
                      id="presupuesto"
                      name="presupuesto"
                      value={formData.presupuesto}
                      onChange={handleChange}
                      className="w-full bg-[rgba(255,255,255,0.1)] text-white px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#25618B]"
                    >
                      <option value="">Selecciona tu presupuesto</option>
                      <option value="$50.000 - $100.000">$50.000 - $100.000</option>
                      <option value="$100.000 - $200.000">$100.000 - $200.000</option>
                      <option value="$200.000 - $500.000">$200.000 - $500.000</option>
                      <option value="$500.000 - $1.000.000">$500.000 - $1.000.000</option>
                      <option value="Más de $1.000.000">Más de $1.000.000</option>
                      <option value="A definir">A definir</option>
                    </select>
                  </div>

                  <div className="pt-4">
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className={`w-full bg-[#25618B] text-white py-4 px-8 rounded-[32px] font-semibold text-lg hover:bg-[#1a4a6e] transition-colors ${
                        isSubmitting ? "opacity-50 cursor-not-allowed" : ""
                      }`}
                    >
                      {isSubmitting ? "Enviando..." : "Enviar Solicitud por WhatsApp"}
                    </button>
                    <p className="text-secondary-white text-sm mt-3 text-center">
                      Al enviar este formulario, serás redirigido a WhatsApp para completar tu solicitud.
                    </p>
                  </div>
                </form>
              </motion.div>
            </div>

            {/* Información adicional para móviles */}
            <motion.div
              variants={fadeIn("up", "tween", 0.5, 1)}
              className="mt-12 bg-[rgba(0,0,0,0.2)] p-6 rounded-[20px] text-center md:hidden"
            >
              <h3 className="text-white font-bold text-[20px] mb-4">¿Qué sucede después?</h3>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="bg-[#25618B] w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-white font-bold">1</span>
                  </div>
                  <p className="text-secondary-white text-left">
                    Revisamos tu solicitud y analizamos los requerimientos de tu proyecto.
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="bg-[#25618B] w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-white font-bold">2</span>
                  </div>
                  <p className="text-secondary-white text-left">
                    Te contactamos en 24 horas para agendar una reunión y conocer más detalles.
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="bg-[#25618B] w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-white font-bold">3</span>
                  </div>
                  <p className="text-secondary-white text-left">
                    Preparamos una propuesta detallada con tiempos, costos y plan de trabajo.
                  </p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </section>

        <Footer />
      </div>
    </>
  )
}

export default SolicitarDemo
