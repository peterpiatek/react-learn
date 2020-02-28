import React, { Component } from "react";
import { SportsStoreDataStore } from "./data/DataStore";
import { Provider } from "react-redux";
import "bootstrap/dist/css/bootstrap.css";
import "@fortawesome/fontawesome-free/css/all.min.css";

import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect
} from "react-router-dom";
import { ShopConnector } from "./shop/ShopConnector";


export default class App extends Component {
  render() {
    return (
      <Provider store={SportsStoreDataStore}>
        <Router>
          <Switch>
            <Route path="/shop" component={ShopConnector} />
            <Redirect to="/shop" />
          </Switch>
        </Router>
      </Provider>
    );
  }
}
