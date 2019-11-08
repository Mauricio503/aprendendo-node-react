// importa o express
const express = require('express');
//importa mongo, para instalar utlizar no terminal npm install mongoose
const mongoose = require('mongoose');
// requireDir mapeia os models
// utlizar npm install require-dir para instalar
const requireDir = require('require-dir');

// iniciando do app
const app  = express();

// iniciando banco de dados
requireDir("./src/models");

const url = "mongodb://mauricio:mm1010mauri@cluster0-qaada.mongodb.net/test";
const db = mongoose.createConnection(url,{ useNewUrlParser: true , useUnifiedTopology: true }).catch(function(err){
    console.log(err);
});

//mongoose.connect(
   // "mongodb://mauricio:mm1010mauri@cluster0-qaada.mongodb.net/test?retryWrites=true&w=majority",
  //   { useNewUrlParser: true,useUnifiedTopology: true},
 //    ).catch(function(e){
 //        console.log(e);
//     });

// cria o objeto
const Product  = mongoose.model('Product');


// passando a rota, req(requesição), res (resposta)
app.get('/', (req,res) => {
    Product.create({
        title: 'React Native',
        description: 'Build native apps with React',
        url: 'http://github.com/facebook/react-native'
    });

    return res.send("Hello World");
});

// ----------Nodemon----------
// com o Nodemon é possivel atualizar as informações da pagina sem restartar
// para instalar utlizar o codigo npm install -D nodemon
// no arquivo package inserir nos scripts 'dev': 'nodemon server.js'
// no terminal executar npm run dev

// abre na porta 3001
app.listen(3001);