'use client'
import React, { useState } from 'react'
import Link from 'next/link'
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import { FaEye, FaEyeSlash, FaUser } from "react-icons/fa";
import { IoMdMail } from "react-icons/io";
import * as yup from 'yup'
import { yupResolver } from "@hookform/resolvers/yup"

import '../style.css'
import { useForm } from 'react-hook-form';
const schema = yup.object({
    email: yup.string().email(),
    password: yup.string().min(5)
})
const LoginPage = () => {
    const { register, handleSubmit, watch, formState: { errors }, } = useForm({
        resolver: yupResolver(schema)
    })

    const [passwordType, setpasswordType] = useState('password')
    const [isSubmitted, setIsSubmitted] = useState(false)
    const togglePasswordType = () => {
        if (passwordType === 'password') return setpasswordType('text')
        setpasswordType('password')
    }
    const onSubmit = () => {
        setIsSubmitted(true)
        setTimeout(() => {
            setIsSubmitted(false)
        }, 2000)
    }
    return (
        <section className='authSection'>
            <div className="container-fluid ">
                <div className="breadcrumbWrapper">
                    <nav
                        style={{ "--bs-breadcrumb-divider": "'>'" }}
                        aria-label="breadcrumb">
                        <ol className="breadcrumb ">
                            <li className="breadcrumb-item ">
                                <Link href="/"><HomeOutlinedIcon />Home</Link>
                            </li>
                            <li className="breadcrumb-item active" aria-current="page">
                                Log In
                            </li>
                        </ol>
                    </nav>
                </div>
                <div className="authWrapper d-flex justify-content-center">
                    <div className="card rounded-5">
                        <span className='text-center '><FaUser className=' avatar' /></span>
                        <h3 className='text-center'>Login</h3><br />
                        <form onSubmit={handleSubmit(onSubmit)}>
                            <div className="mb-3">
                                <label for="email" className="form-label">Email address</label>
                                <div className='d-flex align-items-center position-relative pb-2'>
                                    <input type="email" className="form-control" id="email" {...register('email')} />

                                    <span className='icon'> <IoMdMail /></span>
                                </div>
                                <p>{errors.email?.message}</p>
                            </div>
                            <div className="mb-3 ">
                                <label for="password" className="form-label">Password</label>
                                <div className='d-flex align-items-center position-relative pb-2'>
                                    <input type={passwordType} className="form-control" id="password" {...register('password')} />
                                    <span className='icon' onClick={togglePasswordType}> {
                                        passwordType === 'password' ? <FaEye /> : <FaEyeSlash />
                                    }</span>
                                </div>
                                <p>{errors.password?.message}</p>
                            </div>
                            <div className='pb-3'>
                                <Link href={'/'} className='text-common text-decoration-none '>Forgot email?</Link>
                            </div>
                            {isSubmitted ?
                                <button className="btn btn-common w-100 p-2 rounded-4" type="button" disabled>
                                    <span className="spinner-border spinner-border-sm me-2" aria-hidden="true"></span>
                                    <span role="status">Loading...</span>
                                </button> :
                                <button className='btn btn-common w-100 p-2 rounded-4'>Login</button>}
                        </form>
                    </div>
                </div>
            </div>
        </section >
    )
}

export default LoginPage