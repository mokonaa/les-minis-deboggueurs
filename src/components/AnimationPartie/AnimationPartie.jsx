import { data } from '../../data/fake-data'

export default function AnimationPartie() { // param -> data passé par Maria 

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
    console.log(animateursTries);


    return (
        <>
            <div>
            </div>
        </>
    )
}