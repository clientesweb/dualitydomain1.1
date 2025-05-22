"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { fadeIn } from "../utils/motion"

const TestimonialCard = ({ content, name, title, image, index }) => (
  <motion.div
    variants={fadeIn("up", "spring", index * 0.5, 1)}
    className="bg-[rgba(0,0,0,0.3)] p-6 rounded-[20px] sm:w-[350px] w-full"
  >
    <p className="text-white text-[18px] leading-[30px] font-normal italic">"{content}"</p>

    <div className="mt-8 flex items-center gap-4">
      <Image
        src={image || "/placeholder.svg"}
        alt={name}
        width={50}
        height={50}
        className="rounded-full object-cover"
      />
      <div>
        <h4 className="text-white font-semibold text-[16px]">{name}</h4>
        <p className="text-secondary-white text-[12px]">{title}</p>
      </div>
    </div>
  </motion.div>
)

export default TestimonialCard
