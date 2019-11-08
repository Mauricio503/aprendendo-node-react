const express = require('express');
const routes = express.Router();

const ProductController = require('./controller/ProductController');

routes.get("/products", ProductController.index);

// passando a rota, req(requesição), res (resposta)
routes.get('/createProduct', (req,res) => {
    // criar objeto
    Product.create({
        title: 'React Native',
        description: 'Build native apps with React',
        url: 'http://github.com/facebook/react-native'
    });

    return res.send("Hello World");
});

//esporta
module.exports = routes;