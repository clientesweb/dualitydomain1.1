"use client"

import { useState, useEffect, useRef } from "react"
import Image from "next/image"
import { motion } from "framer-motion"
import styles from "../styles"
import { fadeIn, staggerContainer, zoomIn } from "../utils/motion"
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
              <div key={`testimonial-${index}`} className="w-full flex-shrink-0 px-4">
                <motion.div
                  variants={fadeIn("up", "tween", 0.2, 1)}
                  className="bg-[rgba(0,0,0,0.3)] p-8 rounded-[32px] border-[1px] border-[#6a6a6a] relative"
                >
                  <div className="feedback-gradient" />

                  <div className="flex flex-col md:flex-row gap-8 items-start">
                    <div className="flex-1">
                      <p className="text-white text-[24px] leading-[45.6px] italic">"{testimonial.content}"</p>
                      <div className="mt-8">
                        <h4 className="font-bold text-[26px] text-white">{testimonial.name}</h4>
                        <p className="mt-[8px] font-normal text-[16px] text-secondary-white">{testimonial.title}</p>
                      </div>
                    </div>
                    <motion.div variants={zoomIn(0.4, 1)} className="md:block hidden">
                      <div className="w-[155px] h-[155px] rounded-full border-[6px] border-white overflow-hidden">
                        <Image
                          src={testimonial.image || "/placeholder.svg"}
                          alt={testimonial.name}
                          width={155}
                          height={155}
                          className="w-full h-full object-cover"
                        />
                      </div>
                    </motion.div>
                  </div>
                </motion.div>
              </div>
            ))}
          </div>

          <div className="absolute top-1/2 left-4 transform -translate-y-1/2 z-10">
            <button
              onClick={prevSlide}
              className="bg-[#25618B] text-white w-10 h-10 rounded-full flex items-center justify-center hover:bg-[#1a4a6e] transition-colors"
              aria-label="Previous testimonial"
            >
              <span className="sr-only">Previous</span>
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

          <div className="absolute top-1/2 right-4 transform -translate-y-1/2 z-10">
            <button
              onClick={nextSlide}
              className="bg-[#25618B] text-white w-10 h-10 rounded-full flex items-center justify-center hover:bg-[#1a4a6e] transition-colors"
              aria-label="Next testimonial"
            >
              <span className="sr-only">Next</span>
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

          <div className="flex justify-center mt-8">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => handleDotClick(index)}
                className={`w-3 h-3 mx-1 rounded-full ${
                  currentIndex === index ? "bg-[#25618B]" : "bg-gray-400 bg-opacity-50"
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  )
}

export default Feedback
