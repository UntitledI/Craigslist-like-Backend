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
        <Link to="pages/Listing">Listings</Link>
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
        </Route>
      </Switch>
    </div>
  );
};

export default App;