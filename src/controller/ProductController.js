const mongoose = require('mongoose');

// cria o objeto
const Product  = mongoose.model('Product');

// funções
module.exports = {
    async index(req,res){
        const products = await Product.find();

        return res.json(products);
    },

    async show(req,res){
        const product = await Product.findById(req.params.id);

        return res.json(product);
    },

    async store(req,res){
        const Product = await Product.create(req.body);

        return res.json(product);
    },

    // {new: true} faz com que atualiza a variável
    async update(req,res){
        const product = await Product.findByIdAndUpdate(req.params.id, req.body, {new: true });

        return res.json(product);
    },

    async destroy(req,res){
        await Product.findByIdAndRemove(req.params.id);
        return res.send();
    }
};