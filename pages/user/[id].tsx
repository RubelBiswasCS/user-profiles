import React, { useEffect, useState } from "react"
import axios from "axios"
import { API } from "@/app.config"
import { Loader } from "@/components/common/Loader"
import Image from "next/image"
import { Location } from "@/components/common/Icons"
import { useRouter } from "next/router"

import Link from "next/link"
import SectionContainter from "@/components/User/SectionContainter"
import LabelValueCard from "@/components/common/LabelValueCard"

// Import Icons
import { Facebook, Twitter, Linkedin, Github } from "@/components/common/Icons"

const details = [ 'firstName',  'lastName', 'age', 'gender', 'email', 'phone', 'birthDate', 'bloodGroup',  'ein', 'ssn'] 

export default function Users() {
	const router = useRouter()

  const [isUserLoading, setIsUserLoading]: any = useState(false) 
	const [userData, setUserData]: any = useState(null) 

	const getUserById = (id: any) => {
		setIsUserLoading(true)
		axios.get(`${ API.USERS }/${ id }`)
			.then((res: any) => {
				setUserData(res?.data ?? null)
			}).catch((error: any) => {
				setUserData(null)
			}).finally(() => {
				setIsUserLoading(false)
			})
	}

  useEffect(() => {
		if (router?.query?.id) {
			getUserById(router?.query?.id)
		}
  }, [ router?.query?.id ])

  return (
   <div className='min-h-screen bg-purple-100 flex justify-center items-start py-4 flex-wrap gap-2'>
    { isUserLoading ? <Loader /> : '' }
		{ !isUserLoading ? (
			<div className="flex flex-wrap justify-start items-start w-full px-8 gap-4">
				<div className="flex justify-center items-center gap-4 w-full bg-white p-4 rounded-md shadow-md">
					<Image 
						height={ 140 }
						width={ 140 }
						src={ userData?.image ?? '' } 
						alt="user"
						className="rounded-full border border-indigo-500 p-2 bg-white"
					/>
					<div className="flex flex-col gap-2">
						<div>
							<h1 className="font-semibold text-sm text-blue-900">{ `${ userData?.firstName ?? '' } ${ userData?.lastName ?? '' }` }</h1>
							<h3 className="font-light text-[12px] text-black">{ `${ userData?.firstName ?? '' } ${ userData?.lastName ?? '' }` }</h3>
						</div>
						<div className="flex bg-cyan-100 px-2 py-1 items-center gap-2">
							<Location />
							<h6 className="text-[12px] font-light">{ `${ userData?.address?.address ?? '' } ${ userData?.address?.city ?? '' }` }</h6>
						</div>
					</div>
					<div className="flex justify-end flex-1 gap-4">
						<div className="h-[80px] flex items-start justify-start py-2 flex-col shadow-md px-2">
							<h3 className="font-semibold text-xs text-orange-300">Work</h3>
							<h3 className="font-light text-[12px] text-black">{ `${ userData?.company?.title ?? '' }` }</h3>
							<h3 className="font-light text-[12px] text-black">{ `${ userData?.company?.name ?? '' }` }</h3>
						</div>
						<div className="h-[80px] flex items-start justify-start py-2 flex-col shadow-md px-2">
							<h3 className="font-semibold text-xs text-blue-400">Education</h3>
							<h3 className="font-light text-[12px] text-black">{ `${ userData?.university ?? '' }` }</h3>
						</div>
					</div>
				</div>
				<div className="flex gap-4 w-full">
					<SectionContainter
						title={ 'Socials' }
						containerClass="md:w-1/4"
					>
						<div className="flex gap-2 p-2">
							<Link href={ '' } className="border p-1 rounded-full">
								<Facebook />
							</Link>
							<Link href={ '' } className="border p-1 rounded-full">
								<Linkedin />
							</Link>
							<Link href={ '' } className="border p-1 rounded-full">
								<Twitter />
							</Link>
							<Link href={  '' } className="border p-1 rounded-full">
								<Github />
							</Link>
						</div>
					</SectionContainter>
					<SectionContainter
						title={ 'About' }
						containerClass="flex-1"
					>
						<p className="p-2 text-[12px] font-light">
							Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga voluptates impedit tempore nesciunt quas ab sunt dignissimos cumque facilis! Quidem voluptas at, hic quas maiores porro perferendis facilis ipsam fugiat. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Optio ullam fugiat culpa numquam necessitatibus nostrum voluptatem? Quis facere dolor eius tenetur quod. Inventore optio pariatur iusto praesentium, corporis alias illum.
						</p>
					</SectionContainter>
				</div>
				<div className="flex gap-4 w-full">
					<SectionContainter
						title={ 'Socials' }
						containerClass="md:w-1/4"
					>
						<div className="flex gap-2 p-2">
							<Link href={ '' } className="border p-1 rounded-full">
								<Facebook />
							</Link>
							<Link href={ '' } className="border p-1 rounded-full">
								<Linkedin />
							</Link>
							<Link href={ '' } className="border p-1 rounded-full">
								<Twitter />
							</Link>
							<Link href={  '' } className="border p-1 rounded-full">
								<Github />
							</Link>
						</div>
					</SectionContainter>
					<SectionContainter
						title={ 'Details' }
						containerClass="flex-1"
					>
						<div className="w-full flex p-4 flex-wrap">
							{ details?.map((k: string) => (
								<LabelValueCard
									key={ k }
									label={ k?.toUpperCase() }
									value={ userData?.hasOwnProperty(k) ? userData[k] : '' }
									containerClass={ 'w-1/3' } 
								/>
							)) }
						</div>
					</SectionContainter>
				</div>
			</div>
		) : '' }
   </div>
  )
}