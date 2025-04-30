"use client"
import React from 'react'
import Slider from "react-slick"
import Cards from '@components/Cards'

import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"

const Carrousel = () => {
	const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3
  };
	return (
		<div className="slider-container">
		<Slider {...settings}>
			<div>
				<Cards />
			</div>
			<div>
				<Cards />
			</div>
			<div>
			<Cards />
			</div>
		</Slider>
	</div>
	)
}

export default Carrousel