import { useState, useRef } from 'react';
import React from 'react';
import { data } from '../../data/data';
import coeurPleinSrc from '../../assets/img/coeur_plein.svg';
import coeurVideSrc from '../../assets/img/coeur_vide.svg';
import Modal from '../Modal/Modal';


export default function FicheJoueur({ nbDeplacements, pouvoir, nom, nbVie, description, maudit, objectif, role, img, nomThematique, objectifImg, enfantsTab }) {


    const [showPopInEnfants, setShowPopInEnfants] = useState(false);
    const enfantPrevRef = useRef(null);

    const displayPopIn = () => {
        console.log('Display Pop In Animateurs');
        setShowPopInEnfants(true);
        console.log(showPopInEnfants);
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
        console.log(enfantPrev);
        if (enfantPrev !== null && enfantPrev !== enfantChoix) {
            document.getElementById('enfantChoisis' + enfantPrev.nom).style.border = "none";
        }

        document.getElementById('enfantChoisis' + enfantChoix.nom).style.border = "1px solid red";
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
                console.log(enfantsPunis);
            }


            setTimeout(() => {
                setShowPopInEnfants(false);
            }, 3500);
            setMessage(message);
        }
    }


    const genererCoeurs = (unEnfant, coeur_plein, coeur_vide) => {

        // faire une copie de tous les enfants
        const coeursTab = [];

        for (let i = 0; i < unEnfant.pvMax; i++) {
            coeursTab.push(coeur_plein);
        }
        if(unEnfant.pv <= unEnfant.pvMax) {
            console.log("on rentre bien");
            const pointsARetirer = unEnfant.pvMax - unEnfant.pv;
            console.log(coeursTab);
            console.log(pointsARetirer);

            for (let j = 0; j < pointsARetirer; j++) {
                // retirer un cœur plein
                const indexCoeurPlein = coeursTab.indexOf(coeur_plein);
                coeursTab.splice(indexCoeurPlein, 1);
              
                // ajouter un cœur vide
                coeursTab.push(coeur_vide);
              }
        }

        return coeursTab;
    };

    // const onClickConsole = (text, vara) => {
    //     console.log(text);
    //     console.log(vara);
    // }

    console.log(enfantsTab);

    return (
        <div id='ficheJoueur'>
            {showPopInEnfants && (
                <Modal setShowModal={setShowPopInEnfants}>
                    {/* il faut que je réupere tous les enfantsChoisis */}
                    {enfantsTab && (
                        <>
                            <p className="title">Sélectionner l'enfant que l'animateur punie</p>
                            {console.log(enfantsTab)}
                            {enfantsTab.map((enfant, i) =>
                                <div key={i} id={'enfantChoisis' + enfant.nom} onClick={() => choixEnfant(enfant)}>
                                    <p>{enfant.nom}</p>
                                    {genererCoeurs(enfant, coeurPleinSrc, coeurVideSrc).map((image, index) => (
                                        <img key={index} src={image} alt="coeur" />
                                    ))}
                                </div>
                            )}
                            {enfantsPunis.length > 0 && (
                                enfantsPunis.map((enfant, i) =>
                                    <div key={i} id={'enfantChoisis' + enfant.nom}>
                                        <p>{enfant.nom} n'est plus jouable</p>
                                        {genererCoeurs(enfant, coeurPleinSrc, coeurVideSrc).map((image, index) => (
                                            <img key={index} src={image} alt="coeur" />
                                        ))}
                                    </div>
                                )
                            )}
                            <button onClick={() => retirerPointDeVie(enfantSelection)}>Valider</button>
                        </>
                    )}
                </Modal>
            )}
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
                    <button className="actions__button" onClick={displayPopIn}>Renvoyez un enfant dans le dortoir</button>
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
