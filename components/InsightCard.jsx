"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { fadeIn } from "../utils/motion"

const InsightCard = ({ imgUrl, title, subtitle, index }) => (
  <motion.div
    variants={fadeIn("up", "spring", index * 0.5, 1)}
    className="flex md:flex-row flex-col gap-4 hover:bg-[rgba(255,255,255,0.05)] transition-colors p-4 rounded-xl group cursor-pointer"
  >
    <Image
      src={imgUrl || "/placeholder.svg"}
      alt={title}
      width={270}
      height={250}
      className="md:w-[270px] w-full h-[250px] rounded-[32px] object-cover"
    />

    <div className="flex w-full justify-between items-center">
      <div className="flex-1 md:ml-[62px] flex flex-col max-w-[650px]">
        <h4 className="font-normal lg:text-[42px] text-[26px] text-white group-hover:text-[#25618B] transition-colors">
          {title}
        </h4>
        <p className="mt-[16px] font-normal lg:text-[20px] text-[14px] text-secondary-white">{subtitle}</p>
        <p className="mt-[16px] text-[#25618B] font-semibold flex items-center gap-2">
          Leer artículo completo
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5 group-hover:translate-x-1 transition-transform"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </p>
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
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
            />
          </svg>
        </div>
      </div>
    </div>
  </motion.div>
)

export default InsightCard
