import React from "react";
import "./banner.css";
const Banners = () => {
  return (
    <div className="bannerSection">
      <div className="container-fluid ">
        <div className="row">
          <div className="col-md-4 p-3">
            <div className="box">
              <img src="/images/orange.png" className="" />
              <h4>Make your breakfast healthy and easy</h4>
              <button className="btn btn-primary ">Shop now</button>
            </div>
          </div>
          <div className="col-md-4 p-3">
            <div className="box">
              <img src="/images/orange.png" className="" />
              <h4>Make your breakfast healthy and easy</h4>
              <button className="btn btn-primary ">Shop now</button>
            </div>
          </div>
          <div className="col-md-4 p-3">
            <div className="box">
              <img src="/images/orange.png" className="" />
              <h4>Make your breakfast healthy and easy</h4>
              <button className="btn btn-primary ">Shop now</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banners;
