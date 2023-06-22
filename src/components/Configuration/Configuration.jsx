import { data } from '../../data/data';
import { useState, useRef } from 'react';
import de from '../../assets/img/de.svg';
import stalkyProfil from '../../assets/img/perso-stalky.svg';
import choisiIcon from '../../assets/img/persoValide.svg';
import icon2 from '../../assets/img/2_joueurs.svg';
import icon3 from '../../assets/img/3_joueurs.svg';
import icon4 from '../../assets/img/4_joueurs.svg';


export default function Configuration({joueursChoisis,setJoueursChoisis, animateursChoisis, setAnimateursChoisis,setAffichageSuiviComponent}) {

    let listJoueurs = data.enfants;
    let listAnimateurs = [];
    let thematique = data.thematique;
    let [tabJoueursChoisis, setTabJoueursChoisis] = useState([]);
    let [tabAnimateursChoisis, setTabAnimateursChoisis] = useState([]);
    let [etapesConfiguration, setEtapesConfiguration] = useState(0);
    let [nbJoueursChoisi, setNbJoueursChoisi] = useState(0);
    const nbjoueursTab = [2, 3, 4];

    // recup de la liste des animateurs 
   for (const property in thematique) {
        let listAnimateurParThematique = thematique[property].animateurs;
        for (const index in listAnimateurParThematique) {
            listAnimateurs.push(listAnimateurParThematique[index]);
        }
   }

    const choisirNombreJoueur = (nbJoueur) => {
        setNbJoueursChoisi(nbJoueur);
        tabJoueursChoisis = [];
        document.getElementById('joueurTotal_'+nbJoueur).style.backgroundColor = "#4fab78";
        // changer le numéro de l'étape de la config 0 -> 1
        setEtapesConfiguration(1);
    }

    const choixJoueur = (joueur) => {
        if (tabJoueursChoisis.length < (nbJoueursChoisi)) {
            //console.log(joueur);
            tabJoueursChoisis.push(joueur.enfant);
            document.getElementById('profileOpacity_'+joueur.enfant.nom).classList.add('ajoutBackgroundChoisi');
            document.getElementById('profileChecked_'+joueur.enfant.nom).style.display = 'block';

        }
        else {
            console.log('cannot add more players');
        }
    }


    const choixAnimateur = (animateur) => {
        if (tabAnimateursChoisis.length < (nbJoueursChoisi)) {
            tabAnimateursChoisis.push(animateur.animateur);
            document.getElementById('profileOpacity_'+animateur.animateur.nom).classList.add('ajoutBackgroundChoisi');
            document.getElementById('profileChecked_'+animateur.animateur.nom).style.display = 'block';

        }
        else {
            console.log('cannot add more animateurs');
        }
         //console.log(tabAnimateursChoisis);
        // console.log('joueurs choisis : '+tabJoueursChoisis.length);
    }

    const changerEtapeConfiguration = (etape) => {
        
        if (((etape-1) === 1 && tabJoueursChoisis.length === (nbJoueursChoisi)) || ((etape-1) === 2 && tabAnimateursChoisis.length === (nbJoueursChoisi)) ) {
            setEtapesConfiguration(etape);
        }
    }

    const changeViewToAnimationComponent = () => {
        setJoueursChoisis(tabJoueursChoisis);
        setAnimateursChoisis(tabAnimateursChoisis);
        setAffichageSuiviComponent(true);
    }

    return (
        <div id="configurationContainer">
            <div>           
              {/* CHOIX DU NOMBRE DE JOUEURS */}
              { etapesConfiguration === 0 && (
                    <div id='choixNombreJoueur'>
                        <p className='cta-text align-center'>Combien de personnes jouent ? </p>
                        <div>
                            <button id='joueurTotal_2' onClick={() => choisirNombreJoueur(2)}>
                                <div className='joueursPicto'>
                                    <img src={icon2} alt='pictogramme représentant le nombre de deux joueurs'/>
                                </div>
                                <p className='body2'>2</p>
                            </button>
                            <button id='joueurTotal_3' onClick={() => choisirNombreJoueur(3)}>
                                <div className='joueursPicto'>
                                    <img src={icon3} alt='pictogramme représentant le nombre de trois joueurs'/>
                                </div>
                                <p className='body2'>3</p>
                            </button>
                            <button id='joueurTotal_4' onClick={() => choisirNombreJoueur(4)}>
                                <div className='joueursPicto'>
                                    <img src={icon4} alt='pictogramme représentant le nombre de quatre joueurs'/>
                                </div>
                                <p className='body2'>4</p>
                            </button>

                            {/*
                                {nbjoueursTab.map(nbJoueur =>   
                                    <button id={'joueurTotal_'+nbJoueur} onClick={() => choisirNombreJoueur(nbJoueur)}>
                                        
                                        {nbJoueur}
                                    </button>
                                )}
                            */}
                        </div>
                        
                    </div>
               )}

              {/* CHOIX DES JOUEURS */}
              { etapesConfiguration === 1 && (
                        <div>
                            <div id='joueursEnfants'>
                                    <p className='cta-text align-center'>Quels joueurs jouent ?</p>
                                    <div className='joueursEnfants_list'>
                                        {listJoueurs.map(enfant =>
                                         <div className='enfantInfos' id= {'joueur_'+enfant.nom} onClick={() => choixJoueur({enfant})} >
                                            <div className='profil'>
                                                <div className='profil_containerImg'>
                                                    <div className='profileOpacity' id={'profileOpacity_'+enfant.nom}></div>
                                                    <div className='profileChecked' id={'profileChecked_'+enfant.nom}>
                                                        <img src={choisiIcon}/>
                                                    </div>
                                                    <img className='profil_photo' src={stalkyProfil} />
                                                </div>
                                            </div>
                                            <p className='persoNom'>{enfant.nom}</p>
                                        </div>)}
                                    </div>                            
                            </div>
                            <div className='validation'>
                                <button className='buttonChoixPerso' onClick={() => changerEtapeConfiguration(2)}>Continuer</button>
                            </div>
                    
                        </div>
               )}

              {/* CHOIX DES ANIMATEURS */}
              { etapesConfiguration === 2 && (
                    <>
                        <div id='animateurs'>
                                <p className='cta-text align-center'>Quels animateurs jouent ?</p>
                                <div className='animateurs_list'>
                                         {listAnimateurs.map(animateur =>
                                            <div className='animateurInfos' id= {'animateur_'+animateur.nom} onClick={() => choixAnimateur({animateur})} >
                                                <div className='profil'>
                                                    <div className='profil_containerImg'>
                                                        <div className='profileOpacity' id={'profileOpacity_'+animateur.nom}></div>
                                                        <div className='profileChecked' id={'profileChecked_'+animateur.nom}><img src={choisiIcon}/></div>
                                                        <img className='profil_photo' src={stalkyProfil} />
                                                    </div>
                                                </div>
                                                <p className='persoNom'>{animateur.nom}</p>
                                            </div>
                                         )}
                                </div>
                        </div>
                        <div className='validation'>
                            <button className='buttonChoixPerso' onClick={() => changerEtapeConfiguration(3)}>Débuter la partie</button>
                        </div>
                    </>
              )}


              {/* INSTALL DU PLATEAU DE JEU  */}
              { etapesConfiguration === 3 && (
                <>
                    <div id='installationPlateau'>
                        <h3>DÉBUT DU TOUR</h3>
                        <img src={de} />
                        <ul className='listEtapes'>
                            <li>
                                <div className='etapeImg'>1</div> 
                                <p className='body2'>Lancez vos dés tous ensembles</p>
                            </li>
                            <li>
                                <div className='etapeImg'>2</div> 
                                <p className='body2'> Puis regroupez les dans la "réserve de dés"</p>
                            </li>
                        </ul>
                    </div>
                    <button className='buttonChoixPerso' onClick={() => changeViewToAnimationComponent()} >Continuer</button>
                </>
              )}
            </div>
        </div>
    )
}

