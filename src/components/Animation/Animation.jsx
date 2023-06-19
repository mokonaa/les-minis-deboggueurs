import Configuration from "../Configuration/Configuration";
import { useState, useEffect } from "react";

export default function Animation({joueursChoisis,animateursChoisis}) { // param -> data passé par Maria 

    /**
     * 
     * params : tableau des animateurs trié , tableau des enfants choisies
     * 
     * Conditions d'affichage de vues 
     *  - Affichage des infos de l'animateur
     *  - Affichage statique Tours joueurs  - Jet de dés + geestin de l'ordre des joueurs
     *  - Switch entre l'affichage Joueur et affichage Animateur (prise en compte des priorités des animateurs et de l'ordre des enfants)
     *  - Affichage statique -> Manche terminée + Btn Commencer la nouvelle manche
    */

    useEffect(() => {
        console.log(joueursChoisis);
        console.log(animateursChoisis);
    }, [joueursChoisis])

    let numeroManche = 1; 
    return (
        <>
            <div>
                Animation
            </div>
        </>
    )
}