import React from 'react';
import '../style.css';
import pdf from '../../files/Provashish-Roy-Resume.pdf';
import { Link } from 'react-router-dom';



const Navbar = () => {


    return (
        <nav className="navbar navbar-expand-lg navbar-style py-3  navbar-light ">
            <div className="container">
                <Link to='/' className="navbar-brand fs-3 fw-bold">
                    PROVASHISH
                </Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarText">
                    <ul className="navbar-nav ms-auto mb-2 mb-lg-0">

                        <li className="nav-item">
                            <a href='#about' className="nav-link fw-bold fs-6 text-white">About</a>
                        </li>
                        <li className="nav-item">
                            <a href='#projects' className="nav-link fw-bold fs-6 text-white" >Project</a>
                        </li>
                        <li className="nav-item">
                            <a href='#blog' className="nav-link fw-bold fs-6 text-white" >SEO Experience</a>
                        </li>
                        <li className="nav-item cursor-pointer">
                            <a href='#contact' className="nav-link fw-bold fs-6 text-white">Contact</a>
                        </li>
                        <li className="nav-item">
                            <a href={pdf} className="nav-link fw-bold fs-6 text-white" >Download resume</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;