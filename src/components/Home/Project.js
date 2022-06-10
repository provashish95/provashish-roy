import React from 'react';
import { useNavigate } from 'react-router-dom';

const Project = ({ project }) => {
    const navigate = useNavigate();
    const { id, name, img, description, live } = project;

    const navigateToPurchase = (id) => {
        if (id === 1) {
            navigate(`/projectDetails`);
            return;
        } else if (id === 2) {
            navigate(`/projectDetails1`);
            return;
        } else {
            navigate(`/projectDetails2`);
        }

    }
    return (
        <div className="col-sm-12 col-md-4 col-lg-4">
            <div className="card shadow-lg">
                <img src={img} className="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">{name}</h5>
                    <p className="card-text">{description.slice(0, 100)}...</p>
                    <p className='text-center'>
                        <a href={live} className="project-live-btn" target='_blank'>Live website</a>
                        <button onClick={() => navigateToPurchase(id)} className="project-details-btn">Details</button>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Project;