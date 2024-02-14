import React from 'react'
import { Helmet } from 'react-helmet'
import camel from '../assets/camel1.jpeg'
import bull from '../assets/cow_pic.jpg'
import meat1 from '../assets/mbuzi_mpya.jpg'
import sheep from '../assets/sheep_pic.jpg'

function LivestockPage(props) {
    return (
        <div>
            <Helmet>
                <title>Our Livestock ~ LAPSSET-LMCSL</title>
            </Helmet>
            <h1 className="text-center text-accent text-4xl font-bold mt-7 mb-9">Our Livestock</h1>
            <div className="px-3 mb-7">
                <h2 className="text-3xl mb-7 text-accent text-center">Camels</h2>
                <div className="md:flex md:justify-center gap-9">
                    <div className="md:w-4/12 mb-3">
                        <img src={camel} alt='camel' className='rounded-xl h-90'/>
                    </div>
                    <div className="md:w-5/12">
                        <p className="mb-3">
                            Various camel breeds exist in Kenya and are classified based on specific geographical distribution and ethnic groups owning them . The ASAL communities 
                            distinguish the camel breeds into four main groups: -  
                            Garissa Wajir Isiolo, Mandera, Marsabit, Turkana, Laikipia and Tana River.
                        </p>
                        <p className='mb-3'>Also, an imported breed of Pakistani camels is reared in Laikipia ranches.</p> 
                        <p className="">
                        The  camel  weigh between 250 and 500 kgs (live weight) and have a standing height of about 1.7 meters when mature. These breed are the most resilient and hardy compared to all other breeds in Kenya . They can climb steep lava hills and are least affected by feed scarcity.
                        </p>  
                    </div>
                </div>
            </div>
            <div className="px-3 mb-7">
                <h2 className="text-3xl mb-7 text-accent text-center">Bulls</h2>
                <div className="md:flex md:justify-center gap-9">
                    <div className="md:w-4/12 mb-3">
                        <img src={bull} alt='camel' className='rounded-xl h-90'/>
                    </div>
                    <div className="md:w-5/12">
                        <p className="mb-3">
                            Height of typical mature bull: 117-147 cm at withers
                            Height of typical mature cow: 114-127 cm at withers
                            Typical carcass weight off grass: 230-260 kg dressed weight with 52% dressing percentage
                            Weight of typical mature bull: 500 kg to 850 kg
                            Weight of typical mature cow: 380 kg to 450 kg.
                        </p>
                        <p className=''>
                            Steers reared on grass: ready for slaughter between 3 to 3.5 yrs (36 -42 months) 420-460 kg
                            Steers, supplementary fed: ready for slaughter between 18 to 22months @ 380 to 400 kg
                            On average cows calve once a year: potentially 11 months (higher than other indicus breeds)
                            Average weight gains per day on grass and feedlot: Grass = 0.7 kg – 1.0 kg per day depending on grass quality. 
                            Feedlot = 1.3 kg per day depending on type of cross used (this was found at a recent trial at Marania Farm – Timau where using Boran cross Angus steers and heifers)
                        </p>  
                    </div>
                </div>
            </div>
            <div className="px-3 mb-7">
                <h2 className="text-3xl mb-7 text-accent text-center">Sheep</h2>
                <div className="md:flex md:justify-center gap-9">
                    <div className="md:w-4/12 mb-3 flex justify-center">
                        <img src={sheep} alt='camel' className='rounded-xl h-90'/>
                    </div>
                    <div className="md:w-5/12">
                        <p className="mb-3">
                            They are docile animals easy to handle with females weighing up to 45 – 55kg and males up to 70kg. The females have a long lifespan of up to 10 years of age. 
                            They do not do well in hot climate but thriving best in low altitude areas. After a long dry spell they compensate for the loss of in body condition for by a high growth.
                        </p>
                        <p className='mb-7'>
                            The breed is resistant to gastro-intestinal parasites, some infectious diseases and tolerates drought. The breed has played an important role in the development of the 
                            Kenya Dual Purpose Goat and has also been found to be better foundation stock than the Small East African sheep for breeding.
                        </p>
                    </div>
                </div>
            </div>
            <div className="px-3 mb-7">
                <h2 className="text-3xl mb-7 text-accent text-center">Goats</h2>
                <div className="md:flex md:justify-center gap-9">
                    <div className="md:w-4/12 mb-3">
                        <img src={meat1} alt='camel' className='rounded-xl h-90'/>
                    </div>
                    <div className="md:w-5/12">
                        <p className="mb-3">
                            They are docile animals easy to handle with females weighing up to 45 – 55kg and males up to 70kg. The females have a long lifespan of up to 10 years of age. 
                            They do not do well in hot climate but thriving best in low altitude areas. After a long dry spell they compensate for the loss of in body condition for by a high growth.
                        </p>
                        <p className=''>
                            The breed is resistant to gastro-intestinal parasites, some infectious diseases and tolerates drought. T The breed has played an important role in the development of the 
                            Kenya Dual Purpose Goat and has also been found to be better foundation stock than the Small East African goat for breeding.
                        </p> 
                    </div>
                </div>
            </div>            
            <div className="flex justify-center mb-12">
                <a href="/order" className='btn btn-primary btn-wide'>Place Order</a>
            </div>
        </div>
    )
}

export default LivestockPage