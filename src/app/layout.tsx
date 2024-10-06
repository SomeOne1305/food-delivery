import BaseLayout from '@/components/layouts/BaseLayout'
import type { Metadata } from 'next'
import { Rubik } from 'next/font/google'
import 'swiper/css'
import 'swiper/swiper-bundle.css'
import './globals.css'

const font = Rubik({ subsets: ['latin'] })

export const metadata: Metadata = {
	title: 'Home | FoodKing',
	description: '№ 1 Food deliver in Surkhandarya',
}

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode
}>) {
	return (
		<html lang='en'>
			<body className={font.className}>
				<BaseLayout>{children}</BaseLayout>
			</body>
		</html>
	)
}
