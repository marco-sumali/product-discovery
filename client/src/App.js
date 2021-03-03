import React from 'react';
import {Route, Switch} from "react-router-dom";
import {Router} from "react-router";
import {createBrowserHistory} from "history";

import FAQPage from './pages/faq';
import ContactUsPage from './pages/contact';

const history = createBrowserHistory();

function App() {
  return (
    <Router history={history}>
      <Switch>
        <Route exact path="/faq" component={FAQPage} />
        <Route exact path="/contact-us" component={ContactUsPage} />
      </Switch>
    </Router>
  );
}

export default App;
