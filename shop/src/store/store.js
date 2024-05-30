import { configureStore,createSlice } from '@reduxjs/toolkit'

//사용자 정보 - cart정보
let cart = createSlice({
    name : 'cart',
    initialState : [
      
      {
        id : 0,
        title : "White and Black",
        content : "Born in France",
        price : 120000,
        color : "White",
        count : 1,
        img : "https://codingapple1.github.io/shop/shoes1.jpg",
      },
    
      {
        id : 1,
        title : "Red Knit",
        content : "Born in Seoul",
        price : 110000,
        color : "Red",
        count : 1,
        img : "https://codingapple1.github.io/shop/shoes2.jpg",
      },
    
      {
        id : 2,
        title : "Gray Yordan",
        content : "Born in the States",
        price : 130000,
        color : "Gray",
        count : 1,
        img : "https://codingapple1.github.io/shop/shoes3.jpg",
      },
  
      {
        id : 3,
        title : "Blue Flower",
        content : "Born in the States",
        price : 130000,
        color : "Blue",
        count : 1,
        img : "https://codingapple1.github.io/shop/shoes4.jpg",
      },
  
      {
        id : 4,
        title : "Red Flower",
        content : "Born in the States",
        price : 130000,
        color : "Red",
        count : 1,
        img : "https://codingapple1.github.io/shop/shoes5.jpg"
      },
    ],
    reducers: {
      countUp(state,action){
        let idnum = state.findIndex((a)=>{return a.id === action.payload})
        state[idnum].count += 1
      },
      countDown(state,action){
        let idnum = state.findIndex((a)=>{return a.id === action.payload})
        
        if(state[idnum].count>0)
           state[idnum].count -= 1
      },
      addItem(state,action){
        state.push(action.payload)
      },
      delItem(state,action){
        state.splice(action.payload,1)
      }
    }
  })
  
  export default configureStore({
    reducer: {
      
      cart : cart.reducer
    }
  }) 

  export let {countUp,countDown,addItem,delItem} = cart.actions
