import ModelFactory from './factory';
import Pawn from './pawn';

export default class Player extends Pawn {

    constructor(config) {
        super(config);
        this.type = config.type;

        this.deck = ModelFactory.get('deck');
        this.cards = this.deck.cards;

        // this.board = ModelFactory.get('board');
        this.hand = ModelFactory.get('hand');
        this.cemetary = ModelFactory.get('cemetary');
    }

    shuffle(deck = "deck")
    {
        if (deck === "deck") {
            for (var i = 0; i < this.cards.length - 1; i++)
            {
                var j = i + Math.floor(Math.random() * (this.cards.length - i));
                var temp = this.cards[j];
                this.cards[j] = this.cards[i];
                this.cards[i] = temp;
                return true;
            }
            deck = "cemetary";
        } else if (deck === "cemetary") {
            return false;
        }
    }

    draw () {

        var count = Object.keys(this.hand.cards).length;
        if (count < 7){
            this.hand.cards.splice(0, 1, this.cards[0]);
            return this.deck.draw();
        } else {
            return false;
        }
    }
    playCard(position){

        var count = Object.keys(this.hand.cards).length;
        this.hand.cards.splice(position-1, 1);

        if (count -1 == Object.keys(this.hand.cards).length){
            return true;
        }else {
            return false;
        }
    }

    discard(position){
        var count_cimetary =  Object.keys(this.cemetary.cards).length;
        var cymetery = this.hand.cards[position];
        this.hand.cards.splice(position-1, 1);
        this.cemetary.cards.splice(0,1 , cymetery);

        if (count_cimetary +1 == Object.keys(this.cemetary.cards).length){
            return true;
        } else {
            return false;
        }
    }

    attack(position, target){

        var lenght_board = Object.keys(this.hand.cards).length;

        if (lenght_board >= position){
            var card = this.hand.cards[position-1];
            return true;
        }

        if (lenght_board <= position){
            return false;
        }
    }


}