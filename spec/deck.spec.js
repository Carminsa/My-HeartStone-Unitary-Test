import deck from '../src/models/deck.js';
import config from '../src/models/config';

var models = new deck(JSON.parse(config.deck.param));

describe('Class Deck', function (){

    it('La classe doit retourner un array', function(){
        expect(Array.isArray(models.cards)).toBe(true);
    });

    describe('Constructeur', function ()
    {
        it('l argument est un objet', function(){
            expect(typeof(config)).toBe("object");
        });

        it('L argument est un array', function (){
            expect(Array.isArray(models.cards)).toBe(true);
        });
    });

    describe('shuffle', function(){
        it('Mélange les cardes du paquet', function () {
            models.shuffle();
        });
    });

});