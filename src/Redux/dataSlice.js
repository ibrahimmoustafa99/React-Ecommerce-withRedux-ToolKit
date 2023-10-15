// import { createAsyncThunk } from "@reduxjs/toolkit";
import { createSlice } from '@reduxjs/toolkit'
// import axios from "axios";
// import { useState } from "react";




// export const fetchProducts= createAsyncThunk('get/products', async() =>{
//      const data = axios.get('https://api.escuelajs.co/api/v1/products')
//         .then(response =>{
//             console.log('done')
//         return response.data
//         }).catch(error =>{
//             console.log(error)
//         }
//      )
//      return data
// }) 

const initialState = {
    count:1
}

export const productsSlice = createSlice({
    name:'productsSlice',
    initialState,
    reducers:{
        setname:(state)=>{
            state.allProducts +=1
        }
        
    }

})


export default productsSlice.reducer




// export const counterSlice = createSlice({
//   name: 'counter',
//   initialState,
//   reducers: {
    
//   },
// })

// // Action creators are generated for each case reducer function

// export default counterSlice.reducer