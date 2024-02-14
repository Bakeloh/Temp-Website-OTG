import React from 'react'
import { Helmet } from 'react-helmet'
import {ImSad} from 'react-icons/im'

function PageNotFound() {
    return (
        <div>
            <Helmet>
                <title>Page Not Found ~ LAPSSET-LMCSL</title>
            </Helmet>
            <div className='py-20 flex justify-center'>
                <p className="text-accent text-4xl text-center flex"><ImSad className='text-5xl mr-4'/> The page you are looking for cannot be found.</p>
            </div>
        </div>
    )
}

export default PageNotFound