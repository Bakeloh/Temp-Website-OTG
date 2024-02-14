import React from 'react'
import camel1 from '../../assets/camel1.jpeg'
import cow from '../../assets/cow.jpeg'
import camel2 from '../../assets/camel2.jpeg'
import person from '../../assets/person.jpeg'
import camel_piccs from '../../assets/camel_piccs.jpg'
import camel_piks from '../../assets/camel_piks.jpg'
import fin_logo from '../../assets/logo.jpeg'
import market from '../../assets/market.jfif'
import mbuzi from '../../assets/mbuzi.jpg'

function Carausel(props) {
    return (
        <div className=''>
            <div className="carousel carousel-center py-5 px-4 space-x-3 bg-accent">
                <div className="carousel-item">
                    <img src={fin_logo} alt='sample product' className='carousel__img rounded-box'/>
                </div>
                <div className="carousel-item">
                    <img src={camel1} alt='sample product' className='carousel__img rounded-box'/>
                </div>
                <div className="carousel-item">
                    <img src={camel2} alt='sample product' className='carousel__img rounded-box'/>
                </div>
                <div className="carousel-item rounded-box">
                    <img src={market} alt='sample product' className='carousel__img rounded-box'/>
                </div>
                <div className="carousel-item rounded-box">
                    <img src={cow} alt='sample product' className='carousel__img rounded-box'/>
                </div>
                <div className="carousel-item rounded-box">
                    <img src={mbuzi} alt='sample product' className='carousel__img rounded-box'/>
                </div>
                <div className="carousel-item">
                    <img src={camel_piccs} alt='sample product' className='carousel__img rounded-box'/>
                </div>
                <div className="carousel-item">
                    <img src={camel_piks} alt='sample product' className='carousel__img rounded-box'/>
                </div>
                <div className="carousel-item">
                    <img src={person} alt='sample product' className='carousel__img rounded-box'/>
                </div>
            </div>
        </div>
    )
}

export default Carausel