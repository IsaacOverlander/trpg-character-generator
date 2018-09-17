import React from 'react';
import {
  HashRouter as Router,
  Route,
  Redirect,
  Switch,
} from 'react-router-dom';

import Header from './components/Header/Header';
import LoginPage from './components/LoginPage/LoginPage';
import RegisterPage from './components/RegisterPage/RegisterPage';
import UserPage from './components/UserPage/UserPage';
import InfoPage from './components/InfoPage/InfoPage';
import GeneralInfoPage from './components/GeneralInfoPage/GeneralInfoPage';
import MainPage from './components/MainPage/MainPage';
import AddCharacter from './components/AddCharacter/AddCharacter';
import AdminPage from './components/AdminPage/AdminPage';
import CharacterSheet from './components/CharacterSheet/CharacterSheet';
import './styles/main.css';

const App = () => (
  <div>
    <Header title="TRPG Character Generator" />
    <Router>
      <Switch>
        <Redirect exact from="/" to="/home" />
        <Route
          path="/home"
          component={GeneralInfoPage}
        />
        <Route
          path="/login"
          component={LoginPage}
        />
        <Route
          path="/register"
          component={RegisterPage}
        />
        <Route 
          path="/main"
          component={MainPage}
        />
        <Route 
          path="/add"
          component={AddCharacter}
        />
        <Route 
          path="/admin"
          component={AdminPage}
        />
        <Route 
          path="/character"
          component={CharacterSheet}
        />
        <Route
          path="/user"
          component={UserPage}
        />
        <Route
          path="/info"
          component={InfoPage}
        />
        {/* OTHERWISE (no path!) */}
        <Route render={() => <h1>404</h1>} />

      </Switch>
    </Router>
  </div>
);

export default App;