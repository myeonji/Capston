import { Container, Nav, Navbar, Row, Col, Form } from 'react-bootstrap';
import './App.css';
import { db } from './firebase';
import { useEffect, useState } from 'react';
import { doc, getDoc } from 'firebase/firestore';
import data from './data.js';
import { Routes, Route, useNavigate } from 'react-router-dom';
import Detail from './routes/detail.js';
import About from './routes/about.js';
import Itemlist from './routes/itemlist.js';
import Home from './routes/home.js';
import Cart from './routes/cart.js';
import Test from './routes/test.js';
import { FaUser, FaHeart, FaShoppingBag } from "react-icons/fa";

// Firestore 데이터 가져오는 함수 정의
async function getTestData(setTest) {
  const docRef = doc(db, "items", "1");
  const docSnap = await getDoc(docRef);
  if (docSnap.exists()) {
    setTest(docSnap.data());
  }
}

function App() {
  const [test, setTest] = useState();
  const [shoes] = useState(data);
  const navigate = useNavigate();
  const [isHoveringm, setIsHoveringm] = useState(false);
  const [isHoveringw, setIsHoveringw] = useState(false);

  useEffect(() => {
    getTestData(setTest);
  }, []);

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
            <Nav.Link onMouseEnter={handleMouseOverm} onMouseLeave={handleMouseOutm} href="/itemlist">Men</Nav.Link>
            <Nav.Link onMouseEnter={handleMouseOverw} onMouseLeave={handleMouseOutw} href="/itemlist">Women</Nav.Link>
          </Nav>
          <Row>
            <Col className='me-3'>
              <Form>
                <Form.Control
                  type="search"
                  placeholder="Search"
                  className="me-3"
                  aria-label="Search"
                />
              </Form>
            </Col>
          </Row>
          <button><FaUser size={20} /></button>
          <button><FaHeart size={20} /></button>
          <button onClick={() => { navigate('/cart') }}><FaShoppingBag size={20} /></button>
        </Container>
      </Navbar>
      {isHoveringm && <Menum />}
      {isHoveringw && <Menuw />}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/itemlist" element={<Itemlist />} />
        <Route path="/detail/:id" element={<Detail shoes={shoes} />} />
        <Route path="/about" element={<About />}>
          <Route path="member" element={<Member />} />
          <Route path="location" element={<Location />} />
        </Route>
        <Route path="/test" element={<Test />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="*" element={<div><h1>404 없는 페이지</h1></div>} />
      </Routes>
      <div>
        {test !== undefined && <div>{test.name}</div>}
      </div>
    </div>
  );
}

function Menuw() {
  return (
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

function Menum() {
  return (
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

function Member() {
  return (
    <div>member 페이지임</div>
  )
}

function Location() {
  return (
    <div>location 페이지임</div>
  )
}

export default App;