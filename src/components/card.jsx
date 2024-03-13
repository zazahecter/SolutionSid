import React from 'react'
import pi1 from '../assets/pic1.png'
import pi2 from '../assets/pic2.png'
import pi3 from '../assets/pic3.png'
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

function Card() {
    const cardData = [
        {image: pi1,title: 'Air Freight', content:'As a leader in global air freight forwarding, OIA Global excels in providing tailored transportation...'},
        {image: pi2,title: 'Sea Freight', content:'Sea freight plays perharps the most vital role in most transportation and supply chain a solution...'},
        {image: pi3,title: 'Land Freight', content:'Cargo are transported at some stage of their journey along the world’s roads where we transportation...'}
      ];
      const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        arrows: false,
        responsive: [
          {
            breakpoint: 1024, //breakpoint for desktop
            settings:{
              slidesToShow: 3,
              slidesToScroll: 1,
            },
          },
          {
            breakpoint: 768, //breakpoint for tablet/mobile 
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
            },
          },
        ],
      };

  return (
    <>
    <div className="mt-5">
    <div className="row">
      <Slider {...settings}>
        {cardData.map((card, index) => (
          <div key={index} className="col-md-4 mb-3">
            <div className="slider-item" style={{marginRight: '1rem'}}>
     <div className="card">
      <img src={card.image} class="card-img-top" alt="..." />
      <div className="card-body">
      <h5 className="card-title">{card.title}</h5>
        <p className="card-text">{card.content}<a href="" className='text-danger text-decoration-none'>Read more</a></p>
      </div>
     </div>
     </div> 
    </div>
        ))}
        
      </Slider>
  </div>
  </div>
    </>
  )
}

export default Card