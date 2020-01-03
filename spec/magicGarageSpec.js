import { magicGarage } from "../src/magicGarage";

describe('magicGarage', () => {
    it('return expected message', () => {
        let car = {
            type: 'voiture',
            color: 'bleu',
            prefix: 'une'
        };

        let moto = {
            type: 'moto',
            color: 'rouge',
            prefix: 'la'
        };

        let truck = {
            type: 'camion',
            color: 'gris',
            prefix: 'un'
        };


        expect(magicGarage(car)).toEqual('Bravo, tu viens de réparer une voiture bleu !');
        expect(magicGarage(moto)).toEqual('Bravo, tu viens de réparer la moto rouge !');
        expect(magicGarage(truck)).toEqual('Bravo, tu viens de réparer un camion gris !');
    });

});
