"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { fadeIn } from "../utils/motion"

const InsightCard = ({ imgUrl, title, subtitle, index }) => (
  <motion.div variants={fadeIn("up", "spring", index * 0.5, 1)} className="flex md:flex-row flex-col gap-4">
    <Image
      src={imgUrl || "/placeholder.svg"}
      alt={title}
      width={270}
      height={250}
      className="md:w-[270px] w-full h-[250px] rounded-[32px] object-cover"
    />

    <div className="flex w-full justify-between items-center">
      <div className="flex-1 md:ml-[62px] flex flex-col max-w-[650px]">
        <h4 className="font-normal lg:text-[42px] text-[26px] text-white">{title}</h4>
        <p className="mt-[16px] font-normal lg:text-[20px] text-[14px] text-secondary-white">{subtitle}</p>
        <p className="mt-[16px] text-[#25618B] font-semibold">Artículo informativo sobre desarrollo web</p>
      </div>
      <div className="lg:flex hidden items-center justify-center w-[100px] h-[100px] rounded-full bg-transparent border-[1px] border-white">
        <div className="w-[40%] h-[40%] flex items-center justify-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6 text-white"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
        </div>
      </div>
    </div>
  </motion.div>
)

export default InsightCard
