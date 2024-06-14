import React from 'react'

const Loading = () => {
    return (
        <div className='loading' style={{height:'100vh'}}>
            <div className="d-flex justify-content-center">
                <div className="spinner-border" role="status">
                    <span className="visually-hidden">Loading...</span>
                </div>
            </div>
        </div>
    )
}

export default Loading