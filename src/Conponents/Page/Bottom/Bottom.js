import React from 'react'
import './Bottom.css';
import {Link} from "react-router-dom";

function Bottom() {
  return (
    <div className='bottomContainer'>
      <div className='bottomContentBox'>
          <div className='bottomContents'>
            <p>©2022 Ennova Labs. All rights reserved.</p>
          </div>
          <div className='bottomContents'>
            <p>Address</p>
            <p>서울시 강남대로 94길 54, 6층</p>
          </div>
          <div className='bottomContents'>
            <p>Phone</p>
            <p>02-552-2570</p>
          </div>
          <div className='bottomContents'>
            <p>E-mail</p>
            <p className='Emphasis'>info@ennovalabs.com</p>

          </div>
      </div>

        
    </div>
  )
}

export default Bottom