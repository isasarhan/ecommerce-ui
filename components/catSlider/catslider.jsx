"use client";
import "./style.css";

import Slider from "react-slick";

const Catslider = ({ category }) => {
  var settings = {
    dots: false,
    infinite: true, 
    speed: 500,
    slidesToShow: 8,
    slidesToScroll: 1,
    arrows: true,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1
        }
      }
    ]
  };
  return (
    <div className="catSlider">
      <div className="container-fluid">
        <h2 className="p-4">Featured Categories</h2>
        <Slider {...settings} className="catSliderMain">
          {
            category.length !== 0 &&
            category.map((cat, i) => {
              return <div className="info" key={i}>
                <div className="item">
                  <img src="/images/orange.png" className="w-50" />
                  <h4 className="m-0">{cat.name}</h4>
                  <p>Cake & MIlk</p>
                </div>
              </div>
            })
          }


        </Slider>
      </div>
      <br />
      <br />
      <br />
      <br />
    </div>
  );
};

export default Catslider;
