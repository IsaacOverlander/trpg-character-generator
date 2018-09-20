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
import GeneralInfoPage from './components/GeneralInfoPage/GeneralInfoPage';
import MainPage from './components/MainPage/MainPage';
import AddCharacter from './components/AddCharacter/AddCharacter';
import AdminPage from './components/AdminPage/AdminPage';
import CharacterSheet from './components/CharacterSheet/CharacterSheet';
import SampleOne from './components/SampleCharacters/SampleOne';
import SampleTwo from './components/SampleCharacters/SampleTwo';
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
          path="/sample1"
          component={SampleOne}
        />
        <Route
          path="/sample2"
          component={SampleTwo}
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
          path="/character/:id"
          component={CharacterSheet}
        />
        {/* OTHERWISE (no path!) */}
        <Route render={() => <h1>404</h1>} />

      </Switch>
    </Router>
  </div>
);

export default App;
