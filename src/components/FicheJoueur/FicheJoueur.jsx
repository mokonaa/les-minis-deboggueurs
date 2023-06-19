import { useState } from 'react';
import React from 'react';

export default function FicheJoueur({ nbDeplacements, pouvoir, nom, nbVie, description, maudit, objectif, role, img, nomThematique }) {

    if (maudit === true) {
        maudit = "oui"
    } else {
        maudit = "non"
    }

    nbVie = 5;

    // gestion du nombre de vie selon nbVie du joueurActuel avec une image
    const nbVieStocker = nbVie;
    const [pv, setPv] = useState([]);
    console.log("---- nbVieStocker avant ----");
    console.log(nbVieStocker);
    console.log(pv);
    console.log("----------------------");
    let pvTab = [];
    const gestionVie = () => {
        if(nbVie != nbVieStocker) {
            nbVieStocker--;
        }
    }
    gestionVie();
    console.log("---- nbVieStocker après ----");
    console.log(nbVieStocker);
    console.log("----------------------");
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
                                    <img src="" alt={"image de " + nom} />
                                </div>
                                <p><strong>{nom}</strong> peut avancer de <strong>{nbDeplacements}</strong></p>
                            </div>
                            <div className="actions__row">
                                <div className="row__image">
                                    <img src="" alt={"image de jeton " + nomThematique} />
                                </div>
                                <p><strong>{nom}</strong> ramasse tous les jetons rouges <strong>"{nomThematique}"</strong> de la pièce.</p>
                            </div>
                            <div className="actions__row">
                                <div className="row__image">
                                    <img src="" alt="image du Dortoir" />
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

                    </div>
                </div>
                <div className="actions">
                    <div className="actions__deplacement">
                        <div className="actions__row">
                            <div className="row__image">
                                <img src="" alt={"image de " + nom} />
                            </div>
                            <p><strong>{nom}</strong> peut avancer de <strong>{nbDeplacements}</strong></p>
                        </div>
                        <div className="actions__row">
                            <div className="row__image">
                                <img src="" alt={"image de jeton " + nomThematique} />
                            </div>
                            <p><strong>{nom}</strong> ramasse tous les jetons rouges <strong>"{nomThematique}"</strong> de la pièce.</p>
                        </div>
                        <div className="actions__row">
                            <div className="row__image">
                                <img src="" alt="image du Dortoir" />
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
