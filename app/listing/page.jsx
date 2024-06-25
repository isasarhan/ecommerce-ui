'use client'
import React, { useEffect, useState } from "react";
import "./style.css";
import "./responsive.css";
import Link from "next/link";
import Sidebar from "@/components/sidebar/sidebar";
import Product from "@/components/product/product";
import GridViewIcon from "@mui/icons-material/GridView";
import FilterAltOutlinedIcon from "@mui/icons-material/FilterAltOutlined";
import { Button, ClickAwayListener } from "@mui/material";
import axios from "axios";
import Pagination from "@/components/paginate/paginate";
import { paginate } from "@/utiliti/paginate";
import { getProducts } from "@/services/productServices";
import PageBanner from "@/components/pageBanner/pageBanner";

const ListingPage = () => {
  const [isOpenFilter, setIsOpenFilter] = useState(false);
  const [isOpenNumber, setIsOpenNumber] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [pageSize, setPageSize] = useState(10);
  const [products, setProducts] = useState([])
  const [filteredProducts, setFilteredProducts] = useState([])
  const [profileImg, setProfileImg] = useState([]);

  const initilalizeProducts = (data) => {
    const pagged = paginate(data, currentPage, pageSize);
    setProducts(data);
    setFilteredProducts(pagged);
  };
  const handlePageChange = (page) => {
    setCurrentPage(page);
    initilalizeProducts(products);
  };
  useEffect(() => {
    getData()
  }, [])

  const getData = async () => {
    const productsApi = await getProducts()
    console.log(productsApi);
    setProducts(productsApi)
    setFilteredProducts(productsApi)
  }
  const numberToggle = () => {
    setIsOpenNumber(!isOpenNumber);
  }
  const filterToggle = () => {
    setIsOpenFilter(!isOpenFilter)
  }
  return (
    <div className="listingPage">
      <div className="container-fluid">
        <PageBanner/>
        <div className="listingData">
          <div className="row">
            <div className=" col-sm-3 mb-4 sidebarWrapper">
              <Sidebar />
            </div>
            <div className="col-sm-9 rightContent">
              <div className="topStrip d-flex align-items-center row justify-content-between m-auto">
                <p className="mb-0 ms-4 col-12 col-sm-6 mb-3">
                  We found <span className="text-success">{filteredProducts.length}</span> products for
                  you!
                </p>
                <ClickAwayListener
                  onClickAway={() => {
                    setIsOpenFilter(false);
                    setIsOpenNumber(false);
                  }}
                >
                  <div className="d-flex align-items-center  col justify-content-end ">
                    {/* Show me button */}
                    <div className="tab-item  position-relative me-3">
                      <button className="btn btn-light" onClick={numberToggle}>
                        <GridViewIcon />
                        Show Me
                      </button>
                      {isOpenNumber && <div >
                        <ul className="dropDownMenu">
                          <li>
                            <Button className="align-items-center">50</Button>
                            <Button className="align-items-center">100</Button>
                            <Button className="align-items-center">150</Button>
                            <Button className="align-items-center">200</Button>
                            <Button className="align-items-center">250</Button>
                          </li>
                        </ul>
                      </div>}
                    </div>
                    <div className="tab-item  position-relative me-5">
                      <button className="btn btn-light" onClick={filterToggle}>
                        <FilterAltOutlinedIcon />
                        Filter By
                      </button>
                      {/* Filter Button */}
                      <div>
                        {isOpenFilter && <ul className="dropDownMenu">
                          <li><Button className="align-items-center">Price: High to Low</Button></li>
                          <li><Button className="align-items-center">Price: Low to High</Button></li>
                          <li><Button className="align-items-center">Release Date</Button></li>
                          <li><Button className="align-items-center">Rating</Button></li>
                        </ul>}
                      </div>
                    </div>
                  </div>
                </ClickAwayListener>
              </div>
              <div className="row productRow container-fluid d-flex justify-content-lg-start  ">
                {filteredProducts.length !== 0 && filteredProducts.map((product) => {
                  return <div className="col-sm-3 p-2" key={product._id}>
                    <Product rating={product.rating} category={product.category?.title}
                      img={'/images/productIcon.png'} title={product.title} price={product.price} sale={product.sale}/>
                  </div>
                })
                }
                {products && <Pagination itemsCount={products.length} pageSize={pageSize} onPageChange={handlePageChange} currentPage={currentPage} />}

              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ListingPage;
