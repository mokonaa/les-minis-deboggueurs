import { useState } from "react";
import Modal from "../Modal/Modal";
import stalkyProfil from '../../assets/img/perso-stalky.svg';
import choisiIcon from '../../assets/img/persoValide.svg';

export default function PanelAction({animateurs,thematiques}) {

    const [showPopInQuestion,setShowPopInQuestion] = useState(false);
    const [animateursQuestionsInfos,setAnimateursQuestionsInfos] = useState([]);
    const [questionQuizz,setQuestionQuizz] = useState({});
    const [bonneReponse, setBonneReponse] = useState(2); // bon (1) mauvais (0) 
    const [displayQuestionView, setDisplayQuestionView] = useState(false); 
    let tabReponseJoueurs = [];

    const displayPopIn = () => {
        setShowPopInQuestion(true);
        //console.log(showPopInQuestion);
    }

    const reinit = () => {
        setDisplayQuestionView(false);
        setAnimateursQuestionsInfos([]);
        setQuestionQuizz({});
        setBonneReponse(2);
    }

    const displayQuestion = (nomThematique) => {

        setAnimateursQuestionsInfos(thematiques[nomThematique]);
        let randomNumber = Math.floor(Math.random() * (thematiques[nomThematique].questions.length - 0) + 0)
        setQuestionQuizz(thematiques[nomThematique].questions[randomNumber]);

        let containersAnimateurs = document.getElementsByClassName('animateurInfos');
        // retrait de l'icon checked partout
        let containersprofileOpacity = document.getElementsByClassName('profileOpacity');
        let containersprofileChecked = document.getElementsByClassName('profileChecked');
        for (let k = 0; k<containersprofileOpacity.length; k++) {
            containersprofileOpacity[k].classList.remove('ajoutBackgroundChoisi');
            containersprofileChecked[k].style.display = 'none';
        }

        for (let i=0; i<containersAnimateurs.length; i++) {
            //console.log(containersAnimateurs[i]);
            containersAnimateurs[i].style.background = "white";
            containersAnimateurs[i].style.color = "black";

            //console.log(containersAnimateurs[i].id);
            if (containersAnimateurs[i].id == "animateur_"+nomThematique) {
                document.getElementById('profileOpacity_'+nomThematique).classList.add('ajoutBackgroundChoisi');
                document.getElementById('profileChecked_'+nomThematique).style.display = 'block';
            }
        }
    }

    const ajoutReponse = (index) => {
        if (!tabReponseJoueurs.includes(index)) {
            tabReponseJoueurs.push(index);
            let reponseContainer = document.getElementById('reponse'+index);
            reponseContainer.style.background = '#e375a3';
            reponseContainer.style.color = 'white';
        }
        else {
            console.log('already added');
        }
    }

    const verifieReponse = () => {
 
        //console.log(tabReponseJoueurs);
        //console.log(questionQuizz);
        if (!Array.isArray(questionQuizz.bonne_reponse)) { // unique bonne réponse
            if (tabReponseJoueurs.length == 1 &&  questionQuizz.bonne_reponse == tabReponseJoueurs[0]) { // cocher qu"une case et c'est la bonne réponse
                setBonneReponse(1);
                console.log('gagné');
            }
            else {
                setBonneReponse(0);
                console.log('non gagné');
            }
        }
        else {
                console.log('mchoice');
                tabReponseJoueurs = tabReponseJoueurs.sort();
                console.log(tabReponseJoueurs);
                console.log(questionQuizz.bonne_reponse);

                if (tabReponseJoueurs.sort().toString() == questionQuizz.bonne_reponse.sort().toString()) {
                    console.log('gagné multiple choices');
                    setBonneReponse(1);
                }
                else {
                    setBonneReponse(0);
                    console.log('non multiple choices');
                }
        }

        document.getElementById('validBtn').style.display = 'none';
        // TODO boucler et n'affichez que les réponses choisies par le joueur
        let reponses = document.getElementsByClassName('reponses');

        for (let i=0; i<reponses.length; i++) {
            reponses[i].style.background = '#e06f4d';
            reponses[i].style.color = 'white';
        }

        if (Array.isArray(questionQuizz.bonne_reponse)) {
            for (let i=0; i<questionQuizz.bonne_reponse.length; i++) {
                console.log(questionQuizz.bonne_reponse[i]);
                document.getElementById('reponse'+questionQuizz.bonne_reponse[i]).style.background = '#4fab78';
            }
        }
        else {
            console.log(document.getElementById('reponse'+questionQuizz.bonne_reponse[0]));
            console.log(questionQuizz.bonne_reponse);
            document.getElementById('reponse'+questionQuizz.bonne_reponse).style.background = '#4fab78';
            document.getElementById('reponse'+questionQuizz.bonne_reponse).style.color = 'white';
        }
    

        // TODO CSS
    }

    return (
        <div id="panelActions">
            <div>
                {/* <div>Peut relancer un dé par tour</div> */}
                <button onClick={() => displayPopIn()}>Question Quizz</button>
                {/* <div>Acces après avoir débloquer la cave</div> */}
            </div>

            {showPopInQuestion &&
                <Modal setShowModal={setShowPopInQuestion}>

                    {!displayQuestionView && (
                        <div id="choixAnimateur">
                            <p className="subTitle">CHOISSISEZ L'ANIMATEUR QUE VOUS SOUHAITEZ GUÉRIR</p>
                            <p className="remarque">À noter que la question quizz n’est disponible que lors de la récupération d‘un point </p>

                            <div className="listAnimateurChoisis">
                                {animateurs.map(animateur =>
                                        <div className='animateurInfos' id= {'animateur_'+animateur.nomThematique} onClick={() => displayQuestion(animateur.nomThematique)} >
                                            <div className='profil'>
                                                <div className='profil_containerImg'>
                                                    <div className='profileOpacity' id={'profileOpacity_'+animateur.nomThematique}></div>
                                                    <div className='profileChecked' id={'profileChecked_'+animateur.nomThematique}><img src={choisiIcon}/></div>
                                                    <img src={stalkyProfil} />
                                                </div>
                                            </div>
                                            <p className='persoNom'>{animateur.nom}</p>
                                        </div>
                                )}
                            </div>

                            <button className="buttonConfirmer"  onClick={() => questionQuizz.choix !== undefined ? setDisplayQuestionView(true) : console.log('nothing to display')}>Super !</button>
                        </div>
                   )}

                    {displayQuestionView && (
                        <div id="questionQuizz">
                            <p className="subTitle">QUESTION QUIZZ</p>
                            <p className="nomThematique">{animateursQuestionsInfos.nomThematique}</p>
                            
                            <div>
                                <p className="questionTitre">{questionQuizz.titre}</p>
                                {questionQuizz.choix.multiples ?
                                    (<div className="listReponses">{questionQuizz.choix.multiples.map((choix,i) => <p  className="reponses" id={"reponse"+i} onClick={() => ajoutReponse(i)}>{choix}</p>)}</div>)
                                    :
                                    (<div className="listReponses">{questionQuizz.choix.map((choix,i) => <p className="reponses"  id={"reponse"+i} onClick={() => ajoutReponse(i)}>{choix}</p>)}</div>)

                                }
                                <button className="buttonConfirmer" id="validBtn" onClick={() => verifieReponse()}>Valider</button>
                            </div>

                            {/* BONNE REPONSE */}
                            {bonneReponse === 1 && (
                                <div className="resultsContainer" id="resultsContainer_bon">
                                    <p className="result">Bravo ! Tu peux récupérer un point</p>
                                    <p className="infos">Pour plus d’informations n’hésite pas à aller dans la galerie pour trouver des ressources</p>
                                    {/*<!--<button className="buttonConfirmer" >Fermer</button>-->*/}
                                </div>
                            )}

                            {/* MAUVAISE REPONSE */}
                            {bonneReponse === 0 && (
                                <div className="resultsContainer" id="resultsContainer_mauvais">
                                    <p className="result">Mince, pas de point pour cette fois</p>
                                    <p className="infos">Pour plus d’informations n’hésite pas à aller dans la galerie pour trouver des ressources</p>
                                    {/*<!--<button className="buttonConfirmer" >Fermer</button>-->*/}
                                </div>
                            )}
                        
                    </div>
                    )
                    }
                </Modal>
            }
        </div>
    )
}