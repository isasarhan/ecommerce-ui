import React from 'react'
import './contact.css'
import Link from 'next/link'
import { FaWhatsapp } from "react-icons/fa";
import { IoMdMail } from "react-icons/io";
import { FaLocationDot } from "react-icons/fa6";
import TwitterIcon from "@mui/icons-material/Twitter";
import FacebookIcon from "@mui/icons-material/Facebook";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import InstagramIcon from "@mui/icons-material/Instagram";

const ContactPage = () => {
    return (
        <section className="contactSection ">
            <div className="container-fluid">
                <div className="banner">

                    <h1>Contact Us</h1>
                    <nav
                        style={{ "--bs-breadcrumb-divider": "'>'" }}
                        aria-label="breadcrumb">
                        <ol className="breadcrumb ">
                            <li className="breadcrumb-item ">
                                <Link href="/" className="text-decoration-none ">
                                    Home
                                </Link>
                            </li>
                            <li className="breadcrumb-item " aria-current="page">
                                Contact Us
                            </li>
                        </ol>
                    </nav>

                </div>

                <div className="contactInfo ">
                    <div className="row w-100">
                        <div className="col-sm-4 d-flex justify-content-center">
                            <div className="iconWrapper">
                                <span className="icon"><FaWhatsapp /></span>
                                <p className="title">Send us a message</p>
                                <p className="details">0096170903494</p>
                            </div>
                        </div>
                        <div className="col-sm-4 d-flex justify-content-center">
                            <div className="iconWrapper">
                                <span className="icon"><IoMdMail /></span>
                                <p className="title">Email us</p>
                                <p className="details">info@serhan.com</p>
                            </div>
                        </div>
                        <div className="col-sm-4 d-flex justify-content-center">
                            <div className="iconWrapper">
                                <span className="icon"><FaLocationDot /></span>
                                <p className="title">Address</p>
                                <p className="details">Barbour main street</p>
                            </div>
                        </div>

                    </div>
                </div>

                <div className="contactWrapper">
                    <div className="row">
                        <div className="col-sm-5 align-content-center ">
                            <span className='badge rounded-pill text-bg-primary fs-5 mb-2'>Contact Us</span>
                            <h1 className='mb-5'>Got an Idea?<br />Feel free to email us</h1>
                            <p className='lh-lg mb-3'>I would love to hear from you! Whether you have a question, a project idea, or just want to say hello,
                                feel free to get in touch using the form below or through any of my social media channels.
                                Your message is important to me, and I will respond as promptly as possible.
                            </p>
                            <div className="ms-auto share">
                                <ul className="list list-inline d-flex align-items-center">
                                    <span className=" fs-4">Follow us:</span>
                                    <li className="ps-3 list-inline-item ">
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
                        <div className="col-sm-7">
                            <form action="" className='w-100 card border-0 shadow p-5 rounded-4'>
                                <div className="row">
                                    <h2>Contact Form</h2>
                                    <div className="col-sm-6">
                                        <div className="form-floating mb-3">
                                            <input type="email" className="form-control" id="floatingInput" placeholder='first name' />
                                            <label for="floatingInput">First Name</label>
                                        </div>
                                    </div>
                                    <div className="col-sm-6">
                                        <div className="form-floating mb-3">
                                            <input type="text" className="form-control" id="floatingInput" placeholder='Last name' />
                                            <label for="floatingInput">Last Name</label>
                                        </div>
                                    </div>
                                    <div className="col-sm-6">
                                        <div className="form-floating mb-3">
                                            <input type="email" className="form-control" id="floatingInput" placeholder='Email' />
                                            <label for="floatingInput">Email</label>
                                        </div>
                                    </div>
                                    <div className="col-sm-6">
                                        <div className="form-floating mb-3">
                                            <input type="text" className="form-control" id="floatingInput" placeholder='Phone' />
                                            <label for="floatingInput">Phone</label>
                                        </div>
                                    </div>
                                    <div className="col-sm-12">
                                        <div className="form-floating mb-3">
                                            <textarea className="form-control h-100" id="floatingInput" placeholder='Message' rows={4} />
                                            <label for="floatingInput">Message</label>
                                        </div>
                                    </div>
                                    <div className="col-sm-12">
                                        <button className='btn btn-primary w-100'>SUBMIT</button>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default ContactPage