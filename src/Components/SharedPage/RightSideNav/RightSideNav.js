import React, { useContext, useState } from 'react';
import { MdOutlineLocationOn, MdOutlineThumbUpAlt } from 'react-icons/md';
import { FaPen } from 'react-icons/fa';
import { RiErrorWarningLine } from 'react-icons/ri';
import { RxCross2 } from 'react-icons/rx';
import img1 from '../../../assets/grp1.png';
import img2 from '../../../assets/grp2.png';
import img3 from '../../../assets/grp3.png';
import img4 from '../../../assets/grp4.png';
import { Image } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../Context/AuthProvider';

const RightSideNav = () => {
    const { user } = useContext(AuthContext);

    const groups = [
        {
            id: 1,
            img: img1,
            name: 'Leisure'
        },
        {
            id: 2,
            img: img2,
            name: 'Activism',
        },
        {
            id: 3,
            img: img3,
            name: 'MBA'

        },
        {
            id: 4,
            img: img4,
            name: 'Philosophy'
        },
    ]

    return (
        <div>
            {
                user?.email ?
                    <>
                        <div className='mt-4 ms-5'>
                            <div className='d-flex align-items-center justify-content-between border-bottom' >
                                <div className='d-flex align-items-center mb-2'>
                                    <MdOutlineLocationOn></MdOutlineLocationOn>
                                    <input type="text" aria-label="First name" class="form-control text-dark border-0" placeholder="|Enter your location" style={{ 'fontSize': '14px' }} />
                                </div>
                                <div className='mb-2'>
                                    <RxCross2></RxCross2>
                                </div>
                            </div>
                            <div className='d-flex mt-4' style={{ 'color': '#000000' }}>
                                <RiErrorWarningLine className='mt-1' size={14}></RiErrorWarningLine>
                                <p className='ms-2' style={{ 'fontSize': '12px' }}>Your location will help us serve better <br /> and extend a personalised experience.</p>
                            </div>

                            <div>
                                <div className='d-flex align-items-center mt-4 mb-4' style={{ 'color': '#000000' }}>
                                    <MdOutlineThumbUpAlt></MdOutlineThumbUpAlt>
                                    <span className='ms-1' style={{ 'fontSize': '14px' }}>RECOMMENDED GROUPS</span>
                                </div>
                                <div>
                                    {
                                        groups.map(({ id, img, name }) => (
                                            <div key={id} className='d-flex align-items-center justify-content-between mb-3'>
                                                <div className='d-flex align-items-center'>
                                                    <Image
                                                        roundedCircle
                                                        src={img}
                                                        style={{ height: '36px' }}>
                                                    </Image>
                                                    <span className='ms-2' style={{ 'fontSize': '14px' }}>{name}</span>
                                                </div>
                                                <button type="button" class="btn rounded-pill" style={{ 'background': "#EDEEF0", 'fontSize': '12px' }}>Follow</button>
                                            </div>))
                                    }
                                </div>
                                <p className='text-end mt-5' style={{ 'fontSize': '12px' }}><Link to='' className='text-decoration-none '>See More...</Link></p>
                            </div>
                        </div>
                    </>
                    :
                    <>
                        <div className='mt-4 ms-5'>
                            <div className='d-flex align-items-center justify-content-between border-bottom' >
                                <div className='d-flex align-items-center mb-2'>
                                    <MdOutlineLocationOn></MdOutlineLocationOn>
                                    <input type="text" aria-label="First name" class="form-control text-dark border-0" placeholder="Noida, India" style={{ 'fontSize': '14px' }} />
                                </div>
                                <div className='mb-2'>
                                    <FaPen></FaPen>
                                </div>
                            </div>
                            <div className='d-flex mt-4' style={{ 'color': '#000000' }}>
                                <RiErrorWarningLine className='mt-1' size={14}></RiErrorWarningLine>
                                <p className='ms-2' style={{ 'fontSize': '12px' }}>Your location will help us serve better <br /> and extend a personalised experience.</p>
                            </div>
                        </div>
                    </>
            }
            {/* <div className='mt-4 ms-5'>
                <div className='d-flex align-items-center justify-content-between border-bottom' >
                    <div className='d-flex align-items-center mb-2'>
                        <MdOutlineLocationOn></MdOutlineLocationOn>
                        <input type="text" aria-label="First name" class="form-control text-dark border-0" placeholder="Noida, India" style={{ 'fontSize': '14px' }} />
                    </div>
                    <div className='mb-2'>
                        <FaPen></FaPen>
                    </div>
                </div>
                <div className='d-flex mt-4' style={{ 'color': '#000000' }}>
                    <RiErrorWarningLine className='mt-1' size={14}></RiErrorWarningLine>
                    <p className='ms-2' style={{ 'fontSize': '12px' }}>Your location will help us serve better <br /> and extend a personalised experience.</p>
                </div>
            </div>
            <div className='mt-4 ms-5'>
                <div className='d-flex align-items-center justify-content-between border-bottom' >
                    <div className='d-flex align-items-center mb-2'>
                        <MdOutlineLocationOn></MdOutlineLocationOn>
                        <input type="text" aria-label="First name" class="form-control text-dark border-0" placeholder="|Enter your location" style={{ 'fontSize': '14px' }} />
                    </div>
                    <div className='mb-2'>
                        <RxCross2></RxCross2>
                    </div>
                </div>
                <div className='d-flex mt-4' style={{ 'color': '#000000' }}>
                    <RiErrorWarningLine className='mt-1' size={14}></RiErrorWarningLine>
                    <p className='ms-2' style={{ 'fontSize': '12px' }}>Your location will help us serve better <br /> and extend a personalised experience.</p>
                </div>

                <div>
                    <div className='d-flex align-items-center mt-4 mb-4' style={{ 'color': '#000000' }}>
                        <MdOutlineThumbUpAlt></MdOutlineThumbUpAlt>
                        <span className='ms-1' style={{ 'fontSize': '14px' }}>RECOMMENDED GROUPS</span>
                    </div>
                    <div>
                        {
                            groups.map(({ id, img, name }) => (
                                <div key={id} className='d-flex align-items-center justify-content-between mb-3'>
                                    <div className='d-flex align-items-center'>
                                        <Image
                                            roundedCircle
                                            src={img}
                                            style={{ height: '36px' }}>
                                        </Image>
                                        <span className='ms-2' style={{ 'fontSize': '14px' }}>{name}</span>
                                    </div>
                                    <button type="button" class="btn rounded-pill" style={{ 'background': "#EDEEF0", 'fontSize': '12px' }}>Follow</button>
                                </div>))
                        }
                    </div>
                    <p className='text-end mt-5' style={{ 'fontSize': '12px' }}><Link to='' className='text-decoration-none '>See More...</Link></p>
                </div>
            </div> */}

        </div>
    );
};

export default RightSideNav;