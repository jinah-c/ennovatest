import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import './Slider.css'
import BG01 from '../../img/bg01.jpg'
import BG02 from '../../img/bg02.jpg'
import BG03 from '../../img/bg03.jpg'
import BG04 from '../../img/bg04.jpg'

export default class SimpleSlider extends Component {
  render() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1
    };
    return (
      <div>
        <Slider {...settings}>
          <div>
            <img className="sliderIMG" src={BG01} alr=""/></div>
          <div>
            <img className="sliderIMG" src={BG02} alr=""/></div>
          <div>
            <img className="sliderIMG" src={BG03} alr=""/></div>
          <div>
            <img className="sliderIMG" src={BG04} alr=""/></div>
        </Slider>
      </div>
    );
  }
}