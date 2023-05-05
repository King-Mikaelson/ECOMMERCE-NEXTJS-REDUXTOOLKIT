import {shopProduct} from "../../../../../model";
import { createSlice, PayloadAction } from '@reduxjs/toolkit';


type InitialState = {
  product: shopProduct[],
  numOfIcecreams: number,
  total:number |  string,
  grandTotal:number
}
const initialState: InitialState = {
  product: [],
  numOfIcecreams:10,
  total:0,
  grandTotal:0,

}


const shopSlice = createSlice({
    name: 'shop',
    initialState,
    reducers: {
        ordered: state => {
        state.numOfIcecreams--
      },
      restocked: (state, action: PayloadAction<number>) => {
        state.numOfIcecreams += action.payload
      },
      addToCart:(state, action:PayloadAction<shopProduct>) => {
    if(state.product.find((product)=>product.id === action.payload.id)){
            state.product[state.product.findIndex((product)=>product.id === action.payload.id)].quantity = action.payload.quantity  
      }else{
        state.product.push({...action.payload})
        console.log(state.product)
      }
    },

    increaseQuantity:(state, action:PayloadAction<shopProduct>) => {
      if(state.product.find((product)=>product.id === action.payload.id))
      state.product[state.product.findIndex((product)=>product.id === action.payload.id)].quantity = state.product[state.product.findIndex((product)=>product.id === action.payload.id)].quantity + 1
    },
    
    decreaseQuantity:(state, action:PayloadAction<shopProduct>) => {
      if(state.product[state.product.findIndex((product)=>product.id === action.payload.id)].quantity < 2 && state.product){
           state.product =  state.product.filter((item) => item.id !== action.payload.id)
            console.log("mike ran")
      }else{
        state.product[state.product.findIndex((product)=>product.id === action.payload.id)].quantity = state.product[state.product.findIndex((product)=>product.id === action.payload.id)].quantity - 1 
      }
    },

    remove:(state, action:PayloadAction<shopProduct>) => {
      state.product = state.product.filter((item) => item.id !== action.payload.id)
    },

    total:(state)=> {
      state.total = state.product.reduce((total, item) => total + item.quantity * item.price, 0).toFixed(2)
    },
    grandTotal:(state)=>{
      state.grandTotal = Number(state.total) + 50 + 599.80
    },
    
    checkout:(state) => {
        state.product = []
    }

}

  })
  
  export default shopSlice.reducer
  export const {total, grandTotal, ordered, restocked, addToCart,  increaseQuantity, remove, checkout, decreaseQuantity } = shopSlice.actions
