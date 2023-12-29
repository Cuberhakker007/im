import React from 'react'
import { useNavigate, Link } from 'react-router-dom'

function Title({prop}) {

    return <div className='home-navbar row'>
        <div className='col-6'>
            <h1 className='brand-img span-color mt-1'>FAST DEV</h1>
        </div>
        <div className='col-6 d-flex justify-content-center'>
            <Link to={'/menu'} className='fs-3 menu-btn btn'>
                <i className="fa-solid fa-bars-staggered span-color"></i>
            </Link>
        </div>
        <div className='col-12 home-one'>
            <div className='home-text'>
                <h1>{prop.title}</h1>
                <p>{prop.describtion}</p>
            </div>
        </div>
    </div>
}

export default Title