import React from 'react';
import { useParams } from 'react-router-dom';

const ProjectDetails2 = () => {
    const { id } = useParams();
    return (
        <div>
            <h1>p 3 : {id}</h1>
        </div>
    );
};

export default ProjectDetails2;