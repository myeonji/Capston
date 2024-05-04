import { useParams } from "react-router-dom"
import {Row,Col} from "react-bootstrap"

function Detail(props){

  let {id} = useParams();
  let itemId = props.shoes.find(function(x){
    return x.id==id
  })

    return(
      
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <img src={"https://codingapple1.github.io/shop/shoes"+ String(parseInt(id)+1) +".jpg"} width="100%" />
          </div>
          <div className="col-md-6 mt-4">
            <h4 className="pt-5">{itemId.title}</h4>
            <p>{itemId.content}</p>
            <p>{itemId.price}원</p>
            <p>COLOR</p>
            <div className="Circle"></div>
            <p>SIZE</p>
            <div>
              <button className="SizeBtn">S</button>
              <button className="SizeBtn">M</button>
              <button className="SizeBtn">L</button>
              <button className="SizeBtn">XL</button>
            </div>
            <div>
              <button className="AddCart">주문하기</button>
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
            <Col><Card/></Col>
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
            <Col>2!</Col>
          </Row>
          //여따가 Ai Pick
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
        </div>
      </div>
    )
  }

  function Card(){
    return(
      <div className="Item">
        <img src='https://codingapple1.github.io/shop/shoes1.jpg' width="80%"></img>
        <div className="Circle"> </div>
        <p>상품명</p>
        <p>가격</p>
      </div>
    )
  }
  

  export default Detail