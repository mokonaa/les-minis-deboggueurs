import { useState, useRef } from 'react';
import React from 'react';
import { data } from '../../data/data';
import coeurPleinSrc from '../../assets/img/coeur_plein.svg';
import coeurVideSrc from '../../assets/img/coeur_vide.svg';
import Modal from '../Modal/Modal';


export default function FicheJoueur({ nbDeplacements, pouvoir, nom, nbVie, description, maudit, objectif, role, img, nomThematique, objectifImg, enfantsTab, enfantActuel, nbVieMax }) {


    const [showPopInEnfants, setShowPopInEnfants] = useState(false);
    const enfantPrevRef = useRef(null);
    enfantActuel = "";

    const displayPopIn = () => {
        setShowPopInEnfants(true);
        //console.log(showPopInEnfants);
    }

    if (maudit === true) {
        maudit = "oui"
    } else {
        maudit = "non"
    }

    // bouton dans ficheAnimateur "Renvoyer un enfant au Dortoir" 
    // Méthode pour supprimer un point de vie --> ca pas prio gérer si il en a plus console.log(joueurActuel est OUT faut l'enlever de OrdreFinal)

    // const [pointDeVie, setPointDeVie] = useState();

    const [message, setMessage] = useState("");

    // il faut pendant l'affichage de la Modal, afficher le nombre de vies qu'il reste aux personnages
    const [messagePoint, setMessagePV] = useState(false);

    const [enfantSelection, setEnfantSelection] = useState([]);

    // Gérer la sélection, garder en stock et return enfantChoix
    const choixEnfant = (enfantChoix) => {
        const enfantPrev = enfantPrevRef.current;
        //console.log(enfantPrev);
        if (enfantPrev !== null && enfantPrev !== enfantChoix) {
            document.getElementById('enfantChoisis' + enfantPrev.nom).style.border = "1px solid white";
        }

        document.getElementById('enfantChoisis' + enfantChoix.nom).style.border = "1px dotted #E275A3";
        setEnfantSelection(enfantChoix);
        enfantPrevRef.current = enfantChoix;

    }

    const [enfantsPunis, setEnfantsPunis] = useState([]);


    // changer pour que ca retire dans une copie des points de vie ou faire un state ?
    const retirerPointDeVie = (joueurChoisi) => {
        // match le nom du joueurChoisi et le nom dans le tableau enfantsTab
        const nomJoueurChoisi = joueurChoisi.nom;
        const indexEnfantTrouve = enfantsTab.findIndex(
            (enfantPunie) => enfantPunie.nom === nomJoueurChoisi
        );
        if (indexEnfantTrouve !== -1) {
            joueurChoisi.pv--;
            let message = `${nomJoueurChoisi} a ${joueurChoisi.pv} points de vie !`;

            // si plus de vie, envoyé au Dortoir
            if (joueurChoisi.pv <= 0) {
                message = `${nomJoueurChoisi} n'a plus de vie !`;
                enfantsPunis.push(joueurChoisi);
                enfantsTab.splice(indexEnfantTrouve, 1);
                //console.log(enfantsPunis);
            }
            document.querySelector(".modal").classList.add("modal-overlay--hidden");
            document.querySelector(".modal-overlay").classList.add("modal--hidden");
            setTimeout(() => {
                setShowPopInEnfants(false);
            }, 1500);
            setMessage(message);
        }
    }


    const genererCoeurs = (pv, pvMax, coeur_plein, coeur_vide) => {

        // faire une copie de tous les enfants
        const coeursTab = [];

        console.log('params function genererCoeurs');
        console.log(pv);
        console.log(pvMax);
        console.log(coeur_plein);
        console.log(coeur_vide);

        for (let i = 0; i < pvMax; i++) {
            coeursTab.push(coeur_plein);
        }

        if (pv <= pvMax) {
            console.log("on rentre bien donc il a moins de pv que de points de vie max");
            const pointsARetirer = pvMax - pv;

            for (let j = 0; j < pointsARetirer; j++) {
                // retirer un cœur plein
                const indexCoeurPlein = coeursTab.indexOf(coeur_plein);
                coeursTab.splice(indexCoeurPlein, 1);

                // ajouter un cœur vide
                coeursTab.push(coeur_vide);
            }
        }

        console.log('coeursTab');
        console.log(coeursTab);
        return coeursTab;
    };

    // const onClickConsole = (text, vara) => {
    //     console.log(text);
    //     console.log(vara);
    // }

    console.log(enfantsTab);

    return (
        <>
            <div id='ficheJoueur'>
                {showPopInEnfants && (
                    <Modal setShowModal={setShowPopInEnfants}>
                        {/* il faut que je réupere tous les enfantsChoisis */}
                        {enfantsTab && (
                            <div className='FJoutModal'>
                                <div className='FJmodal'>
                                    <h3 className='FJmodal__title'>Sélectionner l'enfant que l'animateur punie</h3>
                                    {console.log(enfantsTab)}
                                    {enfantsTab.map((enfant, i) =>
                                        <div key={i} class='FJmodal__card' id={'enfantChoisis' + enfant.nom} onClick={() => choixEnfant(enfant)}>
                                            <div className='card__image'>
                                                <img src={img} alt={"image du personnage " + { nom }} />
                                            </div>
                                            <p className='cta-text'>{enfant.nom}</p>
                                            {genererCoeurs(enfant.pv, enfant.pvMax, coeurPleinSrc, coeurVideSrc).map((image, index) => (
                                                <img onClick={() => genererCoeurs(enfant.pv, enfant.pvMax, coeurPleinSrc, coeurVideSrc)} key={index} src={image} alt="coeur" />
                                            ))}
                                        </div>
                                    )}
                                    {enfantsPunis.length > 0 && (
                                        enfantsPunis.map((enfant, i) =>
                                            <div key={i} class='FJmodal__card' id={'enfantChoisis' + enfant.nom} onClick={() => choixEnfant(enfant)}>
                                                <div className='card__image'>
                                                    <img className='noiretblanc' src={img} alt={"image du personnage " + { nom }} />
                                                </div>
                                                <p className='cta-text'>{enfant.nom}</p>
                                                {genererCoeurs(enfant.pv, enfant.pvMax, coeurPleinSrc, coeurVideSrc).map((image, index) => (
                                                    <img onClick={() => genererCoeurs(enfant.pv, enfant.pvMax, coeurPleinSrc, coeurVideSrc)} key={index} src={image} alt="coeur" />
                                                ))}
                                            </div>
                                        )
                                    )}
                                </div>
                                <button className='cta-button' onClick={() => retirerPointDeVie(enfantSelection)}>Valider</button>
                            </div>
                        )}
                    </Modal>
                )}
                {role === 'animateur' && (
                    <div className='ficheAnimateur'>
                        <div className='pre-wrapper bg-pink border-bottom-pink'>
                            <p className="body1">{nom} doit ramasser 6 jetons rouges<br />"{nomThematique}" pour remporter la partie.</p>
                        </div>
                        <div className='tour-all-wrapper'>
                            <div className='tour-wrapper'>
                                <div className='tour-wrapper__image'>
                                    <img src={img} alt={"image de profil de l'animateur " + nom} />
                                </div>
                                <div className='tour-wrapper__role'>
                                    <p className='role__sous-titre body2'>{role}</p>
                                    <p className='role__nom cta-text'>{nom}</p>
                                </div>
                            </div>
                            <div className="actions">
                                <div className="actions__row">
                                    <div className="row__image">
                                        <img src={require("../../assets/img/deplacement.png")} alt={"image de " + nom} />
                                    </div>
                                    <p className='body2'><strong>{nom}</strong> peut avancer de <strong>{nbDeplacements}</strong></p>
                                </div>
                                <div className="actions__row">
                                    <div className="row__image jeton">
                                        <img src={objectifImg} alt={"image de jeton " + nomThematique} />
                                    </div>
                                    <p className='body2'><strong>{nom}</strong> ramasse tous les jetons rouges <strong>"{nomThematique}"</strong> de la pièce.</p>
                                </div>
                                <div className="actions__row">
                                    <div className="row__image jeton">
                                        <img src={require("../../assets/img/dortoir.png")} alt="image du Dortoir" />
                                    </div>
                                    <p className='body2'>Si un enfant est présent dans la pièce où arrive {nom}. Il est renvoyé au Dortoir</p>
                                </div>
                            </div>
                        </div>
                    </div>
                )}
                {role === 'enfant' && (
                    <div className='ficheEnfant'>
                        <div className='pre-wrapper bg-orange border-bottom-orange'>
                            <p className="body1">{nom} doit ramasser 6 jetons bleus<br />d'un animateur pour le sauver</p>
                        </div>
                        <div className='tour-all-wrapper'>
                            <div className='tour-wrapper role-enfants'>
                                <div className='tour-wrapper__role'>
                                    <div className='tour-wrapper__image'>
                                        <img src={img} alt={"image de profil de l'animateur " + nom} />
                                    </div>
                                    <div className='tour-wrapper__texte'>
                                        <p className='role__sous-titre body2'>{role}</p>
                                        <p className='role__nom cta-text'>{nom}</p>
                                    </div>
                                </div>
                                <div className="tour-wrapper__pv">
                                    {genererCoeurs(nbVie, nbVieMax, coeurPleinSrc, coeurVideSrc).map((image, index) => (
                                        <img key={index} src={image} alt="coeur" />
                                    ))}
                                </div>
                            </div>
                            <div className="actions">
                                <div className="actions__row">
                                    <div className="row__image">
                                        <img src={require("../../assets/img/deplacement.png")} alt={"image de " + nom} />
                                    </div>
                                    <p className='body2'><strong>{nom}</strong> se déplace de <strong>{nbDeplacements}</strong> case indiqué sur la carte</p>
                                </div>
                                <div className="actions__row">
                                    <div className="row__image deplacement">
                                        <img src={require("../../assets/img/deFiche.png")} alt="image pictogramme du Dortoir" />
                                    </div>
                                    <p className='body2'>Le joueur doit effectuer 2 actions présentes dans la réserve de dés.</p>
                                </div>
                                <div className="actions__row">
                                    <div className="row__image">
                                        <img src={require("../../assets/img/pouvoir.png")} alt="image du Dortoir" />
                                    </div>
                                    <p className='body2'>{pouvoir}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                )}
            </div >

            {role === 'animateur' && (
                <div className="espaceBoutonAnimateur">
                    <button className="cta-button-orange" onClick={displayPopIn}>Renvoyez un enfant dans le dortoir</button>
                </div>
            )
            }
        </>
    )
}
