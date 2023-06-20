import { useState } from 'react';
import React from 'react';

export default function FicheJoueur({ nbDeplacements, pouvoir, nom, nbVie, description, maudit, objectif, role, img, nomThematique, objectifImg }) {

    if (maudit === true) {
        maudit = "oui"
    } else {
        maudit = "non"
    }

    // gestion du nombre de vie selon nbVie du joueurActuel avec une image
    const genererCoeurs = (nbVies) => {
        const coeurs = [];
        let nbMaxVies = nbVies;
        // Générer les images de cœur plein
        for (let i = 0; i < nbVies; i++) {
            coeurs.push(<img key={i} src={require("../../assets/img/coeur_plein.svg")} alt="Coeur plein" />);
        }
        // Générer les images de cœur vides
        for (let i = nbVies; i < nbMaxVies; i++) {
            coeurs.push(<img key={i} src={require("../../assets/img/coeur_vide.svg")} alt="Coeur vide" />);
        }
        return coeurs;
    };
    return (
        <div id='ficheJoueur'>
            {role === 'animateur' && (
                <div id='ficheAnimateur'>
                    <div className='tour-wrapper'>
                        <img src={img} alt={"image de profil de l'animateur " + nom} />
                        <div className='tour-wrapper__role'>
                            <p className='role__sous-titre'>{role}</p>
                            <p className='role__nom'>{nom}</p>
                        </div>
                    </div>
                    <div className="actions">
                        <div className="actions__deplacement">
                            <div className="actions__row">
                                <div className="row__image">
                                    <img src={img} alt={"image de " + nom} />
                                </div>
                                <p><strong>{nom}</strong> peut avancer de <strong>{nbDeplacements}</strong></p>
                            </div>
                            <div className="actions__row">
                                <div className="row__image">
                                    <img src={objectifImg} alt={"image de jeton " + nomThematique} />
                                </div>
                                <p><strong>{nom}</strong> ramasse tous les jetons rouges <strong>"{nomThematique}"</strong> de la pièce.</p>
                            </div>
                            <div className="actions__row">
                                <div className="row__image">
                                    <img src={require("../../assets/img/dortoir.png")} alt="image du Dortoir" />
                                </div>
                                <p>Si un enfant est présent dans la pièce où arrive {nom}. Il est renvoyé au Dortoir</p>
                            </div>
                        </div>
                    </div>
                </div>
            )}
            {role === 'enfant' && (
                <div id='ficheEnfant'>
                    <div className='tour-wrapper'>
                        <div className="tour-wrapper__sub">
                            <img src={img} alt={"image de profil de " + nom} />
                            <div className='tour-wrapper__role'>
                                <p className='role__sous-titre'>{role}</p>
                                <p className='role__nom'>{nom}</p>
                            </div>
                        </div>
                        <div className="tour-wrapper__pv">
                            {genererCoeurs(nbVie).map((image, index) => (
                                <img key={index} src={image} alt="coeur" />
                            ))}
                        </div>
                    </div>
                    <div className="actions">
                        <div className="actions__deplacement">
                            <div className="actions__row">
                                <div className="row__image">
                                    <img src={img} alt={"image de " + nom} />
                                </div>
                                <p><strong>{nom}</strong> peut avancer de <strong>{nbDeplacements}</strong></p>
                            </div>
                            <div className="actions__row">
                                <div className="row__image">
                                    <img src={objectifImg} alt={"image de jeton " + nomThematique} />
                                </div>
                                <p><strong>{nom}</strong> ramasse tous les jetons rouges <strong>"{nomThematique}"</strong> de la pièce.</p>
                            </div>
                            <div className="actions__row">
                                <div className="row__image">
                                    <img src={require("../../assets/img/dortoir.png")} alt="image du Dortoir" />
                                </div>
                                <p>Si un enfant est présent dans la pièce où arrive {nom}. Il est renvoyé au Dortoir</p>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    )
}
