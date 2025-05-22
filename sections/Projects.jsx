"use client"

import { motion } from "framer-motion"
import styles from "../styles"
import { staggerContainer } from "../utils/motion"
import { TypingText, TitleText } from "../components"
import { projects } from "../constants"
import ProjectCard from "../components/ProjectCard"

const Projects = () => (
  <section className={`${styles.paddings} relative z-10`} id="projects">
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className={`${styles.innerWidth} mx-auto flex flex-col`}
    >
      <TypingText title="| Nuestros Proyectos" textStyles="text-center" />
      <TitleText title={<>Trabajos destacados</>} textStyles="text-center" />

      <div className="mt-[50px] flex flex-wrap justify-center gap-[30px]">
        {projects.map((project, index) => (
          <ProjectCard key={`project-${index}`} index={index} {...project} />
        ))}
      </div>
    </motion.div>
  </section>
)

export default Projects
