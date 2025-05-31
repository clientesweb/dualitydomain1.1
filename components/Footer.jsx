"use client"

import { motion } from "framer-motion"
import { socials } from "../constants"
import styles from "../styles"
import { footerVariants } from "../utils/motion"
import Image from "next/image"
import Link from "next/link"
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
        <Link
          href="/solicitar-demo"
          className="flex items-center h-fit py-4 px-6 bg-[#25618B] rounded-[32px] gap-[12px] hover:bg-[#1a4a6e] transition-colors"
        >
          <Image src={headset || "/placeholder.svg"} alt="headset" className="w-[24px] h-[24px] object-contain" />
          <span className="font-normal text-[16px] text-white">Solicitar demo</span>
        </Link>

        <div className="flex flex-col w-full">
          <div className="mb-[50px] h-[2px] bg-white opacity-10" />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            <div>
              <h5 className="text-white font-bold text-[18px] mb-4">Navegación</h5>
              <ul className="space-y-2">
                <li>
                  <Link href="/" className="text-secondary-white hover:text-white transition-colors">
                    Inicio
                  </Link>
                </li>
                <li>
                  <Link href="/#about" className="text-secondary-white hover:text-white transition-colors">
                    Nosotros
                  </Link>
                </li>
                <li>
                  <Link href="/#explore" className="text-secondary-white hover:text-white transition-colors">
                    Servicios
                  </Link>
                </li>
                <li>
                  <Link href="/#projects" className="text-secondary-white hover:text-white transition-colors">
                    Proyectos
                  </Link>
                </li>
                <li>
                  <Link href="/articulos" className="text-secondary-white hover:text-white transition-colors">
                    Artículos
                  </Link>
                </li>
                <li>
                  <Link href="/solicitar-demo" className="text-secondary-white hover:text-white transition-colors">
                    Solicitar demo
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h5 className="text-white font-bold text-[18px] mb-4">Servicios</h5>
              <ul className="space-y-2">
                <li>
                  <Link href="/#explore" className="text-secondary-white hover:text-white transition-colors">
                    Diseño y desarrollo web
                  </Link>
                </li>
                <li>
                  <Link href="/#explore" className="text-secondary-white hover:text-white transition-colors">
                    E-Commerce Personalizado
                  </Link>
                </li>
                <li>
                  <Link href="/#explore" className="text-secondary-white hover:text-white transition-colors">
                    Optimización Web y SEO
                  </Link>
                </li>
                <li>
                  <Link href="/#explore" className="text-secondary-white hover:text-white transition-colors">
                    Desarrollo de Aplicaciones Web
                  </Link>
                </li>
                <li>
                  <Link href="/#explore" className="text-secondary-white hover:text-white transition-colors">
                    Investigación y Mejora de UX
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h5 className="text-white font-bold text-[18px] mb-4">Contacto</h5>
              <ul className="space-y-2">
                <li className="text-secondary-white">Ruta 5, km 107, Villa del Dique, Córdoba, Argentina</li>
                <li className="text-secondary-white">+54 9 3546 50-1537</li>
                <li className="text-secondary-white">dualitydomainoficial@gmail.com</li>
              </ul>
              <div className="flex gap-4 mt-4">
                {socials.map((social) => (
                  <Link
                    key={social.name}
                    href={social.link || "#"}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:opacity-80 transition-opacity"
                  >
                    <Image
                      src={social.url || "/placeholder.svg"}
                      alt={social.name}
                      width={24}
                      height={24}
                      className="w-[24px] h-[24px] object-contain cursor-pointer"
                    />
                  </Link>
                ))}
              </div>
            </div>
          </div>

          <div className="flex flex-wrap justify-between items-center gap-4 pt-8 border-t border-white border-opacity-10">
            <div className="flex items-center">
              <Image src="/logo.png" alt="Duality Domain Logo" width={120} height={30} className="object-contain" />
            </div>

            <p className="font-normal text-[14px] text-white opacity-50">
              Copyright © {new Date().getFullYear()} Duality Domain. Todos los derechos reservados.
            </p>
          </div>
        </div>
      </div>
    </div>
  </motion.footer>
)
export default Footer
