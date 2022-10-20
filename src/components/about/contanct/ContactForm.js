import React from 'react'

const ContactForm = () => {
    const champs = [{ id: "username",type:"text", title: "Nom/prenom" }, { id: "email",type:"email", title: "E-mail" }];
    return (
        <article className='contact' id='contact'>
            <div className='contact-title'>
                <h2>Contact</h2>
            </div>
            <div className='form-box grid-row'>
                <form className='info-artilce'>
                    <div className="input-group">
                        {champs.map(({title,type,id},i) => (
                            <p className="input-box grid-row" key={i}>
                                <label htmlFor={id}>{title}</label>
                                <input type={type} name={id} id={id} required />
                            </p>
                        ))}
                    </div>
                    <p>
                        <textarea name="message" placeholder='Veillez saisir votre message' id="message" cols="30" rows="10" required/>
                    </p>
                    <input type="submit" value="Envoyez" />
                </form>
            </div>
        </article>
    )
}

export default ContactForm