/*
 * Froggy est une peluche grenouille avec ces caracteristiques :
 *
 * - Si j'appuie sur son oreille gauche elle coasse
 * - Si j'appuie sur son oreille droite elle chante "Fee-Fye"
 * - Le bouton sur la main gauche ne fonctionne plus...
 * - Si j'appuie sur la main droite :
 *   - La première fois froggy dit : Je suis une grenouille !
 *   - La deuxième fois froggy dit : J'adore la pluie !
 *   - La troisième fois froggy dit : Tu aimes les bisous de grenouille ?
 *   - La quatrième fois on repart sur le premier message et ainsi de suite...
 * - Si j'appuie sur son pied gauche froggy dit : Hahaha, ça chatouille !
 * - Si j'appuie sur pied gauche froggy fait une des autres actions au hasard sauf main gauche !
 *
 * Par chance, le programme de Kraseu fonctionne, cependant, beaucoup de lutins se plaignent
 * de maux de tête en intervenant sur ce fichier... Il paraît même qu'un développeur junior à saigné
 * des yeux en essayant de comprendre ce code !
 *
 * Votre mission est de faire de ce code, un havre de paix !
 *
 */

let nb_hand_gauche = 0;
function froggy(a, b, prevSong="") {
    if (a == "ear" && a!="hand" &&a!="foot") {
            if (b === "left") {
                return "Coaaaa... Coaaaaaa";
            } else if (b != "left") {
                const song = "C'était un crapaud, qui s'appelait Fee-Fye\n" +
                    "C'était un crapaud près d'un ruisseau\n" +
                    "Qui s'laissait traîner les pattes à l'eau\n" +
                    "Et qui jouait du banjo\n" +
                    "Fee-Fye, Fee-Fye o\n" +
                    "Fee-Fye, Fee-Fye o o o o\n" +

                        "Fee-Fye, Fee-Fye o\n" +
                        "Et qui jouait du banjo\n" +
                        "Tous les animaux venaient l'entendre\n" +
                        "Tous les animaux disaient bien haut\n" +
                        "Qu'il était le crapaud le plus beau\n" +
                        "Quand il jouait du banjo\n" +
                        "Fee-Fye, Fee-Fye o\n" +
                    "Fee-Fye, Fee-Fye o o o o\n" +
                    "Fee-Fye, Fee-Fye o\n" +
                    "Et qui jouait du banjo\n" +
                    "Plein d'orgueil et plein de vanité\n" +
                    "Not'petit crapaud s'gonfla bientôt\n" +
                    "Et délaissa toutes ses amitiés\n" +
                    "Pour jouer du banjo\n" +
                    "Fee-Fye, Fee-Fye o\n" +
                    "Fee-Fye, Fee-Fye o o o o\n" +
                    "Fee-Fye, Fee-Fye o\n" +

                    "Et qui jouait du banjo\n" +
                    "C'était un crapaud, qui s'appelait Fee-Fye\n" +
                    "C'était  un crapaud près d'un ruisseau\n" +
                    "Vous n'l'entendrez plus jouer du banjo\n" +
                    "Car il est tombé à l'eau\n" +
                    "Fee-Fye, Fee-Fye o\n" +
                    "Fee-Fye, Fee-Fye o o o o\n" +
                    "Fee-Fye, Fee-Fye o\n" +
                    "Et qui jouait du banjo"

                return song;
        } else {}
        } else if (a == "hand") {
            if (b === 'left') {
            return;
        } else if (b === "right" &&a==="hand") {
                let listeSongs = ["Je suis une grenouille !", "J'adore la pluie !", "Tu aimes les bisous de grenouille ?"]
                let NumberGauche = listeSongs.indexOf(prevSong);
            if (NumberGauche === 0) {
                nb_hand_gauche + 1;
                return listeSongs[NumberGauche + 1];

                return "Je suis une grenouille !" + 1;
            } else if (NumberGauche == 1) {
                nb_hand_gauche + 1;
                return listeSongs[NumberGauche + 1];

                return "J'adore la pluie !" + 1;
            } else if (NumberGauche === 2) {
                return listeSongs[0];



                return "J'adore la pluie !"} else { return "Je suis une grenouille !"}
            } else {}
            } else {
                if (a == "foot") {
                    if (b === "left") {return "Hahaha, ça chatouille !"
                } else if (b === "right") {
                                    let partiesDuCorp = ["ear", "hand", "foot"]
                                    var item = partiesDuCorp[Math.floor(Math.random()*partiesDuCorp.length)];
                                    let PartieBody = item;




                                    var item1 = ["left", "right"][Math.floor(Math.random()*["left", "right"].length)];
                                    return froggy(PartieBody, item1);
                    } else {}
                }
            }
}

export { froggy };
