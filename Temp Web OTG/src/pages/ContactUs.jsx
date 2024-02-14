import React, {useRef} from 'react'
import { Helmet } from 'react-helmet'

function ContactUs() {
    const emailRef = useRef()
    const subjectRef = useRef()
    const textRef = useRef()

    function mailTo(body, subject){
        const destinationEmail = "info@lapssetlivestock.com "
        window.location.href = `mailto:${destinationEmail}?subject=${subject}&body=${body}`;
        emailRef.current.value = ''
        subjectRef.current.value = ''
        textRef.current.value = ''
    }

    function submitHandler(e){
        e.preventDefault()
        const email = emailRef.current.value
        const subject = subjectRef.current.value
        const text = textRef.current.value
        const body = `from: ${email}  content: ${text}`
        mailTo(body, subject)
    }
    return (
        <div>
            <Helmet>
                <title>Contact Us ~ LAPSSET-LMCSL</title>
            </Helmet>
            <h1 className="text-center text-accent text-4xl font-bold mt-7 mb-9">Contact Us</h1>
            <div className="flex justify-center mb-20">
                <div className="w-9/12 md:w-6/12 lg:w-5/12">
                    <form onSubmit={submitHandler}>
                        <div className="form-control mb-3">
                            <label className="label">
                                <span className="label-text">Email*</span>
                            </label>
                            <input type="email" required ref={emailRef} name="email" className="input input-bordered w-full " />
                        </div>
                        <div className="form-control mb-3">
                            <label className="label">
                                <span className="label-text">Subject</span>
                            </label>
                            <input type="text" ref={subjectRef} name="email" className="input input-bordered w-full " />
                        </div>
                        <div  className="form-control w-full">
                            <label className="label">
                                <span className="label-text">Text*</span>
                            </label>
                            <textarea ref={textRef} className="textarea textarea-bordered w-full" required cols={4} placeholder="Text"></textarea>
                        </div>
                        <div className='flex justify-center mt-5'>
                            <button className='btn btn-primary' type='submit'>Submit</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default ContactUs