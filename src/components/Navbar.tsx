'use client'

import { flagUzb } from '@/assets'
import { useCartStore } from '@/stores/useCartStore'
import Image from 'next/image'
import Link from 'next/link'
import { ReactNode } from 'react'
import { FaBagShopping } from 'react-icons/fa6'
import { FiSearch } from 'react-icons/fi'
import { PiUserCircleFill } from 'react-icons/pi'

type Props = {}

export default function Navbar({}: Props): ReactNode {
	const { total } = useCartStore()
	return (
		<div className='w-full fixed top-0 left-0 bg-white shadow-md z-20 overflow-hidden'>
			<div className='container'>
				<div className='w-full flex items-center justify-between py-3'>
					<Link href={'/'} className='max-w-32'>
						<Image
							src={'/logo.png'}
							alt='logo'
							width={128}
							height={45}
							loading='lazy'
						/>
					</Link>
					<div className='inline-flex items-center gap-4'>
						<Link href='/'>Bosh sahifa</Link>
						<Link href='/menu'>Menu</Link>
						<Link href='/offers'>Takliflar</Link>
					</div>
					<div className='inline-flex items-center gap-2'>
						<div className='inline-flex items-center  rounded-full pl-2 bg-gray-200'>
							<FiSearch className='text-gray-400' />
							<input
								type='search'
								name='search'
								id='search'
								placeholder='Qidirish'
								className='outline-none px-2 py-1.5 bg-transparent text-sm'
							/>
						</div>
						<button className='px-3 py-0.5 inline-flex items-center rounded-full border border-gray-300'>
							<Image src={flagUzb} width={16} height={16} alt='flag' />
							<span className='ml-2'>O&apos;zbek</span>
						</button>
						<button className='px-2 py-0.5 rounded-full border border-gray-300 inline-flex items-center text-base text-white bg-black'>
							<FaBagShopping className='text-base mr-2' />
							<span className='mt-0.5'>{total} uzs</span>
						</button>
						<button className='px-1.5 py-0.5 rounded-full inline-flex items-center bg-pink-600 text-white'>
							<PiUserCircleFill className='text-lg mr-2' />
							<span className='mt-0.5'>Kirish</span>
						</button>
					</div>
				</div>
			</div>
		</div>
	)
}
