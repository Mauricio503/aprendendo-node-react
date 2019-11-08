const mongoose = require('mongoose');

// cria o objeto
const Product  = mongoose.model('Product');

// funções
module.exports = {
    async index(req,res){
        // query recebe os parametros exemplo product/page=2
        // se não tiver parametro vai ser 1
        const { page = 1 } = req.query;
        // paginate pagina o model e dentro dele pode colocar as condição como limitar em 10 registros
        const products = await Product.paginate({},{page, limit:10});

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