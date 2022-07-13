import React, { Suspense, lazy, useContext } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import Home from './pages/Home'
// import { ProductContext } from './components/context/context'

import './App.css'

// const Navbar = lazy(() => import('./components/Navbar'))


const App = () => {


	return (
		<>
		<Router>
			<Suspense fallback={<div>Loading...</div>}>
				<Routes>
					<Route path='/' element={<Home />} />
				</Routes>
			</Suspense>
		</Router>
		</>
	);
}

export default App;
