import React from "react";
import "./footer.css";
import ConfirmationNumberIcon from "@mui/icons-material/ConfirmationNumber";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import HeadphonesIcon from "@mui/icons-material/Headphones";
import TwitterIcon from "@mui/icons-material/Twitter";
import FacebookIcon from "@mui/icons-material/Facebook";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import InstagramIcon from "@mui/icons-material/Instagram";

import Link from "next/link";
import Newsletter from "../newsletter/newsletter";
const Footer = () => {
  return (
    <div className="footerWrapper container-fluid">
      <Newsletter />
      <div className="footerBox container-fluid">
        <div className="row">
          <div className="col-6 col-sm">
            <div className="box d-flex align-items-center ">
              <ConfirmationNumberIcon className="w-25" />
              <div className="info d-flex align-items-left flex-column ">
                <h5>Best Prices & Offers</h5>
                <p>Order 50$ per item</p>
              </div>
            </div>
          </div>
          <div className="col-6 col-sm">
            <div className="box d-flex align-items-center ">
              <ConfirmationNumberIcon className="w-25" />
              <div className="info d-flex align-items-left flex-column ">
                <h5>Best Prices & Offers</h5>
                <p>Order 50$ per item</p>
              </div>
            </div>
          </div>
          <div className="col-6 col-sm">
            <div className="box d-flex align-items-center ">
              <ConfirmationNumberIcon className="w-25" />
              <div className="info d-flex align-items-left flex-column ">
                <h5>Best Prices & Offers</h5>
                <p>Order 50$ per item</p>
              </div>
            </div>
          </div>
          <div className="col-6 col-sm">
            <div className="box d-flex align-items-center ">
              <ConfirmationNumberIcon className="w-25" />
              <div className="info d-flex align-items-left flex-column ">
                <h5>Best Prices & Offers</h5>
                <p>Order 50$ per item</p>
              </div>
            </div>
          </div>

        </div>
      </div>
      <footer className="container-fluid">
        <div className="container-fluid">
          <div className="row section1">
            <div className="col-sm-3 part1 ">
              <img src="./logo.png" alt="" />
              <br />
              <p>Awesome Jewelry website</p>
              <div className="iconItem">
                <p className="iconContent">
                  <LocationOnIcon />
                  <strong>Address</strong> barbour zreek street
                </p>
              </div>
              <div className="iconItem">
                <p className="iconContent">
                  <LocationOnIcon />
                  <strong>Address</strong> barbour zreek street
                </p>
              </div>
              <div className="iconItem">
                <p className="iconContent">
                  <LocationOnIcon />
                  <strong>Address:</strong> barbour zreek street
                </p>
              </div>
            </div>
            <div className="col-6 col-sm">
              <h5>Quick Links</h5>
              <br />
              <ul className="nav flex-column ">
                <li className="nav-item mb-3">
                  <a href="#" className="nav-link p-0 text-body-secondary">
                    Home
                  </a>
                </li>
                <li className="nav-item mb-3">
                  <a href="#" className="nav-link p-0 text-body-secondary">
                    Features
                  </a>
                </li>
                <li className="nav-item mb-3">
                  <a href="#" className="nav-link p-0 text-body-secondary">
                    Pricing
                  </a>
                </li>
                <li className="nav-item mb-3">
                  <a href="#" className="nav-link p-0 text-body-secondary">
                    FAQs
                  </a>
                </li>
                <li className="nav-item mb-3">
                  <a href="#" className="nav-link p-0 text-body-secondary">
                    About
                  </a>
                </li>
              </ul>
            </div>
            <div className="col-6 col-sm">
              <h5>Quick Links</h5>
              <br />
              <ul className="nav flex-column">
                <li className="nav-item mb-3">
                  <a href="#" className="nav-link p-0 text-body-secondary">
                    Home
                  </a>
                </li>
                <li className="nav-item mb-3">
                  <a href="#" className="nav-link p-0 text-body-secondary">
                    Features
                  </a>
                </li>
                <li className="nav-item mb-3">
                  <a href="#" className="nav-link p-0 text-body-secondary">
                    Pricing
                  </a>
                </li>
                <li className="nav-item mb-3">
                  <a href="#" className="nav-link p-0 text-body-secondary">
                    FAQs
                  </a>
                </li>
                <li className="nav-item mb-3">
                  <a href="#" className="nav-link p-0 text-body-secondary">
                    About
                  </a>
                </li>
              </ul>
            </div>

            <div className="col-6 col-sm">
              <h5>Quick Links</h5>
              <br />
              <ul className="nav flex-column">
                <li className="nav-item mb-3">
                  <Link href="#" className="nav-link p-0 text-body-secondary">
                    Home
                  </Link>
                </li>
                <li className="nav-item mb-3">
                  <Link href="#" className="nav-link p-0 text-body-secondary">
                    Features
                  </Link>
                </li>
                <li className="nav-item mb-3">
                  <Link href="#" className="nav-link p-0 text-body-secondary">
                    Pricing
                  </Link>
                </li>
                <li className="nav-item mb-3">
                  <Link href="#" className="nav-link p-0 text-body-secondary">
                    FAQs
                  </Link>
                </li>
                <li className="nav-item mb-3">
                  <Link href="#" className="nav-link p-0 text-body-secondary">
                    About
                  </Link>
                </li>
              </ul>
            </div>

            <div className="col-6 col-sm part5 ">
              <h5>Quick Links</h5>
              <br />
              <p>Awesome Jewelry website</p>
              <img
                src="./images/app-download-buttons.png"
                alt=""
                className="cursor"
              />
              <p>Secured Payments Gateway</p>
              <img src="./images/payments.png" alt="" className="cursor" />
            </div>
          </div>
          <div className="row  section2 ">
            <div className="col-sm-4">Serhans & Sons Jewelry</div>
            <div className="col-sm-4 d-flex justify-content-center">
              <div className="d-flex align-items-center ">
                <div className="phNb d-flex align-items-center ">
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
            <div className="col-sm-4 d-flex align-items-center part4">
              <div className="ms-auto share">
                <ul className="list list-inline d-flex align-items-center">
                  <span className="mx-3">Follow us:</span>
                  <li className="list-inline-item ">
                    <Link href={"/"}>
                      <FacebookIcon className="d-flex align-items-center" />
                    </Link>
                  </li>
                  <li className="list-inline-item">
                    <Link href={"/"}>
                      <TwitterIcon />
                    </Link>
                  </li>
                  <li className="list-inline-item">
                    <Link href={"/"}>
                      <WhatsAppIcon />
                    </Link>
                  </li>
                  <li className="list-inline-item">
                    <Link href={"/"}>
                      <InstagramIcon />
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
