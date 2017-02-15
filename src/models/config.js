import GameModel from './game';
import DeckModel from './deck';
import PlayerModel from './player';

export default {
    "game": {
        "class": GameModel,
        "param": '{}'
    },
    "deck": {
        "class": DeckModel,
        "param": '{"cards" : [{"face":"card-1"}, {"face":"card-2"} ,{"face":"card-3"},{"face":"card-4"},{"face":"card-5"} ]}'
    },
    "player": {
        "class": PlayerModel,
        "param": '{}'
    }
}