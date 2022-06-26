require('dotenv').config('.env'); // Variables de entorno
const express = require('express');
const cors = require('cors');
const dbConnect = require('./config/mongo'); // Archivo de configuracion de BD

const app = express(); // Inicio del servidor

app.use(cors());

// TODO: Main de rutas
app.use('/users', require('./routes/Users'));

app.listen(process.env.APP_PORT || 3000, () => {
    console.log('*** Server running ***');
    console.log(`http://localhost/${process.env.APP_PORT || 3000}`);
})
dbConnect();