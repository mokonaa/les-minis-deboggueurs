import {
    v4 as uuidv4
} from "uuid";

export const data = {
    enfants: [{
            nom: "Gaby",
            description: "Gaby est très maline ! Studieuse et sérieuse, ses parents l'ont envoyé à l'internat car elle commençait à se laisser distraire par les séries disponibles sur les différents plateformes de vidéo à la demande",
            deplacement: 3,
            image: require("../assets/img/Gaby.png"),
            pv: 2,
            pouvoir: "Elle peut relancer un dé qui est dans la zone Réserve de Dé ! Mais ne peut pas l'utiliser.",
        },
        {
            nom: "Ambre",
            description: "Ambre est très sportive, jolie mais très égocentrique. Elle diffusait à un peu trop gagner en confiance selon ses parents. Elle diffusait des photos d’elle et de ses résultats sportifs en permanence sur les réseaux sociaux !",
            deplacement: 3,
            image: require("../assets/img/Ambre.png"),
            pv: 3,
            pouvoir: "",
        },
        {
            nom: "Paul",
            description: "Paul est timide, discret, voire renfermé, il passe son temps à jouer aux jeux vidéo et à streamer... Ses parents souhaitent qu’il découvre le monde réel et qu’il se fasse de vrais amis.",
            deplacement: 3,
            image: require("../assets/img/Paul.png"),
            pv: 2,
            pouvoir: "Il peut relancer un dé qui est dans la zone Réserve de Dé ! Mais ne peut pas l'utiliser.",
        },
        {
            nom: "Ethan",
            description: "Ethan se la pète, il a tout fait, il a tout vu et s’en vante sur les réseaux sociaux et en live sur sa chaine youtube. Il a également tout acheté et tout testé... bref, ses parents veulent lui faire prendre conscience qu’il vaut mieux que ça.",
            deplacement: 4,
            image: require("../assets/img/Ethan.png"),
            pv: 2,
            pouvoir: "",
        }
    ],
    thematique: {
        addiction: {
            nomThematique: "Addiction",
            questions: [{
                    titre: "Il est important de vérifier les paramètres de confidentialité de tes comptes de médias sociaux régulièrement pour t'assurer que tes informations personnelles ne sont pas exposées.",
                    choix: ["Vrai", "Faux", "Je ne sais pas"],
                    bonne_reponse: 1,
                    ressource: ""
                },
                {
                    titre: "Que devrais-tu faire si tu reçois un message en ligne d'une personne que tu ne connais pas ?",
                    choix: ["Répondre au message et demander qui elle est.", "Ignorer le message et le supprimer.", "Donner tes informations personnelles à la personne."],
                    bonne_reponse: 1,
                    ressource: ""
                }
            ],
            animateurs: [{
                nom: "Kenza",
                pseudo: "La Fouineuse",
                nomThematique: "addiction",
                maudit: true,
                deplacement: 3,
                priorite: 10,
                objectifs: {
                    animateurs: {
                        img: require("../assets/img/jeton_cyberharcelement.png"),
                        points: 0,
                    },
                    enfants: {
                        points: 0,
                    }
                },
                image: require("../assets/img/La_Fouineuse.png"),
            }]
        },
        cyber_harcelement: { 
            nomThematique: "Cyber-harcèlement",
            questions: [{
                    titre: "Quels sont les effets du cyberharcèlement ?",
                    choix:  [
                            "Mentalement : on se sent touché, dans l’embarras, stupide ou même en colère",
                            "Emotionnellement : on a honte ou on a moins d’intérêt pour les choses que l’on apprécie",
                            "Physiquement : on est fatigué (perte de sommeil) ou on fait l’expérience de douleurs comme des maux de ventre ou de crâne",
                    ],
                    bonne_reponse: [0, 1, 2],
                    ressource: "https://www.unicef.fr/convention-droits-enfants/protection/maltraitances-infantiles/harcelement-et-violence-lecole/"
                },
                {
                    titre: "Y a-t-il des sanctions au cyberharcèlement en France ?",
                    choix: ["Vrai", "Faux", "Je ne sais pas"],
                    bonne_reponse: 0,
                    ressource: "https://www.unicef.fr/convention-droits-enfants/protection/maltraitances-infantiles/harcelement-et-violence-lecole/"
                }
            ],
            animateurs: [{
                nom: "Kevin",
                pseudo: "Aninomous",
                nomThematique: "cyber_harcelement",
                maudit: true,
                deplacement: 3,
                priorite: 9,
                objectifs: {
                    animateurs: {
                        img: require("../assets/img/jeton_cyberharcelement.png"),
                        points: 0,
                    },
                    enfants: {
                        points: 0,
                    }
                },
                image: require("../assets/img/Aninomous.png")
            }]
        },
        securite: {
            nomThematique: "Cyber-sécurité",
            questions: [{
                    titre: "Est-il sûr d'utiliser le même mot de passe pour tous tes comptes en ligne ?",
                    choix: ["Vrai", "Faux", "Je ne sais pas"],
                    bonne_reponse: 1,
                    ressource: ""
                },
                {
                    titre: "Qu'est-ce que tu peux faire pour protéger ton ordinateur des méchants virus et logiciels espions ?",
                    choix: ["Ouvrir tous les liens et pièces jointes que tu reçois par e-mail, même s'ils sont étranges.", "Mettre à jour régulièrement ton antivirus et scanner ton ordinateur.", "Télécharger des applications à partir de n'importe quel site."],
                    bonne_reponse: 1,
                    ressource: ""
                }
            ],
            animateurs: [{
                nom: "David",
                pseudo: "Mr.Trollolol",
                nomThematique: "securite",
                maudit: true,
                deplacement: 3,
                priorite: 7,
                objectifs: {
                    animateurs: {
                    img: require("../assets/img/jeton_cyberharcelement.png"),
                        points: 0,
                    },
                    enfants: {
                        points: 0,
                    }
                },
                image: require("../assets/img/Mr_Trollolol.png")

            }]
        },
        fake_news: {
            nomThematique: "Fake News",
            questions: [{
                    titre: "Les fake news sont de fausses informations délibérément créées pour tromper les gens.",
                    choix: ["Vrai", "Faux", "Je ne sais pas"],
                    bonne_reponse: 1,
                    ressource: ""
                },
                {
                    titre: "Comment peux-tu savoir si une information est une fake news ou non ?",
                    choix: ["Croire en tout ce que tu vois sur Internet", "Vérifier la source de l'information et chercher d'autres sources fiables.", "Partager l'information immédiatement avec tous tes amis."],
                    bonne_reponse: 1,
                    ressource: ""
                }
            ],
            animateurs: [{
                nom: "Yuki",
                pseudo: "Hyperco",
                nomThematique: "fake_news",
                maudit: true,
                deplacement: 4,
                priorite: 8,
                objectifs: {
                    animateurs: {
                        img: require("../assets/img/jeton_cyberharcelement.png"),
                        points: 0,
                    },
                    enfants: {
                        points: 0,
                    }
                },
                image: require("../assets/img/Hyperco.png")
            }]
        }
    }
}