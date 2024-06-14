import React from 'react'
import Select from '../select/select'
import SearchIcon from "@mui/icons-material/Search";

const SearchCanvas = ({ showOffcanvas, toggleOffCanvas }) => {
    return (
        <div className={`offcanvas offcanvas-start ${showOffcanvas ? 'show' : ''}`}
            tabIndex="-1"
            id="offcanvasRight"
            aria-labelledby="offcanvasRightLabel"
            style={{ visibility: showOffcanvas ? 'visible' : 'hidden' }}>
            <div className="offcanvas-header">
                <img src={`/logo.png`} height={"80px"} />
                <button type="button" className="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close" 
                    onClick={toggleOffCanvas}></button>
            </div>
            <div className="offcanvas-body">
                <div className="headerSearch d-flex align-items-center ">
                    <div className="selectSearch">
                        <Select
                            data={[
                                "Bracelet",
                                "Necklace",
                                "Anklet",
                                "Ring",
                                "Wedding Ring",
                            ]}
                            placeholder={"All Categories"}
                        />
                    </div>

                    <div className="search cursor">
                        <input type="text" placeholder="Search for items..." />
                        <SearchIcon className="searchIcon" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SearchCanvas