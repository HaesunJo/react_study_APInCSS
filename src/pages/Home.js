import React, { useContext } from 'react'

import Navbar from '../components/Navbar'
import Products from '../components/Products'

// import { ProductContext } from './components/context/context'

function Home() {
	
	// const {loading, product} = useContext(ProductContext)

	return (
		<>
			<Navbar />
			<Products />
		</>
	)
}

export default Home