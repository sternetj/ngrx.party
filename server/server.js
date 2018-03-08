const express = require('express');
const app = express();
const wsocket = require('express-ws')(app);
const parser = require('body-parser');

const uuid = require('uuid/v4');

// const webSocket = require('ws');
// const wss = new webSocket.Server({server: app});

// wss.on('connection', (ws, req) => {
//     console.log("Connected.")

//     ws.on('message', () => {
//         console.log("message");
//     });

//     ws.send("thing")
// })

const fs = require('fs');

const port = process.env.PORT || 3000

app.use(parser.json());
app.use(express.static('dist'));

const sockets = [];

var food = require('./food');

app.use('/api/food', food.router);

app.ws('/', (ws, req) => {
    const id = uuid();

    sockets.push({
        id: id,
        socket: ws
    });
    console.log("connected:", id)

    ws.send({
        action: "ID",
        payload: {
            id: id,
        }
    });

    ws.on('message', (msg) => {
        console.log(msg);
    });

    ws.on('close', function(msg) {
        console.log("clearing socket", id)
        sockets = sockets.filter((conn) => conn.id !== id);
    });
});

food.emitter.on('food', (data) => {
    const package = {
        data,
        type: 'food',
    }
    console.log(sockets)
    sockets.forEach((sock) => sock.socket.send(JSON.stringify(package)));
});

app.get('/', (req, res) => fs.createReadStream('dist/index.html').pipe(res));

app.listen(port, () => console.log(`Server running: PORT ${port}`))
