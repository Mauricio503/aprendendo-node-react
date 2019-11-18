import React, { Component } from 'react';
import api from '../../service/api';
import "./style.css";

export default class Main extends Component{
    // state é um objeto
    state = {
        products: [],
        productInfo: {},
        page: 1,
    };

    //quando utilizando métodos do react o métodos são formandos com = () =>
    //caso contrário apenas ()

    // é executado assim que o componente é exibido em tela
    componentDidMount(){
        this.loadProducts();
    }

    loadProducts = async (page = 1) => {
        const response = await api.get('/products?page=${page}');

        const { docs, ...productInfo } = response.data;

        //popula objeto
        this.setState({ products: docs, productInfo, page });
    };
    
    prevPage = () => {
        const { page, productInfo} = this.state;
        if(page === 1) return;
        const pageNumber = page - 1;
        this.loadProducts(pageNumber);
    }

   
    nextPage = () => {
         //busca pagina atual e o produto
        const { page, productInfo} = this.state;

        //verifica se a pagina atual ja é a ultima pagina
        if(page === productInfo.pages) return;

        const pageNumber = page + 1;

        this.loadProducts(pageNumber);

    }
    

    //percorre lista e mostra na tela
    render(){
        const {products, page, productInfo } = this.state;

        return (
            <div className="product-list">
                {products.map(product => (
                    <article key={product._id}>
                        <strong>{product.title}</strong>
                        <p>{product.description}</p>

                        <a href="">Acessar</a>
                    </article>
                ))}
                <div className="actions">
                    <button disabled={page === 1} onClick={this.prevPage}>Anterior</button>
                    <button disabled={page === productInfo.pages} onClick={this.nextPage}>Próxima</button>
                </div>
            </div>
        )
    }


}