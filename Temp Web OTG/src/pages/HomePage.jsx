import React from 'react'
import { Helmet } from 'react-helmet'
import Carausel from '../components/home/Carausel'
import Products from '../components/home/Products'
import Order from '../components/home/Order'
import Count from '../components/home/Count'

function HomePage() {
    return (
        <div>
            <Helmet>
                <title>Home ~ LAPSSET-LMSC</title>
            </Helmet>
            <div className='mt-3 mb-6'>
                <Carausel/>
            </div>
            <h1 className="text-center text-3xl text-accent font-bold mt-16 mb-7">LAPSET LIVESTOCK MARKETING COOPERATIVE SOCIETY LIMITED</h1>
            <div className='md:flex md:justify-center md:space-x-3 py-7 md:items-center'>
                <div className="md:w-5/12 ">
                    <h3 className="text-accent font-bold text-center text-3xl mb-3">Who are we?</h3>
                    <p className="text-center text-md mb-3">
                        Lapsset Livestock Marketing Cooperative Society Limited is an individual and group membership society bringing together all local livestock producers, traders and key livestock 
                        stakeholders along the Lapsset corridor with the sole aim of organizing, promoting, developing, sustaining, and improving on livestock production and marketing for export & local 
                        livestock trade, mainly for the welfare and economic benefits of the local livestock’s producers, traders and stakeholders who are the members of the society.
                    </p>
                    <p className="text-center text-md mb-3">
                        The cooperative covers the following major livestock producing Counties of; <span className='font-bold text-info'>Lamu and its environs, Garissa, Wajir, Isiolo, Mandera, Marsabit, Turkana, Laikipia and Tana River</span>.
                    </p>
                    
                </div>
                <div className="md:w-5/12 md:flex md:items-center">
                    <div className="">
                        <h3 className="text-accent font-bold text-center text-3xl mb-3">Our MOTTO:</h3>
                        <p className="text-center text-md mb-5">
                            Let us Hustle with our Livestock.
                        </p>
                        <h3 className="text-accent font-bold text-center text-3xl mb-3">Our Mision:</h3>
                        <p className="text-center text-md mb-5">
                        The main objectives for which the society was established are to   organize, develop, maintain and improve livestock production and marketing for the welfare are and  economic  interest of the local livestock’s producers, traders and stakeholders who are the members of the society along the lapsset corridor.
                        </p>
                    </div>
                </div>
            </div>
            <Products/>
            <Order/>
            <Count/>
        </div>
    )
}

export default HomePage