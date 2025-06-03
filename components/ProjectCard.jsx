"use client"

import Image from "next/image"

const ProjectCard = ({ id, title, description, image, category, date, index, link }) => (
  <div className="bg-[rgba(0,0,0,0.3)] p-5 rounded-[20px] sm:w-[360px] w-full max-w-[360px] mx-auto">
    <div className="relative w-full h-[230px]">
      <Image
        src={image || "/placeholder.svg"}
        alt={title}
        width={360}
        height={230}
        className="w-full h-full object-cover rounded-[20px]"
        priority={index < 2}
      />
    </div>

    <div className="mt-5">
      <div className="flex justify-between items-center">
        <span className="bg-[#304f6e] text-white text-xs px-3 py-1 rounded-full">{category}</span>
        <span className="text-white text-xs opacity-60">{date}</span>
      </div>
      <h3 className="text-white font-bold text-[24px] mt-2">{title}</h3>
      <p className="mt-2 text-secondary-white text-[14px] leading-relaxed">{description}</p>
      <div className="mt-4 flex justify-end">
        <a
          href={link || "#"}
          target="_blank"
          rel="noopener noreferrer"
          className="text-[#25618B] font-semibold text-sm hover:underline transition-all duration-300"
        >
          Ver proyecto →
        </a>
      </div>
    </div>
  </div>
)

export default ProjectCard
