import { data } from '../../data/data';
import { useState, useRef } from 'react';

export default function Configuration({joueursChoisis,setJoueursChoisis, animateursChoisis, setAnimateursChoisis,setAffichageSuiviComponent}) {

    let listJoueurs = data.enfants;
    let listAnimateurs = [];
    let thematique = data.thematique;
    //let tabJoueursChoisis = [];
    //let tabAnimateursChoisis = [];
    let [tabJoueursChoisis, setTabJoueursChoisis] = useState([]);
    let [tabAnimateursChoisis, setTabAnimateursChoisis] = useState([]);
    let [etapesConfiguration, setEtapesConfiguration] = useState(0);
    let [nbJoueursChoisi, setNbJoueursChoisi] = useState(0);

    // recup de la liste des animateurs 
   for (const property in thematique) {
        let listAnimateurParThematique = thematique[property].animateurs;
        for (const index in listAnimateurParThematique) {
            listAnimateurs.push(listAnimateurParThematique[index]);
        }
   }

    const choisirNombreJoueur = (nbJoueur) => {
        //nbJoueursChoisi = nbJoueur; 
        setNbJoueursChoisi(nbJoueur);
        //console.log('nb joueur total : '+nbJoueursChoisi);
        tabJoueursChoisis = [];
        //console.log(document.getElementsByTagName('button'));
        document.getElementById('joueurTotal_'+nbJoueur).style.backgroundColor = "#4fab78";
        // changer le numéro de l'étape de la config 0 -> 1
        setEtapesConfiguration(1);
    }

    const choixJoueur = (joueur) => {
        if (tabJoueursChoisis.length < (nbJoueursChoisi)) {
            //console.log(joueur);
            tabJoueursChoisis.push(joueur.enfant);
            document.getElementById('joueur_'+joueur.enfant.nom).style.backgroundColor = '#e46444';
        }
        else {
            console.log('cannot add more players');
        }
        //console.log(tabJoueursChoisis);
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
         console.log(tabAnimateursChoisis);
        // console.log('joueurs choisis : '+tabJoueursChoisis.length);
    }

    const changerEtapeConfiguration = (etape) => {
      setEtapesConfiguration(etape);
    }

    const changeViewToAnimationComponent = () => {
        setJoueursChoisis(tabJoueursChoisis);
        setAnimateursChoisis(tabAnimateursChoisis);
        setAffichageSuiviComponent(true);
        console.log(joueursChoisis);
        console.log(animateursChoisis);
    }

    return (
        <div id="configurationContainer">
            <div>           
              {/* CHOIX DU NOMBRE DE JOUEURS */}
              { etapesConfiguration === 0 && (
                    <div id='choixNombreJoueur'>
                        <p className='subTitle'>Combien de personnes jouent ? </p>
                        <div>
                            <button id='joueurTotal_2' onClick={() => choisirNombreJoueur(2)}>2</button>
                            <button id='joueurTotal_3' onClick={() => choisirNombreJoueur(3)}>3</button>
                            <button id='joueurTotal_4' onClick={() => choisirNombreJoueur(4)}>4</button>
                        </div>
                    </div>
               )}

              {/* CHOIX DES JOUEURS */}
              { etapesConfiguration === 1 && (
                        <div>
                            <div id='joueursEnfants'>
                                    <p className='subTitle'>Quels joueurs jouent ?</p>
                                    <div className='joueursEnfants_list'>{listJoueurs.map(enfant => <div className='enfantInfos' id= {'joueur_'+enfant.nom} onClick={() => choixJoueur({enfant})} >{enfant.nom}</div>)}</div>                            
                            </div>
                            <button className='buttonChoixPerso'  onClick={() => changerEtapeConfiguration(2)}>Continuer</button>
                    
                        </div>
               )}

              {/* CHOIX DES ANIMATEURS */}
              { etapesConfiguration === 2 && (
                    <>
                        <div id='animateurs'>
                                <p className='subTitle'>Quels animateurs jouent ?</p>
                                <div className='animateurs_list'>{listAnimateurs.map(animateur => <div className='animateurInfos' id= {'animateur_'+animateur.nom} onClick={() => choixAnimateur({animateur})} >{animateur.nom}</div>)}</div>
                        </div>
                        <button className='buttonChoixPerso'  onClick={() => changerEtapeConfiguration(3)}>Débuter la partie</button>
                    </>
              )}


              {/* INSTALL DU PLATEAU DE JEU  */}
              { etapesConfiguration === 3 && (
                <>
                    <div id='installationPlateau'>
                        <p className='subTitle'>Installez le plateau</p>
                        <ul>
                            <li>1 - Déposez les cartes quizz dans l'emplacement prévue </li>
                            <li>2 - Faire  </li>
                        </ul>
                    </div>
                    <button className='buttonChoixPerso' onClick={() => changeViewToAnimationComponent()} >C'est fait !</button>
                </>
              )}
            </div>
        </div>
    )
}