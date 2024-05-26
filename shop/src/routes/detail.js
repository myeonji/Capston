import { useParams } from "react-router-dom"
import {Row,Col} from "react-bootstrap"
import { useDispatch } from "react-redux";
import { addItem } from "../store/store.js"
import { useState } from "react";
import axios from "axios";

function Detail(props){

  let dispatch = useDispatch()
  let {id} = useParams();
  let itemId = props.shoes.find(function(x){
    return x.id==id
  })
  const Season = ["Spring","Summer","Fall","Winter"]
  const Clothing_style = ["Classic","Modern","Casual","Vintage","Street","Minimal"] 
  const Background_color = ["Balck","White","Green","Grey"]
  let [size,setSize] = useState('')
  let [select,setSelect] = useState()

    return(
      
      <div className="container Body">
        <div className="row">
          <div className="col-md-6">
            <img src={"https://codingapple1.github.io/shop/shoes"+ String(parseInt(id)+1) +".jpg"} width="100%" />
          </div>
          <div className="col-md-6 mt-4">
            <h4 className="pt-5">{itemId.title}</h4>
            <p>{itemId.content}</p>
            <p>₩ {itemId.price}</p>
            <div className={"Circle "+itemId.color}></div>
            <hr></hr>
            <h6>SIZE</h6>
            <div>
              <button className="SizeBtn" onClick={()=>{setSize('S')}}>S</button>
              <button className="SizeBtn" onClick={()=>{setSize('M')}}>M</button>
              <button className="SizeBtn" onClick={()=>{setSize('L')}}>L</button>
              <button className="SizeBtn" onClick={()=>{setSize('XL')}}>XL</button>
              <hr></hr>
              <p>Selected Size : {size}</p>
            </div>
            <div>
              <button className="AddCart" onClick={()=>{
                dispatch(addItem({id : id, title : itemId.title, price : itemId.price, count : 1, img : "https://codingapple1.github.io/shop/shoes"+ String(parseInt(id)+1) +".jpg"}))
            }}>ADD TO CART</button>
            </div>
            
            <p>{'>'} DETAIL</p>
            <p>{'>'} SIZE & FIT</p>
            <p>{'>'} SHIPPING & RETURNS</p>
          </div>
        </div> 
        <div>
          <hr></hr>
          <h4>RECOMMENDED</h4>
          <Row>
            <Col><Card color={itemId.color}/></Col>
            <Col>2</Col>
            <Col>3</Col>
          </Row>
        </div>
        <div>
          <hr></hr>
          <h4>AI PICK</h4>
          <Row>
            <Col>
            <Row xs={2} md={2}>
              <Col>1 of 3</Col>
              <Col>2 of 3</Col>
              <Col>3 of 3</Col>
              <Col>4 of 4</Col>
            </Row>
            </Col>
            <Col>
            <div>
              <Row xs={1}>
                <Col>
                
                <div>
                  <RadioButtonGroup options={Season} groupName="Season"></RadioButtonGroup>
                  </div>
                </Col>
                <Col>
               
                <div>
                  <RadioButtonGroup options={Clothing_style} groupName="Style"></RadioButtonGroup>
                  </div>
                </Col>
                <Col>
                
                <div>
                  <RadioButtonGroup options={Background_color} groupName="Background Color"></RadioButtonGroup>
                </div>
                </Col>
              </Row>
            </div>
              </Col>
          </Row>
          
        </div>
        <div>
          <hr></hr>
          <h4>REVIEW</h4>
          <Row xs="auto" className="mb-5">
            <Col className="border-end">★ 5</Col>
            <Col className="border-end">userID</Col>
            <Col>yyyy/mm/dd</Col>            
          </Row>
          <Row xs="auto">
              <Col ><img src="https://codingapple1.github.io/shop/shoes1.jpg" width="150px"></img></Col>
              <Col>
                <p>상품명<br/>
                option<br></br>
                Size : M</p>
              </Col>
          </Row>
          //상품리뷰
        </div>
        <div>
          <hr></hr>
          <h4>Q&A</h4>
          //여따가 Q&A
          <PostRequestComponent/>
        </div>
      </div>
    )
  }

  function Card(props){
    return(
      <div className="Item">
        <img src='https://codingapple1.github.io/shop/shoes1.jpg' width="80%"></img>
        <div className={"Circle "+props.color}></div>
        <p>상품명</p>
        <p>가격</p>
      </div>
    )
  }

  function RadioButtonGroup({ options, groupName }) {
    const [selectedOption, setSelectedOption] = useState('');
  
    const handleOptionChange = (event) => {
      setSelectedOption(event.target.value);
    };
  
    const handleSubmit = (event) => {
      event.preventDefault();
      console.log(`Selected option for ${groupName}: ${selectedOption}`);
    };
  
    const renderRadioButtons = (options) => {
      return options.map((option, index) => (
        <div key={index}>
          <label>
            <input
              type="radio"
              name={groupName}
              value={option}
              checked={selectedOption === option}
              onChange={handleOptionChange}
            />
            {option}
          </label>
        </div>
      ));
    };
  
    return (
      <div>
        <form onSubmit={handleSubmit}>
          <h4>{groupName}</h4>
          {renderRadioButtons(options)}
          <button type="submit">Submit</button>
        </form>
        <p>Selected option: {selectedOption}</p>
      </div>
    );
  }
  
  const PostRequestComponent = () => {
    const handlePostRequest = async () => {
      const payload = {
        prompt: "close-up photography of old man standing in the rain at night, in a street lit by lamps, leica 35mm summilux",
        num_inference_steps: 4,
        guidance_scale: 1
      };
  
      try {
        const response = await axios.post('http://localhost:3000/txt2img', payload, {
          headers: {
            'accept': 'image/*',
            'Content-Type': 'application/json'
          }
        });
        console.log('Response:', response.data);
      } catch (error) {
        console.error('Error posting data:', error);
      }
    };
  
    return (
      <div>
        <button onClick={handlePostRequest}>Send POST Request</button>
      </div>
    );
  };
  export default Detail;