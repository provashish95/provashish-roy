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
        <section id='projects'>
            <div className="container py-5">
                <h2 className='text-center text-color fw-bold my-5'>Projects</h2>
                <div className="row">
                    {
                        projects?.map(project => <Project key={project.id} project={project}></Project>)
                    }
                </div>
            </div>
        </section>
    );
};

export default Projects;