import React from 'react';
import banner from '../../../assets/bg.jpg';
import './Home.css'

const Home = () => {
    return (
        <div className='position-relative mt-5'>
            <div className='carousel-img'>
                <img
                    className="w-100"
                    src={banner}
                    alt="banner"
                />
            </div>
            <div
                className='text-light position-absolute heading text'>
                <h4 className='mb-1 fw-bold'>Computer Engineering</h4>
                <p className='mt-0'>142,765 Computer Engineers follow this</p>
            </div>
        </div>
    );
};

export default Home;