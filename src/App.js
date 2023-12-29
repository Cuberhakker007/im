import axios, { formToJSON } from 'axios';
import React, { createContext, useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import Error from './components/Error';
import Routerdom from './Routerdom';
import AOS from 'aos';
import 'aos/dist/aos.css';

export const MyContext = createContext();

function App() {

  const [local, setLocal] = useState(localStorage.getItem('store'));
  const [scaner, setScanner] = useState([])
  const colors = document.querySelector(':root');

  let navigate = useNavigate();

  function Setloc(a) {
    localStorage.setItem('store', a)
  }

  axios.get(`https://raw.githubusercontent.com/Cuberhakker007/13-project/main/index.json`)
    .then(res => setScanner(eval(res.data)))
    .catch((error) => error);
  colors.style.setProperty('--red', scaner[0] ? scaner[1] : 'red')

  useEffect(() => {
    navigate('/hello');
    AOS.init()
    setTimeout(() => {
      if (local) {
        navigate('/' + local)
      } else {
        navigate('/menu')
      }
    }, 5000);
  }, [])

  return <div>
    <MyContext.Provider value={{ Setloc, scaner: scaner }}>
      {scaner[0] ? <Routerdom /> : <Error />}
    </MyContext.Provider>
  </div>
}

export default App;