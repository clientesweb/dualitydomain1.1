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
        {/* Logo for desktop */}
        <div className="hidden md:block">
          <Link href="/" className="flex items-center">
            <Image src="/logo.png" alt="Duality Domain Logo" width={180} height={40} className="object-contain" />
          </Link>
        </div>

        {/* Mobile layout with perfect centering */}
        <div className="md:hidden w-full flex items-center justify-center relative h-[80px]">
          {/* Instagram icon - Left side */}
          <div className="absolute left-0 top-1/2 transform -translate-y-1/2 z-10">
            <Link
              href="https://www.instagram.com/dualitydomain?igsh=MXFjZXJsbmZtaWphcw=="
              target="_blank"
              rel="noopener noreferrer"
              className="hover:opacity-80 transition-opacity"
            >
              <div className="w-8 h-8 bg-gradient-to-r from-purple-500 via-pink-500 to-orange-500 rounded-full flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="18" height="18" fill="white">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                </svg>
              </div>
            </Link>
          </div>

          {/* Perfectly centered logo */}
          <motion.div
            className="flex items-center justify-center z-10"
            animate={{
              y: [0, -8, 0],
            }}
            transition={{
              duration: 3,
              repeat: Number.POSITIVE_INFINITY,
              ease: "easeInOut",
            }}
          >
            <Link href="/" className="flex items-center">
              <Image
                src="/logo-header.png"
                alt="Duality Domain Logo"
                width={80}
                height={80}
                className="object-contain"
              />
            </Link>
          </motion.div>

          {/* Menu icon - Right side */}
          <div className="absolute right-0 top-1/2 transform -translate-y-1/2 z-20">
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
                    href="/"
                    className="font-normal text-[16px] text-white hover:text-secondary-white transition-colors"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Inicio
                  </Link>
                  <Link
                    href="/#about"
                    className="font-normal text-[16px] text-white hover:text-secondary-white transition-colors"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Nosotros
                  </Link>
                  <Link
                    href="/#explore"
                    className="font-normal text-[16px] text-white hover:text-secondary-white transition-colors"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Servicios
                  </Link>
                  <Link
                    href="/blog"
                    className="font-normal text-[16px] text-white hover:text-secondary-white transition-colors"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Blog
                  </Link>
                  <Link
                    href="/solicitar-demo"
                    className="bg-[#25618B] py-2 px-4 rounded-[20px] text-white font-medium hover:bg-[#1a4a6e] transition-colors text-center"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Solicitar demo
                  </Link>
                </div>
              </div>
            )}
          </div>
        </div>

        <div className="hidden md:flex items-center gap-8">
          <Link href="/" className="font-normal text-[16px] text-white hover:text-secondary-white transition-colors">
            Inicio
          </Link>
          <Link
            href="/#about"
            className="font-normal text-[16px] text-white hover:text-secondary-white transition-colors"
          >
            Nosotros
          </Link>
          <Link
            href="/#explore"
            className="font-normal text-[16px] text-white hover:text-secondary-white transition-colors"
          >
            Servicios
          </Link>
          <Link
            href="/blog"
            className="font-normal text-[16px] text-white hover:text-secondary-white transition-colors"
          >
            Blog
          </Link>
          <Link
            href="/solicitar-demo"
            className="bg-[#25618B] py-2 px-4 rounded-[20px] text-white font-medium hover:bg-[#1a4a6e] transition-colors"
          >
            Solicitar demo
          </Link>
        </div>
      </motion.div>
    </nav>
  )
}

export default Navbar
