import React, { useState } from 'react'
import {AiOutlineSearch, AiOutlineShoppingCart} from 'react-icons/ai'
import './Styles/Header.css'
import NavBar from './NavBar'
import { Routes, Route, Link } from 'react-router-dom'
import Cart from './Cart'
import Details from './Details'


function Header() {
    const [searchvalue,setSerachvalue] = useState('')
  return (
    <>
    <header>
        <div className='NavBar' >
            <h3>REACT STORE</h3>
            <div className='search-bar'>
                <input type='text' placeholder='SEARCH...' onChange={e => {setSerachvalue(e.target.value)}}  />
                <AiOutlineSearch />
            </div>      
            <Link to='/Cart' > 
            <div className='cart' >
                <AiOutlineShoppingCart size={25}/> 
                <p>Shoping Cart</p>
            </div>
            </Link>
                

           
        </div>
        <div className='NavBar-2'>
            <ul>
                <li><Link to=''>HOME</Link></li>
                <li>CATEGORIES</li>
                <li>CONATCT</li>
            </ul>
        </div>
    </header>
    <Routes>
        <Route path="/" element={ <NavBar searchvalue={searchvalue} />} />
        <Route path="/Cart" element={ <Cart />} />
        <Route path='/details' element={< Details />} />


    </Routes>
        

    
    </>
  )
}

export default Header