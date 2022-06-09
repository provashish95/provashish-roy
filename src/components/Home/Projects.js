import React, { useEffect, useState } from 'react';
import Project from './Project';


const Projects = () => {
    const [projects, setProjects] = useState([]);

    useEffect(() => {
        fetch('projects.json')
            .then(res => res.json())
            .then(data => {
                setProjects(data);
            })
    }, [])

    return (
        <div className="container my-5">
            <h2 className='text-center text-color fw-bold my-5'>Projects</h2>
            <div className="row">
                {
                    projects?.map(project => <Project key={project.id} project={project}></Project>)
                }
            </div>
        </div>
    );
};

export default Projects;