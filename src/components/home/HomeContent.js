import React from 'react'
import Typewriter from 'typewriter-effect'

const HomeContent = () => {
    return (
        <div className='home-content center'>
            <div className="presentation">
                <h3>Hello!</h3>
                <h2 className='legend'>
                    <Typewriter
                        options={{
                            autoStart: true,
                            loop: true,
                            delay: 40,
                            strings: [
                                "Je suis Cheikhna SAKHO developpeur web en formation a Epitech",
                                "Pationné de sciences et d'informatique",
                                "Mon metier?",
                                "Vous venir en aide a la mobibilité!",
                                "En vous faisant gagner en temps et en efficacité",
                                "Actuellement en recherche d'alternance"
                            ]
                        }}
                    />
                    <br />
                </h2>
                <h3>je vous souhaite la bienvenue</h3>
            </div>
            <div className="bg-img"></div>
        </div>
    )
}

export default HomeContent