import React from "react";
import SendIcon from "@mui/icons-material/Send";
import "./newsLetter.css";
import "./responsive.css";
import Image from "next/image";

const Newsletter = () => {
  return (
    <div className="container-fluid">
      <div className="newsLetterWrapper d-flex flex-column justify-content-center">
        <Image src="/images/delivery-man.png" alt="" height={550} width={250}/>
        <h3>Stay home and get ready for the summer and our products</h3>
        <p>start your daily journy with <span className="company">Serhan Jewelry</span></p>
        <div className="d-flex align-items-center newsletterbanner">
          <SendIcon />
          <input type="text" placeholder="Enter your email" />
          <button className="btn btn-primary">SUBSCRIBE</button>
        </div>
      </div>
    </div>
  );
};

export default Newsletter;
