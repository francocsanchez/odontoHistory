require('dotenv').config({ path: 'variables.env' });
const express = require('express');
const routers = require('./routers');

const app = express();

app.use('/', routers())

app.listen(process.env.PORT, () => {
    console.log('Server running... in port ' + process.env.PORT);
})