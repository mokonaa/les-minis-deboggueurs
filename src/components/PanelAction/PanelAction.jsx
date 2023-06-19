import { useState } from "react";
import Modal from "../Modal/Modal";

export default function PanelAction({animateurs,thematiques}) {

    console.log(animateurs);
    const [showPopInQuestion,setShowPopInQuestion] = useState(false);
    const [animateursQuestionsInfos,setAnimateursQuestionsInfos] = useState([]);
    const [questionQuizz,setQuestionQuizz] = useState({});
    const [bonneReponse, setBonneReponse] = useState(2); // bon (1) mauvais (0) 
    const [displayQuestionView, setDisplayQuestionView] = useState(false); 
    let tabReponseJoueurs = [];

    const displayPopIn = () => {
        console.log('display pop in ');
        setShowPopInQuestion(true);
        console.log(showPopInQuestion);
    }

    const reinit = () => {
        setDisplayQuestionView(false);
        setAnimateursQuestionsInfos([]);
        setQuestionQuizz({});
        setBonneReponse(2);
    }

    const displayQuestion = (nomThematique) => {
        console.log(nomThematique);
        console.log(thematiques);
        console.log(thematiques[nomThematique]);
        setAnimateursQuestionsInfos(thematiques[nomThematique]);
        let randomNumber = Math.floor(Math.random() * (thematiques[nomThematique].questions.length - 0) + 0)
        console.log(randomNumber);
        console.log(thematiques[nomThematique].questions[randomNumber]);
        setQuestionQuizz(thematiques[nomThematique].questions[randomNumber]);
    }

    const ajoutReponse = (index) => {
        if (!tabReponseJoueurs.includes(index)) {
            tabReponseJoueurs.push(index);
        }
        else {
            console.log('already added');
        }
    }

    const verifieReponse = () => {
 
        console.log(tabReponseJoueurs);
        console.log(questionQuizz);
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
                                {animateurs.map(animateur => <div className="animateurInfos" onClick={() => displayQuestion(animateur.nomThematique)}>{animateur.nom}</div>)}
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
                                 (<div className="listReponses">{questionQuizz.choix.multiples.map((choix,i) => <p id={"reponse"+i} onClick={() => ajoutReponse(i)}>{choix}</p>)}</div>)
                                 :
                                 (<div className="listReponses">{questionQuizz.choix.map((choix,i) => <p id={"reponse"+i} onClick={() => ajoutReponse(i)}>{choix}</p>)}</div>)

                            }
                            <button className="buttonConfirmer" id="validBtn" onClick={() => verifieReponse()}>Valider</button>
                        </div>

                        {/* BONNE REPONSE */}
                        {bonneReponse === 1 && (
                            <div>
                                <p>Bravo ! Tu peux récupérer un point</p>
                                <p>Pour plus d’informations n’hésite pas à aller dans la galerie pour trouver des ressources</p>
                                {/*<!--<button className="buttonConfirmer" >Fermer</button>-->*/}
                                </div>
                        )}

                        {/* MAUVAISE REPONSE */}
                        {bonneReponse === 0 && (
                            <div>
                                <p>Mince, pas de point pour cette fois</p>
                                <p>Pour plus d’informations n’hésite pas à aller dans la galerie pour trouver des ressources</p>
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