import React from 'react'
import { useLocation } from 'react-router-dom'
import './Styles/Details.css'
import { useDispatch } from 'react-redux';
import {addtocart} from'../Redux/ProductsSlice'

function Details() {
    const dispatch= useDispatch()
    const location =useLocation()
    const data=location.state
  return (
    <div className='details'>
        <img src={data.item.category.image} alt='' />

        <div className='data'>
            <p>{data.item.title}</p>
            <p>{data.item.description}</p>
            <p>{data.item.price} $</p>
            <button onClick={() =>{
                          dispatch(addtocart(data.item))
                        }}>ADD TO CART</button>
        </div>
        {/* <button onClick={()=>{
            console.log(data)
        }}></button> */}


    </div>
  )
}

export default Details
