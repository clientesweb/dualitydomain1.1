"use client"

import { motion } from "framer-motion"
import styles from "../styles"
import { staggerContainer } from "../utils/motion"
import { TypingText, TitleText, InsightCard } from "../components"
import { insights } from "../constants"

const Insights = () => (
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
          <InsightCard key={`insight-${index}`} {...insight} index={index + 1} />
        ))}
      </div>

      <div className="mt-[50px] text-center">
        <p className="text-secondary-white text-[18px] max-w-2xl mx-auto">
          Estos artículos representan nuestro conocimiento y experiencia en desarrollo web. Si tienes preguntas
          específicas sobre alguno de estos temas, no dudes en contactarnos.
        </p>
      </div>
    </motion.div>
  </section>
)

export default Insights
