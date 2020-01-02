import { froggy } from "../src/froggy";

describe('froggy', () => {
    it('return expected song for left ear ', () => {
        expect(froggy('ear', 'left')).toEqual('Coaaaa... Coaaaaaa');
    });

    it('return expected song for right ear ', () => {
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

        expect(froggy('ear', 'right')).toEqual(song);
    });

    it('return expected nothing for left hand ', () => {
        expect(froggy('hand', 'left')).toEqual(undefined);
    });

    it('return expected song for right hand ', () => {
        let firstSong = froggy('hand', 'right');
        let secondSong = froggy('hand', 'right', firstSong);
        let lastSong = froggy('hand', 'right', secondSong);
        let returnSong = froggy('hand', 'right', lastSong);

        expect(firstSong).toEqual("Je suis une grenouille !");
        expect(secondSong).toEqual("J'adore la pluie !");
        expect(lastSong).toEqual("Tu aimes les bisous de grenouille ?");
        expect(returnSong).toEqual("Je suis une grenouille !");
    });

    it('return expected song for left foot ', () => {
        expect(froggy('foot', 'left')).toEqual("Hahaha, ça chatouille !");
    });
});
