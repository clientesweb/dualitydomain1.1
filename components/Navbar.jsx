"use client"

import Image from "next/image"
import { motion } from "framer-motion"
import styles from "../styles"
import { navVariants } from "../utils/motion"
import menu from "../public/menu.svg"

const Navbar = () => (
  // NOTE we can declare tags with motion like this for whichever tag we want to animate
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
      <div className="flex items-center">
        <Image src="/logo.png" alt="Duality Domain Logo" width={180} height={40} className="object-contain" />
      </div>

      <div className="hidden md:flex items-center gap-8">
        <a href="#explore" className="font-normal text-[16px] text-white hover:text-secondary-white transition-colors">
          Servicios
        </a>
        <a href="#about" className="font-normal text-[16px] text-white hover:text-secondary-white transition-colors">
          Nosotros
        </a>
        <a href="#insights" className="font-normal text-[16px] text-white hover:text-secondary-white transition-colors">
          Blog
        </a>
        <a href="#" className="font-normal text-[16px] text-white hover:text-secondary-white transition-colors">
          Contacto
        </a>
        <button className="bg-[#25618B] py-2 px-4 rounded-[20px] text-white font-medium">Comenzar</button>
      </div>

      <div className="md:hidden">
        <Image
          src={menu || "/placeholder.svg"}
          alt="menu-Icon"
          className="w-[24px] h-[24px] object-contain cursor-pointer"
        />
      </div>
    </motion.div>
  </nav>
)

export default Navbar
