'use client'
import React, { useRef, useState } from 'react'
import Link from 'next/link'
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import { FaEye, FaEyeSlash, FaUser, FaUsers } from "react-icons/fa";
import { IoMdMail } from "react-icons/io";

import * as yup from 'yup'
import { yupResolver } from "@hookform/resolvers/yup"

import '../style.css'
import { useForm } from 'react-hook-form';
const schema = yup.object({
  firstName: yup.string(),
  lastName: yup.string(),
  email: yup.string().email(),
  password: yup.string().min(5)
})
const RegisterPage = () => {
  const { register, handleSubmit, watch, formState: { errors }, } = useForm({
    resolver: yupResolver(schema)
  })
  const hiddenFileInput = useRef(null);

  const [passwordType, setpasswordType] = useState('password')
  const [isSubmitted, setIsSubmitted] = useState(false)
  const togglePasswordType = () => {
    if (passwordType === 'password') return setpasswordType('text')
    setpasswordType('password')
  }

  const onSubmit = (data, event) => {
    event.preventDefault();
    setIsSubmitted(true)
    setTimeout(() => {
      setIsSubmitted(false)
    }, 2000)
  }
  const handleClick = event => {
    hiddenFileInput.current.click();
  };
  // Call a function (passed as a prop from the parent component)
  // to handle the user-selected file 
  const handleChange = event => {
    const fileUploaded = event.target.files[0];
    // handleFile(fileUploaded);
  };
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
                Register
              </li>
            </ol>
          </nav>
        </div>
        <div className="authWrapper d-flex justify-content-center">
          <div className="card rounded-5">
            <span className='text-center'><FaUser className=' avatar' /></span>
            <h3 className='text-center'>Register</h3><br />
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="mb-3">
                <div className="row ">
                  <div className="col-sm-6 ">
                    <label htmlFor="firstName" className="form-label">First Name</label>
                    <div className='d-flex align-items-center position-relative '>
                      <input type="text" className="form-control" id="firstName" {...register('firstName')} />
                      <span className='icon'> <FaUser /></span>
                    </div>
                    <p>{errors.firstName?.message}</p>
                  </div>
                  <div className="col-sm-6 ">
                    <label htmlFor="lastName" className="form-label">Last Name</label>
                    <div className='d-flex align-items-center position-relative '>
                      <input type="text" className="form-control" id="lastName" {...register('lastName')} />
                      <span className='icon'> <FaUsers /></span>
                    </div>
                    <p>{errors.lastName?.message}</p>
                  </div>
                </div>
              </div>
              <div className="mb-3">
                <label htmlFor="email" className="form-label">Email address</label>
                <div className='d-flex align-items-center position-relative pb-2'>
                  <input type="email" className="form-control" id="email" {...register('email')} />
                  <span className='icon'> <IoMdMail /></span>
                </div>
                <p>{errors.email?.message}</p>
              </div>
              <div className="mb-3 ">
                <label htmlFor="password" className="form-label">Password</label>
                <div className='d-flex align-items-center position-relative pb-2'>
                  <input type={passwordType} className="form-control" id="password" {...register('password')} />
                  <span className='icon' onClick={togglePasswordType}> {
                    passwordType === 'password' ? <FaEye /> : <FaEyeSlash />
                  }</span>
                </div>
                <p>{errors.password?.message}</p>
              </div>
              <div className="mb-3">
                <label className="form-label" htmlFor="uploadFile">
                  Profile Image
                </label>
                {/* <input type="file" className="form-control" id="customFile" {...register("file")} /> */}
                <div className=''>
                  <button className="uploadImage" onClick={handleClick} type='button'>
                    Upload Image
                  </button>
                  <input
                    type="file"
                    onChange={handleChange} id='uploadFile'
                    ref={hiddenFileInput}  
                    style={{ display: 'none' }} // Make the file input element invisible
                  />
                </div>
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

export default RegisterPage