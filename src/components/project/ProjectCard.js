import React from 'react'
import ProjectDesc from './ProjectDesc';

const ProjectCard = ({ projet }) => {

    return (

        <div className={` grid-row projet ${projet?.type}`} >
            <div className={`projet-cover`}>
                {projet.src && <img src={projet?.src} alt="projet img" />}
            </div>
            <ProjectDesc projet={projet} />
        </div>

    )
}
// ( len, index)
// const i = index;

// const theta = (i) => ((Math.PI * 2) / len) * i;
// const x = (i) => 50 + (50 * Math.cos(theta(i)));
// const y = (i) => 50 + (50 * (Math.sin(theta(i))));
// style={{ '--x': x(i), '--y': y(i), left: (x(i)) + "%", top: (y(i)) + "%" }}
export default ProjectCard