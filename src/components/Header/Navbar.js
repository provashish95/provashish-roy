import React from 'react';
import { Link } from 'react-scroll';
import '../style.css';
import pdf from '../../files/provashish_roy_resume.pdf';

const Navbar = () => {

    return (
        <nav className="navbar navbar-expand-lg navbar-style py-3  navbar-light ">
            <div className="container">
                <Link className="navbar-brand fs-3 fw-bold" to="/">
                    PROVASHISH
                </Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarText">
                    <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <Link spy={true} smooth={true} offset={100} duration={500} className="nav-link fw-bold fs-6 text-white" to="banner">Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link spy={true} smooth={true} offset={100} duration={500} className="nav-link fw-bold fs-6 text-white" to="about">About</Link>
                        </li>
                        <li className="nav-item">
                            <Link spy={true} smooth={true} offset={100} duration={500} className="nav-link fw-bold fs-6 text-white" to="projects">Project</Link>
                        </li>
                        <li className="nav-item">

                            <Link spy={true} smooth={true} offset={100} duration={500} className="nav-link fw-bold fs-6 text-white" to="contact">Contact</Link>

                        </li>
                        <li className="nav-item">
                            <a href={pdf} className="nav-link fw-bold fs-6 text-white" to="#">Download resume</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;