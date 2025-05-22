"use client"
import { motion } from "framer-motion"
import { TypingText } from "../components"
import styles from "../styles"
import { fadeIn, staggerContainer } from "../utils/motion"

const About = () => (
  <section className={`${styles.paddings} relative z-10`} id="about">
    <div className="gradient-02 z-0" />
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className={`${styles.innerWidth} mx-auto ${styles.flexCenter} flex-col`}
    >
      <TypingText title="| Sobre Nosotros" textStyles="text-center" />

      <motion.p
        variants={fadeIn("up", "tween", 0.2, 1)}
        className="mt-[10px] font-normal sm:text-[32px] text-[20px] text-center text-secondary-white "
      >
        <span className="font-extrabold text-white">Duality Domain</span> es una empresa de desarrollo web profesional
        ubicada en
        <span className="font-extrabold text-white"> Villa del Dique, Córdoba, Argentina</span>. Con presencia en LATAM.
        Se especializa en ofrecer
        <span className="font-extrabold text-white"> soluciones digitales personalizadas </span>
        que combinan creatividad y excelencia técnica para
        <span className="font-extrabold text-white"> impulsar el crecimiento de los negocios</span>.
      </motion.p>

      <motion.img
        variants={fadeIn("up", "tween", 0.3, 1)}
        src="/arrow-down.svg"
        alt="arrow-down"
        className="w-[18px] h-[28px] object-contain mt-[28px] "
      />
    </motion.div>
  </section>
)

export default About
