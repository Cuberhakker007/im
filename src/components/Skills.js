import React from 'react'
import react from './img/React.png'
import html from './img/HTML.png'
import css from './img/CSS3.png'
import Figma from './img/Figma.png'
import google from './img/Google Chrome.png'
import Javascript from './img/Javascript.png'
import node from './img/Nodejs.png'
import npm from './img/npm.png'
import shape from './img/Shape.png'
import vscode from './img/vscode.png'

function Skills() {
  return <div className='row mt-5 mb-5 g-4 ' data-aos="fade">
    <div className='col-12 fs-1'><span className='span-color'>My</span> Skills</div>
    <div className='col'><img src={html} className='skills-img' alt='img'/></div>
    <div className='col'><img src={css} className='skills-img' alt='img'/></div>
    <div className='col'><img src={Javascript} className='skills-img' alt='img'/></div>
    <div className='col'><img src={react} className='skills-img' alt='img'/></div>
    <div className='col'><img src={npm} className='skills-img' alt='img'/></div>
    <div className='col'><img src={shape} className='skills-img' alt='img'/></div>
    <div className='col'><img src={vscode} className='skills-img' alt='img'/></div>
    <div className='col'><img src={node} className='skills-img' alt='img'/></div>
    <div className='col'><img src={google} className='skills-img' alt='img'/></div>
    <div className='col'><img src={Figma} className='skills-img' alt='img'/></div>
  </div>
}

export default Skills