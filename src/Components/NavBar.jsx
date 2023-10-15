import React, { useState } from 'react'
import {  useSelector } from 'react-redux';
import './Styles/Nav.css';
import {TfiLayoutColumn2, TfiLayoutColumn3, TfiLayoutColumn4 } from 'react-icons/tfi'
import Slidermoon from './Slider';
import img from '../Images/loading.jpg'
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import {addtocart} from'../Redux/ProductsSlice'

function NavBar(props) {
    const dispatch =useDispatch();

    const products= useSelector(state => state.productsSlice)
    const [classname, setClassname]=useState('itemDiv-4col')

    const handelclassName2col=()=>{
      setClassname('itemDiv-2col')
      console.log(products.cart)
    }
    const handelclassName3col=()=>{
      setClassname('itemDiv-3col')
    }
    const handelclassName4col=()=>{
      setClassname('itemDiv-4col')
    }
    
  return (
    <>
    <Slidermoon />
    <div className='icons'>

        <TfiLayoutColumn2 className='icon' onClick={handelclassName2col}/>
        <TfiLayoutColumn3 className='icon' onClick={handelclassName3col}/>
        <TfiLayoutColumn4 className='icon' onClick={handelclassName4col}/>

      </div>
    <div className='container'>
        {products.loading && <img src={img} alt='' />}
        {products.error && !products.loading ? <p>ERROR : {products.error }</p>: null}

        {products.products.filter((product) =>{
          if (props.searchvalue === ''){
          return product
        }
        else if(product.title.toLowerCase().includes(props.searchvalue.toLowerCase())){
          return product
        }
        }).map(
            (product) =>{
                return (
                    <div className={classname}>
                      <div className='innerdiv'>
                        <p>
                          {product.description}
                        </p>
                        <p>{product.price}
                        <span className='sign'>$</span>
                      </p>
                        <button onClick={() =>{
                          dispatch(addtocart(product))
                        }}>
                          Add To Cart
                        </button>
                        <button>
                          <Link to='/details' 
                          state={{
                            item:product
                          }}>
                            See All Details
                          </Link>
                          
                        </button>
                      </div>
                      <img src={product.category.image} alt='' />
                      <p> {product.title}</p>
                      <p>{product.price}
                        <span className='sign'>$</span>
                      </p>
                    </div>

                );
            }
            )

        }
    </div>
    </>
  )
}

export default NavBar