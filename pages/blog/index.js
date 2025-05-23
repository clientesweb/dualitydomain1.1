"use client"

import { motion } from "framer-motion"
import { Navbar, Footer } from "../../components"
import styles from "../../styles"
import { fadeIn, staggerContainer } from "../../utils/motion"
import { insights } from "../../constants"
import Image from "next/image"
import Link from "next/link"

const BlogPage = () => {
  return (
    <div className="bg-primary-black overflow-hidden">
      <Navbar />

      <section className={`${styles.paddings} relative z-10`}>
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, amount: 0.25 }}
          className={`${styles.innerWidth} mx-auto flex flex-col`}
        >
          <div className="text-center mb-16">
            <h1 className="font-bold text-white text-[42px] md:text-[64px] leading-tight">Blog de Duality Domain</h1>
            <p className="mt-4 text-secondary-white text-[18px] max-w-3xl mx-auto">
              Artículos, guías y recursos para ayudarte a mejorar tu presencia digital y hacer crecer tu negocio online.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {insights.map((post, index) => (
              <motion.div
                key={post.id}
                variants={fadeIn("up", "spring", index * 0.5, 1)}
                className="bg-[rgba(0,0,0,0.3)] rounded-[20px] overflow-hidden"
              >
                <div className="relative h-[240px]">
                  <Image
                    src={post.imgUrl || "/placeholder.svg"}
                    alt={post.title}
                    placeholder="blur"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <div className="flex justify-between items-center mb-3">
                    <span className="text-white text-sm opacity-60">{post.date}</span>
                    <span className="text-white text-sm opacity-60">{post.author}</span>
                  </div>
                  <h3 className="text-white font-bold text-[22px] mb-3">{post.title}</h3>
                  <p className="text-secondary-white mb-4">{post.subtitle}</p>
                  <Link
                    href={`/blog/${post.id}`}
                    className="inline-block bg-[#25618B] text-white py-2 px-4 rounded-lg hover:bg-[#1a4a6e] transition-colors"
                  >
                    Leer artículo
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      <Footer />
    </div>
  )
}

export default BlogPage
