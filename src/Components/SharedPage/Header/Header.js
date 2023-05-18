import React, { useContext } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import logo from '../../../assets/logo.jpg'
import { HiSearch } from 'react-icons/hi';
import { MdArrowDropDown } from 'react-icons/md';
import { FaUser } from 'react-icons/fa';
import { useState } from 'react';
import SignUp from '../../SignUp/SignUp';
import { AuthContext } from '../../../Context/AuthProvider';
import { Link } from 'react-router-dom';
import { Image } from 'react-bootstrap';
import Login from '../../Login/Login';


const Header = () => {
    const { user } = useContext(AuthContext);

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <Navbar collapseOnSelect expand="lg" bg="light" variant="light" className='py-3' fixed="top">
            <Container>
                <Navbar.Brand href="/home">
                    <img src={logo} alt="" />
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="mx-auto">
                        <div className="p-1 rounded rounded-pill shadow-sm" style={{ 'background': '#F2F2F2', 'width': '360px' }}>
                            <div className="d-flex align-items-center input-group">
                                <HiSearch className='ms-3' size={20} style={{ 'color': '#7A7A7A' }}></HiSearch>
                                <input type="text" placeholder="Search for your favorite groups in ATG" className="form-control border-0" style={{ 'background': '#F2F2F2', 'fontSize': '14px' }} />
                            </div>
                        </div>

                    </Nav>
                    <Nav className='d-flex align-items-center'>
                        {
                            user?.email ?
                                <>
                                    <Link to=''>
                                        {
                                            user?.photoURL ?
                                                <Image
                                                    className='mt-1'
                                                    roundedCircle
                                                    src={user?.photoURL}
                                                    style={{ height: '40px' }}>
                                                </Image>
                                                :
                                                <FaUser className='mt-2'></FaUser>
                                        }
                                    </Link>
                                    <span className='mx-2' to="">{user?.displayName}</span>
                                    <button onClick={handleShow} type="button" className='btn btn-sm'><MdArrowDropDown size={25}></MdArrowDropDown></button>
                                </>
                                :
                                <>
                                    <p className='m-0 fw-bold'>Create account. <span style={{ 'color': '#2F6CE5' }}>It's free!</span></p>
                                    <button onClick={handleShow} type="button" className='btn btn-sm'><MdArrowDropDown size={25}></MdArrowDropDown></button>
                                </>
                        }
                        {/* <p className='m-0 fw-bold'>Create account. <span style={{ 'color': '#2F6CE5' }}>It's free!</span></p>
                        <button onClick={handleShow} type="button" className='btn btn-sm'><MdArrowDropDown size={25}></MdArrowDropDown></button> */}
                        <SignUp
                            show={show}
                            setShow={setShow}
                            handleClose={handleClose}
                        ></SignUp>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Header;