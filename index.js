//Require Express Module
const express = require('express');

//Require Port Config
require('./config/config');

//Require ApiRouter
const apiRouter = require('./routes/api');

//Require Cors
const cors = require('cors');

//Consume Express Module
const app = express();

//Consume BodyParser/Express
app.use(express.json());

//Consume Cors
app.use(cors());

//Consume Api Router (Manejador de Rutas)
app.use('/api', apiRouter);
//Todas las rutas que entren en mi servidor con '/api' lo gestionara mi fichero ApiRouter

//Consume Port
app.listen(process.env.PORT, () => {
  console.log('Escuchando el puerto :', process.env.PORT);
});
