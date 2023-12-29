import React from 'react'
import { Route, Router, Routes } from 'react-router-dom'
import Menu from './components/Menu';
import Home from './components/Home';
import MyProject from './components/MyProject';
import AboutJs from './components/AboutJs'
import Contact from './components/Contact';
import Hello from './components/Hello';
import Error from './components/Error';

function Routerdom() {
  return <Routes>
    <Route path='/menu' element={<Menu/>}/>
    <Route path='/home' element={<Home/>}/>
    <Route path='/projects' element={<MyProject/>}/>
    <Route path='/about' element={<AboutJs/>}/>
    <Route path='/contact' element={<Contact/>}/>
    <Route path='/hello' element={<Hello/>}/>
    <Route path='*' element={<Error/>}/>
  </Routes>
}

export default Routerdom