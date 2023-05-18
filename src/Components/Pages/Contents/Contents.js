import React from 'react';
import { Card, Image } from 'react-bootstrap';
import image1 from '../../../assets/content1.png';
import image2 from '../../../assets/content2.png';
import image3 from '../../../assets/content3.png';
import icon1 from '../../../assets/icons8-hand-with-pen-48.png';
import icon2 from '../../../assets/icon2.png';
import icon3 from '../../../assets/icon3.png';
import icon5 from '../../../assets/icon5.png';
import { BsThreeDots } from 'react-icons/bs';
import { BsEye, BsShareFill, BsBag } from 'react-icons/bs';
import { RiCalendarEventFill } from 'react-icons/ri';
import { MdOutlineLocationOn } from 'react-icons/md';
import person1 from '../../../assets/person1.png';
import person2 from '../../../assets/person2.png';
import person3 from '../../../assets/person3.png';
import person4 from '../../../assets/person4.png';
const Contents = () => {

    const articles = [
        {
            id: 1,
            thumbnail: image1,
            title: 'What if famous brands had regular fonts? Meet RegulaBrands!',
            text: "I've worked in UX for the better part of a decade. From now on, I plan to rei…",
            person: person1,
            personName: 'Sarthak Kamra',
            icon: icon1,
            about: 'Article'
        },
        {
            id: 2,
            thumbnail: image2,
            title: 'Tax Benefits for Investment under National Pension Scheme launched by Government',
            text: "I've worked in UX for the better part of a decade. From now on, I plan to rei…",
            person: person2,
            personName: 'Sarah West',
            icon: icon2,
            about: 'Education'
        },
    ]

    return (
        <div>
            {
                articles.map(({ id, thumbnail, title, text, person, personName, icon, about }) => (
                    <Card key={id} className='mb-3'>
                        <Card.Img variant="top" src={thumbnail} />
                        <Card.Body>
                            <div className='d-flex align-items-center'>
                                <img src={icon} alt="" style={{ 'width': '22px' }} />
                                <span className='ms-1 mt-1 fs-6 fw-semibold'>{about}</span>
                            </div>
                            <div className='d-flex justify-content-between mt-3 mb-1'>
                                <Card.Title className='w-75'>{title}</Card.Title>
                                <BsThreeDots size={20}></BsThreeDots>

                            </div>
                            <Card.Text style={{ 'color': '#5C5C5C' }}>{text}</Card.Text>
                        </Card.Body>
                        <div className="d-flex align-items-center justify-content-between my-4">
                            <div className='d-flex align-items-center justify-content-between ms-3'>
                                <Image
                                    roundedCircle
                                    src={person}
                                    style={{ height: '48px' }}>
                                </Image>
                                <div className='ms-3'>
                                    <h6 className='m-0 fw-semibold'>{personName}</h6>
                                </div>
                            </div>
                            <div className='d-flex align-items-center'>
                                <BsEye size={16} className='me-2'></BsEye>
                                <span>1.4k views</span>

                                <button type="button" class="btn ms-5 me-3" style={{ 'background': "#EDEEF0", 'width': '42px' }}>
                                    <BsShareFill></BsShareFill>
                                </button>
                            </div>
                        </div>
                    </Card>))
            }
            <Card className='mb-3'>
                <Card.Img variant="top" src={image3} />
                <Card.Body>
                    <div className='d-flex align-items-center'>
                        <img src={icon3} alt="" style={{ 'width': '22px' }} />
                        <span className='ms-1 mt-1 fs-6 fw-semibold'>Meetup</span>
                    </div>
                    <div className='d-flex justify-content-between mt-3'>
                        <Card.Title className='w-75'>Finance & Investment Elite Social Mixer @Lujiazui</Card.Title>
                        <BsThreeDots size={20}></BsThreeDots>

                    </div>
                    <div className='d-flex align-items-center mt-1'>
                        <div className='d-flex align-items-center'>
                            <RiCalendarEventFill></RiCalendarEventFill>
                            <span className='ms-2 fw-semibold' style={{ 'fontSize': '14px' }}>Fri, 12 Oct, 2018</span>
                        </div>
                        <div className='d-flex align-items-center ms-5'>
                            <MdOutlineLocationOn></MdOutlineLocationOn>
                            <span className='ms-2 fw-semibold' style={{ 'fontSize': '14px' }}>Ahmedabad, India</span>
                        </div>
                    </div>
                    <button type="button" class="btn w-100 mt-3" style={{ 'color': '#E56135', 'border': '1px solid #A9AEB8' }}>Visit Website</button>
                </Card.Body>
                <div className="d-flex align-items-center justify-content-between my-4">
                    <div className='d-flex align-items-center justify-content-between ms-3'>
                        <Image
                            roundedCircle
                            src={person3}
                            style={{ height: '48px' }}>
                        </Image>
                        <div className='ms-3'>
                            <h6 className='m-0 fw-semibold'>Ronal Jones</h6>
                        </div>
                    </div>
                    <div className='d-flex align-items-center'>
                        <BsEye size={16} className='me-2'></BsEye>
                        <span>1.4k views</span>
                        <button type="button" class="btn ms-5 me-3" style={{ 'background': "#EDEEF0", 'width': '42px' }}>
                            <BsShareFill></BsShareFill>
                        </button>
                    </div>
                </div>
            </Card>
            <Card className='mb-5'>
                <Card.Body>
                    <div className='d-flex align-items-center'>
                        <img src={icon5} alt="" style={{ 'width': '22px' }} />
                        <span className='ms-1 mt-1 fs-6 fw-semibold'>Job</span>
                    </div>
                    <div className='d-flex justify-content-between mt-3'>
                        <Card.Title className='w-75'>Software Developer</Card.Title>
                        <BsThreeDots size={20}></BsThreeDots>

                    </div>
                    <div className='d-flex align-items-center mt-1'>
                        <div className='d-flex align-items-center'>
                            <BsBag></BsBag>
                            <span className='ms-2 fw-semibold' style={{ 'fontSize': '14px' }}>Innovaccer Analytics Private Ltd.</span>
                        </div>
                        <div className='d-flex align-items-center ms-5'>
                            <MdOutlineLocationOn></MdOutlineLocationOn>
                            <span className='ms-2 fw-semibold' style={{ 'fontSize': '14px' }}>Noida, India</span>
                        </div>
                    </div>
                    <button type="button" class="btn w-100 mt-3" style={{ 'color': '#02B875', 'border': '1px solid #A9AEB8' }}>Apply on Timesjobs</button>
                </Card.Body>
                <div className="d-flex align-items-center justify-content-between my-4">
                    <div className='d-flex align-items-center justify-content-between ms-3'>
                        <Image
                            roundedCircle
                            src={person4}
                            style={{ height: '48px' }}>
                        </Image>
                        <div className='ms-3'>
                            <h6 className='m-0 fw-semibold'>Joseph Gray</h6>
                        </div>
                    </div>
                    <div className='d-flex align-items-center'>
                        <BsEye size={16} className='me-2'></BsEye>
                        <span>1.4k views</span>
                        <button type="button" class="btn ms-5 me-3" style={{ 'background': "#EDEEF0", 'width': '42px' }}>
                            <BsShareFill></BsShareFill>
                        </button>
                    </div>
                </div>
            </Card>
        </div>
    );
};

export default Contents;