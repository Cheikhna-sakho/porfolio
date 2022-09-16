import React from 'react'

const ContactForm = () => {
    const champs = [{ id: "username", title: "Non/prenom" }, { id: "email", title: "E-mail" }];
    return (
        <article className='contact' id='contact'>
            <div className='contact-title'>
                <h2>Contact</h2>
            </div>
            <div className='form-box grid-row'>
                <form className='info-artilce'>
                    <div className="input-group">
                        {champs.map((nameInput,i) => (
                            <p className="input-box grid-row" key={i}>
                                <label htmlFor="">{nameInput.title}</label>
                                <input type="text" name={nameInput.id} />
                            </p>
                        ))}
                    </div>
                    <p>
                        <textarea name="message" id="message" cols="30" rows="10"></textarea>
                    </p>
                    <input type="submit" value="Envoyez" />
                </form>
            </div>
        </article>
    )
}

export default ContactForm