import React, { createContext, useState } from 'react';
import logo from './logo.svg';
import './App.css';
import Home from './component/Home/Home';
import Header from './component/Home/Header/Header';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import LogIn from './component/Home/LogIn/LogIn';
import PrivateRoute from './component/PrivateRoute/PrivateRoute';
import Book from './component/Book/Book';

export const UserContext = createContext();


function App() {
  const [loggedInUser, setLoggedInUser] = useState({})
  return (
    <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>
      <Router>
        <Header />
        <Switch>
          <Route path="/home">
            <Home />
          </Route>
          <Route path="/login">
            <LogIn />
          </Route>
          <PrivateRoute path="/book">
            <Book />
          </PrivateRoute>
          <Route exact path="/">
            <Home />
          </Route>
        </Switch>
      </Router>
    </UserContext.Provider>
  );
}

export default App;
