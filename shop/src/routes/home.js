import React, { useState } from 'react';
import { Carousel } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
function Home(){
    const [index, setIndex] = useState(0);
    const navigate = useNavigate();
    const handleSelect = (selectedIndex) => {
      setIndex(selectedIndex);
    };
  
    return (
        <div className="Body">
        <Carousel activeIndex={index} onSelect={handleSelect}>
          <Carousel.Item>
            <div className='main-bg1' alt="First slide"></div>          
            <Carousel.Caption>
              <h1>NEW COLLECTION</h1>
              <p></p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
          <div className='main-bg2' alt="Second slide"></div>
            <Carousel.Caption>
              <h1>WOMEN'S COLLECTION</h1>
              <p></p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
          <div className='main-bg3' alt="Third slide"></div>
            <Carousel.Caption>
              <h1>LOOK BOOK</h1>
              <p>
                
              </p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
        <div className="card-container">
            <div onClick={()=>{navigate('/itemlist')}} className="main-card1">TRENDING</div>
            <div onClick={()=>{navigate('/itemlist')}} className="main-card2">SS24 LOOKBOOK</div>
            <div onClick={()=>{navigate('/itemlist')}} className="main-card3">SEASON OFF</div>
            <div onClick={()=>{navigate('/itemlist')}} className="main-card4">SUMMER COLLECTION</div>
        </div>
        </div>
      );
}

export default Home;
