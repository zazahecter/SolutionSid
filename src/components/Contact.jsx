import React from 'react'
import Sms1 from '../assets/call-calling.svg'
import Sms2 from '../assets/pho.png'
import Sms3 from '../assets/sms.png'
import Form from './form'

function Contact() {
  return (
    <>
    <div className="mero text-light">
        <div className="container text-center pt-5">
           <h1 className='mt-2' style={{marginTop:'40px'}}>Contact</h1>
           <p>Home <i className='fa fa-arrow-right ms-3 me-3'></i> Contact</p>
        </div>
      </div> 
<div className="container">
      <div className="row mt-5">
    <div className="col md-6">
        <h4>Kindly call us or join our support group on WhatsApp.</h4>
        <div className="d-flex mt-3">
          <div className=" me-2">
             <img src={Sms1} alt="" />  
          </div>
          <div className="ms-2">
             <h4>+234 9072211222</h4> 
          </div>
        </div>
        <div className="d-flex mt-3">
          <div className=" me-2">
             <img src={Sms2} alt="" />  
          </div>
          <div className=" ms-2">
             <h4>+234 8167000077</h4> 
          </div>
        </div>
        <div className="d-flex mt-3">
          <div className=" me-2">
             <img src={Sms3} alt="" />  
          </div>
          <div className=" ms-2">
             <h4>info@crystalshipment.com</h4> 
          </div>
        </div>
    </div>
    <div className="col md-6">
      <Form/>
    </div>
    </div>
  </div>
    </>
  )
}

export default Contact