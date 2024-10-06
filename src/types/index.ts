import Swiper from 'swiper'

export type ISwiper = {} & typeof Swiper
export type Product = {
	name: string
	description: string
	price: number
	image: string
}
