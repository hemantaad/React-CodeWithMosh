import React, { Component } from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import "./App.css";
import NavBar from "./components/common/navbar";
import Movies from "./components/movies";
import NotFound from "./components/common/notFound";
import Customers from "./components/customers";
import Rentals from "./components/rentals";
import MovieForm from "./components/movieForm";

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <main className="container">
          <NavBar />
          <Switch>
            <Route path="/movies" exact component={Movies} />
            <Route path="/customers" component={Customers} />
            <Route path="/rentals" compo nent={Rentals} />
            <Route
              path="/movies/:id"
              render={(props) => <MovieForm {...props} />}
            />
            <Route path="/not-found" component={NotFound} />
            <Redirect from="/" exact to="/movies" />
            <Redirect to="/not-found" />
          </Switch>
        </main>
      </React.Fragment>
    );
  }
}

export default App;
