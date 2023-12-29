import React from 'react'

function Form() {

  function Submit(e){
    e.preventDefault();
    let myText = `%0A${e.target[0].value}%0A${e.target[1].value}%0A${e.target[2].value}%0A${e.target[3].value}%0A${e.target[4].value}`
    var url = `https://api.telegram.org/bot6509606080:AAEzTucp2ZAIvIHH1PIQRZeDwngN2Fz5rDY/sendMessage?chat_id=-1001591961491&text=${myText}`

    let api = new XMLHttpRequest();
    api.open("GET",url,true);
    api.send();

}

  return <div className='container mt-5'>
<form onSubmit={(e)=> Submit(e)}>
  <div className="row mb-4">
    <div className='col-12'><h1>Contact <span className='span-color'>me</span></h1></div>
    <div className="col">
      <div data-mdb-input-init className="form-outline">
        <input type="text" id="form6Example1" className="form-control" />
        <label className="form-label" htmlFor="form6Example1">First name</label>
      </div>
    </div>
    <div className="col">
      <div data-mdb-input-init className="form-outline">
        <input type="text" id="form6Example2" className="form-control" />
        <label className="form-label" htmlFor="form6Example2">Last name</label>
      </div>
    </div>
  </div>
  <div data-mdb-input-init className="form-outline mb-4">
    <input type="text" id="form6Example3" className="form-control" />
    <label className="form-label" htmlFor="form6Example3">Company name</label>
  </div>

  <div data-mdb-input-init className="form-outline mb-4">
    <input type="text" id="form6Example4" className="form-control" />
    <label className="form-label" htmlFor="form6Example4">Address</label>
  </div>

  <div data-mdb-input-init className="form-outline mb-4">
    <textarea className="form-control" id="form6Example"></textarea>
    <label className="form-label" htmlFor="form6Example7">Additional information</label>
  </div>

  <button data-mdb-ripple-init type="submit" className="btn btn-primary btn-block mb-4">Place order</button>
</form>
  </div>
}

export default Form