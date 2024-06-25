"use client";
import Link from "next/link";
import "./style.css";
import "./responsive.css";
import Zoom from 'react-medium-image-zoom'
import 'react-medium-image-zoom/dist/styles.css'
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import { Rating } from "@mui/material";
import Slider from "react-slick";
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import ShareOutlinedIcon from '@mui/icons-material/ShareOutlined';
import { useEffect, useRef, useState } from "react";
import axios from "axios";
const ProductDetails = ({ params }) => {
  const zoomRef = useRef();
  const [selectedSize, setSelectedSize] = useState(0);
  const [featuredImg, setFeaturedImg] = useState("/images/camera.jpg");

  const [activeTab, setActiveTab] = useState('home');

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };
  useEffect(() => {
    getData()
  }, [])
  const getData = async () => {
    try {
      await axios.get('https://dummyjson.com/products').then((respose) => {
        console.log(respose.data);
      })
    } catch (error) {
      console.log(error);
    }
  }
  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 2000,
  };
  const goToImg = (url) => {
    setFeaturedImg(url)
  };
  const selectedSizeFN = (size) => {
    setSelectedSize(size)
  }
  return (
    <div className="container-fluid ">
      <div className="breadcrumbWrapper">
        <nav
          style={{ "--bs-breadcrumb-divider": "'>'" }}
          aria-label="breadcrumb">
          <ol className="breadcrumb ">
            <li className="breadcrumb-item ">
              <Link href="/" className=" ">
                <HomeOutlinedIcon />
                Home
              </Link>
            </li>
            <li className="breadcrumb-item active" aria-current="page">
              Library
            </li>
          </ol>
        </nav>
      </div>
      <div className="productDetails w-100 ">
        <div className="row w-100 position-relative">
          {/* product zoom start here */}
          <div className="col-sm-5 card image rounded-5 position-relative">
            {/* <GlassMagnifier
              imageSrc={featuredImg}
              magnifierSize={"30%"}
              allowOverflow={true}
              magnifierBorderSize={"5"}
            /> */}
            <Zoom>
              <img
                alt="That Wanaka Tree, New Zealand by Laura Smetsers"
                src={featuredImg}
                className="w-100"
              />
            </Zoom>
            <SearchOutlinedIcon className="position-absolute" />

            <Slider {...settings} className="zoomSlider mt-4" ref={zoomRef}>
              <div className="item">
                <img
                  src="/images/orange.png"
                  alt=""
                  className=""
                  onClick={() => goToImg("/images/orange.png")}
                />
              </div>
              <div className="item">
                <img
                  src="/images/orange.png"
                  alt=""
                  className=""
                  onClick={() => goToImg("/images/orange.png")}
                />
              </div>
              <div className="item">
                <img
                  src="/images/camera.jpg"
                  alt=""
                  className=""
                  onClick={() => goToImg("/images/camera.jpg")}
                />
              </div>
              <div className="item">
                <img
                  src="/images/orange.png"
                  alt=""
                  className=""
                  onClick={() => goToImg("/images/orange.png")}
                />
              </div>
              <div className="item">
                <img
                  src="/images/camera.jpg"
                  alt=""
                  className=""
                  onClick={() => goToImg("/images/camera.jpg")}
                />
              </div>
            </Slider>
          </div>
          {/* product zoom ends here */}

          {/* product info starts here */}
          <div className="col-sm-7 details">
            <h2>Seed of Change</h2>
            <div className="reviews d-flex align-items-center ">
              <Rating
                className="me-2"
                name="half-rating-read"
                defaultValue={4}
                precision={0.5}
                readOnly
              />
              <span className="text-secondary small">(22 reviews)</span>
            </div>
            <div className="d-flex  prices ">
              <span className="price text-success">$22</span>
              <span className="d-flex flex-column align-items-baseline  ">
                <span className="discount">22% off</span>
                <span className="oldprice">$30</span>
              </span>
            </div>
            <p>
              Introducing the Luxe Pro Facial Steamer, a revolutionary skincare
              device that combines the power of steam and advanced technology to
              deeply cleanse and rejuvenate your skin. With its advanced
              nebulizing technology, this steamer produces a gentle yet intense
              mist that penetrates deep into pores to remove impurities, reduce
              acne, and improve skin elasticity. The device comes with 5
              interchangeable attachment heads for customized treatment,
              including a facial brush for gentle exfoliation, a nose strip for
              blackhead removal, and a serum applicator for targeted hydration.
              Perfect for all skin types, this steamer is the perfect addition
              to your daily skincare routine.
            </p>
            <br />
            <div className="sizes d-flex align-items-center">
              <h5 className="me-3 mb-3">Size/Weight: </h5>
              <ul className="list list-inline ">
                <li className={`list-inline-item btn btn-error border ${selectedSize === 0 ? 'active' : ''}`} onClick={() => { selectedSizeFN(0) }}>50g</li>
                <li className={`list-inline-item btn btn-error border ${selectedSize === 1 ? 'active' : ''}`} onClick={() => { selectedSizeFN(1) }}>60g</li>
                <li className={`list-inline-item btn btn-error border ${selectedSize === 2 ? 'active' : ''}`} onClick={() => { selectedSizeFN(2) }}>70g</li>
                <li className={`list-inline-item btn btn-error border ${selectedSize === 3 ? 'active' : ''}`} onClick={() => { selectedSizeFN(3) }}>80g</li>
                <li className={`list-inline-item btn btn-error border ${selectedSize === 4 ? 'active' : ''}`} onClick={() => { selectedSizeFN(4) }}>90g</li>
                <li className={`list-inline-item btn btn-error border ${selectedSize === 5 ? 'active' : ''}`} onClick={() => { selectedSizeFN(5) }}>100g</li>
              </ul>
            </div>
            <br />
            <div className="counter d-flex align-items-center">
              <div className="d-flex align-items-center addToCart w-100">
                <input className="form-control me-2" type="number" name="number" id="" defaultValue={1} />
                <button className="btn btn-success"><ShoppingCartOutlinedIcon className="me-2" />Add to cart</button>
              </div>
              <div className="share w-100">
                <span className="btn btn-error border m-2 text-secondary "><FavoriteBorderOutlinedIcon /></span>
                <span className="btn btn-error border m-2 text-secondary "><ShareOutlinedIcon /></span>
              </div>
            </div>

          </div>
          {/* product info ends here */}

          {/* product tabs starts here*/}
          <div className="card mt-5 p-4 rounded-5">
            <ul className="nav  detailsTabs mb-2" id="myTab" role="tablist">
              <a onClick={() => handleTabClick('description')}>
                <li className={`tabNav ${activeTab === 'description' ? 'active' : ''}`} role="presentation">Description</li>
              </a>
              <a onClick={() => handleTabClick('additionalInfo')}>
                <li className={`tabNav ${activeTab === 'additionalInfo' ? 'active' : ''}`} role="presentation">Additional Info</li>
              </a>
              <a onClick={() => handleTabClick('reviews')}>
                <li className={`tabNav ${activeTab === 'reviews' ? 'active' : ''}`} role="presentation">Reviews</li>
              </a>
            </ul>
            <div className="tab-content" id="myTabContent">
              <div className={`tab-pane m-2 fade ${activeTab === 'description' ? 'show active' : ''}`}>
                <h2>Description</h2>
                <p>Content for Home tab...</p>
              </div>
              <div className={`tab-pane m-2 fade ${activeTab === 'additionalInfo' ? 'show active' : ''}`}>
                <h2>Additional Info</h2>
                <p>Content for Profile tab...</p>
              </div>
              <div className={`tab-pane m-2 fade ${activeTab === 'reviews' ? 'show active' : ''}`}>

                <h2>Reviews</h2>
                <p>Content for Contact tab...</p>
              </div>
            </div>
          </div>
          {/* product tabs ends here*/}
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
