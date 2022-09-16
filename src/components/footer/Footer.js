import React from 'react'
import socials from '../../data/reseauxSociaux'

const Footer = () => {
    return (
        <footer className=''>
            <div className="center grid-row footer">
                <div className="sociaux">
                    <ul className='grid-col'>
                        {socials.map(media => (
                            <li>{media.icon}</li>
                        ))}
                    </ul>
                </div>

            </div>
        </footer>
    )
}

export default Footer