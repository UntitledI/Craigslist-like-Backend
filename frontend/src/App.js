import React from 'react';
import './App.css';
import { Switch, Route, Link } from 'react-router-dom';
import Home from './pages/Home';
import Chat from './pages/Chat';
import Listings from './pages/Listings';
import addListings from '.pages/addListings';
import Login from './pages/Login';
import Signup from './pages/Signup';
import UserPage from './pages/UserPage';

const App = () => {
  // todo, add Listing page plus add listing page
  //Add logo (I will provide it soon, or just use the ones provided)
  return (
    <div>
      <nav>
        <Link to="/"> Home </Link>
        <Link to="pages/Chat">Chat</Link>
        <Link to="pages/Listings">Listings</Link>
        <Link to="pages/addListings"></Link>
      </nav>
      <Switch>
        <Route path="/">
          <Home />
        </Route>
        <Route path="/pages/Chat">
          <Chat />
        </Route>
        <Route path="/pages/Listings">
          <Listings />
          <Route path="/pages/addListings">
            <addListings />
          </Route>
        </Route>
      </Switch>
    </div>
  );
};

export default App;