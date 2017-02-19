import config from '../src/models/config';

var players = JSON.parse(config.player.param);
var model = new config.player.class(players);
var player_2 = new config.player.class(players);

describe('Class Player', function(){
    it('constructor est une instance de la classe deck', function(){
        expect(model.deck).toEqual(jasmine.any(Object));
    });

    describe('Methode Shuffle', function(){
        it('La fonction renvoie true quand le paquet est mélangé ou false quand deck === cemetery', function(){
            expect(model.shuffle()).toMatch(/true|false/);
        });
    });

    describe('Methode Draw', function(){
        it('retourne la carte pioché', function(){
            expect(model.draw()).toEqual(jasmine.any(Object));
        });
    });

    describe('PlayCard', function(){
        it('La fonction renvoie true si la carte est supprimé', function(){
            expect(model.playCard(1)).toBeTruthy();
        });

        it('La fonction renvoie false si erreur', function(){
            expect(model.playCard(9)).toBeFalsy();
        });
    });

    describe('DisCard', function(){
        it('retrourne true si la carte est envoyé au cimetière', function(){
            expect(model.discard(1)).toBeTruthy();
        });

        it('la fonction renvoie false si erreur', function(){
            expect(model.discard(91)).toBeFalsy();
        });
    });

    describe('Attack', function(){
        it('la methode renvoit true si l attaqua a bien été éxécuté', function(){
            expect(model.attack(4, player_2)).toBeTruthy();
        });

        it('la methode renvoit false si probleme', function(){
            expect(model.attack(14, player_2)).toBeFalsy();
        });
    });



});

