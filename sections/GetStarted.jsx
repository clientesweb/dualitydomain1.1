"use client"

import Image from "next/image"
import { motion } from "framer-motion"
import styles from "../styles"
import { fadeIn, staggerContainer, planetVariants } from "../utils/motion"
import { TypingText, TitleText, StartSteps } from "../components"
import getStarted from "../public/get-started.png"

const GetStarted = () => (
  <section className={`${styles.paddings} relative z-10`}>
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className={`${styles.innerWidth} mx-auto w-full flex lg:flex-row flex-col gap-8`}
    >
      <motion.div variants={planetVariants("left")} className={`flex-1 ${styles.flexCenter}`}>
        <Image
          src={getStarted || "/placeholder.svg"}
          alt="get-started"
          placeholder="blur"
          className="w-[90%] h-[90%] object-contain"
        />
      </motion.div>

      <motion.div variants={fadeIn("left", "tween", 0.2, 1)} className="flex-[0.75] flex justify-center flex-col">
        <TypingText title="| Nuestro Proceso" />
        <TitleText title={<>Comienza tu proyecto en simples pasos</>} />
        <div className="mt-[31px] flex flex-col max-w-[370px] gap-[24px]">
          <StartSteps number={1} text="Contáctanos y cuéntanos sobre tu proyecto y objetivos" />
          <StartSteps number={2} text="Recibe una propuesta personalizada adaptada a tus necesidades" />
          <StartSteps number={3} text="Trabajamos juntos para crear la solución digital perfecta para tu negocio" />
        </div>
      </motion.div>
    </motion.div>
  </section>
)

export default GetStarted
