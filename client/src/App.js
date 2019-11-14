import React from 'react';
import Header from './components/header';
import Main from './page/main';

import './style.css'

// setando header na div
const App = () => (
    <div className="App">
         <Header />
         <Main />
    </div>
);

// para acessar apiRest externa utiliza-se o axios
// para instalar utlizar yarn add axios
export default App;
