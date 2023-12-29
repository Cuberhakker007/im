import React, { useContext } from 'react'
import { MyContext } from '../App'

function Footer() {

    const {scaner} = useContext(MyContext)

    return <div className='footer mt-5'>
        <div className='container footer-du'>
            <div className='row pb-3'>
                <div className='col-md-4 col-sm-12 fote'>
                <h1 className='brand-img span-color'>FAST DEV</h1>
                </div>
                <div className='col-md-4 col-sm-12 fote text-center'>
                    <a href={'mailto:'+scaner[3]} className='span-color'>{scaner[3]}</a>
                </div>
                <div className='col-md-4 col-sm-12 fote'>
                    <div className='socials span-color footer-soc'>
                        <a href={scaner[4]}><i className="fa-brands fa-instagram"></i></a>
                        <a href={scaner[5]}><i className="fa-brands fa-tiktok"></i></a>
                        <a href={scaner[6]}><i className="fa-brands fa-x-twitter"></i></a>
                        <a href={scaner[7]}><i className="fa-brands fa-telegram"></i></a>
                    </div>
                </div>
            </div>
        </div>
    </div>
}

export default Footer