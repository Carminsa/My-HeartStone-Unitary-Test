
import config from '../src/models/config';

var cards = JSON.parse(config.hand.param);
var model = new config.hand.class(cards);


Object.defineProperty(model, "desk", { value : {"face":"card-6"},
    writable: true,
    enumerable: true,
    configurable: true
});

describe('Class Hand', function(){
   it('la classe retourne un int', function(){
       expect(model.limit).toEqual(jasmine.any(Number));
   });

   describe('Construct', function(){
      it('la methode renvoit un tableau', function(){
          expect(Array.isArray(cards.cards)).toBe(true);
      });
   });

   describe('AddCart', function(){
      it('La fonction renvoie True si la carte s ajoute', function(){
          expect(model.addCart({"face":"card-BITE"})).toBe(true);
      });
      it('la fonction renvoie False si la limite est atteinte', function(){
          expect(model.addCart({"face":"card-BITE"})).toBe(false);
      });
   });
});