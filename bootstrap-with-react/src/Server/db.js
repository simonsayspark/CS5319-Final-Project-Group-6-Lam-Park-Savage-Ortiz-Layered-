const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');


export default async function conectNaDB(){
    mongoose.connect("mongodb+srv://Arisu:<db_password>@banco.wrd3e.mongodb.net/?retryWrites=true&w=majority&appName=Banco") 

    return mongoose.connection;
}