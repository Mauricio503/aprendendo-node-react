// importa o express
const express = require('express');
//importa mongo, para instalar utlizar no terminal npm install mongoose
const mongoose = require('mongoose');
// requireDir mapeia os models
// utlizar npm install require-dir para instalar
const requireDir = require('require-dir');

// iniciando do app
const app  = express();
//permite enviar dados em forma de json
app.use(express.json());

// mapeando models
requireDir("./src/models");

const url = "mongodb://mauricio:...@cluster0-qaada.mongodb.net/test";
const db = mongoose.createConnection(url,{ useNewUrlParser: true , useUnifiedTopology: true }).catch(function(err){
    console.log(err);
});

//mongoose.connect(
   // "mongodb://mauricio:mm1010mauri@cluster0-qaada.mongodb.net/test?retryWrites=true&w=majority",
  //   { useNewUrlParser: true,useUnifiedTopology: true},
 //    ).catch(function(e){
 //        console.log(e);
//     });

// vai receber toda e qualquer requesição a partir da rota a seguir
app.use('/api', require('./src/routes'));


// ----------Nodemon----------
// com o Nodemon é possivel atualizar as informações da pagina sem restartar
// para instalar utlizar o codigo npm install -D nodemon
// no arquivo package inserir nos scripts 'dev': 'nodemon server.js'
// no terminal executar npm run dev

// abre na porta 3001
app.listen(3001);