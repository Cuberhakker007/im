import React, { useContext, useEffect } from 'react'
import { MyContext } from '../App'

function Present() {

    const {scaner} = useContext(MyContext);
    let array = [];

        for(const key in scaner[9]) {
            array = scaner[9][key]
        }

    return <div className='row pt-3 mb-3 mt-3' data-aos="fade">
        {
            array.map((a,b)=> <div key={b} className='col-12 mt-3 mb-3'>
            <div className="progress bg-dark" role="progressbar" aria-label="Success example" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">
                <div className="progress-bar bg-red" style={{ width: a.deg+'%' }}>{a.deg}%</div>
            </div>
            <div className='span-color mt-2'>
                <p>{a.des}</p>
            </div>
        </div>)
        }
    </div>
}

export default Present