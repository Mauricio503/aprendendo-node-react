// importa o express
const express = require('express');
// executa funcao
const app  = express();

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