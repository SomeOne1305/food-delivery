import { data } from '@/constants/sample-data.constant'
import { useEffect, useState } from 'react'

type IData = typeof data

export function useFetchData() {
	const [pizzas, setPizzas] = useState<IData | undefined>(undefined)
	const [loading, setLoading] = useState<boolean>(true)

	useEffect(() => {
		setLoading(true)
		const timer = setTimeout(() => {
			setPizzas(data)
			setLoading(false)
		}, 1500)

		return () => clearTimeout(timer)
	}, [])

	return { pizzas, loading }
}
