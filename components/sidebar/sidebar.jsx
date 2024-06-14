"use client";
import React, { useState } from "react";
import "./sidebar.css";
import AcUnitIcon from "@mui/icons-material/AcUnit";
import { Slider } from "@mui/material";
import CheckboxB from "../checkbox/checkbox";
import FilterAltOutlinedIcon from "@mui/icons-material/FilterAltOutlined";
function valuetext(value) {
  return `${value}°C`;
}
const Sidebar = () => {
  const [value, setValue] = useState([130, 550]);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <>
      <div className="sidebar">
        <div className="card border-0 shadow rounded-3">
          <h2 className="">Category</h2>
          <div className="catList">
            <div className="catItem rounded-3 cursor">
              <div className="d-flex align-items-center justify-content-between m-0 ">
                <span className="d-flex align-items-center">
                  <AcUnitIcon className="me-2" />
                  <h5 className="m-0">Milk & Diaries</h5>
                </span>
                <span className="badge rounded-circle">33</span>
              </div>
            </div>
            <div className="catItem rounded-3 cursor">
              <div className="d-flex align-items-center justify-content-between m-0">
                <span className="d-flex align-items-center">
                  <AcUnitIcon className="me-2" />
                  <h5 className="m-0">Milk & Diaries</h5>
                </span>
                <span className="badge rounded-circle">33</span>
              </div>
            </div>
            <div className="catItem rounded-3 cursor">
              <div className="d-flex align-items-center justify-content-between m-0">
                <span className="d-flex align-items-center">
                  <AcUnitIcon className="me-2" />
                  <h5 className="m-0">Milk & Diaries</h5>
                </span>
                <span className="badge rounded-circle">33</span>
              </div>
            </div>
            <div className="catItem rounded-3 cursor">
              <div className="d-flex align-items-center justify-content-between m-0">
                <span className="d-flex align-items-center">
                  <AcUnitIcon className="me-2" />
                  <h5 className="m-0">Milk & Diaries</h5>
                </span>
                <span className="badge rounded-circle">33</span>
              </div>
            </div>
            <div className="catItem rounded-3 cursor">
              <div className="d-flex align-items-center justify-content-between m-0">
                <span className="d-flex align-items-center">
                  <AcUnitIcon className="me-2" />
                  <h5 className="m-0">Milk & Diaries</h5>
                </span>
                <span className="badge rounded-circle">33</span>
              </div>
            </div>
          </div>
        </div>
        <div className="card border-0 shadow rounded-3">
          <h2>Product Filter</h2>
          <Slider
            min={1}
            max={1000}
            step={1}
            defaultValue={50}
            aria-label="Default"
            valueLabelDisplay="auto"
            value={value}
            onChange={handleChange}
            getAriaLabel={() => "Temperature range"}
            getAriaValueText={valuetext}
            color="success"
          />
          <div className="priceRange d-flex align-items-center">
            <div>
              From: <span className="text-success">${value[0]}</span>
            </div>
            <div className="ms-auto">
              To: <span className="text-success">$:{value[1]}</span>
            </div>
          </div>
          <div className="filters">
            <h5>Color</h5>
            <ul className="list list-inline">
              <li>
                <CheckboxB label={"Blue"} name={"blue"} number={20}/>
              </li>
              <li>
                <CheckboxB label={"Red"} name={"red"} />
              </li>
              <li>
                <CheckboxB label={"Green"} name={"green"} />
              </li>
              <li>
                <CheckboxB label={"White"} name={"white"} />
              </li>
            </ul>
          </div>
          <div className="filters">
            <h5>Item Conditions</h5>
            <ul className="list list-inline">
              <li>
                <CheckboxB label={"New"} name={"new"} />
              </li>
              <li>
                <CheckboxB label={"Refurbished"} name={"refurbished"} />
              </li>
              <li>
                <CheckboxB label={"Used"} name={"used"} />
              </li>
            </ul>
          </div>
          <button className="btn btn-success me-0 fs-6 ">
                <FilterAltOutlinedIcon className="me-2 fs-5"/>
                Filter
              </button>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
