"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { useState, useEffect } from "react"
import { fadeIn } from "../utils/motion"

const ProjectCard = ({ id, title, description, images, category, client, date, index }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0)

  // Auto-slide effect
  useEffect(() => {
    if (images && images.length > 1) {
      const interval = setInterval(() => {
        setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length)
      }, 3000) // Change image every 3 seconds

      return () => clearInterval(interval)
    }
  }, [images])

  return (
    <motion.div
      variants={fadeIn("up", "spring", index * 0.5, 1)}
      className="bg-[rgba(0,0,0,0.3)] p-5 rounded-[20px] sm:w-[360px] w-full group hover:bg-[rgba(0,0,0,0.4)] transition-all duration-300"
    >
      <div className="relative w-full h-[230px] overflow-hidden rounded-[20px]">
        {images && images.length > 0 ? (
          <>
            {/* Image carousel */}
            <div className="relative w-full h-full">
              {images.map((image, imgIndex) => (
                <div
                  key={imgIndex}
                  className={`absolute inset-0 transition-opacity duration-1000 ${
                    imgIndex === currentImageIndex ? "opacity-100" : "opacity-0"
                  }`}
                >
                  <Image
                    src={image || "/placeholder.svg"}
                    alt={`${title} - imagen ${imgIndex + 1}`}
                    width={360}
                    height={230}
                    className="w-full h-full object-cover"
                  />
                </div>
              ))}
            </div>

            {/* Image indicators */}
            {images.length > 1 && (
              <div className="absolute bottom-3 left-1/2 transform -translate-x-1/2 flex space-x-2">
                {images.map((_, imgIndex) => (
                  <button
                    key={imgIndex}
                    onClick={() => setCurrentImageIndex(imgIndex)}
                    className={`w-2 h-2 rounded-full transition-all duration-300 ${
                      imgIndex === currentImageIndex
                        ? "bg-white scale-125"
                        : "bg-white bg-opacity-50 hover:bg-opacity-75"
                    }`}
                    aria-label={`Ver imagen ${imgIndex + 1}`}
                  />
                ))}
              </div>
            )}

            {/* Overlay gradient */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </>
        ) : (
          <Image src="/placeholder.svg" alt={title} width={360} height={230} className="w-full h-full object-cover" />
        )}
      </div>

      <div className="mt-5">
        <div className="flex justify-between items-center mb-3">
          <span className="bg-[#304f6e] text-white text-xs px-3 py-1 rounded-full font-medium">{category}</span>
          <span className="text-white text-xs opacity-60">{date}</span>
        </div>

        <h3 className="text-white font-bold text-[20px] md:text-[24px] mt-2 leading-tight group-hover:text-[#25618B] transition-colors duration-300">
          {title}
        </h3>

        <p className="mt-3 text-secondary-white text-[14px] leading-relaxed line-clamp-3">{description}</p>

        <div className="mt-4 flex justify-between items-center">
          <div className="flex flex-col">
            <span className="text-white text-sm font-medium">Cliente:</span>
            <span className="text-[#25618B] text-sm font-semibold">{client}</span>
          </div>

          <button className="bg-[#25618B] text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-[#1a4a6e] transition-all duration-300 hover:scale-105 hover:shadow-lg">
            Ver detalles
          </button>
        </div>
      </div>
    </motion.div>
  )
}

export default ProjectCard
