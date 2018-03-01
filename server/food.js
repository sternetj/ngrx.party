var express = require('express');
var router = express.Router();

var food = [{
    id: 1,
    name: 'Nachos',
    description: 'Nachos smothered in cheese and jalepenos!',
    obtained: true,
    count: 1,
    users: [{
      name: 'Sally Smith',
      logo: '//ssl.gstatic.com/docs/common/profile/bat_lg.png'
    }]
  }, {
    id: 2,
    name: 'Paper Plates',
    description: 'Need something to put all this food on.',
    obtained: false,
    count: 5,
    users: [{
      name: 'Craig Robinson',
      logo: '//ssl.gstatic.com/docs/common/profile/frog_lg.png'
    }, {
      name: 'Adam Scott',
      logo: '//ssl.gstatic.com/docs/common/profile/panda_lg.png'
    }]
  }, {
    id: 3,
    name: '2-Liters of Soda',
    description: 'Coca-Cola, Sprite, Diet Coke, Dr. Pepper, Barq\'s Root Beer, and Mountain Dew',
    obtained: false,
    count: 6,
    users: [{
      name: 'Chris Kirkpatrick',
      logo: '//ssl.gstatic.com/docs/common/profile/quagga_lg.png'
    }, {
      name: 'Jennifer Johnson',
      logo: '//ssl.gstatic.com/docs/common/profile/kraken_lg.png'
    }, {
      name: 'Margaret Graves',
      logo: '//ssl.gstatic.com/docs/common/profile/dolphin_lg.png'
    }, {
      name: 'Sophie Holder',
      logo: '//ssl.gstatic.com/docs/common/profile/squirrel_lg.png'
    }]
  }];



router.get('/', (req, res) => res.send(food));

router.get('/:id', (req, res) => {

    var current = food.find(f => f.id == req.params.id) || {};

    if (!current) {
        res.status(404).end();
        return;
    }

    res.send(current);
});

router.post('/', (req, res) => {
    var newFood = req.body;

    newFood.id = Math.max(0, ...food.map(f => f.id)) + 1;

    food.push(newFood);

    res.send(newFood);
});

router.delete('/:id', (req, res) => {
    
    var currentIndex = food.findIndex(f => f.id == req.params.id);
 
    if (currentIndex === -1) {
        res.status(404).end();
        return;
    }

    food.splice(currentIndex, 1);

    res.status(200).end();
});

module.exports = router;