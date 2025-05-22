"use client"

import { useState } from "react"
import { Navbar, Footer } from "../components"
import Head from "next/head"
import styles from "../styles"
import { motion } from "framer-motion"
import { fadeIn, staggerContainer } from "../utils/motion"

const SolicitarDemo = () => {
  const [formData, setFormData] = useState({
    nombre: "",
    apellido: "",
    email: "",
    telefono: "",
    empresa: "",
    cargo: "",
    tipoProyecto: "",
    descripcionProyecto: "",
    presupuesto: "",
    tiempoEstimado: "",
    sitioWebActual: "",
    objetivos: "",
    funcionalidadesEspeciales: "",
    comentarios: "",
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
    if (!formData.apellido.trim()) newErrors.apellido = "El apellido es requerido"
    if (!formData.email.trim()) {
      newErrors.email = "El email es requerido"
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "El email no es válido"
    }
    if (!formData.telefono.trim()) newErrors.telefono = "El teléfono es requerido"
    if (!formData.tipoProyecto) newErrors.tipoProyecto = "Selecciona el tipo de proyecto"
    if (!formData.descripcionProyecto.trim()) newErrors.descripcionProyecto = "La descripción del proyecto es requerida"
    if (!formData.presupuesto) newErrors.presupuesto = "Selecciona un rango de presupuesto"

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
• Nombre: ${formData.nombre} ${formData.apellido}
• Email: ${formData.email}
• Teléfono: ${formData.telefono}
• Empresa: ${formData.empresa || "No especificada"}
• Cargo: ${formData.cargo || "No especificado"}

💼 *INFORMACIÓN DEL PROYECTO:*
• Tipo de proyecto: ${formData.tipoProyecto}
• Descripción: ${formData.descripcionProyecto}
• Presupuesto estimado: ${formData.presupuesto}
• Tiempo estimado: ${formData.tiempoEstimado || "No especificado"}
• Sitio web actual: ${formData.sitioWebActual || "No tiene"}

🎯 *OBJETIVOS Y REQUERIMIENTOS:*
• Objetivos principales: ${formData.objetivos || "No especificados"}
• Funcionalidades especiales: ${formData.funcionalidadesEspeciales || "Ninguna"}

💬 *COMENTARIOS ADICIONALES:*
${formData.comentarios || "Ninguno"}

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
        apellido: "",
        email: "",
        telefono: "",
        empresa: "",
        cargo: "",
        tipoProyecto: "",
        descripcionProyecto: "",
        presupuesto: "",
        tiempoEstimado: "",
        sitioWebActual: "",
        objetivos: "",
        funcionalidadesEspeciales: "",
        comentarios: "",
      })
      setIsSubmitting(false)
      alert("¡Gracias! Tu solicitud ha sido enviada. Te contactaremos pronto.")
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

            <motion.div
              variants={fadeIn("up", "tween", 0.4, 1)}
              className="bg-[rgba(0,0,0,0.3)] p-6 md:p-8 rounded-[20px] border-[1px] border-[#6a6a6a]"
            >
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Datos Personales */}
                <div>
                  <h3 className="text-white font-bold text-[20px] md:text-[24px] mb-4">Datos Personales</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="nombre" className="block text-white text-sm font-medium mb-2">
                        Nombre *
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
                        placeholder="Tu nombre"
                      />
                      {errors.nombre && <p className="text-red-400 text-sm mt-1">{errors.nombre}</p>}
                    </div>
                    <div>
                      <label htmlFor="apellido" className="block text-white text-sm font-medium mb-2">
                        Apellido *
                      </label>
                      <input
                        type="text"
                        id="apellido"
                        name="apellido"
                        value={formData.apellido}
                        onChange={handleChange}
                        className={`w-full bg-[rgba(255,255,255,0.1)] text-white px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#25618B] ${
                          errors.apellido ? "border-2 border-red-500" : ""
                        }`}
                        placeholder="Tu apellido"
                      />
                      {errors.apellido && <p className="text-red-400 text-sm mt-1">{errors.apellido}</p>}
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
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
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                    <div>
                      <label htmlFor="empresa" className="block text-white text-sm font-medium mb-2">
                        Empresa
                      </label>
                      <input
                        type="text"
                        id="empresa"
                        name="empresa"
                        value={formData.empresa}
                        onChange={handleChange}
                        className="w-full bg-[rgba(255,255,255,0.1)] text-white px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#25618B]"
                        placeholder="Nombre de tu empresa"
                      />
                    </div>
                    <div>
                      <label htmlFor="cargo" className="block text-white text-sm font-medium mb-2">
                        Cargo
                      </label>
                      <input
                        type="text"
                        id="cargo"
                        name="cargo"
                        value={formData.cargo}
                        onChange={handleChange}
                        className="w-full bg-[rgba(255,255,255,0.1)] text-white px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#25618B]"
                        placeholder="Tu cargo en la empresa"
                      />
                    </div>
                  </div>
                </div>

                {/* Información del Proyecto */}
                <div>
                  <h3 className="text-white font-bold text-[20px] md:text-[24px] mb-4">Información del Proyecto</h3>
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

                  <div className="mt-4">
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

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                    <div>
                      <label htmlFor="presupuesto" className="block text-white text-sm font-medium mb-2">
                        Presupuesto Estimado (ARS) *
                      </label>
                      <select
                        id="presupuesto"
                        name="presupuesto"
                        value={formData.presupuesto}
                        onChange={handleChange}
                        className={`w-full bg-[rgba(255,255,255,0.1)] text-white px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#25618B] ${
                          errors.presupuesto ? "border-2 border-red-500" : ""
                        }`}
                      >
                        <option value="">Selecciona tu presupuesto</option>
                        <option value="$50.000 - $100.000">$50.000 - $100.000</option>
                        <option value="$100.000 - $200.000">$100.000 - $200.000</option>
                        <option value="$200.000 - $500.000">$200.000 - $500.000</option>
                        <option value="$500.000 - $1.000.000">$500.000 - $1.000.000</option>
                        <option value="Más de $1.000.000">Más de $1.000.000</option>
                        <option value="A definir">A definir</option>
                      </select>
                      {errors.presupuesto && <p className="text-red-400 text-sm mt-1">{errors.presupuesto}</p>}
                    </div>
                    <div>
                      <label htmlFor="tiempoEstimado" className="block text-white text-sm font-medium mb-2">
                        Tiempo Estimado
                      </label>
                      <select
                        id="tiempoEstimado"
                        name="tiempoEstimado"
                        value={formData.tiempoEstimado}
                        onChange={handleChange}
                        className="w-full bg-[rgba(255,255,255,0.1)] text-white px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#25618B]"
                      >
                        <option value="">Selecciona el tiempo</option>
                        <option value="Lo antes posible">Lo antes posible</option>
                        <option value="1-2 semanas">1-2 semanas</option>
                        <option value="1 mes">1 mes</option>
                        <option value="2-3 meses">2-3 meses</option>
                        <option value="Más de 3 meses">Más de 3 meses</option>
                        <option value="Flexible">Flexible</option>
                      </select>
                    </div>
                  </div>

                  <div className="mt-4">
                    <label htmlFor="sitioWebActual" className="block text-white text-sm font-medium mb-2">
                      Sitio Web Actual (si tienes)
                    </label>
                    <input
                      type="url"
                      id="sitioWebActual"
                      name="sitioWebActual"
                      value={formData.sitioWebActual}
                      onChange={handleChange}
                      className="w-full bg-[rgba(255,255,255,0.1)] text-white px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#25618B]"
                      placeholder="https://tusitio.com"
                    />
                  </div>
                </div>

                {/* Objetivos y Requerimientos */}
                <div>
                  <h3 className="text-white font-bold text-[20px] md:text-[24px] mb-4">Objetivos y Requerimientos</h3>
                  <div>
                    <label htmlFor="objetivos" className="block text-white text-sm font-medium mb-2">
                      Objetivos Principales
                    </label>
                    <textarea
                      id="objetivos"
                      name="objetivos"
                      value={formData.objetivos}
                      onChange={handleChange}
                      rows={3}
                      className="w-full bg-[rgba(255,255,255,0.1)] text-white px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#25618B]"
                      placeholder="¿Qué esperas lograr con este proyecto? (aumentar ventas, mejorar presencia online, etc.)"
                    />
                  </div>

                  <div className="mt-4">
                    <label htmlFor="funcionalidadesEspeciales" className="block text-white text-sm font-medium mb-2">
                      Funcionalidades Especiales
                    </label>
                    <textarea
                      id="funcionalidadesEspeciales"
                      name="funcionalidadesEspeciales"
                      value={formData.funcionalidadesEspeciales}
                      onChange={handleChange}
                      rows={3}
                      className="w-full bg-[rgba(255,255,255,0.1)] text-white px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#25618B]"
                      placeholder="¿Necesitas alguna funcionalidad específica? (sistema de reservas, chat en vivo, integración con APIs, etc.)"
                    />
                  </div>
                </div>

                {/* Comentarios Adicionales */}
                <div>
                  <label htmlFor="comentarios" className="block text-white text-sm font-medium mb-2">
                    Comentarios Adicionales
                  </label>
                  <textarea
                    id="comentarios"
                    name="comentarios"
                    value={formData.comentarios}
                    onChange={handleChange}
                    rows={3}
                    className="w-full bg-[rgba(255,255,255,0.1)] text-white px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#25618B]"
                    placeholder="¿Hay algo