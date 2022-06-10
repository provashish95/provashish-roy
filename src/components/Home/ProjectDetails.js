import React, { useEffect, useState } from 'react';
import Loading from './Loading';

const ProjectDetails = () => {

    const [details, setDetails] = useState({});

    useEffect(() => {
        fetch('projects.json')
            .then(res => res.json())
            .then(data => {
                setDetails(data[0]);
            })
    }, [])

    if (!details) {
        return <Loading></Loading>
    }

    return (
        <section className='background-img'>
            <div className="container">
                <div className="row py-5">
                    <div className="col-12">
                        <div className="card shadow-lg white-img">
                            <div className='w-75 mx-auto mt-5 mb-0'>
                                <div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="carousel">
                                    <div className="carousel-indicators">
                                        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                                        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
                                        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
                                    </div>
                                    <div className="carousel-inner">
                                        <div className="carousel-item active">
                                            <img src={details.img2} className="d-block w-100" alt="..." />
                                        </div>
                                        <div className="carousel-item">
                                            <img src={details.img1} className="d-block w-100" alt="..." />
                                        </div>
                                        <div className="carousel-item">
                                            <img src={details.img3} className="d-block w-100" alt="..." />
                                        </div>
                                    </div>
                                    <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                                        <span className="visually-hidden">Previous</span>
                                    </button>
                                    <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                                        <span className="visually-hidden">Next</span>
                                    </button>
                                </div>
                            </div>

                            <div className="card-body">
                                <h5 className="card-title text-color fw-bold mb-3 text-center">{details.name}</h5>
                                <p className="card-text text-color"><span className='fw-bold'>About Project: </span>{details.description}</p>
                                <div className='row'>
                                    <div className="col-12">
                                        <span className='fw-bold me-2 fs-6'>Tools: </span>
                                        {
                                            details.tools?.map((tool, index) => <small key={index} className="me-2 fw-bold text-color">{tool} ,</small>)
                                        }
                                    </div>
                                </div>
                                <div className='mb-5 mt-3'>
                                    <a href={details.live} className="btn btn-info text-color fw-bold me-2 mt-2" target='_blank'><i className="fa-solid fa-desktop"></i> Live website</a>
                                    <a href={details.githubClient} className="btn btn-info text-color fw-bold me-2 mt-2" target='_blank'><i className="fa-brands fa-github"></i> GitHub (Client side)</a>
                                    <a href={details.githubServer} className="btn btn-info text-color fw-bold mt-2" target='_blank'> <i className="fa-brands fa-github"></i> GitHub (Server side)</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ProjectDetails;