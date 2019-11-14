import React from 'react';
//serve para rendenizar
import ReactDOM from 'react-dom';
import App from './App';
import * as serviceWorker from './serviceWorker';

// esta pegando o conteudo do arquivo app e colocar na tag com id root no index.html
ReactDOM.render(<App />, document.getElementById('root'));

serviceWorker.unregister();
