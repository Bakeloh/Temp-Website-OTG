import React, {useRef} from 'react'
import { Helmet } from 'react-helmet'
import typing from '../assets/typing2.jpg'

function OrderPage() {
    const nameRef = useRef()
    const numberRef = useRef()
    const emailRef = useRef()
    const typeRef = useRef()
    const addresRef = useRef()
    const quantityRef = useRef()

    function mailTo(body, subject){
        const destinationEmail = "sales@lapssetlivestock.com "
        window.location.href = `mailto:${destinationEmail}?subject=${subject}&body=${body}`;

    }
    
    function handleSubmit(e){
        e.preventDefault()
        const name = "Customer Name: " + nameRef.current.value + ", "
        const number = "Phonenumber: " + numberRef.current.value + ", "        
        const address = "Email address: " + emailRef.current.value + ", "
        const animal = "Animal Reqeust: " + typeRef.current.value + ", "
        const quantity = "Quantity: " + quantityRef.current.value + "."
        const body = name + number + address + animal  + quantity
        const subject = "Sales Order"
        mailTo(body, subject)
    }
    return (
        <div>
            <Helmet>
                <title>Order Now ~ LAPSET-LMCSL</title>
            </Helmet>
            <h1 className="text-center text-accent text-4xl font-bold mt-7 mb-9">Order Now</h1>
            <div className="container mx-auto">
                <div className="flex justify-center mb-20">
                    <div className="hidden md:flex w-1/2">
                        <img src={typing} alt="person typing" className='rounded-xl' />
                    </div>
                    <div className='w-9/12 md:w-1/2'>
                        <h2 className="text-center text-2xl text-primary font-bold mb-4">Order details</h2>
                        <form className='px-2 md:px-4' onSubmit={handleSubmit}>
                            <div className="form-control mb-3">
                                <label className="label">
                                    <span className="label-text">Fullname</span>
                                </label>
                                <input type="text" required ref={nameRef} name="name" className="input input-bordered border-primary w-full " />
                            </div>
                            <div className="form-control mb-3">
                                <label className="label">
                                    <span className="label-text">Phonenumber</span>
                                </label>
                                <input type="text" required ref={numberRef} name="number" className="input input-bordered border-primary w-full " />
                            </div>
                            <div className="form-control mb-3">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" required ref={emailRef} name="email" className="input input-bordered border-primary w-full " />
                            </div>
                            <div className="form-control mb-3">
                                <label className="label">
                                    <span className="label-text">Address</span>
                                </label>
                                <input type="text" required ref={addresRef} name="number" className="input input-bordered border-primary w-full " />
                            </div>
                            <div className="form-control mb-3">
                                <label className="label">
                                    <span className="label-text">Animal Type</span>
                                </label>
                                <select ref={typeRef} className="select select-primary w-full">
                                    <option value='Camel'>Camel</option>
                                    <option value='Cow/Bulls'>Cow/Bulls</option>
                                    <option value='Goats'>Goats</option>
                                    <option value='Sheep'>Sheep</option>                                    
                                </select>
                            </div>
                            <div className="form-control mb-3">
                                <label className="label">
                                    <span className="label-text">Quantity</span>
                                </label>
                                <input type="number" required ref={quantityRef} name="number" className="input input-bordered border-primary w-full " />
                            </div>
                            {/* <div className="form-control mb-5">
                                <label className="label">
                                    <span className="label-text">Meat Size</span>
                                </label>
                                <select ref={sizeRef} className="select select-primary w-full">
                                    <option>Full Carcass</option>
                                    <option>Half Carcass</option>
                                    <option>Quater Carcass</option>
                                </select>
                            </div> */}
                            <div className="flex justify-center mt-7">
                                <button type="submit" className='btn btn-primary btn-wide'>Place Order</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default OrderPage