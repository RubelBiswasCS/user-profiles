import React from "react"
import Image from "next/image"
import Link from "next/link"

// Import Icons
import { Facebook, Twitter, Linkedin, Github } from "@/components/common/Icons"

export default function Card({ name, email, profile, image, links }: any) {

  return (
    <div className="px-4 py-6 flex flex-col bg-white max-w-[240px] max-h-[300px] justify-start items-center rounded-lg drop-shadow-lg gap-2">
      <Image height={80} width={80} src={ image ?? '' } alt="user" className="rounded-full" />
      <div className="flex flex-col gap-0 justify-center">
        <h6 className="text-[12px] font-semibold text-center">{ name ?? '' }</h6>
        <h6 className="text-[10px] font-light text-center">{ email ?? '' }</h6>
      </div>
      <p className="flex w-full text-[8px] font-light text-justify">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla illum tempore modi facere, iusto ipsam, sint rerum voluptastio
      </p>
      <div className="flex gap-1">
        <Link href={ links?.fackbook ?? ''} className="border p-1 rounded-full">
          <Facebook />
        </Link>
        <Link href={ links?.linkedin ?? ''} className="border p-1 rounded-full">
          <Linkedin />
        </Link>
        <Link href={ links?.twitter ?? ''} className="border p-1 rounded-full">
          <Twitter />
        </Link>
        <Link href={ links?.github ?? ''} className="border p-1 rounded-full">
          <Github />
        </Link>
      </div>
      <Link href={ profile ?? '' } className="w-full">
        <button className="text-[8px] hover:text-white p-1 rounded-sm bg-violet-500 hover:bg-violet-600 w-full">
          View Profile
        </button>
      </Link>
    </div>
  )
}
