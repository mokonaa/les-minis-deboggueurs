import { data } from '../../data/data';

export default function Partie() {

    console.log(data);
    let joueurs =data.enfants;

    const choisirJoueur = () => {
        console.log('im here');
        console.log(data);
    }

    console.log(joueurs);
    joueurs.map(enfant => console.log(enfant));
    //choisirJoueur();

  return (
          <div>
              { joueurs.map(enfant => enfant.nom)}
              <p>Combien de personnes jouent ? </p>
              <div>
                <button>2</button>
                <button>3</button>
                <button>4</button>
              </div>

              
          </div>
  )
}