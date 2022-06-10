import React, { useState } from 'react';
import Modal1 from './Modal1';
import Modal2 from './Modal2';
import Modal3 from './Modal3';

const Project = ({ project }) => {
    const [show, setShow] = useState(false);
    const [show1, setShow1] = useState(false);
    const [show2, setShow2] = useState(false);

    const { id, name, img1, description, live } = project;

    const navigateToPurchase = (id) => {
        if (id === 1) {
            setShow(true);
            return;
        } else if (id === 2) {
            setShow1(true);
            return;
        } else {
            setShow2(true);
        }

    }
    return (

        <>
            <div className="col-sm-12 col-md-4 col-lg-4 my-3">
                <div className="card shadow-lg white-img">
                    <img src={img1} className="card-img-top" alt="img" style={{ height: '180px' }} />
                    <div className="card-body">
                        <h5 className="card-title">{name}</h5>
                        <p className="card-text">{description.slice(0, 110)}...</p>
                        <p className='text-center'>
                            <a href={live} className="project-live-btn" target='_blank'>Live website</a>
                            <button onClick={() => navigateToPurchase(id)} className='project-details-btn'>Details</button>
                        </p>
                    </div>
                </div>
            </div>
            <Modal1 show={show} setShow={setShow}></Modal1>
            <Modal2 show1={show1} setShow1={setShow1}></Modal2>
            <Modal3 show2={show2} setShow2={setShow2}></Modal3>
        </>
    );
};

export default Project;