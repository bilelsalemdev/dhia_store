import React from 'react'
import 'react-responsive-carousel/lib/styles/carousel.min.css'
import { Carousel } from 'react-responsive-carousel'

const Slider = ({ images }) => {
	return (
		<Carousel
			autoPlay
			infiniteLoop
			interval={6000}
			showStatus={false}
			showIndicators={false}
			showThumbs={images && images.length === 1 ? false : true}
		>
			{images &&
				images.map((image) => (
					<div key={image._id}>
						<img src={process.env.REACT_APP_API_URL + image.path} alt='product' className='w-100' />
					</div>
				))}
		</Carousel>
	)
}

export default Slider
