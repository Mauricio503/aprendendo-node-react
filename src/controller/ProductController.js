const mongoose = require('mongoose');

// cria o objeto
const Product  = mongoose.model('Product');

// funções
module.exports = {
    async index(req,res){
        const products = await Product.find();

        return res.json(products);
    }
};