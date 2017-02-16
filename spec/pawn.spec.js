import config from '../src/models/config';

var life = JSON.parse(config.pawn.param);
var model = new config.pawn.class(life);
var model2 = new config.pawn.class(life);

describe('Class Pawn', function()
{
    describe('Construct', function(){
        it('Les attribut life, strength et def retourne un int', function(){
            expect(model.life).toEqual(jasmine.any(Number));
            expect(model.def).toEqual(jasmine.any(Number));
            expect(model.strength).toEqual(jasmine.any(Number));
        });
    });

    describe('Les getters', function(){
        it('GetLife retourne un int', function(){
            expect(model.getLife()).toEqual(jasmine.any(Number));
        });
        it('GetDef retourne un int', function(){
            expect(model.getDef()).toEqual(jasmine.any(Number));
        });
        it('GetStrength retourne un int', function(){
            expect(model.getStrength()).toEqual(jasmine.any(Number));
        });
    });
});