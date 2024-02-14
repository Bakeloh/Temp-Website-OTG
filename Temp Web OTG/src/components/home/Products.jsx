import React from 'react'
import camel_pic from '../../assets/Camel_new (2).jpg'
import cow_pic from '../../assets/cow_pic.jpg'
import sheep_pic from '../../assets/sheep_pic.jpg'
import goat_pic from '../../assets/mbuzi_mpya.jpg'

function Products() {
    return (
        <div className='mb-16 py-20 bg-primary' id="products">
            <div className="container mx-auto">
                <h3 className="text-center font-bold text-3xl text-white mb-3">Our Livestock</h3>
                <div className="md:flex md:justify-center">
                    <div className="md:w-7/12 mb-6">
                        <p className="text-white text-center text-lg mb-6">
                            We offer a variety of livestock ranging from: bulls, camel, sheep and goats.
                        </p>
                    </div>
                </div>
                <div className="container mx-auto">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4 lg:gap-5">
                        <div className="">
                            <div className="card card-compact card-bordered bg-base-100 hover:shadow-xl">
                                <img src={camel_pic} alt="beef" className='rounded-t-xl h-52 md:h-80'/>
                                <div className="card-body">
                                    <h4 className="text-center text-accent font-bold text-2xl mb-2">Camel</h4>
                                </div>
                            </div>
                        </div>
                        <div className="">
                            <div className="card card-compact card-bordered bg-base-100 hover:shadow-xl">
                                <img src={cow_pic} alt="beef" className='rounded-t-xl h-52 md:h-80'/>
                                <div className="card-body">
                                    <h4 className="text-center text-accent font-bold text-2xl mb-2">Bulls</h4>
                                </div>
                            </div>
                        </div>
                        <div className="">
                            <div className="card card-compact card-bordered bg-base-100 hover:shadow-xl">
                                <img src={goat_pic} alt="beef" className='rounded-t-xl h-52 md:h-80'/>
                                <div className="card-body">
                                    <h4 className="text-center text-accent font-bold text-2xl mb-2">Goats</h4>
                                </div>
                            </div>
                        </div>
                        <div className="">
                            <div className="card card-compact card-bordered bg-base-100 hover:shadow-xl">
                                <img src={sheep_pic} alt="beef" className='rounded-t-xl h-52 md:h-80'/>
                                <div className="card-body">
                                    <h4 className="text-center text-accent font-bold text-2xl mb-2">Sheep</h4>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Products