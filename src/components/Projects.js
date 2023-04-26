import React from "react";
import { Container } from "react-bootstrap";

const currentProjects = [
    { id: 1, name: 'Humanitark’a party' },
    { id: 2, name: 'Art classes ' },
    { id: 3, name: 'Excursions' },
    { id: 4, name: 'Volunteer center' },
    { id: 5, name: 'Refugee support' }
];

const plannedProjects = [
    { id: 1, name: 'Workshop for art therapy' },
    { id: 2, name: 'Recycling clothes' },
    { id: 3, name: 'Exhibition' }
];

const Projects = () => {
    return (
        <>
            <Container>
                <h1 style={{ marginTop: '80px', textAlign: 'center' }}>PROJECTS</h1>
                <p>
                    The main goals of ATS 267 at the current moment are spreading art and
                    helping people affected by the russian aggression. 
                </p>
                <p>Current projects:</p>
                <ul>
                    {currentProjects.map(project => {
                        return (<li key={project.id}>{project.name}</li>)
                    })}
                </ul>
                <p>Planned projects:</p>
                <ul>
                    {plannedProjects.map(project => {
                        return (<li key={project.id}>{project.name}</li>)
                    })}
                </ul>
            </Container>
        </>
    )
};

export default Projects;
