const express = require('express');
const session = require('express-session');
const bp = require('body-parser');
const path = require('path');
const app = express();
const port = 3000;

app.use(session({
    secret: 'notAverySecretKey',
    resave: false,
    saveUninitialized: true,
    cookie: {maxAge: 60000},
    count: 0
}))
app.use(bp.urlencoded({ extended: true}));

app.use(express.static(path.join(__dirname, './views')));

app.set('view engine', 'ejs');

app.get('/', function(req, res) {
    req.session.count++;
    res.render('index', {ses: req.session});
})


app.listen(port, function () {
})