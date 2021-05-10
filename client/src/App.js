import React, { useState } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { Header } from './components/Header';
import { useRoutes } from './routes';
import { Context } from './components/Context';

const App = () => {
  const [allCarts, setAllCarts] = useState([]);
  const routes = useRoutes();
  return (
    <>
      <Router>
        <Context.Provider value={[allCarts, setAllCarts]}>
          <Header />
          <div>{routes}</div>
        </Context.Provider>
      </Router>
    </>
  );
};

export default App;
