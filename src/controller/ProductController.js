const mongoose = require('mongoose');

// cria o objeto
const Product  = mongoose.model('Product');

// funções
module.exports = {
    async index(req,res){
        const products = await Product.find();

        return res.json(products);
    },

    async store(req,res){
        const Product = await Product.create(req.body);

        return res.json(product);
    }
};