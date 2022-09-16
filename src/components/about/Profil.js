import React from 'react'
// import cv from "../../data/CvSakho.pdf";
import cvSakho from "../../data/CV_Cheikhna_SAKHO.pdf";
import photoCv from "../../assets/img/photoCV.jpg";
const Profil = () => {
    return (
        <div className="me grid-row">
            <div className='profil'>
                <img className='img-profil' src={photoCv} alt="profil" />
            </div>
            <div>
                <h2>Cheikhna SAKHO</h2>
                <h3>Developpeur web en recherche d'alternance</h3>
                <h3><span>{"{Epitech}"}</span></h3>
                <button><a href={cvSakho} download>Telecharger mon CV</a></button>
            </div>
        </div>
    )
}

export default Profil