import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { Store } from './redux/root';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

const Outlet = document.getElementById('outlet');
const App = () => {
  return <Provider store={Store}>

  </Provider>;
};

ReactDOM.render(<App />, Outlet);
