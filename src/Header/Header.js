import Navbar from './Navbar'

const Header = () => {
	return (
		<>
			<h1 className='mb-4 text-3xl text-pink-800 md:text-4xl'>
				Family Wellness
			</h1>
			<p className='mb-4 text-xs tracking-widest uppercase md:text-sm'>
				Massage Therapy
			</p>
			<Navbar />
		</>
	)
}

export default Header
