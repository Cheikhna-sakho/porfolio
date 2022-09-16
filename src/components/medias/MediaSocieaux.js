import React from 'react'
import socials from '../../data/reseauxSociaux'

const MediaSocieaux = () => {
    return (
        <div className="media">
            <ul className='grid-row'>
                {socials.map(({icon,link,mail},i) => (
                    <li><a href={mail ? "mailto:" + link : link} target="_blank" rel="noreferrer">{icon}</a></li>
                ))}
            </ul>
        </div>
    )
}

export default MediaSocieaux