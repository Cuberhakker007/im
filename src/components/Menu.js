import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { MyContext } from '../App'

function Menu() {

    const {Setloc,scaner} = useContext(MyContext)

    return <div className='container menu'>
        <div className='row menu-row'>
            <div className='col-lg-6 col-md-6 col-sm-12 col-menu'>
                <div className='menu-text'>
                    <div className='red-line'></div>
                    <div className='menu-links' onClick={(e)=> Setloc(e.target.text)}>
                        <h1><Link className='text-dark' to={'/home'}>home</Link></h1>
                        <h1><Link className='text-dark' to={'/projects'}>projects</Link></h1>
                        <h1><Link className='text-dark' to={'/about'}>about</Link></h1>
                        <h1><Link className='text-dark' to={'/contact'}>contact</Link></h1>
                    </div>
                </div>
            </div>
            <div className='col-lg-6 col-md-6 col-sm-12 col-menu'>
                <div className='menu-two'>
                    <div className='menu-img mb-3'>
                        <img src='https://img.freepik.com/free-photo/artist-white_1368-3546.jpg?size=626&ext=jpg&ga=GA1.1.1546980028.1702598400&semt=ais' alt='img' />
                    </div>
                    <div className='menu-social'>
                        <div className='div'>
                            <a className='link' href={'mailto:'+scaner[3]}>Email:{scaner[3]}</a><br/>
                            <a className='link' href={'tel:'+scaner[2]}>Tel: {scaner[2]}</a>
                        </div>
                        <div className='socials menu-soc'>
                            <a href={scaner[4]}><i className="fa-brands fa-instagram"></i></a>
                            <a href={scaner[5]}><i className="fa-brands fa-tiktok"></i></a>
                            <a href={scaner[6]}><i className="fa-brands fa-x-twitter"></i></a>
                            <a href={scaner[7]}><i className="fa-brands fa-telegram"></i></a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
}

export default Menu