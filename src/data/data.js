import {
    v4 as uuidv4
} from "uuid";

export const data = {
    enfants: [{
            nom: "Gaby",
            description: "D'apparence réservée, Gaby passe toute ses soirées à jouer à des jeux en ligne avec ses amis. Ses parents souhaitent qu'elle découvre d'autres activités.",
            deplacement: 3,
            image: require("../assets/img/Gaby.svg"),
            pvMax: 2,
            pv: 2,
            pouvoir: "Gaby peut relancer 1 dès par manche.",
        },
        {
            nom: "Ambre",
            description: "Ambre adore poster sa vie sur ses réseaux sociaux, si bien qu’elle ne manque jamais de filmer chaque instant de sa journée. ",
            deplacement: 3,
            image: require("../assets/img/Ambre.svg"),
            pvMax: 2,
            pv: 2,
            pouvoir: "Ambre peut se cacher directement dans sa pièce, une seule fois dans la partie",
        },
        {
            nom: "Paul",
            description: "Paul adore jouer à des jeux vidéos, si bien qu’il reste souvent enfermé chez lui à jouer seul dans le noir.",
            deplacement: 2,
            image: require("../assets/img/Paul.svg"),
            pvMax: 3,
            pv: 3,
            pouvoir: "Paul peut retourner un jeton rouge dans sa pièce une fois par manche",
        },
        {
            nom: "Emma",
            description: "Emma est très sportive. Malheureusement, elle consomme trop de contenus d’influenceurs fitness, si bien qu’elle croit tout ce qu’ils racontent",
            deplacement: 4,
            image: require("../assets/img/Emma.svg"),
            pvMax: 3,
            pv: 3,
            pouvoir: "Lorsque qu’Emma est envoyée au Dortoir, elle ne passe pas son tour.",
        },
        {
            nom: "Issam",
            description: "Issam passe l’intégralité de son temps libre sur des platformes de streaming pour regarder diverses séries.",
            deplacement: 4,
            image: require("../assets/img/Issam.svg"),
            pvMax: 2,
            pv: 2,
            pouvoir: "Lorsqu’Issam est à la cave,il peut aller directement àla case pour piocher unecarte métier.",
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
                nom: "Yuki",
                pseudo: "Hyperco",
                nomThematique: "addiction",
                maudit: true,
                deplacement: 2,
                priorite: 6,
                objectifs: {
                    animateurs: {
                        img: require("../assets/img/jeton_cyberharcelement.png"),
                        points: 0,
                    },
                    enfants: {
                        points: 0,
                    }
                },
                image: require("../assets/img/Hyperco.svg")
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
                nom: "Kenza",
                pseudo: "La Fouineuse",
                nomThematique: "cyber_harcelement",
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
                image: require("../assets/img/La_Fouineuse.svg")
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
                nom: "Kevin",
                pseudo: "Anynomous",
                nomThematique: "securite",
                maudit: true,
                deplacement: 2,
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
                image: require("../assets/img/Anynomous.svg")

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
                nom: "David",
                pseudo: "Mr. Trololol",
                nomThematique: "fake_news",
                maudit: true,
                deplacement: 4,
                priorite: 5,
                objectifs: {
                    animateurs: {
                        img: require("../assets/img/jeton_cyberharcelement.png"),
                        points: 0,
                    },
                    enfants: {
                        points: 0,
                    }
                },
                image: require("../assets/img/Mr_Trollolol.svg")
            }]
        }
    }
}