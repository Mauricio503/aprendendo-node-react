// importa o express
const express = require('express');
//importa mongo, para instalar utlizar no terminal npm install mongoose
const mongoose = require('mongoose');

// iniciando do app
const app  = express();

// iniciando banco de dados
const MongoClient = require('mongodb').MongoClient;
const uri = "mongodb://mauricio:mm1010mauri@cluster0-qaada.mongodb.net/test?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true ,useUnifiedTopology: true});
client.connect(err => {
  const collection = client.db("test").collection("devices");
  // perform actions on the collection object
  client.close();
});

    //mongoose.connect('mongodb://mauricio:mm1010mauri@cluster0-qaada.mongodb.net/test?retryWrites=true&w=majority', { useNewUrlParser: true, useUnifiedTopology: true });


// passando a rota, req(requesição), res (resposta)
app.get('/', (req,res) => {
    res.send("Hello World");
});

// ----------Nodemon----------
// com o Nodemon é possivel atualizar as informações da pagina sem restartar
// para instalar utlizar o codigo npm install -D nodemon
// no arquivo package inserir nos scripts 'dev': 'nodemon server.js'
// no terminal executar npm run dev

// abre na porta 3001
app.listen(3001);