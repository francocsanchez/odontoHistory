require('dotenv').config('.env'); // Variables de entorno
const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const cors = require('cors');
const dbConnect = require('./config/mongo'); // Archivo de configuracion de BD

const app = express(); // Inicio del servidor

// TODO: Configuracion de servidor
app.use(cors());
app.use(express.json());

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, './views'))

app.use(express.static('public'));

// TODO: Main de rutas
app.use('/users', require('./routes/Users'));
app.use('/patients', require('./routes/Patients'));
app.use('/work-socials', require('./routes/WorkSocials'));

app.listen(process.env.APP_PORT || 3000, () => {
    console.log('*** Server running ***');
    console.log(`http://localhost/${process.env.APP_PORT || 3000}`);
})

dbConnect();