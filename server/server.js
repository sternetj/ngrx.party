const express = require('express');
const app = express();
const parser = require('body-parser');

const fs = require('fs');

const port = process.env.PORT || 3000;

app.use(parser.json());
app.use(express.static('dist'));

app.use('/food', require('./food'));

app.get('/', (req, res) => fs.createReadStream('dist/index.html').pipe(res));

app.listen(port, () => console.log(`Server running: PORT ${port}`))
