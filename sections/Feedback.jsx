"use client"

import { useState, useEffect, useRef } from "react"
import Image from "next/image"
import { motion } from "framer-motion"
import styles from "../styles"
import { fadeIn, staggerContainer } from "../utils/motion"
import { testimonials } from "../constants"

const Feedback = () => {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [autoplay, setAutoplay] = useState(true)
  const autoplayRef = useRef(null)

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length)
  }

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length)
  }

  const handleDotClick = (index) => {
    setCurrentIndex(index)
    setAutoplay(false)
    setTimeout(() => setAutoplay(true), 5000)
  }

  useEffect(() => {
    if (autoplay) {
      autoplayRef.current = setInterval(() => {
        nextSlide()
      }, 5000)
    }

    return () => {
      if (autoplayRef.current) {
        clearInterval(autoplayRef.current)
      }
    }
  }, [autoplay, currentIndex])

  return (
    <section className={`${styles.paddings} relative z-10`} id="testimonials">
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.25 }}
        className={`${styles.innerWidth} mx-auto flex flex-col`}
      >
        <div className="flex flex-col items-center mb-12">
          <div className="text-center">
            <h4 className="text-[#25618B] font-medium text-[16px] uppercase tracking-wider mb-2">| Testimonios</h4>
            <h2 className="font-bold text-white text-[32px] md:text-[48px] leading-tight">
              Lo que dicen nuestros clientes
            </h2>
          </div>
        </div>

        <div className="relative w-full overflow-hidden">
          <div
            className="flex transition-transform duration-500 ease-in-out"
            style={{ transform: `translateX(-${currentIndex * 100}%)` }}
          >
            {testimonials.map((testimonial, index) => (
              <div key={`testimonial-${index}`} className="w-full flex-shrink-0 px-2 md:px-4">
                <motion.div
                  variants={fadeIn("up", "tween", 0.2, 1)}
                  className="bg-[rgba(0,0,0,0.3)] p-4 md:p-8 rounded-[20px] md:rounded-[32px] border-[1px] border-[#6a6a6a] relative min-h-[300px] md:min-h-[400px]"
                >
                  <div className="feedback-gradient" />

                  <div className="flex flex-col gap-4 md:gap-8 items-start h-full">
                    {/* Contenido del testimonio */}
                    <div className="flex-1">
                      <p className="text-white text-[16px] md:text-[20px] lg:text-[24px] leading-[24px] md:leading-[35px] lg:leading-[45.6px] italic">
                        "{testimonial.content}"
                      </p>
                    </div>

                    {/* Información del cliente */}
                    <div className="flex items-center gap-4 w-full">
                      <div className="w-12 h-12 md:w-16 md:h-16 rounded-full border-[3px] border-white overflow-hidden flex-shrink-0">
                        <Image
                          src={testimonial.image || "/placeholder.svg"}
                          alt={testimonial.name}
                          width={64}
                          height={64}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div className="flex-1">
                        <h4 className="font-bold text-[18px] md:text-[22px] lg:text-[26px] text-white">
                          {testimonial.name}
                        </h4>
                        <p className="mt-1 font-normal text-[14px] md:text-[16px] text-secondary-white">
                          {testimonial.title}
                        </p>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </div>
            ))}
          </div>

          {/* Controles de navegación - Solo en desktop */}
          <div className="hidden md:block absolute top-1/2 left-4 transform -translate-y-1/2 z-10">
            <button
              onClick={prevSlide}
              className="bg-[#25618B] text-white w-12 h-12 rounded-full flex items-center justify-center hover:bg-[#1a4a6e] transition-colors shadow-lg"
              aria-label="Previous testimonial"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
          </div>

          <div className="hidden md:block absolute top-1/2 right-4 transform -translate-y-1/2 z-10">
            <button
              onClick={nextSlide}
              className="bg-[#25618B] text-white w-12 h-12 rounded-full flex items-center justify-center hover:bg-[#1a4a6e] transition-colors shadow-lg"
              aria-label="Next testimonial"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>

          {/* Indicadores de puntos */}
          <div className="flex justify-center mt-6 md:mt-8">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => handleDotClick(index)}
                className={`w-3 h-3 mx-1 rounded-full transition-colors ${
                  currentIndex === index ? "bg-[#25618B]" : "bg-gray-400 bg-opacity-50"
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>

          {/* Controles táctiles para móvil */}
          <div className="flex md:hidden justify-center gap-4 mt-6">
            <button
              onClick={prevSlide}
              className="bg-[#25618B] text-white w-10 h-10 rounded-full flex items-center justify-center hover:bg-[#1a4a6e] transition-colors"
              aria-label="Previous testimonial"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <button
              onClick={nextSlide}
              className="bg-[#25618B] text-white w-10 h-10 rounded-full flex items-center justify-center hover:bg-[#1a4a6e] transition-colors"
              aria-label="Next testimonial"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </div>
      </motion.div>
    </section>
  )
}

export default Feedback
