import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';


const ProjectDetails = () => {
    const { id } = useParams();
    const [details, setDetails] = useState({});

    useEffect(() => {
        fetch('projects.json')
            .then(res => res.json())
            .then(data => {
                setDetails(data[0]);
            })
    }, [id])

    return (
        <div className="container">
            <div className="row my-5">
                <div className="col-12">
                    <div className="card shadow-lg">
                        <img src={details.img} className="card-img-top img-fluid" alt="detailsImg" />
                        <div className="card-body">
                            <h5 className="card-title">{details.name}</h5>
                            <p className="card-text">{details.description}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProjectDetails;