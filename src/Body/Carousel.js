import carousel1 from '../assets/c-1.jpg'
import carousel2 from '../assets/c-2.jpg'
import Slider from 'react-slick'

import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

const Carousel = () => {
	const settings = {
		infinite: true,
		speed: 500,
		slidesToShow: 1,
		slidesToScroll: 1,
	}
	return (
		<div>
			<Slider {...settings}>
				<img src={carousel1} alt='Counselling' />
				<img src={carousel2} alt='Counselling' />
			</Slider>
		</div>
	)
}

export default Carousel
