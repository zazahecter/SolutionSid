import React from 'react'
import pi1 from '../assets/pic1.png'
import pi2 from '../assets/pic2.png'
import pi3 from '../assets/pic3.png'

function Card() {
    const cardData = [
        {image: pi1,title: 'Air Freight', content:'As a leader in global air freight forwarding, OIA Global excels in providing tailored transportation...'},
        {image: pi2,title: 'Sea Freight', content:'Sea freight plays perharps the most vital role in most transportation and supply chain a solution...'},
        {image: pi3,title: 'Land Freight', content:'Cargo are transported at some stage of their journey along the world’s roads where we transportation...'}
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
    </>
  )
}

export default Card