import Configuration from '../Configuration/Configuration';
import AnimationPartie from '../Suivi/Suivi';

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
                <Configuration/>
                <AnimationPartie/>
              
          </div>
  )
}