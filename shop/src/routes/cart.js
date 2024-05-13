import { useSelector } from "react-redux"
import {Table} from 'react-bootstrap'

function Cart(){
    let state = useSelector((state) => { return state } )

return(
    <div className="Body">
        <Table>
        <thead>
    <tr>
      <th>#</th>
      <th>상품명</th>
      <th>수량</th>
      <th>변경하기</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>1</td>
      <td>안녕</td>
      <td>안녕</td>
      <td>안녕</td>
    </tr>
  </tbody>
        <tbody>
    {
      state.cart.map((a, i)=>
        <tr key={i}>
          <td>1</td>
          <td>{state.cart[i].name}</td>
          <td>{state.cart[i].count}</td>
          <td>안녕</td>
        </tr>
       )
     }
  </tbody> 
</Table> 
    
    </div>

  )


}

export default Cart