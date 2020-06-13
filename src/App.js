import React from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import Home from 'pages/Home';
import 'fontsource-roboto';
import './scss/index.scss';


function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" component={Home} exact />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
