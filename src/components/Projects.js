import React, { useContext, useEffect, useState } from 'react'
import Cards from './Cards'
import {Link} from 'react-router-dom'
import { MyContext } from '../App'

function Projects() {

    const {scaner} = useContext(MyContext);

    let array = [];

    for(const key in scaner[10]) {
        array = scaner[10][key]
    }

    return <div className='row projects-main' data-aos="fade">
        <div className='col-12 mb-3'>
            <h1><span className='span-color'>My</span> projects</h1><div></div>
        </div>
        {array.map((a,b)=> <Cards key={b} array={a}/>)}
        <div className='col-6 text-end'>
            <Link to={'/projects'} className='btn btn-primary'>All projects</Link>
        </div>
        <div className='col-6'>
            <Link to={'/contact'} className='btn btn-primary'>Contact me</Link>
        </div>
    </div>
}

export default Projects