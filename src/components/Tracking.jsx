import React from 'react'

function Tracking() {
  return (
    <>
      <div className="mero text-light">
        <div className="container text-center pt-5">
           <h1 className='mt-2' style={{marginTop:'40px'}}>Tracking</h1>
           <p>Home <i className='fa fa-arrow-right ms-3 me-3'></i> Tracking</p>
        </div>
      </div> 
<div className="container">
      <div className="row mt-5">
    <div className="col-md-6">
      <h2>TRACK YOUR SHIPMENT</h2>
      <div className="bg-red"></div>
      <p>If you require maximum visibility to your Freight transactions, contact our logistic customer team or you can track your cargo by using below tracking system.</p>
    </div>

    <div className="col-md-6">
      <input type="text" placeholder='Enter your Tracking ID' className='form-control' />
      <a href="" className="btn btn-danger mt-4">Learn More</a>
    </div>
  </div>
  </div>
    </>
  )
}

export default Tracking