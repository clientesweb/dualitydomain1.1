"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import { fadeIn } from "../utils/motion"
import arrow from "../public/arrow.svg"

const InsightCard = ({ id, imgUrl, title, subtitle, index }) => (
  <motion.div variants={fadeIn("up", "spring", index * 0.5, 1)} className="flex md:flex-row flex-col gap-4">
    <Image
      src={imgUrl || "/placeholder.svg"}
      alt={title}
      width={270}
      height={250}
      className="md:w-[270px] w-full h-[250px] rounded-[32px] object-cover"
    />

    <div className="flex w-full justify-between items-center ">
      <div className="flex-1 md:ml-[62px] flex flex-col max-w-[650px]">
        <h4 className="font-normal lg:text-[42px] text-[26px] text-white">{title}</h4>
        <p className="mt-[16px] font-normal lg:text-[20px] text-[14px] text-secondary-white">{subtitle}</p>
        <Link href={`/blog/${id}`} className="mt-[16px] inline-block text-[#25618B] font-semibold hover:underline">
          Leer artículo completo
        </Link>
      </div>
      <div className="lg:flex hidden items-center justify-center w-[100px] h-[100px] rounded-full bg-transparent border-[1px] border-white">
        <Link href={`/blog/${id}`}>
          <Image src={arrow || "/placeholder.svg"} alt="arrow" className="w-[40%] h-[40%] object-contain" />
        </Link>
      </div>
    </div>
  </motion.div>
)

export default InsightCard
