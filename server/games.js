var express = require('express');
var router = express.Router();

var events = require('events');

var emitter = new events.EventEmitter();
const uuid = require('uuid/v4');

var games = [];

router.get('/', (req, res) => res.send(games));

router.get('/:id', (req, res) => {

    var current = games.find(f => f.id == req.params.id);

    if (!current) {
        res.status(404).end();
        return;
    }

    res.send(current);
});

router.post('/', (req, res) => {
    var newGame = req.body;
    newGame.description = (newFood.description || "").slice(0, 500);
    newGame.name = (newFood.name || "").slice(0, 100);

    games.push({
      ...newGame,
      id: uuid(),
    });

    emitter.emit('game', games);

    res.send(newGame);
});

module.exports = {
  router,
  emitter
};
