import Configuration from '../Configuration/Configuration';
import { useState, useRef,useEffect } from 'react';
import AnimationPartie from '../AnimationPartie/AnimationPartie';

export default function Partie() {

  const [tabEnfantsChoisis, setTabEnfantsChoisis] = useState([]);
  const [tabAnimateursChoisis, setTabAnimateursChoisis] = useState([]);

<<<<<<< HEAD

=======
    const choisirJoueur = () => {
        // console.log('im here');
        // console.log(data);
    }

    // console.log(joueurs);
    // joueurs.map(enfant => console.log(enfant));
    //choisirJoueur();
>>>>>>> d14ace8 ((feat:) code optimisé et trié en ordre décroissant)

    useEffect(() => {
      console.log(tabEnfantsChoisis);
      console.log(tabAnimateursChoisis);
    });
    // TODO envoyer param enfantPreChoisiConfig (sous forme de tableaux d'objets)
    // TODO gestion des affichages (affichers d'abord component config puis animation)
 
    
    return (
          <div>
                <Configuration  joueursChoisis={tabEnfantsChoisis} setJoueursChoisis={setTabEnfantsChoisis} animateursChoisis ={tabAnimateursChoisis} setAnimateursChoisis={setTabAnimateursChoisis}/>
                <AnimationPartie joueursChoisis={tabEnfantsChoisis} animateursChoisis ={tabAnimateursChoisis}/>
          </div>
  )
}