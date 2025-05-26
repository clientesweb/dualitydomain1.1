"use client"

import { motion } from "framer-motion"
import styles from "../styles"
import { staggerContainer, fadeIn } from "../utils/motion"
import { TypingText, TitleText } from "../components"
import { projects } from "../constants"
import ProjectCard from "../components/ProjectCard"
import Link from "next/link"

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
      <TitleText title={<>Trabajos destacados que transforman negocios</>} textStyles="text-center" />

      <div className="mt-[50px] flex flex-wrap justify-center gap-[30px]">
        {projects.map((project, index) => (
          <ProjectCard key={`project-${index}`} index={index} {...project} />
        ))}
      </div>

      {/* Call to Action para ver más trabajos en Instagram */}
      <motion.div variants={fadeIn("up", "tween", 0.3, 1)} className="flex flex-col items-center mt-[60px] text-center">
        <h3 className="text-white font-bold text-[24px] md:text-[32px] mb-4">¿Quieres ver más de nuestros trabajos?</h3>
        <p className="text-secondary-white text-[16px] md:text-[18px] mb-8 max-w-2xl">
          Síguenos en Instagram para ver más proyectos, casos de éxito y el proceso creativo detrás de cada desarrollo.
        </p>

        <Link
          href="https://www.instagram.com/dualitydomain?igsh=MXFjZXJsbmZtaWphcw=="
          target="_blank"
          rel="noopener noreferrer"
          className="group relative"
        >
          <div className="bg-gradient-to-r from-purple-500 via-pink-500 to-orange-500 p-[2px] rounded-[32px] hover:shadow-lg hover:shadow-pink-500/25 transition-all duration-300">
            <div className="bg-[#1A232E] rounded-[30px] px-8 py-4 flex items-center gap-4 group-hover:bg-opacity-90 transition-all duration-300">
              <div className="w-8 h-8 bg-gradient-to-r from-purple-500 via-pink-500 to-orange-500 rounded-full flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="20" height="20" fill="white">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                </svg>
              </div>
              <span className="text-white font-semibold text-[16px] md:text-[18px] group-hover:text-pink-200 transition-colors duration-300">
                Ver más trabajos en Instagram
              </span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 text-white group-hover:text-pink-200 group-hover:translate-x-1 transition-all duration-300"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </div>
          </div>
        </Link>
      </motion.div>
    </motion.div>
  </section>
)

export default Projects
