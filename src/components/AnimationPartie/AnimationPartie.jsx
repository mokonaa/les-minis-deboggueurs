import { useState } from 'react';
import { data } from '../../data/fake-data'

export default function AnimationPartie({ nbDeJoueursChoisis }) { // param -> data passé par Maria 

    /**
     * 
     * params : tableau des animateurs trié , tableau des enfants choisies
     * 
     * Conditions d'affichage de vues 
     *  - Affichage des infos de l'animateur
     *  - Affichage statique Tours joueurs  - Jet de dés + gestion de l'ordre des joueurs
     *  - Switch entre l'affichage Joueur et affichage Animateur (prise en compte des priorités des animateurs et de l'ordre des enfants)
     *  - Affichage statique -> Manche terminée + Btn Commencer la nouvelle manche
    */

    // Récupération de la data via Configuration, pour le moment création d'une fake data en triant les animateurs selon leur ordre

    let animateursTries = [];
    const thematiques = data.thematique;
    // Il faut récupérer chaque animateur de chaque thématique
    Object.keys(thematiques).forEach((theme) => {
        const animateurs = thematiques[theme].animateurs;
        animateursTries.push(...animateurs);
    });

    // Tri des animateurs par priorité (ordre décroissant)
    animateursTries.sort((a, b) => a.priorite + b.priorite);
    console.log('----- Animateurs Triés en ordre décroissant -----');
    console.log(animateursTries);
    console.log('-------------------------------------------------');

    // Sélection de l'ordre des joueurs selon le nb de joueurs, il faut récupérer cb de joueurs jouent

    const enfants = data.enfants;

    // fausse data en attendant de recevoir
    const enfantsChoisis = enfants;
    // Le nb de joueurs choisis
    const nbDeJoueurs = enfants.length;

    // Gestion des manches et des tours (animateur -> enfant -> animateur -> enfant etc...)
    const [nbManches, setNbManches] = useState(1);
    const [nbTours, setNbTours] = useState(1);
    const [nbTourActuel, setNbTourActuel] = useState(1);

    // nbTours -> correspond au nombre de tours dans une manche
    // nbTourActuel -> c'est le tour actuel de la partie si on est au tour 1 ou tour 2
    const gestionNbTours = () => {
        // Calcul du nombre total de tours en fonction du nombre de joueurs (animateurs et enfants)
        setNbTours(nbDeJoueurs * 2);
        setNbTourActuel(nbTourActuel + 1);

        // Vérifie si la manche est terminée après chaque tour
        gestionNbManche();
    };

    const gestionNbManche = () => {
        // Une manche se termine au bout d'un certain nombre de tours (par exemple, 8 tours)
        if (nbTourActuel >= nbTours) {
            setNbManches(nbManches + 1); // Passage à la prochaine manche
            setNbTourActuel(1);
        }
    };

    // const [joueurActuel, setJoueurActuel] = useState('animateur'); // par défaut animateur, // /!\ L'animateur qui a la plus grosse priorité commence toujours en premier
    // const handleNextTurn = () => {
    //     // Changer le tour en fonction du joueur actuel
    //     if (joueurActuel === 'animateur') {
    //         setJoueurActuel('enfant');
    //     } else {
    //         setJoueurActuel('animateur');
    //     }
    // };


    // Il faut aussi penser à chaque déplacement, panel d'actions dont un seul qui est réellement intéractif (les questions)
    // Bouton Tour terminé selon cliquable dès qu'ils ont fait au moins toutes les actions qu'ils peuvent faire

    return (
        <>
            <div>
                <h3>{nbManches}e Manche - {nbTourActuel}e Tour</h3>

                <button onClick={gestionNbTours}>Passer au prochain tour</button>
            </div>

        </>
    )
}