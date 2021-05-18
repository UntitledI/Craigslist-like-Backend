import React from 'react';
import './App.css';
import { Switch, Route, Link } from 'react-router-dom';
import Home from './pages/Home';
import Chat from './pages/Chat';
import Listings from './pages/ViewListings';
import AddListings from './pages/AddListings';
// import Login from './pages/Login';
// import Signup from './pages/Signup';
// import UserPage from './pages/UserPage';

const App = ({ws}) => {
  // todo, add Listing page plus add listing page
  //Add logo (I will provide it soon, or just use the ones provided)
  return (
    <div>
      <nav>
        <Link to="/"> Home </Link>
        <Link to="/Listings">Listings</Link>
        <Link to="/AddListings"> AddListings</Link>
      </nav>
      <Switch>
        <Route path="/">
          <Home />
        </Route>
        <Route path="/pages/Listings">
          <Listings ws = {ws} />
          <Route path="/pages/AddListings">
            <AddListings />
          </Route>
        </Route>
      </Switch>
    </div>
  );
};

export default App;