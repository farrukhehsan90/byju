import React, { Component } from 'react';
import {BrowserRouter as Router , Route} from 'react-router-dom';
import {Provider} from 'react-redux';
import store from './store/Store';
import JobListing from './components/job-listing/JobListing';
import Landing from './components/landing/Landing';
import SingleJob from './components/single-job/SingleJob';
import PrivateRoute from './common/PrivateRoute';

class App extends Component {
  state = {  }
  render() {
    return (
      <Provider store={store}>
        <Router>
      <Route exact path="/" component={Landing} />
      <PrivateRoute exact path="/jobs" component={JobListing} />
      <PrivateRoute exact path="/job/:id" component={SingleJob} />
        </Router>
      </Provider>
    );
  }
}

export default App;