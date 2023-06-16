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

    let animateursTab = [];
    const animateurs = [data.thematique.addiction.animateurs, data.thematique.cyber_harcelement.animateurs, data.thematique.fake_news.animateurs, data.thematique.securite.animateurs].map((animateurObject) => animateurObject.map((animateur) => animateursTab.push(animateur)));

    // Taux de priorité
    let animateursTries = animateurs.map((animateur, i) => console.log(animateursTab[i].priorite))


    // console.log(animateursTries);
    
    // animateurs.map((animateurObject) => animateurObject.map((animateur) => console.log(animateur)));
    // let numeroManche = 1; 

    return (
        <>
            <div>
            </div>
        </>
    )
}