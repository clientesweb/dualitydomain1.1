"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { fadeIn } from "../utils/motion"

const ProjectCard = ({ id, title, description, image, category, client, date, index, link }) => (
  <motion.div
    variants={fadeIn("up", "spring", index * 0.5, 1)}
    className="bg-[rgba(0,0,0,0.3)] p-5 rounded-[20px] sm:w-[360px] w-full"
  >
    <div className="relative w-full h-[230px]">
      <Image
        src={image || "/placeholder.svg"}
        alt={title}
        width={360}
        height={230}
        className="w-full h-full object-cover rounded-[20px]"
      />
    </div>

    <div className="mt-5">
      <div className="flex justify-between items-center">
        <span className="bg-[#304f6e] text-white text-xs px-3 py-1 rounded-full">{category}</span>
        <span className="text-white text-xs opacity-60">{date}</span>
      </div>
      <h3 className="text-white font-bold text-[24px] mt-2">{title}</h3>
      <p className="mt-2 text-secondary-white text-[14px]">{description}</p>
      <div className="mt-4 flex justify-between items-center">
        <span className="text-white text-sm opacity-60">Cliente: {client}</span>
        <a
          href={link || "#"}
          target="_blank"
          rel="noopener noreferrer"
          className="text-[#25618B] font-semibold text-sm hover:underline transition-all duration-300"
        >
          Ver proyecto
        </a>
      </div>
    </div>
  </motion.div>
)

export default ProjectCard
