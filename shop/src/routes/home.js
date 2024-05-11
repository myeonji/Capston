import React, { useState,useEffect } from 'react';
import { Carousel } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
function Home(){
    const [index, setIndex] = useState(0);
    const navigate = useNavigate();
    const handleSelect = (selectedIndex) => {
      setIndex(selectedIndex);
    };
    let [isHovering,setIsHovering]=useState(false);
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
            <div onMouseOver={()=>setIsHovering(true)} onMouseOut={()=>setIsHovering(false)} onClick={()=>{navigate('/itemlist')}} className="main-card1">TRENDING{isHovering==true?<Cardtext />:null}</div>
            <div onMouseOver={()=>setIsHovering(true)} onMouseOut={()=>setIsHovering(false)} onClick={()=>{navigate('/itemlist')}} className="main-card2">SS24 LOOKBOOK{isHovering==true?<Cardtext />:null}</div>
            <div onMouseOver={()=>setIsHovering(true)} onMouseOut={()=>setIsHovering(false)} onClick={()=>{navigate('/itemlist')}} className="main-card3">SEASON OFF{isHovering==true?<Cardtext />:null}</div>
            <div onMouseOver={()=>setIsHovering(true)} onMouseOut={()=>setIsHovering(false)} onClick={()=>{navigate('/itemlist')}} className="main-card4">SUMMER COLLECTION{isHovering==true?<Cardtext />:null}</div>
            
        </div>
        </div>
      );
}
//호버하면 페이드효과주면서 새창 띄워짐(없던게 생김)
function Cardtext(){
  let [fade,setFade]=useState('')

  useEffect(()=>{
    setFade('Fade')
    return()=>{
      setFade('')
    }
  },[])
  
  return(
  <div className={'Test ' + fade}>
    DISCOVER
  </div>
  )
}
export default Home;
