import React, { useEffect, useState } from 'react';
import { Button, Modal } from 'react-bootstrap';
import Loading from './Loading';

const Modal2 = ({ show1, setShow1 }) => {
    const [details, setDetails] = useState({});

    useEffect(() => {
        fetch('projects.json')
            .then(res => res.json())
            .then(data => {
                setDetails(data[1]);
            })
    }, [])

    if (!details) {
        return <Loading></Loading>
    }

    const handleClose = () => setShow1(false);
    return (
        <>
            <Modal
                show={show1}
                onHide={handleClose}
                backdrop="static"
                keyboard={false}
                size='lg'
                centered
            >
                <Modal.Body
                    style={{
                        maxHeight: 'calc(100vh - 210px)',
                        overflowY: 'auto',
                    }}
                    className='white-img'
                >
                    <h5 className=" text-color fw-bold mt-3 text-center">{details.name}</h5>

                    <div className='mb-0'>
                        <div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="carousel">
                            <div className="carousel-indicators">
                                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
                                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
                            </div>
                            <div className="carousel-inner">
                                <div className="carousel-item active">
                                    <img src={details.img1} className="d-block w-100" alt="..." />
                                </div>
                                <div className="carousel-item">
                                    <img src={details.img2} className="d-block w-100" alt="..." />
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
                            <a href={details.live} className="btn btn-outline-info text-color fw-bold me-2 mt-2" target='_blank'><i className="fa-solid fa-desktop"></i> Live website</a>
                            <a href={details.githubClient} className="btn btn-outline-info text-color fw-bold me-2 mt-2" target='_blank'><i className="fa-brands fa-github"></i> GitHub (Client side)</a>
                            <a href={details.githubServer} className="btn btn-outline-info text-color fw-bold mt-2" target='_blank'> <i className="fa-brands fa-github"></i> GitHub (Server side)</a>
                        </div>
                    </div>


                </Modal.Body>
                <Modal.Footer
                    className='p-1 footer-bg'
                >
                    <Button variant="outline-info" onClick={handleClose}>
                        Close
                    </Button>
                </Modal.Footer>
            </Modal>

        </>
    );
};

export default Modal2;