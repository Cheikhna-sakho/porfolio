import React from 'react';
import ContactForm from './contanct/ContactForm';
import Info from './Info';
import Profil from './Profil';
const About = () => {
    return (
        <section className='grid-row about' id='about'>
            <Profil />
            <Info/>
            <ContactForm/>
        </section>
    )
}

export default About;