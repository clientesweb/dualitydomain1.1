"use client"

import { motion } from "framer-motion"
import { socials } from "../constants"
import styles from "../styles"
import { footerVariants } from "../utils/motion"
import Image from "next/image"
import headset from "../public/headset.svg"

const Footer = () => (
  <motion.footer
    variants={footerVariants}
    initial="hidden"
    whileInView="show"
    className={`${styles.xPaddings} py-8 relative`}
  >
    <div className="footer-gradient" />
    <div className={`${styles.innerWidth} mx-auto flex flex-col gap-8`}>
      <div className="flex items-center justify-between flex-wrap gap-5">
        <h4 className="font-bold md:text-[64px] text-[44px] text-white">
          ¿Listo para transformar tu presencia digital?
        </h4>
        <button type="button" className="flex items-center h-fit py-4 px-6 bg-[#25618B] rounded-[32px] gap-[12px]">
          <Image src={headset || "/placeholder.svg"} alt="headset" className="w-[24px] h-[24px] object-contain" />
          <span className="font-normal text-[16px] text-white">Contactar ahora</span>
        </button>

        <div className="flex flex-col w-full">
          <div className="mb-[50px] h-[2px] bg-white opacity-10" />

          <div className="flex flex-wrap justify-between items-center gap-4">
            <div className="flex flex-col">
              <h4 className="font-extrabold text-[24px] text-white">DUALITY DOMAIN</h4>
              <p className="font-normal text-[14px] text-white opacity-50 mt-2">Villa del Dique, Córdoba, Argentina</p>
              <p className="font-normal text-[14px] text-white opacity-50">+54 9 3546 50-1537</p>
              <p className="font-normal text-[14px] text-white opacity-50">info@dualitydomain.com</p>
            </div>

            <p className="font-normal text-[14px] text-white opacity-50">
              Copyright © {new Date().getFullYear()} Duality Domain. Todos los derechos reservados.
            </p>

            <div className="flex gap-4">
              {socials.map((social) => (
                <Image
                  key={social.name}
                  src={social.url || "/placeholder.svg"}
                  alt={social.name}
                  className="w-[24px] h-[24px] object-contain cursor-pointer"
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  </motion.footer>
)
export default Footer
