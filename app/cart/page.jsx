'use client'
import React from 'react'
import Link from 'next/link'
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import DeleteIcon from '@mui/icons-material/Delete';
import './style.css'
import IconButton from '@mui/material/IconButton';
import KeyboardBackspaceTwoToneIcon from '@mui/icons-material/KeyboardBackspaceTwoTone';
import { Rating } from '@mui/material';
const Cart = () => {
    return (
        <div className='container-fluid '>
            <div className="breadcrumbWrapper">
                <nav
                    style={{ "--bs-breadcrumb-divider": "'>'" }}
                    aria-label="breadcrumb">
                    <ol className="breadcrumb ">
                        <li className="breadcrumb-item ">
                            <Link href="/" className=" ">
                                <HomeOutlinedIcon />
                                Home
                            </Link>
                        </li>
                        <li className="breadcrumb-item active" aria-current="page">
                            Cart
                        </li>
                    </ol>
                </nav>
            </div>
            <div className="row cart position-relative pt-3">
                <div className="col-sm-7">
                    <div className='d-flex align-items-center '>
                        <div>
                            <h4>Your Cart</h4>
                            <p>There are <span>4</span> products in your cart!</p>
                        </div>
                        <div className='ms-auto'>
                            <Link href={""}> <button className='btn'><DeleteIcon />Clear Cart</button></Link>
                        </div>
                    </div>
                    <div className='cartWrapper mt-3 card rounded-4'>
                        <div className="table-responsive">
                            <table className='table align-middle '>
                                <thead >
                                    <tr>
                                        <th>Product</th>
                                        <th>Price</th>
                                        <th>Quantity</th>
                                        <th>Subtotal</th>
                                        <th>Remove</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td >
                                            <div className='d-flex align-items-center w-100'>
                                                <img src="/images/orange.png" alt="" className="me-2 rounded-5" width={"15%"} />
                                                <div className='info'>
                                                    <h6>This is the totle of the product</h6>
                                                    <Rating
                                                        name="half-rating-read"
                                                        defaultValue={2}
                                                        precision={0.5}
                                                        readOnly
                                                    />
                                                </div>
                                            </div>
                                        </td>
                                        <td cl>25$</td>
                                        <td><input type="number" defaultValue={1} min={1} className='form-control ' /></td>
                                        <td className='text-success'>50$</td>
                                        <td><IconButton><DeleteIcon /></IconButton></td>
                                    </tr>
                                    <tr>
                                        <td >
                                            <div className='d-flex align-items-center w-100'>
                                                <img src="/images/camera.jpg" alt="" className="me-2 rounded-2" width={"15%"} />
                                                <div className='info'>
                                                    <h6>This is the totle of the product</h6>
                                                    <Rating
                                                        name="half-rating-read"
                                                        defaultValue={2}
                                                        precision={0.5}
                                                        readOnly
                                                    />
                                                </div>
                                            </div>
                                        </td>
                                        <td cl>25$</td>
                                        <td><input type="number" defaultValue={1} min={1} className='form-control ' /></td>
                                        <td className='text-success'>50$</td>
                                        <td><IconButton><DeleteIcon /></IconButton></td>
                                    </tr>
                                    <tr>
                                        <td >
                                            <div className='d-flex align-items-center w-100'>
                                                <img src="/images/camera.jpg" alt="" className="me-2 rounded-2" width={"15%"} />
                                                <div className='info'>
                                                    <h6>This is the totle of the product</h6>
                                                    <Rating
                                                        name="half-rating-read"
                                                        defaultValue={2}
                                                        precision={0.5}
                                                        readOnly
                                                    />
                                                </div>
                                            </div>
                                        </td>
                                        <td cl>25$</td>
                                        <td><input type="number" defaultValue={1} min={1} className='form-control ' /></td>
                                        <td className='text-success'>50$</td>
                                        <td><IconButton><DeleteIcon /></IconButton></td>
                                    </tr>

                                </tbody>
                            </table>
                        </div>
                    </div>
                    <div class="d-grid gap-2 d-md-flex justify-content-md-start mt-3">
                        <button className='btn btn-success'><KeyboardBackspaceTwoToneIcon/> Continue Shopping</button>
                    </div>
                </div>
                <div className="col-sm-5 position-sticky">
                    <div className="card cartRight p-4  m-5">
                        <div className='d-flex align-items-center pb-3'>
                            <h5>Sub Total</h5>
                            <h6 className='ms-auto'>13$</h6>
                        </div>
                        <div className='d-flex align-items-center pb-3'>
                            <h5>Shipping</h5>
                            <h6 className='ms-auto'>free</h6>
                        </div>
                        <div className='d-flex align-items-center pb-3'>
                            <h5>Destination</h5>
                            <h6 className='ms-auto'>Lebanon</h6>
                        </div>
                        <div className='d-flex align-items-center pb-3'>
                            <h5>Total</h5>
                            <h6 className='ms-auto'>33$</h6>
                        </div>
                        <button className='btn btn-success rounded-4'> Proceed to Checkout</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Cart