require('dotenv').config({ path: 'variables.env' });
const path = require('path');
const express = require('express');
const routers = require('./routers');

const app = express();

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, './views'));

app.use(express.static('public'));

app.use('/', routers());

app.listen(process.env.PORT, () => {
    console.log('Server running... in port ' + process.env.PORT);
})