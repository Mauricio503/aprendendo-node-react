import React, { Component } from 'react';
import api from '../../service/api';

export default class Main extends Component{

    //quando utilizando métodos do react o métodos são formandos com = () =>
    //caso contrário apenas ()

    // é executado assim que o componente é exibido em tela
    componentDidMount(){
        this.loadProducts();
    }

    loadProducts = () => {
        const response = api.get('/products');

        console.log(response.data.docs);
    };
    
    render(){
        return <h1>Hello</h1>
    }


}