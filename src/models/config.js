import GameModel from './game';
import DeckModel from './deck';
import PlayerModel from './player';
import HandModel from './hand';
import PawnModel  from './pawn';

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
    },
    "hand": {
        "class": HandModel,
        "param": '{"cards" : [{"face":"card-1"}, {"face":"card-2"} ,{"face":"card-3"},{"face":"card-4"},{"face":"card-5"},{"face":"card-6"}], "limit" : 7}'
    },
    "pawn": {
        "class": PawnModel,
        "param": '{"life" : 1, "strength" : 3, "def" : 2}'
    }
}