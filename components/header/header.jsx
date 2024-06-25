"use client";
import SearchIcon from "@mui/icons-material/Search";
import "./header.css";
import "./resposive.css";
import Select from "../select/select";
import axios, { all } from "axios";
import { useEffect, useRef, useState } from "react";
import AutoModeIcon from "@mui/icons-material/AutoMode";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";
import ExitToAppOutlinedIcon from "@mui/icons-material/ExitToAppOutlined";
import { Button, ClickAwayListener } from "@mui/material";
import Navbar from "./navbar/navbar";
import MenuIcon from '@mui/icons-material/Menu';
import OffCanvas from "./canvas";
import Link from "next/link";
import SearchCanvas from "./searchCanvas";
import LoginIcon from '@mui/icons-material/Login';
import useWindowWidth from "@/hooks/useWindowWidth";
import useWindowDimensions from "@/hooks/useWindowDimensions";
const Header = () => {
  const [isOpenDropDown, setIsOpenDropDown] = useState(false);
  const [isNavbarOpen, setIsNavbarOpen] = useState(false);
  // const windowsDimensions = useWindowDimensions()
  const [showOffcanvas, setShowOffcanvas] = useState(false);
  const [showSearch, setShowSearch] = useState(false);

  const toggleNavbar = () => {
    setIsNavbarOpen(!isNavbarOpen);
  };
  const toggleOffCanvas = () => {
    setShowOffcanvas(!showOffcanvas);
  };
  const toggleSearch = () => {
    setShowSearch(!showSearch);
  };

  const [countries, setCountries] = useState([]);
  const getCountries = async (url) => {
    const result = axios.get(url).then((res) => {
      if (res) {
        let count = [];
        res.data.data.map((country) => {
          count.push(country.country);
        });
        setCountries(count);
      }
    });
  };
  const openDopDown = () => {
    setIsOpenDropDown(!isOpenDropDown);
    console.log("hi");
  };
  useEffect(() => {
    getCountries("https://countriesnow.space/api/v0.1/countries/");
  }, []);
  return (
    <>
      <div className="headerWrapper position-relative" >
        <header>
          <div className="container-fluid">
            <div className="row align-items-center ">
              <div className="col-sm-2 part1 d-flex align-items-center ">
                <Link href={'/'}><img src={`/logo.png`} height={"80px"} /></Link>
                
                {/* {windowsDimensions.width < 470 && <div className="d-flex align-items-center ms-auto">
                  <div className="navToggle me-3" onClick={toggleSearch}> <SearchIcon /></div>
                  <div className="navToggle" data-bs-toggle="offcanvas"
                    data-bs-target="#offcanvasRight" aria-controls="offcanvasRight"
                    onClick={toggleOffCanvas}>
                    <MenuIcon /></div>
                  <SearchCanvas showOffcanvas={showSearch} toggleOffCanvas={toggleSearch} />
                  <OffCanvas showOffcanvas={showOffcanvas} toggleOffCanvas={toggleOffCanvas} />
                </div>} */}
              </div>
              {/* header search starts here */}
              <div className="col-sm-5 part2">
                <div className="headerSearch d-flex align-items-center ">
                  <Select
                    data={[
                      "Bracelet",
                      "Necklace",
                      "Anklet",
                      "Ring",
                      "Wedding Ring",
                    ]}
                    placeholder={"All Categories"}
                  />
                  <div className="search cursor">
                    <input type="text" placeholder="Search for items..." />
                    <SearchIcon className="searchIcon" />
                  </div>
                </div>
              </div>
              <div className="col-sm-5 d-flex align-items-center part3">
                <div className="col-sm-4 countryWrapper ms-auto">
                  <Select
                    data={countries}
                    placeholder={"Your Location"}
                    icon={<LocationOnIcon />}
                  />
                </div>
                <div className="col-sm-8 headerTabs">
                  <ul className="list list-inline mb-0 ">
                    <li className="list-inline-item ">
                      <span>
                        <AutoModeIcon style={{ marginRight: "8px" }} />
                        <span className="badge bg-success rounded-circle">
                          5
                        </span>
                        Compare
                      </span>
                    </li>
                    <li className="list-inline-item ">
                      <span>
                        <ShoppingCartOutlinedIcon
                          style={{ marginRight: "8px" }}
                        />
                        <span className="badge bg-success rounded-circle">
                          5
                        </span>
                        Cart
                      </span>
                    </li>
                    <li className="list-inline-item ">
                      <span>
                        <FavoriteBorderOutlinedIcon
                          style={{ marginRight: "8px" }}
                        />
                        <span className="badge bg-success rounded-circle">
                          5
                        </span>
                        Wishlist
                      </span>
                    </li>
                    <ClickAwayListener
                      onClickAway={() => {
                        setIsOpenDropDown(false);
                      }}
                    >
                      <li className="list-inline-item " onClick={openDopDown}>
                        <span>
                            <PersonOutlinedIcon style={{ marginRight: "8px" }} />
                            Account
                        </span>

                        <div>
                          {isOpenDropDown && (
                            <ul className="dropDownMenu">
                              <li>
                                <Button className="align-items-center">
                                  <PersonOutlinedIcon />
                                  Register
                                </Button>
                              </li>
                              <li>
                                <Button className="align-items-center">
                                  <LoginIcon />
                                  Login
                                </Button>
                              </li>
                              <li>
                                <Button className="align-items-center">
                                  <ShoppingCartOutlinedIcon />
                                  My Orders
                                </Button>
                              </li>
                              <li>
                                <Button className="align-items-center">
                                  <ExitToAppOutlinedIcon />
                                  Sign Out
                                </Button>
                              </li>
                            </ul>
                          )}
                        </div>
                      </li>
                    </ClickAwayListener>
                  </ul>
                </div>
              </div>
              {/* header search end here */}
            </div>
            <div className="desktopNav"><Navbar /></div>
          </div>
        </header>
      </div>
    </>
  );
};

export default Header;
