import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { Store } from './redux/root';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { MainPage } from './pages/main-page/main-page';
import { MatchesPage } from './pages/matches-page/matches-page';

const Outlet = document.getElementById('outlet');

const App = () => {
  return <Provider store={Store}>
    <BrowserRouter>
        <Switch>
          <Route path='/:name' component={MatchesPage} />
          <Route path='/' exact={true} component={MainPage} />
        </Switch>
    </BrowserRouter>
  </Provider>;
};

ReactDOM.render(
  <App />, 
  Outlet
);
