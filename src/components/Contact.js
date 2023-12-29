import React from 'react'
import Footer from './Footer'
import Form from './Form'
import Title from './Title'

function Contact() {
    return <div>
        <div className='home container-fluid'>
            <Title prop={{title: 'Contact me',describtion:'SUPPORT ME'}}/>
        </div>
        <Form />
        <Footer />
    </div>
}

export default Contact