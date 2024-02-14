import React from 'react'
import {GiCow, GiGoat, GiCamel} from 'react-icons/gi'
import {RiEmotionHappyLine} from 'react-icons/ri'
import CountUp from 'react-countup';

function Count() {
    return (
        <div className='mb-7 py-20 mt-7'>
            <div className="flex justify-center">
                <div className='stats stats-vertical md:stats-horizontal border shadow'>
                    <div className="stat">
                        <div className="stat-figure text-accent">
                            <RiEmotionHappyLine className='h-12 w-12'/>
                        </div>
                        <div className="stat-title">Happy Customers</div>
                        <div className="stat-value text-secondary" id="happy-customers">
                            <CountUp 
                                end={4670} 
                                enableScrollSpy={true}
                                useEasing={true}
                                scrollSpyDelay={1800}
                            />
                        </div>
                    </div>
                    <div className="stat">
                        <div className="stat-figure text-accent">
                            <GiCow className='h-14 w-14'/>
                        </div>
                        <div className="stat-title">Bulls Sold per Day</div>
                        <div className="stat-value text-secondary" id="cow-slaughters">
                            <CountUp 
                                end={3370} 
                                enableScrollSpy={true}
                                useEasing={true}
                                scrollSpyDelay={1800}
                            />
                        </div>
                    </div>
                    <div className="stat">
                        <div className="stat-figure text-accent">
                            <GiGoat className='h-12 w-12'/>
                        </div>
                        <div className="stat-title">Goats/Sheep Sold per Day</div>
                        <div className="stat-value text-secondary" id="goat-slaughters">
                            <CountUp 
                                end={4702} 
                                enableScrollSpy={true}
                                useEasing={true}
                                scrollSpyDelay={1800}
                            />
                        </div>
                    </div>
                    <div className="stat">
                        <div className="stat-figure text-accent">
                            <GiCamel className='h-12 w-12'/>
                        </div>
                        <div className="stat-title">Camels Sold per Day</div>
                        <div className="stat-value text-secondary" id="goat-slaughters">
                            <CountUp 
                                end={1588} 
                                enableScrollSpy={true}
                                useEasing={true}
                                scrollSpyDelay={2700}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Count