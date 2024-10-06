import { Product } from '@/types'
import { create } from 'zustand'

type CartItem = Product & {
	quantity: number
}

type CartState = {
	cart: CartItem[]
	total: number
	addToCart: (product: Product, quantity: number) => void
	removeFromCart: (productName: string) => void
	clearCart: () => void
	calculateTotal: () => void
}

export const useCartStore = create<CartState>((set, get) => ({
	cart: [],
	total: 0,

	addToCart: (product, quantity) => {
		const existingCart = get().cart
		const existingItemIndex = existingCart.findIndex(
			item => item.name === product.name
		)

		if (existingItemIndex !== -1) {
			const updatedCart = [...existingCart]
			updatedCart[existingItemIndex].quantity += quantity
			set({ cart: updatedCart })
		} else {
			set({ cart: [...existingCart, { ...product, quantity }] })
		}

		// Recalculate total price after adding to the cart
		get().calculateTotal()
	},

	// Remove item from cart by name
	removeFromCart: productName => {
		const updatedCart = get().cart.filter(item => item.name !== productName)
		set({ cart: updatedCart })
		get().calculateTotal()
	},

	// Clear the entire cart
	clearCart: () => {
		set({ cart: [] })
		set({ total: 0 })
	},

	// Calculate the total price
	calculateTotal: () => {
		const total = get().cart.reduce(
			(sum, item) => sum + item.price * item.quantity,
			0
		)
		set({ total })
	}
}))
