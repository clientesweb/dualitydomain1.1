"use client"

import { motion } from "framer-motion"
import styles from "../styles"
import { staggerContainer } from "../utils/motion"
import { TypingText, TitleText } from "../components"
import { testimonials } from "../constants"
import TestimonialCard from "../components/TestimonialCard"

const Testimonials = () => (
  <section className={`${styles.paddings} relative z-10`} id="testimonials">
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className={`${styles.innerWidth} mx-auto flex flex-col`}
    >
      <TypingText title="| Testimonios" textStyles="text-center" />
      <TitleText title={<>Lo que dicen nuestros clientes</>} textStyles="text-center" />

      <div className="mt-[50px] flex flex-wrap justify-center gap-[30px]">
        {testimonials.map((testimonial, index) => (
          <TestimonialCard key={`testimonial-${index}`} index={index} {...testimonial} />
        ))}
      </div>
    </motion.div>
  </section>
)

export default Testimonials
