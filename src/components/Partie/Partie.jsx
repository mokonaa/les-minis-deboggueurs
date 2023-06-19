import Configuration from '../Configuration/Configuration';
import { useState, useRef,useEffect } from 'react';
import Suivi from '../Suivi/Suivi';

export default function Partie() {

  const [tabEnfantsChoisis, setTabEnfantsChoisis] = useState([]);
  const [tabAnimateursChoisis, setTabAnimateursChoisis] = useState([]);
  const [displaySuiviComponent, setDisplaySuiviComponent] = useState(false);

    useEffect(() => {
      console.log(tabEnfantsChoisis);
      console.log(tabAnimateursChoisis);
      console.log(displaySuiviComponent);
    });

    // TODO gestion des affichages (affichers d'abord component config puis animation)
    return (
          <div>
                {!displaySuiviComponent &&
                    <Configuration joueursChoisis={tabEnfantsChoisis} setJoueursChoisis={setTabEnfantsChoisis} animateursChoisis ={tabAnimateursChoisis} setAnimateursChoisis={setTabAnimateursChoisis} setAffichageSuiviComponent={setDisplaySuiviComponent}/>
                }

                {displaySuiviComponent &&
                   <Suivi joueursChoisis={tabEnfantsChoisis} animateursChoisis ={tabAnimateursChoisis}/>
                }
          </div>
  )
}