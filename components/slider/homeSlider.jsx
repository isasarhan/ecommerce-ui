"use client";
import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import "./homeSlider.css";
import "./responsive.css";
import SendIcon from "@mui/icons-material/Send";

const HomeSlider = () => {

  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    fade: true,
    arrows: true,
    autoplay: true,
    autoplaySpeed: 4000
  };
  return (
    <section className="homeSlider ">
      <div className="container-fluid position-relative ">
        <Slider {...settings} className="homeSliderMain">
          <div className="item">
            <img src="/images/slider-1.png" className="w-100 rounded-5" />
            <div className="info">
              <h1 className="mb-4 ">
                Dont Miss Catching
                <br />
                Our Offers
              </h1>
              <p>this is a short description for the slider</p>
            </div>
          </div>
          <div className="item">
            <img src="/images/slider-2.png" className="w-100 rounded-5" />
            <div className="info">
              <h1 className="mb-4 ">
                Dont Miss Catching
                <br />
                Our Offers
              </h1>
              <p>this is a short description for the slider</p>
            </div>
          </div>
        </Slider>
        <div className="d-flex align-items-center newsletterbanner">
          <SendIcon /> 
          <input type="text" placeholder="Enter your email" />
          <button className="btn btn-primary">SUBSCRIBE</button>
        </div>
      </div>
    </section>
  );
};

export default HomeSlider;
