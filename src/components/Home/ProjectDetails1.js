import React from 'react';
import { useParams } from 'react-router-dom';

const ProjectDetails1 = () => {
    const { id } = useParams();
    return (
        <div>
            <h1>p 2 : {id}</h1>
        </div>
    );
};

export default ProjectDetails1;