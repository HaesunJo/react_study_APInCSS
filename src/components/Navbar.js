import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
import * as FaIcons from 'react-icons/fi'
import * as IoIcons from 'react-icons/io5'
import { IconContext } from 'react-icons'

import './css/Navbar.css'

function Navbar() {

	const [sidebar, setSidebar] = useState(false)
	// const [overlay, setOverlay] = useState(false)
	const [menus, setMenus] = useState(null)
	const [currentMenu, setCurrentMenu] = useState(null)

	const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);


	const clickSidebar = () => setSidebar(!sidebar)
	// const isChecked = () => setOverlay(!overlay)

	const getCurrentMenu = (e) => {
		setCurrentMenu(e.target.menu)
	}

	useEffect((e) => {
		if(currentMenu !== null) {
			let current =  setCurrentMenu(currentMenu)
			current.style.color = '#FF6914'
		}
	}, [currentMenu])

	const fetchMenus = async () => {
		try {
			setError(null)
			setMenus(null)

			setLoading(true)

			const response = await axios.get('https://dummyjson.com/products/categories')
			setMenus(await response.data)
			// console.log(setMenus)
		} catch(e) {
			setError('error in menu fetching', e)
		}
		setLoading(false)
	}

	useEffect(() => {
		fetchMenus()
	}, [])

	if (!menus) return "Trying to get menus"
	if (loading) return "Loading menus..."
	if (error) return "Error!"

	const sidebarStyle = {
		boxShadow: '3px 4px 10px rgba(199, 199, 199, 0.21)'
	}

	// const overlayTrue = {
	// 	position: 'fixed',
	// 	top: 0,
	// 	left: 0,
	// 	backgroundColor: 'rgba(0, 0, 0, 0.5)',
	// 	opacity: 0
	// }

	return (
		<>
		<IconContext.Provider value={{ color: '#000'}}>
			<div className='navbar'>
				<Link to="#" className='btn__menu btn_open'>
					<FaIcons.FiMenu onClick={clickSidebar} />
				</Link>	
			</div>
			<nav className={sidebar ? 'nav__menu active' : 'nav__menu'} style={sidebarStyle}>
				<ul className='nav__menu_items' onClick={clickSidebar}>
					<li className='navbar_toggle'>
						<Link to='#' className='btn__menu btn_close'>
							<IoIcons.IoCloseSharp />
						</Link>
					</li>
					<li>
						<Link to='#' className='menu_all'
						onClick={getCurrentMenu}
						>
							all
						</Link>
					</li>
					{menus.map((menu) => (
						<li className='navbar_toggle' key={menu}>
							<Link to='#'> {menu} </Link>
						</li>
					))}
				</ul>
			</nav>
				{/* <div className={overlay ? 'true' : ''} onClick={isChecked}>
				</div> */}
			</IconContext.Provider>
		</>
	)
}

export default Navbar