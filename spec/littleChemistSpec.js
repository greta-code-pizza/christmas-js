import { littleChemist } from "../src/littleChemist";

describe('littleChemist', () => {
    it('return expected message (primary color)', () => {
        let mixture = {
            yellowMixture: true,
            greenMixture: false,
            blueMixture: false,
            redMixture: false
        };

        let otherMixture = {
            yellowMixture: false,
            greenMixture: false,
            blueMixture: true,
            redMixture: false
        };

        let lastMixture = {
            yellowMixture: false,
            greenMixture: false,
            blueMixture: false,
            redMixture: true
        };

        expect(littleChemist(mixture)).toEqual('Il ne se passe rien...');
        expect(littleChemist(otherMixture)).toEqual('Il ne se passe rien...');
        expect(littleChemist(lastMixture)).toEqual('Il ne se passe rien...');
    });

    it('return expected message (green color)', () => {
        let mixture = {
            yellowMixture: true,
            greenMixture: true,
            blueMixture: true,
            redMixture: false
        };

        let otherMixture = {
            yellowMixture: false,
            greenMixture: true,
            blueMixture: true,
            redMixture: false
        };

        let lastMixture = {
            yellowMixture: false,
            greenMixture: true,
            blueMixture: false,
            redMixture: false
        };

        expect(littleChemist(mixture)).toEqual('Hum, ça sent bon !');
        expect(littleChemist(otherMixture)).toEqual('Hum, ça sent bon !');
        expect(littleChemist(lastMixture)).toEqual('Hum, ça sent bon !');
    });

    it('return expected message (purple color)', () => {
        let mixture = {
            yellowMixture: false,
            greenMixture: false,
            blueMixture: true,
            redMixture: true
        };

        expect(littleChemist(mixture)).toEqual('Waaa, la mixture devient solide !');
    });

    it('return expected message (orange color)', () => {
        let mixture = {
            yellowMixture: true,
            greenMixture: false,
            blueMixture: false,
            redMixture: true
        };

        expect(littleChemist(mixture)).toEqual('Hahahahaha, mais pourquoi je rigole ! Hahahaha !');
    });

    it('return expected message for others colors', () => {
        let mixture = {
            yellowMixture: true,
            greenMixture: true,
            blueMixture: true,
            redMixture: true
        };

        let otherMixture = {
            yellowMixture: true,
            greenMixture: false,
            blueMixture: true,
            redMixture: true
        };

        let lastMixture = {
            yellowMixture: false,
            greenMixture: true,
            blueMixture: false,
            redMixture: true
        };

        expect(littleChemist(mixture)).toEqual('Tous aux abris, ça va exploser !');
        expect(littleChemist(otherMixture)).toEqual('Tous aux abris, ça va exploser !');
        expect(littleChemist(lastMixture)).toEqual('Tous aux abris, ça va exploser !');
    });
});
