require('dotenv').config();
const express = require('express');
const app = express();
const wsocket = require('express-ws')(app);
const parser = require('body-parser');

const uuid = require('uuid/v4');

const Filter = require('bad-words'),
filter = new Filter();

const fs = require('fs');

const port = process.env.PORT || 3000;

app.use(parser.json());
app.use(express.static('dist'));

app.use((req, res, next) => {
  if (req.body && filter.isProfane(JSON.stringify(req.body))) {
    return res.status(400).send("Request contains bad words");
  }

  next();
})

let sockets = [];

var food = require('./food');

app.use('/api/food', food.router);

var songs = require('./songs');
app.use('/api/songs', songs.router);

app.ws('/', (ws, req) => {
  const id = uuid();

  ws.destroy = ws.onclose = function(msg) {
    console.log('clearing socket', id);
    sockets = sockets.filter(conn => conn.id !== id);
  };

  sockets.push({
    id: id,
    socket: ws
  });
  console.log('connected:', id);

  ws.send({
    action: 'ID',
    payload: {
      id: id
    }
  });

  ws.on('message', msg => {
    console.log(msg);
  });

});

const notifySockets = (data) => {
  sockets
    .filter(sock => sock.readyState === sock.OPEN)
    .forEach(sock => {
      try {
        sock.socket.send(JSON.stringify(data));
      } catch (ex) {
        sock.socket.destroy();
      }
    });
}

food.emitter.on('food', data => {
  const package = {
    data,
    type: 'food'
  };

  notifySockets(package);
});

songs.emitter.on('song', data => {
  const package = {
    data,
    type: 'song'
  };

  notifySockets(package);
});

app.get('/', (req, res) => fs.createReadStream('dist/index.html').pipe(res));

app.listen(port, () => console.log(`Server running: PORT ${port}`));
