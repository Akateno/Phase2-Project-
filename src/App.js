import './App.css';
import NavBar from './components/NavBar';
import ZooAnimalPage from './components/ZooAnimalPage';
// import React, {useEffect} from "react";
import {Route, Switch} from "react-router-dom"
import Home from "./components/Home";
import ZooList from './components/ZooList';

function App() {
  return (
    <div className="container">
      <NavBar/>
      <Switch>
        <Route path="/adopt">
        <ZooAnimalPage/>
        </Route>
        <Route path="/ResidentList">
          <ZooList/>
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
      
      
    </div>
  );
}

export default App;
