import React from 'react';

const Banner = () => {
    return (
        <section className='background-img'>
            <div className='container py-5'>
                <div className='py-5'>
                    <h1 className='text-color text-center mt-5 fw-bold'>Provashish Roy</h1>
                    <p className='text-color text-center fw-bold'>Engineer | Web Developer</p>

                    <div className='social-link text-center fs-3 '>
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
                    <div className='text-center my-5'>
                        <a href='mailto:provashishroy95@gmail.com' className='mailto btn-style'>Hire me</a>
                    </div>



                </div>
            </div>
        </section>
    );
};

export default Banner;