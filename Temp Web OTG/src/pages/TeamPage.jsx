import React from 'react'
import { Helmet } from 'react-helmet'
import chair from '../assets/chairman.png'
import vice from '../assets/vice.png'
import sec from '../assets/sec.png'
import commite from '../assets/commite.png'

function TeamPage(props) {
    return (
        <div>
            <Helmet>
                <title>The Team ~ LAPSSET-LMCSL</title>
            </Helmet>
            <h1 className="text-center text-accent text-4xl font-bold mt-7 mb-9">The Team</h1>
            <div className="bg-primary mb-7 py-20">
                <div className="container mx-auto">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4 lg:gap-5">
                        <div className="">
                            <div className="card card-compact card-bordered bg-base-100 hover:shadow-xl">
                                <img src={chair} alt="beef" className='rounded-t-xl h-52 md:h-80'/>
                                <div className="card-body">
                                    <h4 className="text-center text-accent font-bold text-2xl mb-3">CHAIRMAN</h4>
                                    <h4 className="text-center font-bold text-1xl">IBRAHIM GOLLO</h4>
                                </div>
                            </div>
                        </div>
                        <div className="">
                            <div className="card card-compact card-bordered bg-base-100 hover:shadow-xl">
                                <img src={vice} alt="beef" className='rounded-t-xl h-52 md:h-80'/>
                                <div className="card-body">
                                    <h4 className="text-center text-accent font-bold text-2xl mb-3">VICE CHAIRMAN</h4>
                                    <h4 className="text-center font-bold text-1xl">MOHAMED DIKA</h4>
                                </div>
                            </div>
                        </div>
                        <div className="">
                            <div className="card card-compact card-bordered bg-base-100 hover:shadow-xl">
                                <img src={sec} alt="beef" className='rounded-t-xl h-52 md:h-80'/>
                                <div className="card-body">
                                    <h4 className="text-center text-accent font-bold text-2xl mb-3">SECRETARY</h4>
                                    <h4 className="text-center font-bold text-1xl">MOHAMED ABDUL ABDI</h4>
                                </div>
                            </div>
                        </div>
                        <div className="">
                            <div className="card card-compact card-bordered bg-base-100 hover:shadow-xl">
                                <img src={commite} alt="beef" className='rounded-t-xl h-52 md:h-80'/>
                                <div className="card-body">
                                    <h4 className="text-center text-accent font-bold text-2xl mb-3">COMMITTEE MEMBER</h4>
                                    <h4 className="text-center font-bold text-1xl">AHMED DAHIR</h4>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="py-9">
                <div className="px-3 mb-7">
                    <h2 className="text-3xl mb-5 text-accent text-center">CHAIRMAN</h2>
                    <div className="md:flex md:justify-center gap-5">
                        <div className="md:w-4/12 mb-3 flex justify-center">
                            <img src={chair} alt='camel' className='rounded-xl h-72'/>
                        </div>
                        <div className="md:w-5/12">
                            <div className="font-bold text-success mb-4 text-2xl">IBRAHIM GOLLO</div>
                            <p className="mb-3">
                                Mr Ibrahim Gollo is a renowned advocate of human rights from northern Kenya who has worked for over 15 years in various 
                                Non-Governmental Organizations in different capacities. He has been Program Manager with Global Child Hope, Kenya Minority 
                                Rights and Development Forum, Human Rights Program Officer with National Aid for Pastoralists Change and the Chairman of the Forum of 
                                National Ethnic Minorities and Marginalized Communities of Kenya under the auspice of Centre For Multiparty Democracy of Kenya (CMD-KENYA).
                            </p>
                            <p className='mb-3'>
                                Implemented projects for various organization and UN Agencies such as UNFPA-Kenya, International Organization for Migration, Centre For 
                                Multiparty Democracy, American Bar Association (ABA-AFRICA) Kenya Human Rights Commission (KHRC) USA Embassy in Kenya, Ford Foundation Kenya 
                                and Institute of International Education, New York.
                            </p> 
                        </div>
                    </div>
                </div>
                <div className="px-3 mb-7">
                    <h2 className="text-3xl mb-5 text-accent text-center">VICE CHAIRMAN</h2>
                    <div className="md:flex md:justify-center gap-5">
                        <div className="md:w-4/12 mb-3 flex justify-center">
                            <img src={vice} alt='camel' className='rounded-xl h-72'/>
                        </div>
                        <div className="md:w-5/12">
                            <div className="font-bold text-success mb-4 text-2xl">MOHAMED DIKA</div>
                            <p className="mb-3">
                                Mohamed Dika is a retired Adult Education Teacher who is currently working with pastoralist communities as a social worker. He is a local community 
                                representative in community development projects undertaken by various local and international development agencies in Lamu County.
                            </p>
                        </div>
                    </div>
                </div>
                <div className="px-3 mb-7">
                    <h2 className="text-3xl mb-5 text-accent text-center">SECRETARY</h2>
                    <div className="md:flex md:justify-center gap-5">
                        <div className="md:w-4/12 mb-3 flex justify-center">
                            <img src={sec} alt='camel' className='rounded-xl h-72'/>
                        </div>
                        <div className="md:w-5/12">
                            <div className="font-bold text-success mb-4 text-2xl">MOHAMED ABDUL ABDI</div>
                            <p className="mb-3">
                                Mr. Mohamed Mohamed Abdi is holder of bachelor degree Business administration  and  a holder of    leadership diploma. He has 20years  working experience in 
                                various fields such  as constructions companies  as clerk and later  to security supervisor e.g. kirdam consortium from Italy. Also worked in energy sectors for over 
                                15years as quality Marshall, station supervisor, sales manager and later as station Manager in different places. Currently a security director and business Man. He is 
                                also experienced in providing financial and technical leadership on policy, advocacy, governance and development frame work. He is a very strong demonstrator when providing 
                                strategic policy direction for improved skills and responsible accountability.
                            </p>
                        </div>
                    </div>
                </div>
                <div className="px-3 mb-7">
                    <h2 className="text-3xl mb-5 text-accent text-center">COMMITTEE MEMBER</h2>
                    <div className="md:flex md:justify-center gap-5">
                        <div className="md:w-4/12 mb-3 flex justify-center">
                            <img src={commite} alt='camel' className='rounded-xl h-72'/>
                        </div>
                        <div className="md:w-5/12">
                            <div className="font-bold text-success mb-4 text-2xl">AHMED DAHIR</div>
                            <p className="mb-3">
                                Ahmed Dahir is a young religious scholar, community worker and a livestock businessman for over 5 years. He is the director of City Light High School, Mandera Youth Representative, 
                                Treasurer of all Imums of Embakasi and former Imum/ leader of Donholm mosque in Nairobi.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default TeamPage