import React from 'react'
import { Helmet } from 'react-helmet'
import {GrServices} from 'react-icons/gr'
import {VscWorkspaceTrusted, VscStarFull} from 'react-icons/vsc'

function AboutPage() {
    return (
        <div>
            <Helmet>
                <title>About ~ LAPSSET-LMCSL</title>
            </Helmet>
            <h1 className="text-center text-accent text-4xl font-bold mt-7 mb-9">About Us</h1>
            <h3 className="text-primary font-bold text-center text-3xl mb-3">Our MOTTO:</h3>
            <p className="text-center text-md mb-5">
                Let us Hustle with our Livestock.
            </p>
            <p className="text-center font-bold text-2xl mb-5 uppercase text-primary">Our Mission</p>
            <div className="flex justify-center mb-5">
                <div className="w-9/12 md:w-8/12 lg:w-7/12">
                    <p className="text-center">
                    The main objectives for which the society was established are to   organize, develop, maintain and improve livestock production and marketing for the welfare are and  economic  interest of the local livestock’s producers, traders and stakeholders who are the members of the society along the lapsset corridor.
                    </p>
                </div>
            </div>
            <p className="text-center font-bold text-2xl mb-5 uppercase text-primary">Objectives</p>
            <div className="flex justify-center mb-12">
                <div className="w-9/12 md:w-8/12 lg:w-7/12">
                    <p className="text-center mb-3">
                        To arrange for the cooperative and members livestock and products for marketing, grading, processing, packing, transportation and such other operations/activities as may be necessary for the most profitable disposal. For local and export markets standards and quality.
                    </p>
                    <p className="text-center mb-3">
                    	Organize and bring together through a cluster group all members’ livestock together along the corridor to ensure credible supply of livestock/animals to met foreign demand for export along the corridor and Lamu International Port.
                    </p>
                    <p className="text-center mb-3">
                    	Sensitise and create awareness among the pastoralist communities , stakeholders and opinion leaders  about LAPSSET PROJECT and  livestock business opportunities and accrue benefits of the lapsset project to the region.
                    </p>
                    <p className="text-center mb-3">
                    	To undertake livestock management and marketing research and dissemination information to the   members and the local communities along the lapsset corridor.
                    </p>
                    <p className="text-center  mb-3">
                    	To foster education and training on livestock management and marketing to the members, committees’ members and the employees of the cooperative.
                    </p>
                </div>
            </div>
            {/* <p className="text-center font-bold text-2xl mb-5 uppercase text-primary">Centralized Livestock Market: Local & Export </p>
            <div className="flex justify-center mb-5">
                <div className="w-9/12 md:w-8/12 lg:w-7/12">
                    <p className="text-center  mb-3">
                        All the local livestock farmers shall supply and sell their animals at the market.
                    </p>
                    <p className="text-center  mb-3">
                        Livestock Producers cluster shall be establish and mobilized for the supply of the animals to the market to ensure a credible supply of animals.
                    </p>
                    <p className="text-center  mb-3">
                        Cross border Livestock clusters shall be formed to ensure supply of livestock from the neighbouring countries of Ethiopia, Somalia and Sudan shall access the market in time to boast steady and credible supply of livestock into lamu for export
                    </p>
                    <p className="text-center  mb-3">
                        Specific market days/timetable shall be established for both local and foreign buyers and livestock producers to access secondary market.
                    </p>
                    <p className="text-center  mb-3">
                        No middlemen and brokers who control  the access to secondary market to exploit both livestock producers and local and foreign buyers
                    </p>
                </div>
            </div> */}
            <div className="flex justify-center">
                <div className="w-9/12 md:w-8/12 lg:w-7/12">
                    <p className="text-center font-bold text-2xl mb-5 uppercase text-primary">SIGNIFICANCE OF THE LAPSSET PROJECT AND LASSET LIVESTOCK MARKETING COOPERATIVE  SOCIETY LIMITED</p>
                </div>
            </div>
            <div className="flex justify-center mb-12">
                <div className="w-11/12 md:w-10/12 lg:w-9/12">
                    <p className="text-center mb-3">
                        Ethiopian Prime Minister Meles Zenawi and South Sudan’s President Salva Kiir. Lapset project and lapsset Cooperative Society Limited formed by local livestock  stakeholders   are   destined to improve 
                        the general economy of Northern Kenya and Coastal counties by reviving livestock industry, increases income, employment, transfer of skills ,boast food security, increase tourism, reduce insecurity and 
                        conflicts  and expand opportunities to reduce local community’s vulnerability along the lapsset corridor. Besides changing the livelihoods of the communities along the corridor, lapsset project and Lapsset 
                        Livestock Marketing Cooperative Society limited shall increase revune collection across counties along the corridor especially the Lamu county and foreign income for the national government.
                    </p>
                    <p className="text-center mb-3">
                        Further the cooperative society livestock businesses and farming activities along the lapsset corridor shall boast the visibility and use of the Lamu international port, makes Lamu County and its environs which 
                        is ideal for livestock production and the lamu port which is ideal for the live livestock export because of it is closeness to the key animal production areas of northern Kenya, as the hub of livestock production, 
                        businesses and export in Kenya.
                    </p>
                </div>
            </div>
            
            <p className='text-center font-bold text-2xl mb-3 text-primary'>OUR CORE VALUES</p>
            <div className="container mx-auto">
                <div className='md:flex md:justify-center mb-20'>
                    <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-3">
                        <div className="p-3 rounded-box border border-accent">
                            <div className="flex justify-center mb-6">
                                <VscStarFull className="h-14 w-14"/>
                            </div>
                            <p className="text-center font-bold text-accent text-lg mb-4">Quality</p>
                            <p className="text-center text-md">
                                Provide healthy and quality standard livestock and livestock products for export and local trade
                            </p>
                        </div>
                        <div className="p-3 rounded-box border border-accent">
                            <div className="flex justify-center mb-6">
                                <GrServices className="h-14 w-14"/>
                            </div>
                            <p className="text-center font-bold text-accent text-lg mb-4">Service</p>
                            <p className="text-center text-md">
                                Timely supply of health and quality standards of livestock and livestock products for export and local trade
                            </p>
                        </div>
                        <div className="p-3 rounded-box border border-accent">
                            <div className="flex justify-center mb-6">
                                <VscWorkspaceTrusted className="h-14 w-14"/>
                            </div>
                            <p className="text-center font-bold text-accent text-lg mb-4">Trust</p>
                            <p className="text-center text-md">
                                Credible, reliable and customer friendly relationship
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AboutPage