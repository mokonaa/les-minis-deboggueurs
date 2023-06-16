import AnimationPartie from "../Suivi/Suivi";

import { data } from '../../data/data';

export default function Configuration() {

    let listJoueurs = data.enfants;
    let listAnimateurs = [];
    let thematique = data.thematique;
    let nbJoueursChoisi = 0;
    let tabJoueursChoisis = [];
    let tabAnimateursChoisis = [];

    // recup de la liste des animateurs 
   for (const property in thematique) {
        let listAnimateurParThematique = thematique[property].animateurs;
        for (const index in listAnimateurParThematique) {
            listAnimateurs.push(listAnimateurParThematique[index]);
        }
   }
   console.log(listAnimateurs);

    const choisirNombreJoueur = (nbJoueur) => {
        nbJoueursChoisi = nbJoueur; 
        //console.log('nb joueur total : '+nbJoueursChoisi);
        tabJoueursChoisis = [];
        console.log(document.getElementsByTagName('button'));
        document.getElementById('joueurTotal_'+nbJoueur).style.backgroundColor = "#4fab78";
    }

    const choixJoueur = (joueur) => {
        if (tabJoueursChoisis.length < (nbJoueursChoisi)) {
            console.log(joueur);
            tabJoueursChoisis.push(joueur.enfant);
            document.getElementById('joueur_'+joueur.enfant.nom).style.backgroundColor = '#e46444';
        }
        else {
            console.log('cannot add more players');
        }
        // console.log(tabJoueursChoisis);
        // console.log('joueurs choisis : '+tabJoueursChoisis.length);
    }


    const choixAnimateur = (animateur) => {
        if (tabAnimateursChoisis.length < (nbJoueursChoisi)) {
            tabAnimateursChoisis.push(animateur.animateur);
            document.getElementById('animateur_'+animateur.animateur.nom).style.backgroundColor = '#e46444';
        }
        else {
            console.log('cannot add more animateurs');
        }
         console.log(tabJoueursChoisis);
         console.log(tabAnimateursChoisis);
        // console.log('joueurs choisis : '+tabJoueursChoisis.length);
    }

    return (
        <>
            <div>
                Configuration
              <div>
                <p>Combien de personnes jouent ? </p>
                <button id='joueurTotal_2' onClick={() => choisirNombreJoueur(2)}>2</button>
                <button id='joueurTotal_3' onClick={() => choisirNombreJoueur(3)}>3</button>
                <button id='joueurTotal_4' onClick={() => choisirNombreJoueur(4)}>4</button>
              </div>

              <div id='listJoueursEnfants'>
                     <p>Quels joueurs jouent ?</p>
                    {listJoueurs.map(enfant => <div className='enfantInfos' id= {'joueur_'+enfant.nom} onClick={() => choixJoueur({enfant})} >{enfant.nom}</div>)}
              </div>

              <div id='listAnimateurs'>
                    <p>Quels animateurs jouent ?</p>
                    {listAnimateurs.map(animateur => <div className='animateurInfos' id= {'animateur_'+animateur.nom} onClick={() => choixAnimateur({animateur})} >{animateur.nom}</div>)}
              </div>
            </div>
        </>
    )
}