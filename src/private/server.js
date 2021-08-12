const express = require("express");
const path = require('path')

const AOS = require('aos')

const port = process.env.PORT;

const app = express();

app.get('/', function (req, res) {
  res.render('index')
})

app.use(express.static('../../public'))

app.set('views', __dirname + '../../public/views');
app.set('view engine', 'pug');

app.listen(port)