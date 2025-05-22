"use client"

import Image from "next/image"
import Link from "next/link"
import { useState } from "react"
import { motion } from "framer-motion"
import styles from "../styles"
import { navVariants } from "../utils/motion"
import menu from "../public/menu.svg"

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <nav className={`${styles.xPaddings} py-8 relative`}>
      <motion.div
        variants={navVariants}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
        className="absolute w-[50%] inset-0 gradient-01"
      />

      <motion.div
        variants={navVariants}
        initial="hidden"
        whileInView="show"
        className={`${styles.innerWidth} mx-auto flex justify-between items-center`}
      >
        <Link href="/" className="flex items-center">
          <Image src="/logo.png" alt="Duality Domain Logo" width={180} height={40} className="object-contain" />
        </Link>

        <div className="hidden md:flex items-center gap-8">
          <Link
            href="/#explore"
            className="font-normal text-[16px] text-white hover:text-secondary-white transition-colors"
          >
            Servicios
          </Link>
          <Link
            href="/#projects"
            className="font-normal text-[16px] text-white hover:text-secondary-white transition-colors"
          >
            Proyectos
          </Link>
          <Link
            href="/#testimonials"
            className="font-normal text-[16px] text-white hover:text-secondary-white transition-colors"
          >
            Testimonios
          </Link>
          <Link
            href="/#about"
            className="font-normal text-[16px] text-white hover:text-secondary-white transition-colors"
          >
            Nosotros
          </Link>
          <Link
            href="/blog"
            className="font-normal text-[16px] text-white hover:text-secondary-white transition-colors"
          >
            Blog
          </Link>
          <Link href="#" className="font-normal text-[16px] text-white hover:text-secondary-white transition-colors">
            Contacto
          </Link>
          <button className="bg-[#25618B] py-2 px-4 rounded-[20px] text-white font-medium">Comenzar</button>
        </div>

        <div className="md:hidden relative">
          <Image
            src={menu || "/placeholder.svg"}
            alt="menu-Icon"
            className="w-[24px] h-[24px] object-contain cursor-pointer"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          />

          {isMenuOpen && (
            <div className="absolute top-10 right-0 bg-[#1A232E] p-5 rounded-lg shadow-lg z-50 min-w-[200px]">
              <div className="flex flex-col gap-4">
                <Link
                  href="/#explore"
                  className="font-normal text-[16px] text-white hover:text-secondary-white transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Servicios
                </Link>
                <Link
                  href="/#projects"
                  className="font-normal text-[16px] text-white hover:text-secondary-white transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Proyectos
                </Link>
                <Link
                  href="/#testimonials"
                  className="font-normal text-[16px] text-white hover:text-secondary-white transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Testimonios
                </Link>
                <Link
                  href="/#about"
                  className="font-normal text-[16px] text-white hover:text-secondary-white transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Nosotros
                </Link>
                <Link
                  href="/blog"
                  className="font-normal text-[16px] text-white hover:text-secondary-white transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Blog
                </Link>
                <Link
                  href="#"
                  className="font-normal text-[16px] text-white hover:text-secondary-white transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Contacto
                </Link>
                <button className="bg-[#25618B] py-2 px-4 rounded-[20px] text-white font-medium">Comenzar</button>
              </div>
            </div>
          )}
        </div>
      </motion.div>
    </nav>
  )
}

export default Navbar
