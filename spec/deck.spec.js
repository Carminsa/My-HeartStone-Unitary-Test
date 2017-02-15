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

    describe('Draw', function(){
        it('Vérifie si l attribut est un objet', function () {
            expect(models.draw()).toEqual(jasmine.any(Object));
        });

        it('Verifie si array vide', function () {
            expect(models.draw()).not.toBe(undefined);
        });
    });

    describe('shuffle', function(){
        it('Vérifie si l attribut est un objet', function () {
            expect(models.draw()).toEqual(jasmine.any(Object));
        });
    });

});