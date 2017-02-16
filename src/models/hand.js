export default class Hand{

    constructor(config){
        this.cards = config.cards;
        this.limit = 7;
    }

    addCart(card){

        var count = Object.keys(this.cards).length;

        if (count < this.limit){
            this.cards.splice(count+1, 0, card);
            return true;
        } else {
            return false;
        }
    }

    removeCard(position){

        var count = Object.keys(this.cards).length;

        this.cards.splice(position-1, 1);

        if (count -1 == Object.keys(this.cards).length){
            return true;
        }else {
            return false;
        }
    }

    getAllCards(){
        return this.cards;
    }


    getCardsCount(){
        var count = Object.keys(this.cards).length;
        return count;
    }

}