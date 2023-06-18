import Configuration from '../Configuration/Configuration';
import { useState, useRef,useEffect } from 'react';
import AnimationPartie from '../AnimationPartie/AnimationPartie';

export default function Partie() {

  const [tabEnfantsChoisis, setTabEnfantsChoisis] = useState([]);
  const [tabAnimateursChoisis, setTabAnimateursChoisis] = useState([]);


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