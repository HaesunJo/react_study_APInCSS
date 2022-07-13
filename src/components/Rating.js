import React from 'react'
import './css/StarRating.css'

function Rating(product) {

	const divStyle = {
		marginTop: '10px',
		display  : 'inline-block',
		color    : '#FFD12D',
		fontSize : '.8rem',
		float    : 'right',
	}

	// const {rating} = product
	const stars = (product) => {
		// let ratedNum = Math.round(props.name)
		for ( let i = 0; i < product.length; i++)	{
			console.log(product[i].rating) // no result
		}

		console.log(product.rating) // undefined
	}

	return (
		<div className="stars" data-name={Math.round(product.rating)} style={divStyle}>
			{stars(product.rating)}
		</div>
	)
}

export default Rating