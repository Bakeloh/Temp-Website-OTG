import React from 'react'
import { Helmet } from 'react-helmet'
import bulls from '../assets/fat_bull.jpg'
import hay from '../assets/hay_images.jpeg'
import market from '../assets/market.jfif'
import holding_ground from '../assets/borana_holding ground.jpg'

function ProgramsPage() {
    return (
        <div>
            <Helmet>
                <title>Programs ~ LAPSSET-LMSC</title>
            </Helmet>
            <div className="mt-7 md:gap-3 mb-20">
                <div className="px-3 mb-7">
                    <h1 className="text-3xl mb-7 text-accent text-center">Livestock Fattening</h1>
                    <div className="md:flex md:justify-center gap-9">
                        <div className="md:w-4/12 mb-3">
                            <img src={bulls} alt='animal fattening' className='rounded-xl h-90'/>
                        </div>
                        <div className="md:w-5/12">
                            <p className="mb-7 ">
                                Bull fattening and cattle pen fattening involves the feeding of beef cattle with a protein balanced, high energy diet for specific period, usually 90 days, 
                                under confinement to increase weight and improve animal health to obtain better quality of beef for export. Since most of the animals along the corridor walk 
                                for long distances in search for water and pasture and during the transportation to the market  they  loss considerable weight and  fail to met average weight 
                                for export. Lapsset Livestock Marketing Cooperative Society Limited shall undertake fattening program to prepare members livestock for quality export.
                            </p>  
                        </div>
                    </div>
                </div>
                <div className="px-3 mb-7">
                    <h1 className="text-3xl mb-7 text-accent text-center">Hay Farming</h1>
                    <div className="md:flex md:justify-center gap-9">
                        <div className="md:w-4/12 mb-3">
                            <img src={hay} alt='animal fattening' className='rounded-xl'/>
                        </div>
                        <div className="md:w-5/12">
                            <p className="mb-7 ">
                                Feed and fodder production, supply and feeding practices are among the most important constraints on 
                                the development of the livestock industry along the corridor. Increasing fodder supply, supported by 
                                advice provided to farmers on feed ration balancing has great potential to enable farmers to increase on 
                                livestock productivity and quality, reduce the number of livestock death during the drought or the dry season 
                                and increase incomes per household .the association seek to undertake hay farming and construct major hay stores 
                                for quality preservation and adequate supply for livestock feedings for fattening, emergencies/drought and commercial purposes.
                            </p>
                        </div>
                    </div>
                </div>
                <div className="px-3 mb-7">
                    <h1 className="text-3xl mb-7 text-accent text-center">Construction of livestock holding & grazing area.</h1>
                    <div className="md:flex md:justify-center gap-9">
                        <div className="md:w-4/12 mb-3">
                            <img src={holding_ground} alt='animal fattening' className='rounded-xl'/>
                        </div>
                        <div className="md:w-5/12">
                            <p className="mb-7 ">
                                An important complementary resource to livestock themselves is land. The calculation of land availability and of land livestock ratios 
                                is only meaningful if the quality and availability of the land is taken into account. The society seek land for an open grazing areas for 
                                the livestock, fattening of livestock, quarantine, hay farming, construction of the market centers, watering points and  other physical 
                                infrastructural development  for the livestock sustainability till they are ready for local and export marketing.
                            </p>
                        </div>
                    </div>
                </div>
                <div className="px-3 mb-7">
                    <h1 className="text-3xl mb-7 text-accent text-center">Construct Market Centers & Credible Supply Of Livestock</h1>
                    <div className="md:flex md:justify-center gap-9">
                        <div className="md:w-4/12 mb-3">
                            <img src={market} alt='animal fattening' className='rounded-xl'/>
                        </div>
                        <div className="md:w-5/12">
                            <p className="mb-3">
                                Central Livestock Market Centres shall be constructed along the corridor for the strategic market access by the livestock producers and traders for export and local sale of livestock.
                            </p>
                            <p className="mb-3">
                                Livestock Producers clusters shall be establish at various community levels for animal mobilization to the market to  ensure a credible supply of animals for export and local needs
                            </p>
                            <p className="mb-3">
                                Formation of Cross border Livestock clusters to ensure supply of livestock from neighbouring countries such as Ethiopia, Somalia and Sudan to access the market in time to boast steady and credible supply of livestock for export and local trade.
                            </p>
                            <p className="mb-3">
                                Dominances of livestock markets by cartels and middlemen at primary and secondary markets to the disadvantages of the livestock producers, traders and exporters.
                            </p>
                        </div>
                    </div>
                </div>
                <div className="px-3 mb-7">
                    <div className="flex justify-center">
                        <div className="w-10/12 md:w-9/12 lg:w-7/12">
                            <h1 className="text-3xl mb-7 text-accent text-center">Raising Awareness On LAPSSET Project Among Communities Along The Corridor.</h1>
                        </div>
                    </div>
                    <div className="flex justify-center">
                        <div className="md:w-8/12 text-center">
                            <p className="mb-3">
                                Despite the fact that Lapsset Project is aimed at stimulating economies along the northern and coastal region of Kenya and link the regions to southern Sudan and Ethiopia for the growth in development, local and international 
                                trade and opportunities, the project has been riddled with minimal information awareness among the local communities and stakeholders reducing them to a mere pensive  respondents  not fully aware of the benefits and opportunities accrue to the project. 
                            </p>
                            <p className="mb-3">
                                To –date most of the local communities and stakeholders who depends on livestock as source of their income and livelihood are not aware of international livestock businesses along the corridor of the exportation of thousands and thousands of live animals 
                                to the Middle East through the Lamu port.
                            </p>
                            <p className="mb-3">
                                Lapsset Livestock Marketing Cooperative Society Limited seek to undertake information awareness campaign along the corridor to engage its members and local communities/stakeholders with requisite information and knowledge of the Lapset project  and opportunities 
                                to create an active and positive community networks along the corridor.
                            </p>
                            <p className="mb-3">
                                Despite the fact that Lapsset Project is aimed at stimulating economies along the northern and coastal region of Kenya by linking the regions to Southern Sudan, Ethiopia and other regions by developing, local and international trade and opportunities. The project has 
                                been riddled with minimal information awareness among the local communities and stakeholders reducing them to dormant players, not fully aware of the readily available benefits and opportunities.
                            </p>
                            <p className="mb-3">
                                To date most of the local communities and stakeholders who depends on livestock as source of their income and livelihood are not aware of international livestock market along the corridor that they can use for exportation of live animals through LAMU port.
                            </p>
                            <p className="mb-3">
                                Lapsset Livestock Marketing Cooperative Society Limited seek to undertake information awareness campaign along the corridor & engage its members and local communities/stakeholders with requisite information and knowledge of the Lapsset project and opportunities to create an 
                                active and positive community networks along the corridor.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProgramsPage