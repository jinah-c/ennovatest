import React from 'react'
import './MainBanner.css';
import {Link} from "react-router-dom";

function mainBanner() {
  return (
    <>
    {/* <div class="overlay"></div> */}
    <div className='bannerContainer' data-aos="fade-up" data-aos-delay="100">
        <h1>TITLE TEXT</h1>

        <Link to="#" className='button01' data-aos="fade-up" data-aos-delay="300">
            ENNOVA LABS
        </Link>

    </div>
    </>
  )
}

export default mainBanner