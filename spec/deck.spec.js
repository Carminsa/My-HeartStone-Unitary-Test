import deck from '../src/models/deck.js';
import config from '../src/models/config';


var models = new deck(JSON.parse(config.deck.param));

describe('Test deck', function () {
    it('constructor models', function () {
        expect(typeof(config)).toBe("object");
        expect(Array.isArray(models.cards)).toBe(true);
    });
});