import React, { useState } from "react";
import "./select.css";
import { ClickAwayListener } from "@mui/material";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUp from "@mui/icons-material/KeyboardArrowUp";
import LocationOnIcon from "@mui/icons-material/LocationOn";

const Select = ({ data, placeholder, icon }) => {
  const [isOpenDropDown, setIsOpenDropDown] = useState(false);
  const [selectedItem, setSelectedItem] = useState(placeholder);

  const [list, setList] = useState(data);

  const openDropDown = () => {
    setIsOpenDropDown(!isOpenDropDown);
  };
  const selectDropDown = (item) => {
    setSelectedItem(item);
    setIsOpenDropDown(!isOpenDropDown);
  };

  const filterSelect = (e) => {
    const allCountries = data;
    const value = e.target.value.toLowerCase();
    const result = allCountries.filter((item) => {
      return item.toLowerCase().includes(value);
    });
    setList(result);
  };
  return (
    <ClickAwayListener
      onClickAway={() => {
        isOpenDropDown ? setIsOpenDropDown(false) : "";
      }}
    > 
      <div className="headerSelect cursor position-relative ">
        {icon}
        <span className="openSelect " onClick={openDropDown}>
          {selectedItem.length > 14
            ? selectedItem.substr(0, 10)+"..."
            : selectedItem}
          {!isOpenDropDown ? <KeyboardArrowDownIcon /> : <KeyboardArrowUp />}
        </span>
        {isOpenDropDown && (
          <div className="selectDrop">
            <div className="searchField">
              <input type="text" onChange={filterSelect} />
            </div>
            <ul className="searchResult">
              {list.map((item, index) => {
                return (
                  <li key={index} onClick={() => selectDropDown(item)}>
                    {item}
                  </li>
                );
              })}
            </ul>
          </div>
        )}
      </div>
    </ClickAwayListener>
  );
};

export default Select;
