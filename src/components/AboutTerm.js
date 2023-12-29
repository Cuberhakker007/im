import React, { useContext } from 'react'
import { MyContext } from '../App'

function AboutTerm() {

    const {scaner} = useContext(MyContext)
 
    return <div className='col-md-6 col-sm-12' >
        <h1><span className='span-color'>A</span>bout me</h1>
        <p className='about-your-text'>{scaner[8]}</p>
    </div>
}

export default AboutTerm