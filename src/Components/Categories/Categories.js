import React, { useContext } from 'react';
import { MdArrowDropDown, MdGroupAdd } from 'react-icons/md';
import { BsBoxArrowInRight } from 'react-icons/bs';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../Context/AuthProvider';
import './Categories.css';

const Categories = () => {
    const { user, logOut } = useContext(AuthContext);
    const handleLogout = () => {
        logOut()
            .then(() => { })
            .catch(error => console.error(error))

    }
    return (
        <div className='mb-5'>
            <div class="d-none pt-5 pb-4 d-lg-flex align-items-center justify-content-between border-bottom">
                <div>
                    <Link to='' className='me-4 text-decoration-none link'>All Posts(32)</Link>
                    <Link to='' className='me-4 text-decoration-none link'>Article</Link>
                    <Link to='' className='me-4 text-decoration-none link'>Event</Link>
                    <Link to='' className='me-4 text-decoration-none link'>Education</Link>
                    <Link to='' className='text-decoration-none link'>Job</Link>
                </div>
                <div>
                    <button type="button" class="btn fw-semibold me-3" style={{ 'background': "#EDEEF0" }}>
                        <span className='me-2' style={{ 'fontSize': '15px' }}>Write a Post</span>
                        <MdArrowDropDown size={25}></MdArrowDropDown>
                    </button>
                    {
                        user?.email ?
                            <>
                                <button onClick={handleLogout} type="button" class="btn btn-primary">
                                    <BsBoxArrowInRight size={20}></BsBoxArrowInRight>
                                    <span className='ms-2'>Leave Group</span>
                                </button>
                            </>
                            :
                            <>
                                <button type="button" class="btn btn-primary">
                                    <MdGroupAdd size={20}></MdGroupAdd>
                                    <span className='ms-2'>Join Group</span>
                                </button>
                            </>
                    }
                </div>
            </div>
        </div>
    );
};

export default Categories;

{/* <div>
<p class="mt-1"><span class="fw-semibold">Sort By View: </span>
    <select class="form-select d-inline w-auto" aria-label="Default select example">
        <option selected>Default</option>
    </select>
</p>
</div> */}