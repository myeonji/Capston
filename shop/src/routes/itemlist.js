import {Container,Row,Col, Button} from 'react-bootstrap'
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
        <div className='grid'>
          {shoes.map((i,a)=>(<Card shoes={shoes[a]} i={a}></Card>))}
            
        </div>
        
    </div>
    )
}

function Modal(){
  const Category=['Jacket','Shirts','T-Shirts','Sweater','Jeans','Shorts']
  const Color=['Black','White','Grey','Red','Green','Blue','Yellow','Brown']
  const [view,setView]=useState(false);
  const [sort,setSort]=useState('Sort By');

  const changeSort=(value)=>{setSort(value)};

  return(
      <div className="Modal">
        <Row>
          <Col>
          <div>
            <h5>Category</h5>
            <form>
              <div>
              {Category.map((item, idx)=>(
                <div key={idx}>
                  <input type='checkbox' id={item}></input>
                  <label htmlFor={item}>{item}</label>
                </div>
              ))}
              </div>
            </form>

          </div>
          </Col>
          <Col ><div><h5>Color</h5>
          <form>
              <div>
              {Color.map((item, idx)=>(
                <div key={idx}>
                  <input type='checkbox' id={item}></input>
                  <label htmlFor={item}>{item}</label>
                </div>
              ))}
              </div>
            </form></div></Col>
          <Col><div>
            <h5>Sort By</h5>
            <button class='sortBtn' onClick={() => {setView(!view)}}>{sort}</button>
            <ul>
              {view==true?<Dropdown changeSort={changeSort}></Dropdown>:null}
            </ul>
          </div></Col>
        </Row>
        <div className='Modalcontent' ><button>Apply</button>  </div>
        
      </div>
    )
  }

  function Dropdown({changeSort}) {
    return (
     <div className="Dropdown">
        <li onClick={()=>changeSort('Popularity')}>Popularity</li>
        <li onClick={()=>changeSort('Price')}>Price</li>
        <li onClick={()=>changeSort('Newest')}>Newest</li>
      </div>
    );
  }

  function Card(props){
    let navigate=useNavigate()
    return(
      <div className="Item" onClick={()=>{navigate('/detail'+ '/'+ String(parseInt(props.i)))}}>
        <img src={'https://codingapple1.github.io/shop/shoes' + String(parseInt(props.i+1)) +'.jpg'} width="80%"/>
        <div className="Circle"></div>
        <h4>{props.shoes.title}</h4>
        <p>{props.shoes.price}</p>
      </div>
    
    
    )
  }

  export default Itemlist