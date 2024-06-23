const express = require('express');
const conectarBD = require('./config/db');
const app = express();
const cors = require('cors');
conectarBD();

app.use(cors());

app.use(express.json());

app.use('/api/productos',require('./routes/producto'));

app.listen(4000,()=>{
    console.log("El servidor esta corriendo")
})