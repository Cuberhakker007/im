import React, { useEffect, useState } from 'react'

function SMS() {
    
    function Submit(e){
        e.preventDefault();
        let myText = `%0A${e.target[0].value}%0A${e.target[1].value}%0A${e.target[2].value}`
        var url = `https://api.telegram.org/bot6509606080:AAEzTucp2ZAIvIHH1PIQRZeDwngN2Fz5rDY/sendMessage?chat_id=-1001591961491&text=${myText}`

        let api = new XMLHttpRequest();
        api.open("GET",url,true);
        api.send();
    
    }

    return <form className='row sms' onSubmit={(e)=> Submit(e)} data-aos="fade">
        <div className='col-12 mt-3 mb-3'>
            <h1>Support <span className='span-color'>me</span></h1>
        </div>
        <div className='col-md-6 col-sm-12 mb-3'>
            <input type='text' className='form-control' placeholder='UserName...' />
        </div>
        <div className='col-md-6 col-sm-12 mb-3'>
            <input type='text' className='form-control' placeholder='Email...' />
        </div>
        <div className='col-12 mb-3'>
            <textarea className='form-control' placeholder='Hello ...'></textarea>
        </div>
        <div className='col-md-2 col-sm-12'>
            <button className='btn btn-primary' type='submit'>Send message</button>
        </div>
    </form>
}

export default SMS
