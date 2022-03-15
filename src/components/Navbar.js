import { useState } from 'react'
import { useSelector } from 'react-redux'

function Navbar({ toggleDarkMode, styles }) {

    const cart = useSelector(state => state.cartHandle)

    return (
        <nav style={styles} className='navbar'>
            <a href='/' className='title'>The shop.</a>
            <div className='nav-buttons'>
                <a href='/'>Home</a>
                <a>Products</a>
                <a>About</a>
                <a>Contact</a>
            </div>
            <div className='login-buttons'>
                <a onClick={toggleDarkMode}>Dark mode</a>
                <a href='/cart' className='cart'><i className="fa-solid fa-cart-shopping"></i></a>
                <p className='cart-num'>{cart.count}</p>
            </div>
        </nav>
    )
}

export default Navbar