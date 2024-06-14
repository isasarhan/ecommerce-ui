'use client'
import Catslider from "@/components/catSlider/catslider";
import Banners from "@/components/banner/banners";
import HomeSlider from "@/components/slider/homeSlider";
import "./style.css";
import Link from "next/link";
import Product from "@/components/product/product";
import ProductSlider from "@/components/productSlider/productSlider";
import TopSelling from "@/components/topSelling/topSelling";
import Newsletter from "@/components/newsletter/newsletter";
import Footer from "@/components/footer/footer";
import { useEffect, useState } from "react";
import axios from "axios";

export default function Home() {
  const [products, setProducts] = useState([])
  const [category, setCategory] = useState([])
  const [activeCategory, setActiveCategory] = useState('smartphones')
  const [activeCategoryProd, setActiveCategoryProd] = useState([])

  useEffect(() => {
    getData()
    getCatProd()
  }, [activeCategory])

  const getCatProd = async () => {
    try {
      await axios.get(`https://dummyjson.com/products/category/${activeCategory}`).then((respose) => {
        setActiveCategoryProd(respose.data.products)
        console.log(respose.data);
      })

    } catch (error) {
      console.log(error);
    }
  }
  const getData = async () => {
    try {
      await axios.get('https://dummyjson.com/products').then((respose) => {
        setProducts(respose.data.products)
      })
      await axios.get('https://dummyjson.com/products/categories').then((respose) => {
        console.log(respose.data);
        setCategory(respose.data)
      })
    } catch (error) {
      console.log(error);
    }
  }
  return (
    <div className="container-fluid ">
      <HomeSlider />
      <Catslider category={category} />
      <Banners />

      <div className="homeproducts">
        <div className="container-fluid">
          <div className="d-flex align-items-center justify-content-between">
            <h2>Popular products</h2>
            <ul className="list list-inline filterTab">
              {
                category.length !== 0 && Array(9).fill(0).map((v, i) => {
                  return <li className={`list-inline-item ${activeCategory === category[i].name? 'text-success' : ''}`}  key={i} onClick={() => {
                    setActiveCategory(category[i].name)
                  }}>
                    {category[i].name}
                  </li>
                })
              }

            </ul>
          </div> 
        </div>
      </div>
      {/* start Popular Products Section */}
      <div className="row productRow container-fluid d-flex justify-content-between ">
        {
          activeCategoryProd.length !== 0 && Array(5).fill(0).map((v, i) => {
            return <div className={`col-md item`} key={i}>
              <Product rating={activeCategoryProd[i].rating} category={activeCategoryProd[i].category}
                img={activeCategoryProd[i].thumbnail} title={activeCategoryProd[i].title} price={activeCategoryProd[i].price} />
            </div>
          })
        }
      </div>
      {/* end Popular Products Section */}
      {/* Product Slider */}
      <div className="bestSellers">
        <div className="container-fluid">
          <div className="d-flex align-items-center justify-content-between">
            <h2>Daily Best Sellers</h2>
            <ul className="list list-inline filterTab">
              <li className="list-inline-item">
                <Link href={"/"}>Featured</Link>
              </li>
              <li className="list-inline-item">
                <Link href={"/"}>Popular</Link>
              </li>
              <li className="list-inline-item">
                <Link href={"/"}>Newly Added</Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="container-fluid ">
        <div className="row ">
          <div className="col-sm-3 ">
            <div className="banner m-auto">
              <div className="box">
                <img src="./images/leaf.png" alt="" />
                <h4>Bring Nature into Home</h4>
                <button className="btn btn-success ">Shop Now</button>
              </div>
            </div>
          </div>
          <div className="col-sm-9 ">
            <ProductSlider products={products} />
          </div>
        </div>
      </div>
      <div className="container-fluid">
        <div className="row">
          <div className="col">
            <TopSelling title="Trending" products={products} />
          </div>
          <div className="col">
            <TopSelling title="Popular" products={products} />
          </div>
          <div className="col">
            <TopSelling title="Recently Added" products={products} />
          </div>
          <div className="col">
            <TopSelling title="Top Rated" products={products} />
          </div>
        </div>
      </div>

    </div>
  );
}
