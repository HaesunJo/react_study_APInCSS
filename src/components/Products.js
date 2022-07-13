import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import { IconContext } from 'react-icons'

import * as BSIcons from 'react-icons/bs'

import StarRating from './Rating'

const Container = styled.div`
	width                : 100%;
	display              : grid;
	grid-template-columns: 15rem 15rem 15rem 15rem;
	grid-gap             : 2rem;
	justify-content      : center;
`

const BoxContainer = styled.div`
	width                : 100%;
	position             : relative;
	display              : grid;
	grid-template-columns: repeat(4, 1fr)
	grid-gap             : 20px;
`

const Box = styled.div`
	margin          : 10px auto;
	width           : 245px;
	height          : 190px;
	position        : flex;
	background-color: #fff;
	border-radius   : 10px;
	box-shadow      : 0px 4px 12px rgba(162, 162, 162, 0.2);
`

const ImgContainer = styled.div`
	width        : 100%;
	height       : 112px;
	border-radius: 10px;
`

const Img = styled.div`
	.thumbnail{
		img{
			width        : 100%;
			height       : 100%;
			object-fit   : cover;
			border-radius: 10px 10px 0 0;
		}
	}
`

const ProductContainer = styled.span`
	margin       : 7px 11px;
	width        : 220px;
	position     : absolute;
	white-space  : nowrap;
	overflow     : hidden;
	text-overflow: ellipsis;
`

const Title = styled.p`
	font-size: .9rem;
`

const Desc = styled.p`
	margin-top   : 3px;
	width        : 220px;
	position     : relative;
	font-size    : .8rem;
	white-space  : nowrap;
	overflow     : hidden;
	text-overflow: ellipsis;
	color        : #686868;
`

const Price = styled.p`
	margin-top: 10px;
	display   : inline-block;
	font-size : .8rem;
	// text-decoration-line: line-through;
`

const Rating = styled.span`
	margin-top: 10px;
	display   : inline-block;
	color     : #FFD12D;
	font-size : .8rem;
	float     : right;
`

function Products(id) {

	// const product = props.product

	const URL = `https://dummyjson.com/products`

	const [product, setProducts] = useState([])
	const [loading, setLoading] = useState(true);

	const getProducts = async () => {
		const list = await fetch(URL, {headers: { 'Content-Type': 'text/plain' }})

		// const list = await axios.get(URL, {headers: { 'Content-Type': 'text/plain' }})
		const json = await list.json()

		// console.log(json)
		setProducts(json.products)

	}

	useEffect(() => {
		getProducts()
		setLoading(false)
	}, [])


	// console.log(product)
	// async function getProducts() {
	// 	await axios('https://dummyjson.com/products')
	// 	.then((response) => {
	// 		setProducts(response.products)
	// 	})
	// 	.catch((error) => {
	// 		console.log('error fetching product data:', error)
	// 	})
	// 	.finally(() => {
	// 		setLoading(false)
	// 	})
	// }

	// const fetchProducts = async () => {
	// 	try {
	// 		setError(null)
	// 		setProducts(null)

	// 		setLoading(true)

	// 		const response = await axios.get('https://dummyjson.com/products')
	// 		setProducts(response.data.products)
	// 		console.log(response)
	// 	} catch(e) {
	// 		setError('error in products fetching', e)
	// 	}
	// 	setLoading(false)
	// }

	// useEffect(() => {
	// 	fetchProducts()
	// },[])

	// if (product.length < 0) return "Trying to get products"
	// if (loading) return "Loading products..."

	const toStars = () => {

		// let ratedNum = Math.round(product[0].rating)
		let ratedNum = [...product]
		// console.log(ratedNum)

		let temp = []

		// for (let i = 0; i < ratedNum.length; i++) {
		// 	let round = Math.round(product[i].rating)
		// 	console.log(i, round)

		// 	switch (round) {
		// 		case 1:
		// 			return '★'
		// 			break;

		// 		case 2:
		// 			return '★★'
		// 			break;

		// 		case 3:
		// 			return '★★★'
		// 			break;

		// 		case 4:
		// 			return '★★★★'
		// 			break;
					
		// 		case 5:
		// 			return '★★★★★'
		// 			break;

		// 		default:
					
		// 			break;
		// 	}
		// }

		// for (let i = 0, k = 1; i < product.length, k <= product[i].rating; i++, k++) {
		// for (let i = 0; i < product.length; i++) {
		// 	// console.log("count", i)
		// 	// console.log(product[i].rating)
		// 	// ratedNum = Math.round(product[k].rating)
		// 	ratedNum = Math.round(product[i].rating)
		// 	console.log("rated:", ratedNum, "count:", i)

		// 	if (ratedNum === 1) return '★'
		// 	else if (ratedNum === 2) return '★★'
		// 	else if (ratedNum === 3) return '★★★'
		// 	else if (ratedNum === 4) return '★★★★'
		// 	else return '★★★★★'
			
		// 	// return <BSIcons.BsStarFill />
		// 	// for (let k = 0; product[i].rating; k++) {
		// 	// 	console.log(k)
		// 	// }
		// 	// toStars.push(<BSIcons.BsStarFill key={i} />)
		// 	// <BSIcons.BsStarFill key={i} color='#FFD12D'/>
		// 	// console.log(Math.round(product[i].rating))
		// }

		// // console.log(toStars)
		// return toStars

		// if (0 <= ratedNum ) return <BSIcons.BsStarFill />
		// else if ((-1 < ratedNum && ratedNum < -0.5) || ratedNum <= -1 ) return <BSIcons.BsStar />
		// else if (-0.5 <= ratedNum && ratedNum < 0) return <BSIcons.BsStarHalf />
	}



	return (
		
			<Container className='items' id="products-list">
				{/* Uncaught Error: Objects are not valid as a React child 
				(found: object with keys {id, title, description, price, discountPercentage, 
					rating, stock, brand, category, thumbnail, images}). //-> 어떻게 접근??????? -> 함ㅋ 내가해냄ㅋ
				If you meant to render a collection of children, use an array instead. */}

				{product?.map((id, index) => {
					return (
						<BoxContainer key={index} id="product">
							{/* {index} : {id.title} / {id.brand} */}
							<Box className='items__info wrap'>
								<Img>
									<ImgContainer className='thumbnail' >
										<img src={ id.images[id.images.length - 1] } alt={ id.brand } />
									</ImgContainer>
								</Img>

								<ProductContainer className='items__info simple'>
									<Title>{ id.title }</Title>
									<Desc>{ id.description }</Desc>
									<Price>$ { id.price }</Price>
									{/* <StarRating name={id.rating} /> */}
									<StarRating rating={id.rating} />
									{/* <Rating>{toStars(id.rating)}</Rating> */}
								</ProductContainer>
							</Box>
						</BoxContainer>
					)
				})}
			</Container>
		
	)
}

export default Products