import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import NavBar from './assets/components/NavBar';
import Home from './assets/components/Home'
import ItemListContainer from './assets/components/ItemListContainer';
import ItemDetailContainer from './assets/components/ItemDetailContainer';
import CartWidget from './assets/components/CartWidget'
import NotFound from './assets/components/NotFound';

function App() {
  return (
    <Router>
      <div> 
        <NavBar/>
        <CartWidget/>
        
        <h1 className='text-3xl font-bold underline'>
          E-commerce de Fotografía
        </h1>
      </div>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/" exact component={ItemListContainer} />
        <Route path="/category/:category" component={ItemListContainer} />
        <Route path="/product/:id" component={ItemDetailContainer} />
        <Route path="*" component={NotFound} />
      </Switch>
    </Router>
  );
}

export default App;









