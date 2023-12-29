import React, { useEffect } from 'react'
import AboutText from './AboutText'
import Footer from './Footer'
import Present from './Present'
import Projects from './Projects'
import Skills from './Skills'
import SMS from './SMS'
import Title from './Title'

function Home() {

    return <div id='home'>
        <div className='home container-fluid'>
            <Title prop={{title: 'Faxriddinov Abdulloh',describtion:'WEB-DEVELOPER'}}/>
        </div>
        <div className='home-second container mt-5 mb-5'>
            <AboutText  />
        </div>
        <div className='container-fluid skills'>
            <div className='container'>
                <Skills/>
            </div>
        </div>
        <div className='container projects'>
            <Projects/>
        </div>
        <div className='container-fluid present'>
            <div className='container'>
                <Present />
            </div>
        </div>
        <div className='container'>
            <SMS />
        </div>
        <Footer />
    </div>
}

export default Home