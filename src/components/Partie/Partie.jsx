import { data } from '../../data/data';
import Configuration from '../Configuration/Configuration';
import AnimationPartie from '../AnimationPartie/AnimationPartie';

export default function Partie() {

    console.log(data);
    let joueurs = data.enfants;

    const choisirJoueur = () => {
        // console.log('im here');
        // console.log(data);
    }

    // console.log(joueurs);
    // joueurs.map(enfant => console.log(enfant));
    //choisirJoueur();

    // TODO gestion des affichages (affichers d'abord component config puis animation)
  return (
          <div>
              { joueurs.map(enfant => enfant.nom)}
                <Configuration/>
                <AnimationPartie/>
              
          </div>
  )
}