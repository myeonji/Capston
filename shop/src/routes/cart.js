import { useSelector,useDispatch } from "react-redux"
import {Table,Row,Col} from 'react-bootstrap'
import { countDown,countUp, delItem } from "../store/store.js"



//유저 개인 페이지임

function Cart(){
    let state = useSelector((state) => { return state } )
    let dispatch = useDispatch()
    let Price = state.cart.reduce((acc, item) => acc + item.price * item.count, 0);
    let ItemNum = state.cart.reduce((acc, item) => acc + item.count, 0);
    let Discount = 0;
    let TotalPrice = Price - Discount;
return(
    <div className="Body">
      <h4>My Cart</h4>
      <div className="row">
        <div className="col-8">
      <div className="cart-list">
            <Table>
            <thead>
        <tr>
          <th>#</th>
          <th></th>
          <th>상품명</th>
          <th>수량</th>
          <th>가격</th>
          <th>변경하기</th>
          <th>기타</th>
        </tr>
      </thead>
      <tbody>
      </tbody>
            <tbody>
        {
          state.cart.map((a, i)=>
            <tr key={i}>
              <td>{i}</td>
              <td><img src={state.cart[i].img} width="200px"></img></td>
              <td>{state.cart[i].title}</td>
              <td>
                <button onClick={()=>{dispatch(countDown(state.cart[i].id))}}>-</button>
                {state.cart[i].count}
                <button onClick={()=>{dispatch(countUp(state.cart[i].id))}}>+</button>
              </td>
              <td>{state.cart[i].price}</td>
              
              <td><button onClick={()=>{dispatch(delItem(i))}}>삭제</button></td>
              
            </tr>//삭제하면 서버에 반영하기
            
          )
        }
      </tbody> 
      </Table> 
      </div>
    </div>

    <div className="col-4">
    <div className="cart-pay">
      <div>
        <h4>Order</h4>
        <p className="between">Number of Products : <span>{ItemNum}</span></p>
        <hr></hr>
      </div>
      <div className="between"><div>Price</div><div>₩ {Price}</div></div>
      <div className="between"><div>Discount</div><div>- ₩ {Discount}</div></div>
      <div className="between"><div><b>Total</b></div><div><b>₩ {TotalPrice}</b></div></div> 
    </div>
    <div><button className="AddCart">CHECKOUT</button></div>
    </div>
    
      </div>
    
  </div>


  )


}

export default Cart