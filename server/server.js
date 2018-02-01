const express = require('express');
const app = express();
const parser = require('body-parser');

const fs = require('fs');

app.use(parser.json());
app.use(express.static('dist'));

app.get('/', (req, res) => fs.createReadStream('dist/index.html').pipe(res));

app.listen(3000, () => console.log('Server running: PORT 3000'))