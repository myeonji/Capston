import {Container,Nav,Navbar,Row,Col,Form} from 'react-bootstrap';
import './App.css';
import { useState } from 'react';
import data from './data.js';
import { Routes,Route,Link,Outlet, useNavigate } from 'react-router-dom';
import Detail from './routes/detail.js'
import About from './routes/about.js'
import Itemlist from './routes/itemlist.js'
import Home from './routes/home.js'
import { FaUser,FaHeart,FaShoppingBag } from "react-icons/fa";
import { BiBorderRight } from 'react-icons/bi';

function App() {

  
  let [shoes]=useState(data);
  let navigate=useNavigate();
  let [isHoveringm,setIsHoveringm]=useState(false);
  let [isHoveringw,setIsHoveringw]=useState(false);

  const handleMouseOverm = () => {
    setIsHoveringm(true);
  };

  const handleMouseOutm = () => {
    setIsHoveringm(false);
  };
  const handleMouseOverw = () => {
    setIsHoveringw(true);
  };

  const handleMouseOutw = () => {
    setIsHoveringw(false);
  };
  return (   

    <div className="App">

<Navbar className="Header" fixed="top" bg="dark" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="/">Navbar</Navbar.Brand>
          <Nav className="me-auto">
            
            <Nav.Link onMouseOver={handleMouseOverm} onMouseOut={handleMouseOutm} href="itemlist">Men</Nav.Link>
            <Nav.Link onMouseOver={handleMouseOverw} onMouseOut={handleMouseOutw} href="itemlist">Women</Nav.Link>
            
          </Nav>
          <Row>
          <Col className='me-3'><Form>
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-3"
              aria-label="Search"/>
          </Form></Col>             
        </Row>
          <button><FaUser/></button>
          <button><FaHeart/></button>
          <button><FaShoppingBag/></button>
        </Container>
      </Navbar>
      {isHoveringm==true?<Menum/>:null} 
        {isHoveringw==true?<Menuw onMouseOut={handleMouseOutw}/>:null} 
      <Routes>
      <Route path="*" element={<div>404없는페이지</div>}/>
        <Route path="/" element={<Home/>}/>
        <Route path ="/itemlist" element={<Itemlist/>}/>
        <Route path="/detail/:id" element={<Detail shoes={shoes}/>}>
        </Route>
        <Route path="/about" element={<About/>}>
          <Route  path="member" element={<Member/>}/> 
          <Route path="location" element={<Location/>}></Route>
        </Route>
      </Routes> 
      
      </div>    
  );
}

function Menuw(){
  return(
    
<div className='Body'>
<div>
    <Row>
      <Col className='border-end fw-bold'>
        <p>NEW IN</p>
        <p>TRENDING</p>
        <p>SS24 LOOKBOOK</p>
        <p>SEASON OFF</p>
      </Col>
      <Col>
      <p>Jackets & Coats</p>
      <p>Tops & Shirts</p>
      <p>T-Shirts</p>
      <p>Sweaters</p>
      <p>Jeans</p>
      <p>Shorts & Skirts</p>
      </Col>
      <Col></Col>
      <Col></Col>
    </Row>
    </div>
  <hr></hr>
  </div>
  )
}
function Menum(){
  return(
<div className='Body'>
  <div>
    <Row>
      <Col className='border-end fw-bold'>
        <p>NEW IN</p>
        <p>TRENDING</p>
        <p>SS24 LOOKBOOK</p>
        <p>SEASON OFF</p>
      </Col>
      <Col>
      <p>Jackets & Coats</p>
      <p>Shirts</p>
      <p>T-Shirts</p>
      <p>Sweaters</p>
      <p>Jeans</p>
      <p>Shorts</p>
      </Col>
      <Col></Col>
      <Col></Col>
    </Row>
    
  </div>
  
  <hr></hr>
  </div>
  )
}
function Member(){
  return(
    <div>member페이지임</div>
  )
}
function Location(){
  return(
    <div>location페이지임</div>
  )
}
export default App;
