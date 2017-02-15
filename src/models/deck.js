
export default class Deck {

    constructor (config)
    {
        this.cards = config.cards;
    }

    shuffle ()
    {
        for (var i = 0 ; i < this.cards.length -1; i++){
            var j = i + Math.floor(Math.random() * (this.cards.length - i));

            var temp = this.cards[j];
            this.cards[j] = this.cards[i];
            this.cards[i] = temp;
        }
        // return sourceArray;
        console.log(this.cards);

    }


    draw () {
    }

    getCardsCount () {
    }
}