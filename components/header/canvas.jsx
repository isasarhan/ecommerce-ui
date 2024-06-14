import React from 'react'
import Navbar from "./navbar/navbar.jsx";

const OffCanvas = ({showOffcanvas, toggleOffCanvas}) => {
    return (
        <div className={`offcanvas offcanvas-start ${showOffcanvas ? 'show' : ''}`}
            tabIndex="-1"
            id="offcanvasRight"
            aria-labelledby="offcanvasRightLabel"
            style={{ visibility: showOffcanvas ? 'visible' : 'hidden' }}>
            <div className="offcanvas-header">
            <img src={`/logo.png`} height={"80px"} />
                {/* <h5 id="offcanvasRightLabel">Offcanvas right</h5> */}
                <button type="button" className="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close" 
                    onClick={toggleOffCanvas}></button>
            </div>
            <div className="offcanvas-body">
                <Navbar/>
               
            </div>
        </div>
    )
}

export default OffCanvas