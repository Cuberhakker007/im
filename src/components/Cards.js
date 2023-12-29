import React from 'react'

function Cards({array}) {
    return <div className='col-md-4 col-sm-12 mb-3'>
        <div className="card" id='card'>
            <img src={array.img} className="card-img-top" id='cardimg' alt={array.Title} />
            <div className="card-body">
                <h5 className="card-title">{array.Title}</h5>
                <p className="card-text">{array.des}</p>
                <a href={array.url} className="btn btn-primary">Go somewhere</a>
            </div>
        </div>
    </div>
}

export default Cards