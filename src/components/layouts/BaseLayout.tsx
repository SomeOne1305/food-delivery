import TopLoader from 'nextjs-toploader'
import { PropsWithChildren } from 'react'
import Footer from '../Footer'
import Navbar from '../Navbar'

export default function BaseLayout({ children }: PropsWithChildren) {
	return (
		<div className='w-full '>
			<TopLoader color='#FF006B' height={3} showSpinner={false} />
			<Navbar />
			<div className='w-full min-h-screen'>{children}</div>
			<Footer />
		</div>
	)
}
