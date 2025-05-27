"use client"
import { motion } from "framer-motion"
import Image from "next/image"
import styles from "../styles"
import { fadeIn } from "../utils/motion"

// We are getting this "id, imgUrl, title" props from "{...world} spread".
const ExploreCard = ({ id, imgUrl, title, index, active, handleClick, description }) => (
  <motion.div
    variants={fadeIn("right", "spring", index * 0.5, 0.75)}
    className={`relative ${active === id ? "lg:flex-[3.5] flex-[10]" : "lg:flex-[0.5] flex-[2]"} ${
      styles.flexCenter
    } min-w-[170px] h-[600px] transition-[flex] duration-[0.7s] ease-out-flex cursor-pointer `}
    onClick={() => handleClick(id)}
  >
    <Image
      src={imgUrl || "/placeholder.svg"}
      alt={title}
      width={800}
      height={600}
      className="absolute w-full h-full object-cover rounded-[24px]"
    />
    {active !== id ? (
      <h3 className="font-semibold sm:text-[26px] text-[18px] text-white absolute z-0 lg:bottom-20 lg:rotate-[-90deg] lg:origin-[0,0] ">
        {title}
      </h3>
    ) : (
      <div className="absolute bottom-0 p-8 justify-start w-full flex-col bg-[rgba(0,0,0,0.5)] rounded-b-[24px] ">
        <h2 className="font-semibold sm:text-[32px] text-[24px] text-white ">{title}</h2>
        <p className="mt-[16px] font-normal text-[14px] leading-[20px] text-white opacity-80">{description}</p>
      </div>
    )}
  </motion.div>
)

export default ExploreCard
