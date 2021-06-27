import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Layout from './hoc/Layout/Layout';
import Home from './containers/Home/Home';
import Account from './containers/Account/Account';
import SignUp from './containers/Auth/SignUp/SignUp'

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Route path="/account" component={Account} />
        <Route path="/signup" component={SignUp} />
        <Route path="/" exact component={Home} />
      </Layout>    
    </BrowserRouter>
  )
}

export default App;
