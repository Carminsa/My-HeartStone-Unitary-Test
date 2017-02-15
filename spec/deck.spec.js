// import deck from '../src/models/deck.js';
import config from '../src/models/config';

var cards = JSON.parse(config.deck.param);
var model = new config.deck.class(cards);

Object.defineProperty(model, "desk", { value : {"face":"card-1"},
    writable: true,
    enumerable: true,
    configurable: true
});

describe('Class Deck', function (){

    console.log(model.desk);

    it('La classe doit retourner un array', function(){
        expect(Array.isArray(cards.cards)).toBe(true);
    });

    describe('Constructeur', function ()
    {
        it('l argument est un objet', function(){
            expect(typeof(config)).toBe("object");
        });

        it('L argument est un array', function (){
            expect(Array.isArray(cards.cards)).toBe(true);
        });
    });

    describe('Draw', function()
    {
        it('Vérifie si l attribut est un objet', function () {
            expect(model.draw()).toEqual(jasmine.any(Object));
        });

        it('Verifie si array vide', function () {
            expect(model.draw()).not.toBe(undefined);
        });
    });

    describe('shuffle', function()
    {
        it('Vérifie la fonction ne pète aucune erreur', function () {
            expect(model.draw()).toEqual(jasmine.any(Object));
        });
    });

});