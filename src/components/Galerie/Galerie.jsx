
import { data } from '../../data/data';

export default function Galerie() {

    let listThematiques = data.thematique;
    let tabThematiques = [];
    console.log(listThematiques);

   // recup de la liste des animateurs 
   for (const property in listThematiques) {
        let listThematique = listThematiques[property];
        tabThematiques.push(listThematique);
   }
   console.log(tabThematiques);

    const choixThematique = (thematique) => {
    
    }


    return (
        <>
            <div>
                Galerie
                <div id='listThematiques'>
                    {tabThematiques.map(thematique => <div className='thematiquesInfos' id= {'thematique'+thematique.nomThematique} onClick={() => choixThematique({thematique})} >{thematique.nomThematique}</div>)}
                </div>
            </div>
        </>
    )
}