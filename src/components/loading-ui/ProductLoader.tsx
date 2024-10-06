type ProductLoaderProps = {
	direction: 'row' | 'col'
}

function ProductLoader({ direction }: ProductLoaderProps) {
	switch (direction) {
		case 'col':
			return (
				<div className='flex flex-col p-2'>
					<div className='w-full min-h-80 loading'></div>
					<div className='w-1/3 p-2 mt-2 loading'></div>
					<div className='w-full h-2 loading mt-2'></div>
					<div className='w-full h-2 loading mt-1'></div>
					<div className='w-3/4 h-2 loading mt-1'></div>
					<div className='flex mt-2 w-full justify-between items-center'>
						<div className='w-1/4 h-3 loading'></div>
						<div className='w-1/4 h-3 loading'></div>
					</div>
				</div>
			)
		case 'row':
			return (
				<div className='flex'>
					<div className='w-1/4 h-24 loading' />
					<div className='p-2 w-full'>
						<div className='w-1/3 h-3 loading'></div>
						<div className='w-full h-3 loading mt-1.5' />
						<div className='w-full h-3 loading mt-1.5' />
						<div className='w-full mt-4 flex items-center justify-between'>
							<div className='w-1/4 h-4 loading mt-1.5' />
							<div className='w-1/4 h-4 loading mt-1.5' />
						</div>
					</div>
				</div>
			)
	}
}

export default ProductLoader
