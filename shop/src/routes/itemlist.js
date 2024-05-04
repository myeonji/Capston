import {Container,Row,Col} from 'react-bootstrap'
import data from '../data.js';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Itemlist(){
    
    let [modal,setModal]=useState(false);
    let [shoes]=useState(data);
    return(
    <div className='Body'>
        <h4>OUTWEAR</h4> 
        <hr></hr>
        <button onClick={()=>setModal(!modal)} aria-expanded="false" aria-controls="refinement-wrap">Filters &amp; sort by<i></i></button>
        {modal==true?<Modal></Modal>:null}
        <hr></hr>
        <button className="Tag">태그 X</button>
        <Container>
          <Row>
            <Col><Card shoes={shoes[0]} i={1}/></Col>
            <Col><Card shoes={shoes[1]} i={2}/></Col>
            <Col><Card shoes={shoes[2]} i={3}/></Col>
          </Row>
          <Row>
            <Col>4</Col>
            <Col>5</Col>
            <Col>6</Col>
          </Row>
        </Container>
        
    </div>
    )
}

function Modal(){
    return(
      <div className="Modal">
        <p>스타일 선택</p>
        <p>색상 선택</p>
        <p>sort</p>
      </div>
    )
  }
  
  function Card(props){
    let navigate=useNavigate()
    return(
    <div className="Item" onClick={()=>{navigate('/detail'+ '/'+ String(parseInt(props.i)-1))}}>
      <img src={'https://codingapple1.github.io/shop/shoes' + props.i +'.jpg'} width="80%"/>
      <div className="Circle"></div>
      <h4>{props.shoes.title}</h4>
      <p>{props.shoes.price}</p>
    </div>
    )
  }

  export default Itemlist