import React, { Component } from 'react';
import api from '../../service/api';
import "./style.css";

export default class Main extends Component{
    // state é um objeto
    state = {
        products: []
    };

    //quando utilizando métodos do react o métodos são formandos com = () =>
    //caso contrário apenas ()

    // é executado assim que o componente é exibido em tela
    componentDidMount(){
        this.loadProducts();
    }

    loadProducts = async () => {
        const response = await api.get('/products');
        //popula objeto
        this.setState({ products: response.data.docs });
    };
    
    //percorre lista e mostra na tela
    render(){
        const {products } = this.state;

        return (
            <div className="product-list">
                {products.map(product => (
                    <article key={product._id}>
                        <strong>{product.title}</strong>
                        <p>{product.description}</p>

                        <a href="">Acessar</a>
                    </article>
                ))}
            </div>
        )
    }


}