import { useParams } from "react-router-dom"
import {Row,Col} from "react-bootstrap"
import { useDispatch } from "react-redux";
import { addItem } from "../store/store.js"
import { useState,useEffect } from "react";
import axios from 'axios';
import colornames from 'colornames';

function Detail(props){

  let dispatch = useDispatch()
  let {id} = useParams();
  let itemId = props.shoes.find(function(x){
    return x.id==id
  })
  const Season = ["Spring","Summer","Fall","Winter"]
  const Clothing_style = ["Classic","Modern","Casual","Vintage","Street","Minimal"] 
  const Background_color = ["Balck","White","Green","Grey"]

  var [prompt,setPrompt] = useState('')
  var [opt1,setOpt1]=useState('')//프롬프트 옵션1
  var [opt2,setOpt2]=useState('')//프롬프트 옵션2
  var [opt3,setOpt3]=useState('')//프롬프트 옵션3

  useEffect(() => {
    setPrompt(`A three-quarter full shot of a person wearing a ${opt2} jacket, with their head out of the frame, on a ${opt3} solid color background, in a ${opt1}"
      `);//최종 프롬프트
  }, [opt1, opt2, opt3]);

  function onSetOpt1(a){
    setOpt1(a);
  }
  function onSetOpt2(a){
    setOpt2(a);
  }
  function onSetOpt3(a){
    setOpt3(a);
  }

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
        {/*<div>
          <hr></hr>
          <h4>RECOMMENDED</h4>
          <Row>
            <Col><Card color={itemId.color}/></Col>
            <Col>2</Col>
            <Col>3</Col>
          </Row>
        </div>*/}
        <div>
          <hr></hr>
          <h4>AI PICK</h4>
          <Row>
            <Col>
            <Row xs={2} md={2}>
              <Col>{opt1}</Col> 
              <Col>{opt2}</Col>
              <Col>{opt3}</Col>
              <Col></Col>
            </Row>
            </Col>
            <Col>
            <div>
              <Row xs={1}>
                <Col>
                
                <div>
                  <RadioButtonGroup options={Season} groupName="Season" onSetOpt={onSetOpt1}></RadioButtonGroup>
                  </div>
                </Col>
                <Col>
               
                <div>
                  <RadioButtonGroup options={Clothing_style} groupName="Style" onSetOpt={onSetOpt2}></RadioButtonGroup>
                  </div>
                </Col>
                <Col>
                
                <div>
                  <RadioButtonGroup options={Background_color} groupName="Background Color" onSetOpt={onSetOpt3}></RadioButtonGroup>
                </div>
                </Col>
              </Row>
              <p>Selected Option : {prompt}</p>
              <PostRequestComponent prompt={prompt}/>
            </div>
            
              </Col>
          </Row>
          <ToneOnTone color={itemId.color} />
        </div>
     {/* <div>
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
          
        </div>*/}
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

  function RadioButtonGroup({ options, groupName, onSetOpt} ) {
    const [selectedOption, setSelectedOption] = useState('');


    const handleOptionChange = (event) => {
      const newValue = event.target.value;
      setSelectedOption(newValue);
      onSetOpt(newValue);
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
          
        </form>
       
      </div>
    );
  }
  
  const PostRequestComponent = (props) => {
    const handlePostRequest = async () => {
      const payload = {
        prompt: props.prompt,
        num_inference_steps: 4,
        guidance_scale: 1,
      };
      console.log(payload)
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
        <button className="AddCart" onClick={handlePostRequest}>Send POST Request</button>
      </div>
    );
  };




  // 기본 색상과 흰색 사이의 색상을 보간하는 함수
  const interpolateColor = (color, target, ratio) => {
    return color.map((c, i) => Math.round(c + (target[i] - c) * ratio));
  };
  
  // 톤온톤 색상 조합을 생성하는 함수
  const generateToneOnToneColors = (baseColor, steps) => {
    const white = [255, 255, 255];
    return Array.from({ length: steps }, (_, i) => 
      interpolateColor(baseColor, white, i / (steps - 1))
    );
  };
  const hexToRgb = (hex) => {
    const bigint = parseInt(hex.slice(1), 16);
    return [(bigint >> 16) & 255, (bigint >> 8) & 255, bigint & 255];
  };
  // RGB 배열을 CSS 색상 문자열로 변환하는 함수
  const rgbToString = (color) => {
    return `rgb(${color[0]}, ${color[1]}, ${color[2]})`;
  };
  
  const ToneOnTone = (props) => {
    const [baseColor, setBaseColor] = useState([100, 150, 30]);
    const steps = 5;
    const colors = generateToneOnToneColors(baseColor, steps);
    
    
    const favoriteColor = colornames(props.color);//사용자가 선택한 색상

    useEffect(() => {
      // 컴포넌트가 마운트될 때 유저 데이터를 가져옴
        const userColor = hexToRgb(favoriteColor);//rgb로 변환
        setBaseColor(userColor);
      },[]); 

    return (
      <div >
        <h5>Tone-on-Tone Colors</h5>
        <div style={{ display: 'flex', flexDirection: 'row' }}>
          {colors.map((color, index) => (
            <div 
              key={index} 
              style={{ 
                backgroundColor: rgbToString(color), 
                width: '50px', 
                height: '50px' 
              }} 
            />
          ))}
        </div>
        <hr/>
      </div>
     
    );
  };

  export default Detail;