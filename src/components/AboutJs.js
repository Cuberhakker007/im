import React from 'react'
import AboutText from './AboutText'
import Footer from './Footer'
import Picture from './Picture'
import Present from './Present'
import Title from './Title'

function AboutJs() {
  return <div>
    <div className='home container-fluid'>
      <Title prop={{ title: 'About me', describtion: 'Are you interested in my life?' }} />
    </div>
    <div className='container projects mt-5'>
      <AboutText />
    </div>
    <div className='container-fluid present'>
      <div className='container'>
        <Present />
      </div>
    </div>
    <Footer />
  </div>
}

export default AboutJs