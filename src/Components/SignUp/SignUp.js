import React, { useContext } from 'react';
import { Form, InputGroup, Modal } from 'react-bootstrap';
import img from '../../assets/login.png';
import { FcGoogle } from 'react-icons/fc';
import { FaFacebook } from 'react-icons/fa';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../Context/AuthProvider';
import { GoogleAuthProvider } from 'firebase/auth';
import Login from '../Login/Login';


const SignUp = ({ show, setShow, handleClose }) => {

    const navigate = useNavigate();
    const { createUser, updateUserProfile, googleSignIn } = useContext(AuthContext);

    const handleShow = () => setShow(true);

    const handleSignUp = event => {
        event.preventDefault();
        const form = event.target;
        const firstName = form.name.value;
        const email = form.email.value;
        const password = form.password.value;
        createUser(email, password)
            .then(result => {
                const user = result.user;
                console.log(user);
                form.reset();
                setShow(false);
                navigate('/');
            })
            .catch(error => console.error(error))
    }

    const handleGoogleSignIn = () => {
        const googleProvider = new GoogleAuthProvider();
        googleSignIn(googleProvider)
            .then(result => {
                const user = result.user;
                console.log(user);
                setShow(false);
                navigate('/')
            })
            .catch(err => console.error(err))
    };

    const handleUpdateUser = (firstName, photoURL) => {
        const profile = { displayName: firstName, photoURL: photoURL }
        updateUserProfile(profile)
            .then(() => {
            }).catch((error) => {
            });
    }

    return (
        <div>
            <Modal
                size='lg'
                show={show}
                onHide={handleClose}
                backdrop="static"
                keyboard={false}
            >
                <Modal.Header closeButton style={{ 'background': '#EFFFF4' }}>
                    <p className='ms-4' style={{ 'fontSize': '14px', 'color': '#008A45' }}>Let's learn, share & inspire each other with our passion for computer engineering. Sign up now 🤘🏼</p>
                </Modal.Header>
                <Modal.Body className='mx-4'>
                    <div className='d-flex align-items-center justify-content-between'>
                        <h5 className='fw-bold'>Create Account</h5>
                        <p className='mt-1' style={{ 'fontSize': '14px' }}>Already have an account? <button onClick={handleShow} className='btn p-0 btn-sm mb-1 text-primary text-decoration-none' to=''>Sign In</button></p>
                    </div>
                    <div className='d-lg-flex'>
                        <div className='w-60 mx-auto'>
                            <Form onSubmit={handleSignUp}>
                                <InputGroup>
                                    <Form.Control className='rounded-0' name='firstName' placeholder='First name' style={{ 'fontSize': '14px' }} />
                                    <Form.Control className='rounded-0' name='lastName' placeholder='Last name' style={{ 'fontSize': '14px' }} />
                                </InputGroup>
                                <Form.Control className='rounded-0 border-top-0' name='email' type="email" placeholder="Email" style={{ 'fontSize': '14px' }} />
                                <Form.Control className='rounded-0 border-top-0' name='password' type="password" placeholder="Password" style={{ 'fontSize': '14px' }} />
                                <Form.Control className='rounded-0 border-top-0' name='confirmPassword' type="password" placeholder="Confirm Password" style={{ 'fontSize': '14px' }} />
                                <button type="button" class="btn btn-primary rounded-pill fw-semibold w-100 my-3">Create Account</button>
                                <button type="button" class="btn rounded-0 w-100" style={{ 'border': '1px solid #D9D9DB' }}><FaFacebook className='text-primary mb-1' size={20} /> Sign up with Facebook</button>
                                <button onClick={handleGoogleSignIn} type="button" class="btn rounded-0 w-100 mt-2" style={{ 'border': '1px solid #D9D9DB' }}><FcGoogle className='mb-1' size={20} /> Sign up with Google</button>
                            </Form>
                        </div>
                        <div className='w-40 ms-3'>
                            <img src={img} alt="" style={{ 'width': '310px' }} />
                            <p style={{ 'fontSize': '10px' }}>By signing up, you agree to our Terms & conditions, Privacy policy</p>
                        </div>
                    </div>
                </Modal.Body>
            </Modal>
        </div>
    );
};

export default SignUp;