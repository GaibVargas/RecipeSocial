const express = require('express');
const cors = require('cors');
const path = require('path');
const routes = require('./routes');

require('./database');

const app = express();

app.use(cors());
app.use(express.json());

app.use(routes);
app.use('/files', express.static(path.resolve(__dirname, '..', 'uploads', 'resized')));

app.listen(3333);
