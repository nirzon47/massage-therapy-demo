const Navbar = () => {
	return (
		<nav className='w-full mb-4'>
			<ul className='flex flex-wrap items-center gap-0 m-0 sm:justify-center'>
				{['Home', 'About', 'Services', 'FAQ', 'Contact'].map((item) => {
					if (item === 'Home') {
						return (
							<li className='flex-grow py-2 text-sm font-medium text-center text-white uppercase duration-200 bg-pink-700 cursor-pointer hover:bg-pink-800'>
								{item}
							</li>
						)
					} else {
						return (
							<li className='flex-grow py-2 text-sm font-medium text-center text-white uppercase duration-200 bg-gray-500 cursor-pointer hover:bg-gray-600'>
								{item}
							</li>
						)
					}
				})}
			</ul>
		</nav>
	)
}

export default Navbar
