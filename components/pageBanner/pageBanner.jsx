import React from 'react'
import './banner.css'
import Link from 'next/link'

const PageBanner = () => {
    return (
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
    )
}

export default PageBanner