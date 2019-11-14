import React, { Component } from 'react';
import api from '../../service/api';

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
        return (
            <div className="product-list">
                {this.state.products.map(product => (
                    <h2 key={product._id}>{product.title}</h2>
                ))}
            </div>
        )
    }


}