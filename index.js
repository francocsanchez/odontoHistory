require('dotenv').config({ path: 'variables.env' });
const path = require('path');
const express = require('express');

// TODO: Ruteadores
const routerHome = require('./routers/home.js');

const app = express();

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, './views'));

app.use(express.static('public'));
app.use('/', routerHome);

app.listen(process.env.PORT, () => {
    console.log('Server running... in port ' + process.env.PORT);
})