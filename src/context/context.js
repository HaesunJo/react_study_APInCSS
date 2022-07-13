import axios from 'axios'
import React,{ createContext, useEffect, useState } from 'react'

export const ProductContext = createContext()

function ContextProvider(props) {

	const [loading, setLoading] = useState(false)
	const [product, setProduct] = useState([])

	useEffect(() => {
		setLoading("Loading products")

		const getProducts = "get",
					url = "https://dummyjson.com/products"

		axios({url, getProducts})
		.then((response) => {
			setProduct(response.data.products)
			setLoading("Data all set")
		})
		.catch((error) => {
			error = new Error()
			setLoading("Data fetching failed")
		})
	}, [])

	return (
		<ProductContext.Provider value={{ loading, product }}>
			{props.children}
		</ProductContext.Provider>
	)
}

export default ContextProvider