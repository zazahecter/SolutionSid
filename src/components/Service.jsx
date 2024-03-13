import React from 'react'
import Card2 from './card2'




function Service() {
  return (
    <>
      <div className="mero text-light">
        <div className="container text-center pt-5">
           <h1 className='mt-2' style={{marginTop:'40px'}}>Services</h1>
           <p>Home <i className='fa fa-arrow-right ms-3 me-3'></i> Our Service</p>
        </div>
      </div> 

      <div className="container mt-5">
      <Card2/>
  </div>
    </>
  )
}

export default Service