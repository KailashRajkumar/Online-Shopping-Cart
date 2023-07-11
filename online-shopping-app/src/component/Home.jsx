import React from 'react';
import Products from './Products';

const Home = () => {
    return (
        <>
        <div className='hero'>
            {/* Background image card */}
            <div className="card text-bg-dark text-white border-0">
                <img src={require('../assets/bg.jpg')} className="card-img" alt='Background' height="550px" />
                <div className="card-img-overlay d-flex flex-column justify-content-center">
                    <div className="container">
                        <h5 className="card-title display-3 fw-bolder mb-0 opacity-55">NEW SEASON ARRIVAL'S</h5>
                        <p className="card-text fs-2 opacity-55">
                            GRAB OUT ALL THE TRENDS
                        </p>
                    </div>
                </div>
            </div>

            {/* Rendering Products component */}
            <Products />
        </div>
        </>
    );
};

export default Home;
