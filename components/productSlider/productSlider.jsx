'use client'
import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import Product from "../product/product";
import "./productSlider.css"
const ProductSlider = ({products}) => {
 
  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    arrows: true,
    autoplay: true,
    autoplaySpeed: 4000,
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
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };
  return (
    <div className="prodSlider">
      <div className=" ">
        <Slider {...settings} className="prodSliderMain ">
          {products.length !== 0 && products.map((product) => {
            return <div className="item" key={product.id}>
              <Product rating={product.rating} category={product.category}
                img={product.thumbnail} title={product.title}  price={product.price}/>
            </div>

          })
          }

        </Slider>
      </div>
    </div>
  );
};

export default ProductSlider;
