require('dotenv').config('.env'); // Variables de entorno
const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const cors = require('cors');
const dbConnect = require('./config/mongo'); // Archivo de configuracion de BD
const methodOverride = require('method-override');

const app = express(); // Inicio del servidor

// TODO: Configuracion de servidor
app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, './views'))

app.use(express.static('public'));

app.use(methodOverride('_method'));

// TODO: Main de rutas
const {
    patientsRouter,
    usersRouter,
    workSocialsRouter
} = require('./routes/Index');

app.use('/users', usersRouter);
app.use('/patients', patientsRouter);
app.use('/work-socials', workSocialsRouter);

app.listen(process.env.APP_PORT || 3000, () => {
    console.log('*** Server running ***');
    console.log(`http://localhost/${process.env.APP_PORT || 3000}`);
})

dbConnect();