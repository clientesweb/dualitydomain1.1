"use client"

import Image from "next/image"
import { motion } from "framer-motion"
import styles from "../styles"
import { slideIn, staggerContainer, textVariant } from "../utils/motion"
import stamp from "../public/stamp.png"

const Hero = () => (
  <section className={`${styles.yPaddings} sm:pl-16 pl-6`}>
    {/* this is a container div in which we can animate children elements */}
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className={`${styles.innerWidth} mx-auto flex flex-col`}
    >
      <div className="flex justify-center items-center flex-col relative z-10">
        <motion.h1
          variants={textVariant(1.1)}
          className={`${styles.heroHeading} text-center sm:text-[80px] text-[40px]`}
        >
          Duality
        </motion.h1>
        <motion.div variants={textVariant(1.2)} className="flex flex-row justify-center items-center flex-wrap">
          <h1 className={styles.heroHeading}>D</h1>
          <div className={styles.heroDText} />
          <h1 className={styles.heroHeading}>main</h1>
        </motion.div>
      </div>

      {/* NOTE "-mt-[20px]" means "minus 20px margin top" */}
      <motion.div variants={slideIn("right", "tween", 0.2, 1)} className="relative w-full md:-mt-[20px] -mt-[12px] ">
        <div className="absolute w-full h-[300px] hero-gradient rounded-tl-[140px] z-10 -top-[30px]" />

        {/* Video replacing the cover image */}
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full sm:h-[500px] h-[350px] object-cover rounded-tl-[140px] z-10 relative"
        >
          <source src="/hero-video.mp4" type="video/mp4" />
          {/* Fallback image in case video doesn't load */}
          <Image
            src="/cover.png"
            alt="cover fallback"
            width={1200}
            height={500}
            className="w-full sm:h-[500px] h-[350px] object-cover rounded-tl-[140px]"
          />
        </video>

        <a href="#explore">
          <div className="w-full flex justify-end sm:-mt-[70px] -mt-[50px] pr-[40px] relative z-10 ">
            <Image
              src={stamp || "/placeholder.svg"}
              alt="stamp"
              placeholder="blur"
              priority
              className="sm:w-[155px] w-[100px] sm:h-[155px] h-[100px] object-contain "
            />
          </div>
        </a>
      </motion.div>
    </motion.div>
  </section>
)

export default Hero
