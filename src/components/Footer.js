import React from 'react';

const Footer = () => {
    let date = new Date().getFullYear();
    return (
        <footer className='py-5 footer-bg'>
            <div className='social-link text-center fs-1 mt-5'>
                <a href="https://www.linkedin.com/in/provashish/" target="_blank" className='me-2'>
                    <span><i className="fa-brands fa-linkedin text-color"></i></span>
                </a>
                <a href="https://github.com/provashish95" target="_blank" className='me-2'>
                    <span><i className="fa-brands fa-github text-color"></i></span>
                </a>
                <a className="mailto" href="mailto:provashishroy95@gmail.com">
                    <span><i className="fa-solid fa-envelope text-color"></i></span>
                </a>
            </div>
            <div className="text-center mb-5">
                <p style={{ color: '#437c8f' }}>&copy; Copyright {date} |Provashish Roy</p>
            </div>
        </footer>
    );
};

export default Footer;