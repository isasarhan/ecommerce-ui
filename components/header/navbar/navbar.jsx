import React, { useEffect, useRef, useState } from "react";
import "./navbar.css";
import { Button } from "@mui/material";
import GridViewIcon from "@mui/icons-material/GridView";
import HeadphonesIcon from "@mui/icons-material/Headphones";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import Link from "next/link";

const Navbar = () => {
  const [isNavbarOpen, setIsNavbarOpen] = useState(true);

  const toggleNavbar = () => {
    setIsNavbarOpen(!isNavbarOpen);
  }; 
  
  return ( 
    <div className="nav">
      <div className="container-fluid">
        <div className="row d-flex align-items-center">
          <div className="part1 col-sm-3 ">
            <Button className="catTab">
              <GridViewIcon />
              Browse All Categories
              <KeyboardArrowDownIcon />
            </Button>
          </div>
          <div className="col-sm-7 part2 ">
            <nav className="navbar navbar-expand-lg w-100 h-100 p=0">
              {/* <button
                className="navbar-toggler"
                type="button"
                onClick={toggleNavbar}
                data-bs-toggle="collapse"
                data-bs-target="#navbarNav"
                aria-controls="navbarNav"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span className="navbar-toggler-icon"></span>
              </button> */}
              <div
                // className={`collapse navbar-collapse ${isNavbarOpen ? "show" : ""
                //   }`}
                // id="navbarNav"
                className="w-100 h-100"
              >
                <ul className="navbar-nav  w-100">
                  <li className="nav-item">
                    <Button>
                      <Link href={"/"}> Home</Link>
                    </Button>
                  </li>
                  <li className="nav-item">
                    <Button>
                      <Link href={"/about"}> About</Link>
                    </Button>
                  </li>
                  <li className="nav-item">
                    <Button>
                      <Link href={"/product/details"}> Vendor</Link>
                    </Button>
                  </li>
                  <li className="nav-item mega">
                    <Button>
                      <Link href={"/about"}> Mega Menu</Link>
                    </Button>
                    <div className="dropDown_menu megaMenu">
                      <div className="row "> 
                        <div className="col-sm-3">
                          <h4>Category 1</h4>
                          <ul className="list list-inline ">
                            <li>
                              <Link href={"/about"}> product 1</Link>
                            </li>
                            <li className="">
                              <Link href={"/about"}> product 1</Link>
                            </li>
                            <li>
                              <Link href={"/about"}> product 1</Link>
                            </li>
                            <li>
                              <Link href={"/about"}> product 1</Link>
                            </li>
                          </ul>
                        </div>
                        <div className="col-sm-3">
                          <h4>Category 1</h4>
                        </div>
                        <div className="col-sm-3">
                          <h4>Category 1</h4>
                        </div>
                        <div className="col-sm-3">
                          <h4>Category 1</h4>
                        </div>
                      </div>
                    </div>
                  </li>
                  <li className="nav-item">
                    <Button>
                      <Link href={"/listing"}> Shop</Link>
                    </Button>
                  </li>
                  <li className="nav-item">
                    <Button>
                      <Link href={"/cart"}> Cart</Link>
                    </Button>
                  </li>
                  <li className="nav-item position-relative ">
                    <Button>
                      <Link href={"/about"}> Pages</Link>
                    </Button>
                    <div className="dropDown_menu">
                      <ul className="list list-inline">
                        <li>
                          <Button>
                            <Link href={"/about"}> Blog</Link>
                          </Button>
                        </li>
                        <li>
                          <Button>
                            <Link href={"/about"}> Blog</Link>
                          </Button>
                        </li>
                        <li>
                          <Button>
                            <Link href={"/about"}> Blog</Link>
                          </Button>
                        </li>
                      </ul>
                    </div>
                  </li>
                  <li className="nav-item">
                    <Button>
                      <Link href={"/contact"}> Contact</Link>
                    </Button>
                  </li>
                </ul>
              </div>
            </nav>
          </div>
          <div className="col-sm-2 part3 ">
            <div className="d-flex align-items-center ">
              <div className="phNb d-flex align-items-center ms-auto">
                <span>
                  <HeadphonesIcon />
                </span>
                <div className="info ml-3">
                  <h4>1990 - 2000</h4>
                  <p>24/7 Support Center</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
