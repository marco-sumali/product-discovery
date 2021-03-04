import React from 'react';
import {Route, Switch} from "react-router-dom";
import {Router} from "react-router";
import {createBrowserHistory} from "history";

import HomePage from './pages/home';
import FAQPage from './pages/faq';
import ContactUsPage from './pages/contact';
import NotFoundPage from './pages/not-found';
import ChatIcon from './components/chat';

const history = createBrowserHistory();

function App() {
  return (
    <div>
      <Router history={history}>
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/faq" component={FAQPage} />
          <Route exact path="/contact-us" component={ContactUsPage} />
          <Route exact path="*" component={NotFoundPage} />
        </Switch>
      </Router>
      <ChatIcon />
    </div>
  );
}

export default App;
