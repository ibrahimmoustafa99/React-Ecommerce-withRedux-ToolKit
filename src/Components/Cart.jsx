import React from 'react'
import { useSelector } from 'react-redux'
import './Styles/Cart.css'

function Cart() {
    const products= useSelector(state => state.productsSlice)
    let counter= 0
  return (
    <div > 
        <div className='cartPage'>
        {/* <button onClick={()=>{
            console.log(products)
        }}>button</button> */}
        {
            products.cart.map((product) => {
                counter += product.payload.price
                return(
                    <div className='cartitem'>
                        <img src={product.payload.category.image} alt='' />
                        <p>{product.payload.title}</p>
                        <p>{product.payload.price}$</p>

                    </div>
                )

            })
        }
        <p className='counter'>TOTAL IS :  {counter}$</p>

        </div>
        
    </div>
  )
}

export default Cart