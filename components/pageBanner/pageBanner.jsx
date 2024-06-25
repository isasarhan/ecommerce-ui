import React from 'react'
import './banner.css'
import Link from 'next/link'

const PageBanner = ({ title, links = [] }) => {
    return (
        <div className="pageBanner">
            <h1>{title}</h1>
            <nav
                style={{ "--bs-breadcrumb-divider": "'>'" }}
                aria-label="breadcrumb">
                <ol className="breadcrumb ">
                    {
                        links.map((link) => {
                             return <li className="breadcrumb-item ">
                                <Link href={link.link} className="text-decoration-none ">
                                    {link.title}
                                </Link>
                            </li>
                        })
                    }

                    <li className="breadcrumb-item " aria-current="page">
                        {title}
                    </li>
                </ol>
            </nav>

        </div>
    )
}

export default PageBanner