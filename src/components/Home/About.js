import React from 'react';
import profile from '../../images/profile.png';

const About = () => {
    return (
        <section id='about'>
            <div className="container py-5">
                <h2 className='text-center text-color fw-bold my-5'>About Provashish</h2>
                <div className="row ">
                    <div className="col-sm-6 col-md-6 col-lg-6">
                        <div className='text-center mt-5'>
                            <img src={profile} alt="profile" className='img-fluid profile-img' />
                        </div>
                        {/* <div className='social-link fs-3 my-4'>
                            <a href="https://www.linkedin.com/in/provashish/" target="_blank" className='me-2'>
                                <span><i className="fa-brands fa-linkedin text-color"></i></span>
                            </a>
                            <a href="https://github.com/provashish95" target="_blank" className='me-2'>
                                <span><i className="fa-brands fa-github text-color"></i></span>
                            </a>
                            <a className="mailto" href="mailto:provashishroy95@gmail.com">
                                <span><i className="fa-solid fa-envelope text-color"></i></span>
                            </a>
                        </div> */}
                        <h4 className='text-color fw-bold mt-5'>Hello, this is provashish Roy</h4>
                        <p className='text-color'>Well-trained Web Developer that knows how to create, design and modify web content. Has
                            experience in analyzing customer needs, working with teams and using software for
                            manipulating multimedia content. With the capacity to adapt and learn fast. I want to build my
                            career as a web developer in your company and I am passionate about web development.</p>
                    </div>
                    <div className="col-sm-6 col-md-6 col-lg-6">
                        <h5 className='text-center text-color fw-bold my-5'>Skills <span style={{ color: '#853b3b' }}>Provashish</span> have</h5>
                        <div className="row align-items-center">
                            <div className="col-sm-12 col-md-4 col-lg-4">
                                <p className='text-color fw-bold text-center'>Languages: </p>
                            </div>
                            <div className="col-sm-12 col-md-8 col-lg-8 ">
                                <ul className='d-flex flex-wrap px-3 list-unstyled skills '>
                                    <li>JavaScript</li>
                                    <li>C programming</li>
                                    <li>C++</li>
                                    <li>PHP</li>
                                </ul>
                            </div>
                        </div>
                        <div className="row align-items-center">
                            <div className="col-sm-12 col-md-4 col-lg-4">
                                <p className='text-color fw-bold text-center'>Expertise: </p>
                            </div>
                            <div className="col-sm-12 col-md-8 col-lg-8 ">
                                <ul className='d-flex flex-wrap px-3 list-unstyled skills '>
                                    <li>JavaScript</li>
                                    <li>ES6</li>
                                    <li>ReactJs</li>
                                    <li>HTML5</li>
                                    <li>CSS3</li>
                                    <li>Bootstrap</li>
                                    <li>TailwindCss</li>
                                </ul>
                            </div>
                        </div>
                        <div className="row align-items-center">
                            <div className="col-sm-12 col-md-4 col-lg-4">
                                <p className='text-color fw-bold text-center'>Familier: </p>
                            </div>
                            <div className="col-sm-12 col-md-8 col-lg-8 ">
                                <ul className='d-flex flex-wrap px-3 list-unstyled skills '>
                                    <li>Node js</li>
                                    <li>Express Js</li>
                                    <li>Rest API</li>
                                    <li>Material-UI</li>
                                    <li>Firebase</li>
                                    <li>MongoDB</li>
                                    <li>MySQL</li>
                                </ul>
                            </div>
                        </div>
                        <div className="row align-items-center">
                            <div className="col-sm-12 col-md-4 col-lg-4">
                                <p className='text-color fw-bold text-center'>Tools: </p>
                            </div>
                            <div className="col-sm-12 col-md-8 col-lg-8 ">
                                <ul className='d-flex flex-wrap px-3 list-unstyled skills '>
                                    <li>Github</li>
                                    <li>VS Code</li>
                                    <li>Chrome Dev Tools</li>
                                    <li>Heroku</li>
                                    <li>Netlify</li>
                                    <li>Postman</li>
                                    <li>Photoshop</li>
                                    <li>Figma</li>
                                    <li>json web token</li>
                                    <li>npm</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;