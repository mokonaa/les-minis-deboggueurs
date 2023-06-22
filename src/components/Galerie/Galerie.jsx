
import { data } from '../../data/data';

export default function Galerie() {

    let listThematiques = data.thematique;
    let tabThematiques = [];

   // recup de la liste des animateurs 
   for (const property in listThematiques) {
        let listThematique = listThematiques[property];
        tabThematiques.push(listThematique);
   }

    const choixThematique = (thematique) => {
    
    }

    return (
        <>
            <div>
                <div id='thematiques'>
                    <p className='subTitle'>Galerie</p>
                    <div id='thematiques_list'>{tabThematiques.map(thematique => <div className='thematiquesInfos' id= {'thematique'+thematique.nomThematique} onClick={() => choixThematique({thematique})} >{thematique.nomThematique}</div>)}</div>
                </div>
            </div>
        </>
    )
}