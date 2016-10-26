const express = require('express');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const router = require("./config/routes");

const app = express();
const port = process.env.PORT || 8000;

app.set('view engine', 'ejs');
app.set('views', `${__dirname}/views`);

app.use(express.static(`${__dirname}/public`));
app.use(morgan('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

mongoose.connect('mongodb://localhost/pizza-app');

app.use('/api', router);

app.listen(port, () => console.log(`Running on port: ${port}`));
