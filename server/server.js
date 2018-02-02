const express = require('express');
const app = express();
const parser = require('body-parser');

const fs = require('fs');

app.use(parser.json());
app.use(express.static('dist'));

const loki = require('lokijs');
const db = new loki('db.js');

var supplies = db.addCollection('supplies');

app.get('/', (req, res) => fs.createReadStream('dist/index.html').pipe(res));

app.get('/supplies', (req, res) => {
    res.send(supplies.find());
});

app.listen(3000, () => console.log('Server running: PORT 3000'))