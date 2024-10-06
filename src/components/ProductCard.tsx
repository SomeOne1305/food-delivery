import AddToCart from './AddToCart'
import { Product } from '@/types'
import Image from 'next/image'

type ProductCardProps = {
	direction: 'row' | 'col'
	product: Product
}
export default function ProductCard({ direction, product }: ProductCardProps) {
	if (direction == 'row') {
		return (
			<div className='rounded-xl overflow-hidden border border-gray-200 hover:shadow-2xl transition-all duration-150 flex items-center '>
				<div className='w-48 h-full relative p-1'>
					<Image
						src={product.image}
						alt='product'
						className='object-fill object-center m-1'
						fill
					/>
				</div>
				<div className='w-full p-3'>
					<h3 className='text-base font-bold'>{product.name}</h3>
					<p className='text-xs text-gray-500 line-clamp-2 my-2'>
						{product.description}
					</p>
					<div className='w-full flex item-center justify-between'>
						<span className='text-base font-semibold'>{product.price} uzs</span>
						{/* <button className='px-2 py-0.5 text-pink-600 hover:bg-pink-600 hover:text-white shadow-md inline-flex items-center border border-gray-200 rounded-xl text-xs'>
							<FaBagShopping />
							<span className='ml-2'>Qo&apos;shish</span>
						</button> */}
						<AddToCart product={product} />
					</div>
				</div>
			</div>
		)
	}

	return (
		<div className='rounded-xl overflow-hidden border border-gray-200 hover:shadow-2xl transition-all duration-150 flex flex-col items-center '>
			<div className='w-full min-h-72 max-h-96 relative'>
				<Image src={product.image} alt='product' className='object-fill' fill />
			</div>
			<div className='w-full p-3'>
				<h3 className='text-base font-bold'>{product.name}</h3>
				<p className='text-xs text-gray-500 line-clamp-2 my-2'>
					{product.description}
				</p>
				<div className='w-full flex item-center justify-between'>
					<span className='text-base font-bold'>{product.price} uzs</span>
					{/* <button className='px-2 py-0.5 text-pink-600 hover:bg-pink-600 hover:text-white shadow-md inline-flex items-center border border-gray-200 rounded-xl text-xs'>
						<FaBagShopping />
						<span className='ml-2'>Qo&apos;shish</span>
					</button> */}
					<AddToCart product={product} />
				</div>
			</div>
		</div>
	)
}
