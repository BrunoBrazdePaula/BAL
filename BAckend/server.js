const express = require("express");
const mongoose = require("mongoose");
const requireDir = require("require-dir")
const cors = require("cors");


const app = express();
app.use(express.json());
app.use(cors());


mongoose.connect('mongodb+srv://brunobraz:thor3004@baladeiro.sumnz.mongodb.net/baladeiro?retryWrites=true&w=majority',
{
    //user: process.env.brunobraz, pass: process.env.Boka12211234,
    useNewUrlParser: true,
    useUnifiedTopology: true

});

requireDir('./src/models');

//rotas
app.use('/api', require('./src/routes'));

app.listen(3001);
