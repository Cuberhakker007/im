import React from 'react'
import Footer from './Footer'
import Projects from './Projects'
import Title from './Title'

function MyProject() {
  return <div>
    <div className='home container-fluid'>
            <Title prop={{title: 'My Projects',describtion:'Are these projects interesting to you?'}}/>
        </div>
        <div className='container projects'>
            <Projects/>
        </div>
        <Footer/>
  </div>
}

export default MyProject