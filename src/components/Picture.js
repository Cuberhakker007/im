import React, { useContext } from 'react'
import { MyContext } from '../App'

function Picture() {
  const {scaner} = useContext(MyContext);
  return <div className='col-md-6 col-sm-12'>
        <img src={scaner[11]} className='picture' alt='about'/>
  </div>
}

export default Picture