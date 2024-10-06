'use client'

import Image from 'next/image'
import { useState } from 'react'
import { AiFillCaretLeft, AiFillCaretRight } from 'react-icons/ai'
import SwiperCore from 'swiper'
import 'swiper/css/controller'
import 'swiper/css/pagination'
import { Autoplay } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'

import Menu from '@/components/Menu'

SwiperCore.use([Autoplay])

export default function Home() {
	const [swipe, setSwipe] = useState<SwiperCore | null>(null)
	const [progress, setProgress] = useState(0)

	return (
		<div className='w-full'>
			<div className='container mx-auto p-4'>
				<div className='w-full relative mt-[10vh]'>
					<div
						className='lg:p-4 p-2 rounded-full bg-pink-600 z-10 absolute top-[50%] -right-7 transform -translate-y-1/2 cursor-pointer'
						onClick={() => swipe?.slideNext()}
					>
						<AiFillCaretRight className='lg:text-2xl text-xl text-white' />
					</div>
					<div
						className='lg:p-4 p-2 rounded-full bg-pink-600 z-10 absolute top-[50%] -left-7 transform -translate-y-1/2 cursor-pointer'
						onClick={() => swipe?.slidePrev()}
					>
						<AiFillCaretLeft className='lg:text-2xl text-xl text-white' />
					</div>
					<Swiper
						slidesPerView={1}
						spaceBetween={20}
						style={{ marginTop: '2%' }}
						onSwiper={swiper => setSwipe(swiper)}
						onProgress={(_, progress) => setProgress(progress)}
						loop
						pagination={{
							clickable: true
						}}
						autoplay={{
							delay: 4000
						}}
					>
						{[
							'https://fastfoodteensmental.health.blog/wp-content/uploads/2019/05/2e416-mcd_print_ad2_large.jpg',
							'http://meal.city-taxi.uz/storage/53/conversions/cover-cover.png',
							'https://i0.wp.com/nacchocommunique.com/wp-content/uploads/2017/05/mac.png?ssl=1'
						].map((item, i) => (
							<SwiperSlide
								key={'slide_' + i}
								className='relative'
								style={{ height: 'calc(50vh - 200px)' }} // Adjust height as needed
							>
								<Image
									src={item}
									alt='slide'
									fill
									className='rounded-lg border border-gray-300 object-cover'
								/>
							</SwiperSlide>
						))}
					</Swiper>
				</div>
				<Menu />
			</div>
		</div>
	)
}
