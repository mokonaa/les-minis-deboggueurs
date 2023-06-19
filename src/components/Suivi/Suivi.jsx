import { useState, useEffect } from 'react';
import { data } from '../../data/data';
import FicheJoueur from '../FicheJoueur/FicheJoueur';
import PanelAction from '../PanelAction/PanelAction';


export default function Suivi({ joueursChoisis, animateursChoisis }) { // param -> data passé par Maria 

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

    //let animateursTries = [];
    //const thematiques = data.thematique;
    let animateursTries = animateursChoisis;
    // Il faut récupérer chaque animateur de chaque thématique

    /*
    Object.keys(thematiques).forEach((theme) => {
        const animateurs = thematiques[theme].animateurs;
        animateursTries.push(...animateurs);
    });
    //*/

    // Tri des animateurs par priorité (ordre décroissant)
    animateursTries.sort((a, b) => b.priorite - a.priorite);

    // console.log('----- Animateurs Triés en ordre décroissant -----');
    // console.log(animateursTries);
    // console.log('-------------------------------------------------');

    // Sélection de l'ordre des joueurs selon le nb de joueurs, il faut récupérer cb de joueurs jouent

    //
    //const enfants = data.enfants;
    const enfants = joueursChoisis;

    // fausse data en attendant de recevoir
    const [enfantsChoisis, setEnfantsChoisis] = useState(enfants);
    // Le nb de joueurs choisis
    const nbDeJoueurs = enfants.length;

    const [roleActuel, setRoleActuel] = useState('animateur'); // par défaut animateur, // /!\ L'animateur qui a la plus grosse priorité commence toujours en premier
    // Gestion des manches et des tours (animateur -> enfant -> animateur -> enfant etc...)
    const [nbManches, setNbManches] = useState(1);
    const nbManchesMax = 10;
    const [nbTours, setNbTours] = useState(nbDeJoueurs * 2);
    const [nbTourActuel, setNbTourActuel] = useState(0);

    const deplacerJoueur = (index, nouvelIndex) => {
        const joueursEnfantCopies = [...enfantsChoisis];
        const joueurDeplace = joueursEnfantCopies.splice(index, 1)[0];
        joueursEnfantCopies.splice(nouvelIndex, 0, joueurDeplace);
        setEnfantsChoisis(joueursEnfantCopies);
    };

    const [ordreFinal, setOrdreFinal] = useState([]);

    // Il faut générer un nouvel ordre pour la suite du jeu
    const genererOrdreJoueurs = (ordreJoueursEnfant, animateursTries) => {
        const nouvelOrdre = [];

        const nbJoueurs = ordreJoueursEnfant.length;
        const nbAnimateurs = animateursTries.length;

        // Déterminer le nombre de tours nécessaire pour combiner tous les joueurs
        const nbTours = Math.max(nbJoueurs, nbAnimateurs);

        // Combinaison des joueurs "enfant" et des animateurs en alternance
        for (let i = 0; i < nbTours; i++) {
            const joueurEnfant = ordreJoueursEnfant[i % nbJoueurs]; // modulo % est utilisé pour revenir au début des tableaux lorsque l'index dépasse leur longueur
            const animateur = animateursTries[i % nbAnimateurs];
            nouvelOrdre.push(animateur);
            nouvelOrdre.push(joueurEnfant);
        }
        return nouvelOrdre;
    };

    // nbTours -> correspond au nombre de tours dans une manche
    // nbTourActuel -> c'est le tour actuel de la partie si on est au tour 1 ou tour 2
    const gestionNbTours = () => {
        // Calcul du nombre total de tours en fonction du nombre de joueurs (animateurs et enfants)
        setNbTourActuel(nbTourActuel + 1);
        if (nbTourActuel % 2 === 0) {
            setRoleActuel('animateur');

        } else {
            setRoleActuel('enfant');
        }
        // Vérifie si la manche est terminée après chaque tour
        gestionNbManche();
    };

    const gestionNbManche = () => {
        // Une manche se termine au bout du tours calculés selon le nb de Joueurs calculés plus tôt
        if (nbTourActuel >= nbTours) {
            setNbManches(nbManches + 1); // Passage à la prochaine manche
            setNbTourActuel(1);
            setRoleActuel('animateur');
        }
        if (nbManches > nbManchesMax) {
            setNbTourActuel(0);
            setNbManches(0);
        }
    };


    const joueurActuel = nbTourActuel > 1 ? ordreFinal[nbTourActuel - 1] : animateursChoisis[0];
    // État pour stocker l'ordre des joueurs "enfant"
    const [ordreJoueursEnfant, setOrdreJoueursEnfant] = useState([]);


    const thematiques = data.thematique;
    const nomDuJoueurActuel = joueurActuel.nom ? joueurActuel.nom : animateursChoisis[0].nom;
    const [thematiqueActuel, setThematiqueActuel] = useState('');

    // Récupérer le nom de tous les animateurs et ensuite le comparer au nom du joueur actuel pour récup la bonne thématique
    const recupThematiqueActuel = () => {
        const entriesTab = Object.keys(thematiques).map((key) => thematiques[key]);
        const nomDesAnimateurs = [];

        for (let i = 0; i < entriesTab.length; i++) {
            const animateurs = entriesTab[i].animateurs;
            for (let j = 0; j < animateurs.length; j++) {
                nomDesAnimateurs.push(animateurs[j].nom);
            }
        };

        const animateurTrouve = nomDesAnimateurs.find(
            (nomAnimateur) => nomAnimateur === nomDuJoueurActuel
        );

        if (animateurTrouve) {
            const thematiqueTrouvee = entriesTab.find((thematique) =>
                thematique.animateurs.find((animateur) => animateur.nom === animateurTrouve)
            );

            if (thematiqueTrouvee) {
                const thematique = thematiqueTrouvee.nomThematique;
                if (thematique !== thematiqueActuel) {
                    setThematiqueActuel(thematique);
                }
            }
        }
    };
    console.log(thematiqueActuel);

    recupThematiqueActuel();

    // Fonction pour gérer la sélection de l'ordre des joueurs "enfant"
    // Il faut que je teste et que j'affiche "les enfants" qui jouent 
    const selectionnerOrdreJoueursEnfant = (selectionOrdreJoueurs) => {
        setOrdreJoueursEnfant(selectionOrdreJoueurs);
    };
    const [afficherSelection, setSelection] = useState(true); // Variable d'état pour afficher/cacher la div d'ordre

    const validerOrdre = () => {
        selectionnerOrdreJoueursEnfant(enfantsChoisis);
        // A partir d'ici on récupère l'ordre que les enfants ont choisis
        setOrdreJoueursEnfant(enfantsChoisis);
        setOrdreFinal(genererOrdreJoueurs(enfantsChoisis, animateursTries));
        setSelection(false);
        setNbTourActuel(nbTourActuel + 1);
    };



    useEffect(() => {
        // console.log(joueursChoisis);
        // console.log(animateursChoisis);
    }, [joueursChoisis])


    // Il faut aussi penser à chaque déplacement, panel d'actions dont un seul qui est réellement intéractif (les questions)
    // Bouton Tour terminé selon cliquable dès qu'ils ont fait au moins toutes les actions qu'ils peuvent faire
    return (
        <>
            <div>
                <h3>{nbManches}e Manche - {nbTourActuel}e Tour - role actuel : {roleActuel}</h3>
                {nbTourActuel === 0 && afficherSelection &&
                    <div>
                        <h2>l'ordre des enfants</h2>
                        <ul>
                            {enfantsChoisis.map((enfant, index) => (
                                <li key={enfant.id}>
                                    {enfant.nom}
                                    <button onClick={() => deplacerJoueur(index, index - 1)}>▲</button>
                                    <button onClick={() => deplacerJoueur(index, index + 1)}>▼</button>
                                </li>
                            ))}
                        </ul>
                        <button onClick={validerOrdre}>Valider l'ordre</button>
                    </div>
                } 
                {!afficherSelection &&  (
                    <div>
                        {roleActuel === 'enfant' ?
                            <>
                                <FicheJoueur nbDeplacements={joueurActuel.deplacement} pouvoir={joueurActuel.pouvoir} nom={joueurActuel.nom} nbVie={joueurActuel.pv} description={joueurActuel.description} nomThematique={thematiqueActuel} maudit={""} objectif={""} role={roleActuel} img={joueurActuel.image} />
                                <PanelAction animateurs={animateursTries} />
                            </>
                            :
                            roleActuel === 'animateur' && (
                                <>
                                    <FicheJoueur nbDeplacements={joueurActuel.deplacement} pouvoir="" nom={joueurActuel.nom}
                                        nbVie={joueurActuel.objectifs.animateurs.points ? 0 : 5 - joueurActuel.objectifs.animateurs.points}
                                        description={joueurActuel.description} maudit={joueurActuel.maudit}
                                        objectif={joueurActuel.objectifs.enfants.points ? joueurActuel.objectifs.enfants.points : 0} role={roleActuel} img={joueurActuel.image} nomThematique={thematiqueActuel} objectifImg={joueurActuel.objectifs.animateurs.img} joueurApres={ordreFinal[nbTourActuel]}/>
                                    <PanelAction animateurs={animateursTries} />
                                </>
                            )
                        }
                        <button onClick={gestionNbTours}>Passer au prochain tour</button>
                    </div>
                )}
            </div>

        </>
    )
}