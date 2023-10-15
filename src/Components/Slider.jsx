import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import './Styles/Slider.css'

import img1 from '../Images/1.jpg'
import img2 from '../Images/2.jpg'
import img3 from '../Images/3.jpg'



function Slider() {
  return (
    <Carousel className='slider'>
                <div>
                    <img src={img1} style={{width:'50%'}}/>
                    <p className="legend">Legend 1</p>
                </div>
                <div>
                    <img src={img2} style={{width:'50%'}} />
                    <p className="legend">Legend 2</p>
                </div>
                <div>
                    <img src={img3} style={{width:'50%'}} />
                    <p className="legend">Legend 3</p>
                </div>
            </Carousel>
  )
}

export default Slider