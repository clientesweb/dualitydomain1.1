"use client"

import Image from "next/image"
import { motion } from "framer-motion"
import styles from "../styles"
import { navVariants } from "../utils/motion"
import search from "../public/search.svg"
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
      className={`${styles.innerWidth} mx-auto flex justify-between gap-8`}
    >
      <Image src={search || "/placeholder.svg"} alt="search-Icon" className="w-[24px] h-[24px] object-contain" />

      <div className="flex items-center">
        <Image src="/logo.png" alt="Duality Domain Logo" width={180} height={40} className="object-contain" />
      </div>

      <Image src={menu || "/placeholder.svg"} alt="menu-Icon" className="w-[24px] h-[24px] object-contain" />
    </motion.div>
  </nav>
)

export default Navbar
