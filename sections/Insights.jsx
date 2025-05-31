"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import styles from "../styles"
import { staggerContainer } from "../utils/motion"
import { TypingText, TitleText, InsightCard } from "../components"
import { insights } from "../constants"

const Insights = () => {
  return (
    <section className={`${styles.paddings} relative z-10`}>
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.25 }}
        className={`${styles.innerWidth} mx-auto flex flex-col`}
      >
        <TypingText title="| Recursos y Conocimiento" textStyles="text-center" />
        <TitleText title={<>Artículos sobre desarrollo web y tecnología</>} textStyles="text-center" />

        <div className="mt-[50px] flex flex-col gap-[30px]">
          {insights.map((insight, index) => (
            <Link key={`insight-${index}`} href={`/articulos/${insight.id}`}>
              <InsightCard {...insight} index={index + 1} />
            </Link>
          ))}
        </div>

        <div className="mt-[50px] text-center">
          <p className="text-secondary-white text-[18px] max-w-2xl mx-auto mb-6">
            Estos artículos representan nuestro conocimiento y experiencia en desarrollo web. Haz clic en cualquier
            artículo para leerlo completo.
          </p>
          <Link
            href="/articulos"
            className="inline-block bg-[#25618B] text-white py-3 px-6 rounded-lg hover:bg-[#1a4a6e] transition-colors font-semibold"
          >
            Ver todos los artículos
          </Link>
        </div>
      </motion.div>
    </section>
  )
}

export default Insights
