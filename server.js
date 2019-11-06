// importa o express
const express = require('express');
// executa funcao
const app  = express();

// passando a rota, req(requesição), res (resposta)
app.get('/', (req,res) => {
    res.send("Hello");
});

// abre na porta 3001
app.listen(3001);