import React from 'react'
import logo from '../../assets/logo-removebg-preview.png'

function Footer() {
    return (
        <div>
            <div className="bg-base-300 py-7"></div>
            <footer className='py-16 bg-neutral'>
                <div className="container mx-auto">
                    <div className="md:flex md:justify-center">
                        <div className="md:w-1/4 p-3">
                            <div className="flex justify-center">
                                <img src={logo} className='rounded-xl' alt='logo'/>
                            </div>  
                        </div>
                        <div className="md:w-1/4 p-3">
                            <h4 className="text-accent font-bold text-center text-2xl mb-4">Funding, Support & Partnership</h4>
                            <p className="text-sm text-white text-center">
                            The Cooperative Society seek for a mutual partnership towards moral and financial support from a network of private corporate entities, government corporations/entities, county governments, national government, international donor agencies, foreign embassies, religious organizations, foundations/charities, individual well-wisher and its members to fund its  proposed activities  and embark on the arduous task of institutionalizing itself.
                            </p>
                        </div>
                        <div className="md:w-1/4 p-3">
                            <h4 className="text-accent font-bold text-center text-2xl mb-4">Usefull Links</h4>
                            <div className="space-y-2 text-center">
                                <p className="text-gray-300 hover:text-secondary"><a href="/">Home</a></p>
                                <p className="text-gray-300 hover:text-secondary"><a href="/about">About</a></p>
                                <p className="text-gray-300 hover:text-secondary"><a href="/order">Order</a></p>
                                <p className="text-gray-300 hover:text-secondary"><a href="/livestock">Livestock</a></p>
                                <p className="text-gray-300 hover:text-secondary"><a href="/team">The Team</a></p>
                                <p className="text-gray-300 hover:text-secondary"><a href="/programs">Programs</a></p>
                                <p className="text-gray-300 hover:text-secondary"><a href="/contact">Contact Us</a></p>                                
                            </div>  
                        </div>
                        
                        <div className="md:w-1/4 p-3">
                            <h4 className="text-accent font-bold text-center text-2xl mb-4">Contacts</h4>
                            <div className="text-center">
                                <div className="text-white text-lg mb-4">
                                    We are located at:
                                    <div>LAMU PORT, LAPSEET PLAZA,  LAMU COUNTY</div>
                                </div>
                                <p className="text-accent text-xl mb-4 font-bold">Get Us On</p>
                                <p className="text-white">+254723971374</p>
                                <p className="text-white mb-2">+254722585917</p>
                                <p className="text-white">sales@lapssetlivestock.com</p>
                                <p className="text-white">info@lapssetlivestock.com </p>
                            </div>  
                        </div>
                    </div>
                </div>
            </footer>
            <div className="py-7 px-3 bg-black">
                <p className="text-white text-lg text-center">Copyright &copy; AbakusTech 2023</p>
            </div>
        </div>
    )
}

export default Footer