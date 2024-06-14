import React from "react";
import "./product.css";
import Rating from "@mui/material/Rating";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import Link from "next/link";
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import ReplyOutlinedIcon from '@mui/icons-material/ReplyOutlined';
import RemoveRedEyeOutlinedIcon from '@mui/icons-material/RemoveRedEyeOutlined';
import Tooltip from '@mui/material/Tooltip';

const Product = ({ url = "/", img, category, title, rating, author, price, sale }) => {
  return (
    <div className="productItem">
      <div className="d-flex align-items-center flex-column w-100">
        <h6 className="badge">Hot</h6>
        <img src={img} height={"250px"}/>
        <div className="overlay d-flex align-items-center justify-content-between ">
          <div className="overlayItem"> <Tooltip title="Wishlist"><Link href={"/"}><FavoriteBorderOutlinedIcon /></Link></Tooltip> </div>
          <div className="overlayItem"> <Tooltip title="Share"><Link href={"/"}><ReplyOutlinedIcon /></Link></Tooltip> </div>
          <div className="overlayItem"> <Tooltip title="Show"><Link href={"/"}><RemoveRedEyeOutlinedIcon /></Link></Tooltip> </div>
        </div>
      </div>
      <h6 className="category">{category}</h6>
      <h4 className="title text-capitalize">
        <Link href={url}>{title.length > 22
            ? title.substr(0, 17)+"..."
            : title}</Link>
      </h4>
      <Rating
        name="half-rating-read"
        value={rating}
        precision={0.5}
        readOnly
      />
      <div className="d-block">
        By <span>{author}</span>
      </div>
      <div className="d-flex align-items-center justify-content-between ">
        <div className="d-flex align-items-center  ">
          <span className="price text-success">{price}$</span>
          <span className="oldprice">{sale}$</span>
        </div>
        <button className="btn btn-success d-flex align-items-center">
          <ShoppingCartOutlinedIcon className="me-2" />
          Add
        </button>
      </div>
    </div>
  );
};

export default Product;
