import config from '../src/models/config';

var players = JSON.parse(config.game.param);
var model = new config.game.class(players);

describe('Class Game', function(){

    describe('Method Get Turn', function(){
        it('retourne une chaine de caractere pour connaitre le tour', function(){
            expect(model.getTurn()).toEqual(jasmine.any(String));
        });
    });

    describe('Method hange Turn', function(){
        it('retourne une chaine de caractere pour connaitre le tour', function(){
            expect(model.changeTurn()).toEqual(jasmine.any(String));
        });
    });


});
