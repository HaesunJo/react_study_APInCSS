import React, { Suspense} from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import Home from './pages/Home'

import './App.css'


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
