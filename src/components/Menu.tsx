import ProductCard from './ProductCard'
import ProductLoader from './loading-ui/ProductLoader'

import { useFetchData } from '@/hooks/useFetchData'

export default function Menu() {
	const { pizzas, loading } = useFetchData()
	return (
		<div className='w-full pt-[4%]'>
			<div className='w-full py-3'>
				<h2 className='text-2xl font-bold'>Tanlangan mahsulotlar</h2>
			</div>
			<div className='w-full mt-3 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 py-8'>
				{loading
					? Array(8)
							.fill('loader_col_')
							.map((item, i) => (
								<ProductLoader direction='col' key={item + i} />
							))
					: pizzas?.map((item, i) => (
							<ProductCard direction='col' key={'pizza_' + i} product={item} />
						))}
			</div>
			<div className='w-full py-3'>
				<h2 className='text-2xl font-bold'>Eng mashhur mahsulotlar</h2>
			</div>
			<div className='w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 py-4'>
				{loading
					? Array(8)
							.fill('loader_row_')
							.map((item, i) => (
								<ProductLoader direction='row' key={item + i} />
							))
					: pizzas?.map((item, i) => (
							<ProductCard
								direction='row'
								key={'pizza_row_' + i}
								product={item}
							/>
						))}
			</div>
		</div>
	)
}
