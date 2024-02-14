import React from 'react'
import logo from '../../assets/fin_logo.png'

function NavBar(props) {
    return (
        <div className="bg-base-200 py-2 md:py-3">
            <div className="container mx-auto">
                <div className="navbar ">
                    <div className="navbar-start">
                        <div className="dropdown">
                            <label tabIndex={0} className="btn btn-ghost md:hidden">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                            </label>
                            <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                                <li><a href='/'>Home</a></li>
                                <li><a href='/about'>About</a></li>
                                <li><a href="/livestock">Our Livestock</a></li>
                                <li><a href='/programs'>Programs</a></li>
                                <li><a href='/order'>Place Order</a></li>
                            </ul>
                        </div>
                        <a href='/' className="btn btn-ghost btn-sm">
                            <img src={logo} alt="logo" className='h-10'/>
                            LAPSSET-LMCSL
                        </a>
                    </div>
                    <div className="navbar-center hidden lg:flex">
                        <ul className="menu menu-horizontal px-1">
                            <li><a href='/'>Home</a></li>
                            <li><a href='/about'>About</a></li>
                            <li><a href="/livestock">Our Livestock</a></li>
                            <li><a href='/programs'>Programs</a></li>
                            <li><a href='/order'>Place Order</a></li>
                        </ul>
                    </div>
                    <div className="navbar-end">
                        <a href='/contact' className="btn btn-primary btn-sm">Talk To us</a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default NavBar