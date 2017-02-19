import EventManager from '../eventManager'

var bool = true;

export default class Game extends EventManager{


    constructor (config) {
        super(config);
        this.up = config.up;
        this.down = config.down;
    }

    getTurn(){

        if (bool){
            bool = false;
            return this.up;
        }else {
            bool = true;
            return this.down;

        }
    }

    changeTurn(){
        if (bool){
            bool = false;
            return this.up;
        }else {
            bool = true;
            return this.down;

        }
    }

}