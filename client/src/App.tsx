import React from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';

import useProducts from './hooks/useProducts';
import Products from './components/Products';

const App: React.FC = () => {
  const shirts = useProducts('shirts');
  const jackets = useProducts('jackets');
  const accessories = useProducts('accessories');

  if (shirts.error || jackets.error || accessories.error) {
    return <div>connection to server timed out. please reload the page.</div>;
  }

  return (
    <Router>
      <div className='wrapper'>
        <h1 className='main-header'>Warehouse</h1>
        <h3 className='sub-header'>Show me:</h3>
        <div className='categories'>
          <Link to='/accessories'>
            <span className='category-head'>Accessories</span>
          </Link>
          <Link to='/jackets'>
            <span className='category-head'>Jackets</span>
          </Link>
          <Link to='/shirts'>
            <span className='category-head'>Shirts</span>
          </Link>
        </div>
        <Switch>
          <Route exact path='/accessories'>
            <Products
              loading={accessories.loading}
              products={accessories.products}
            />
          </Route>
          <Route exact path='/jackets'>
            <Products loading={jackets.loading} products={jackets.products} />
          </Route>
          <Route exact path='/shirts'>
            <Products loading={shirts.loading} products={shirts.products} />
          </Route>
        </Switch>
      </div>
    </Router>
  );
};

export default App;
