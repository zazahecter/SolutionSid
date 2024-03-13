import React from 'react'
import pi1 from '../assets/pic1.png'
import pi2 from '../assets/pic2.png'
import pi3 from '../assets/pic3.png'
import Rec1 from '../assets/Rectangle3.png'
import Rec2 from '../assets/Rectangle2.png'
import Rec4 from '../assets/footer4.png'
import Rec5 from '../assets/Rectangle4.png'

function Card2() {
    const cardData = [
      {image: pi1,title: 'Air Freight', content:'As a leader in global air freight forwarding, OIA Global excels in providing tailored transportation...'},
        {image: pi2,title: 'Sea Freight', content:'Sea freight plays perharps the most vital role in most transportation and supply chain a solution...'},
        {image: pi3,title: 'Land Freight', content:'Cargo are transported at some stage of their journey along the world’s roads where we transportation...'},
        {image: Rec1,title: 'Warehousing', content:'Package and store your things effectively and securely to make sure them in storage, have certif...'},
        {image: Rec2,title: 'Door to Door Delivery', content:'Our expertise in transport management and planning allows us to design a solution. hand...'},
        {image: Rec4,title: 'Packaging & Storage', content:'Package and store your things effectively and securely to make sure them in storage, We...'}
      ]
  return (
    <>
     <div className="row">
        {cardData.map((card, index) => (
            <div className="col-md-4 mb-3">
     <div className="card">
      <img src={card.image} class="card-img-top" alt="..." />
      <div className="card-body">
      <h5 className="card-title">{card.title}</h5>
        <p className="card-text">{card.content}<a href="" className='text-danger text-decoration-none'>Read more</a></p>
      </div>
     </div>
     </div> 
    
        ))}
  </div>

  <div className="row mt-5">
    <div className="col-md-6">
      <img src={Rec5} className='img-fluid rounded' alt="" />
    </div>

    <div className="col-md-6">
      <h2>THE COMPLETE SOLUTION</h2>
      <div className="bg-red mt-3"></div>
      <p>Our warehousing services are known nationwide to be one of the most reliable, safe and affordable, because we take pride in delivering the best of warehousing services, at the most reasonable prices. Pleasure and praising pain was born and I will give you a complete account of system, and expound actual teachings occasionally circumstances.</p>
    </div>
  </div>
    </>
  )
}

export default Card2