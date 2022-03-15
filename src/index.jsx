import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import 'bootstrap/dist/css/bootstrap.min.css';
// eslint-disable-next-line
import $ from 'jquery';
// eslint-disable-next-line
import Popper from 'popper.js';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import { Provider } from 'react-redux';

import store from './store';
import Login from './Pages/Login/Login';
import Signup from './Pages/Signup/Signup';
import NotFound from './Pages/NotFound/NotFound';

import './Complements/Styles/input.scss';
import './Complements/Styles/card.scss';
import './Complements/Styles/text.scss';
import './Complements/Styles/div.scss';
import './Complements/Styles/body.scss';
import './Complements/Styles/span.scss';
import './Complements/Styles/button.scss';
import './Complements/Styles/img.scss';
import './Complements/Styles/footer.scss';
import Home from './Pages/Home/Home';
import * as serviceWorker from './serviceWorker';
import Index from './Pages/Index/Index';

function App() {
  return (
    <Provider store={store}>
      <Router>
        <Switch>
          <Route exact path="/" component={Index} />
          <Route path="/objectives" component={Index} />
          <Route path="/context" component={Index} />
          <Route path="/handbook" component={Index} />
          <Route path="/login" component={Login} />
          <Route path="/signup" component={Signup} />
          <Route path="/home" component={Home} />
          <Route path="/ComponentTest" component={Home} />
          <Route component={NotFound} />
        </Switch>
      </Router>
    </Provider>
  );
}
render(<App />, document.getElementById('root'));
serviceWorker.unregister();