import { Button } from './ui/button'
import {
	Drawer,
	DrawerClose,
	DrawerContent,
	DrawerFooter,
	DrawerHeader,
	DrawerTitle,
	DrawerTrigger
} from './ui/drawer'
import { useCartStore } from '@/stores/useCartStore'
import { Product } from '@/types'
import { Minus, Plus } from 'lucide-react'
import Image from 'next/image'
import { useState } from 'react'
import { FaBagShopping } from 'react-icons/fa6'

//https://youtube.com/shorts/6rbaZTEDiV8?si=UhcRJtIhFFpJrzXd
export default function AddToCart({ product }: { product: Product }) {
	const { addToCart } = useCartStore()
	const [quantity, setQuantity] = useState<number>(1)
	function increase() {
		setQuantity(prev => (prev >= 100 ? prev : prev + 1))
	}
	function decrease() {
		setQuantity(prev => (prev <= 1 ? 1 : prev - 1))
	}
	function setToCart() {
		addToCart(product, quantity)
		setQuantity(1)
	}
	return (
		<Drawer onClose={() => setQuantity(1)}>
			<DrawerTrigger asChild>
				<button className='px-2 py-0.5 text-pink-600 hover:bg-pink-600 hover:text-white shadow-md inline-flex items-center border border-gray-200 rounded-xl text-xs'>
					<FaBagShopping />
					<span className='ml-2'>Qo&apos;shish</span>
				</button>
			</DrawerTrigger>
			<DrawerContent>
				<div className='max-w-sm mx-auto'>
					<DrawerHeader>
						<DrawerTitle>{product.name}</DrawerTitle>
					</DrawerHeader>
					<div className='w-full'>
						<div className='w-full h-80 relative'>
							<Image
								src={product.image}
								className='object-center'
								alt='image'
								fill
							/>
						</div>
						<p className='text-gray-600'>{product.description}</p>
					</div>
					<div className='w-full flex items-center justify-between my-5'>
						<span className='text-xl text-primary'>Soni</span>
						<div className='inline-flex items-center gap-3'>
							<Button
								variant='outline'
								size='icon'
								className='h-9 w-9 shrink-0 rounded-full border-primary'
								disabled={quantity <= 1}
								onClick={decrease}
							>
								<Minus className='h-5 w-5 text-primary' />
							</Button>
							<span className='text-3xl block w-9 text-center'>{quantity}</span>
							<Button
								variant='outline'
								size='icon'
								className='h-9 w-9 shrink-0 rounded-full border-primary'
								disabled={quantity >= 100}
								onClick={increase}
							>
								<Plus className='w-5 h-5 text-primary' />
							</Button>
						</div>
					</div>
					<div className='w-full my-3'>
						<span className='text-xl text-primary mr-4'>Narxi:</span>
						<span className='text-xl'>{quantity * product.price} uzs</span>
					</div>
					<DrawerFooter className='p-0 my-5'>
						<Button
							className='bg-primary hover:bg-primary hover:bg-opacity-90'
							onClick={setToCart}
						>
							Qo&apos;shish
						</Button>
						<DrawerClose asChild>
							<Button
								variant='outline'
								className='border-primary text-primary hover:text-pink-700 '
								onClick={() => setQuantity(1)}
							>
								Cancel
							</Button>
						</DrawerClose>
					</DrawerFooter>
				</div>
			</DrawerContent>
		</Drawer>
	)
}
