import React from 'react'

const ProjectDesc = ({ projet }) => {
    return (
        <article className={`projet-description`}>

            <p>{projet.desc}</p>
            <div className="">

                <h3 className="stack">
                    Stack: {projet.stack}
                </h3>
                <button>
                    <a href={projet.link} target="_blank" rel="noopener noreferrer">Voir le projet</a>

                </button>
            </div>
        </article>
    )
}

export default ProjectDesc