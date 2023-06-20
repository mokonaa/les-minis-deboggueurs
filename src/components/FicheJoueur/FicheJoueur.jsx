import { useState } from 'react';
import React from 'react';
import coeurPleinSrc from '../../assets/img/coeur_plein.svg';
import coeurVideSrc from '../../assets/img/coeur_vide.svg';


export default function FicheJoueur({ nbDeplacements, pouvoir, nom, nbVie, description, maudit, objectif, role, img, nomThematique, objectifImg, joueurApres }) {

    if (maudit === true) {
        maudit = "oui"
    } else {
        maudit = "non"
    }

    // gestion du nombre de vie selon nbVie du joueurActuel avec une image now it works
    
    const genererCoeurs = (nbVies, coeur_plein, coeur_vide) => {
        const coeursTab = [];
        const nbViesMax = nbVies; // valeur que je souhaite stocker
        console.log("----- Points de vie Max -----");
        console.log(nbViesMax);
        console.log("----------");
        for (let i = 0; i < nbVies; i++) {
          coeursTab.push(coeur_plein);
        }
        if(coeursTab.length < nbViesMax) {
          coeursTab.push(coeur_vide);
        }
      
        return coeursTab;
    };

    // bouton dans ficheAnimateur "Renvoyer un enfant au Dortoir" 
    // Méthode pour supprimer un point de vie --> ca pas prio gérer si il en a plus console.log(joueurActuel est OUT faut l'enlever de OrdreFinal)

    // const [pointDeVie, setPointDeVie] = useState();
    
    const retirerPointDeVie = (joueurApres) => {
        const pvStocker = joueurApres.pv;
        const pvRetirer = pvStocker - 1;
        console.log("----- Retirer Point de vie -----");
        console.log(pvRetirer);
        console.log("----------");
    }
    
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
                    <button className="actions__button" onClick={retirerPointDeVie(joueurApres)}>Renvoyez un enfant dans le dortoir</button>
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
                            {genererCoeurs(nbVie, coeurPleinSrc, coeurVideSrc).map((image, index) => (
                                <img key={index} src={image} alt="coeur" />
                            ))}
                        </div>
                    </div>
                    <div className="actions">
                        <div className="actions__deplacement">
                            <div className="actions__row">
                                <div className="row__image">
                                    <img src={require("../../assets/img/deplacement.png")} alt={"image de " + nom} />
                                </div>
                                <p><strong>{nom}</strong> peut avancer de <strong>{nbDeplacements}</strong></p>
                            </div>
                            <div className="actions__row">
                                <div className="row__image">
                                    <img src={require("../../assets/img/deFiche.png")} alt="image pictogramme du Dortoir" />
                                </div>
                                <p>Le joueur doit effectuer 2 actions présentes dans la réserve de dés.</p>
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
