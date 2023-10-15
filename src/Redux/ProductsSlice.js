import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState={
    loading:false,
    products:[],
    error:'',
    cart:[]
}

export const fetchProducts = createAsyncThunk('product/fetchProducts', () =>{
    return  axios
    .get('https://api.escuelajs.co/api/v1/products')
    .then( response => response.data)
})

const productsSlice=createSlice({
    name : 'productSlice',
    initialState,
    reducers:{
        addtocart:(state, action) =>{
            state.cart.push(action);

        }
    },
    extraReducers: 
    (builder) =>{
        builder.addCase(fetchProducts.pending, (state) => {
            state.loading=true
        })
        builder.addCase(fetchProducts.fulfilled, (state,action) => {
            state.loading=false
            state.products=action.payload
            state.error=''
        })
        builder.addCase(fetchProducts.rejected, (state,action) => {
            state.loading=false
            state.products=[]
            state.error=action.error.message
        })
    }
})
export const {addtocart} =productsSlice.actions
export default productsSlice.reducer