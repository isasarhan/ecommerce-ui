import React from "react";
import Rating from "@mui/material/Rating";
import "./topSelling.css";
import Link from "next/link";
const TopSelling = ({ title, products }) => {
  return (
    <div className="topSellingBox">
      <h3 >{title}</h3>
      {
        products.length !== 0 && Array(4).fill(0).map((v, i) => {
          return <div className="item d-flex align-item-center " key={i}>
            <img src={products[i].thumbnail} className="me-2" />
            <div className="info d-flex align-items-left flex-column">
              <h4 className="productTitle"><Link href={"/"}> {products[i].title}</Link></h4>
              <Rating
                name="half-rating-read"
                defaultValue={products[i].rating}
                precision={0.5}
                readOnly
              />
              <div className="d-flex align-items-center  ">
                <span className="price text-success">{products[i].price}</span>
                <span className="oldprice">30$</span>
              </div>
            </div>
          </div>
        })}


    </div>
  );
};

export default TopSelling;
