import { drinksIcon, fastFoodIcon, saladIcon } from '@/assets'
import { Metadata } from 'next'
import Image from 'next/image'

export const metadata: Metadata = {
	title: 'Menu | FoodKing',
	description: 'Choose any foods you want ',
}
export default function MenuPage() {
	return (
		<div className='w-full'>
			<div className='container'>
				<div className='w-full mt-20'>
					<div className='w-full flex items-center gap-5'>
						<div className='inline-flex py-2 px-3 items-center rounded-full bg-pink-500 text-white'>
							<Image
								src={fastFoodIcon}
								alt='icon'
								width={30}
								className='select-none'
								height={30}
							/>
							<span className='text-lg font-bold ml-2 mt-1'>Fast foods</span>
						</div>
						<div className='inline-flex py-2 px-3 items-center rounded-full bg-gray-200'>
							<Image src={drinksIcon} alt='icon' width={30} height={30} />
							<span className='text-lg font-bold ml-2 mt-1'>Drinks</span>
						</div>
						<div className='inline-flex py-2 px-3 items-center rounded-full bg-gray-200'>
							<Image src={saladIcon} alt='icon' width={30} height={30} />
							<span className='text-lg font-bold ml-2 mt-1'>Salads</span>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}
