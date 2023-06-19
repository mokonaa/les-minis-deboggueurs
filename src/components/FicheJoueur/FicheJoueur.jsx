import React from 'react'

export default function FicheJoueur({ nbDeplacements, pouvoir, nom, nbVie, description, maudit, objectif, role, img }) {

    if(maudit === true) {
        maudit = "oui"
    } else {
        maudit = "non"
    }
  return (
    <div id='ficheJoueur'>
        {role === 'animateur' && (
            <div id='ficheAnimateur'>
                <div>
                    <img src={img} alt={"image de profil de l'animateur " + nom} />
                    <h2>Animatrice</h2>
                    <h3>Nom : {nom}</h3>
                    <p>Maudit ? {maudit}</p>
                    <p>Déplacement : {nbDeplacements}</p>
                    <p>Nombre de vie : {nbVie}</p>
                    <p>Description : {description}</p>
                </div>
            </div>
        )}
        {role === 'enfant' && (
            <div id='ficheEnfant'>
                <div>
                    <img src={img} alt={"image de profil de l'enfant " + nom} />
                    <h2>Enfant</h2>
                    <h3>Nom : {nom}</h3>
                    <p>Pouvoir : {pouvoir}</p>
                    <p>Déplacement : {nbDeplacements}</p>
                    <p>Nombre de vie : {nbVie}</p>
                    <p>Description : {description}</p>
                </div>
            </div>
        )}
    </div>
  )
}
