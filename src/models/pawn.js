import EventManager from '../eventManager';

export default class Pawn extends EventManager{

    constructor(config)
    {
        super();
        this.life = config.life;
        this.def = config.def;
        this.strength = config.strength;
    }

    getLife(){
        return this.life;
    }

    getStrength(){
        return this.strength;
    }

    getDef(){
        return this.def;
    }

    attack(target){
        target.recieveAttack(this);
    }

    recieveAttack(opponent, strikeBack = false){
        if (strikeBack === false)
        {
            this.life -= opponent.strength;
            opponent.recieveAttack(this, strikeBack = true);
            return true;
        }
        else if (strikeBack === true){
            this.life -= opponent.def;
            return false;
        }
    }

}