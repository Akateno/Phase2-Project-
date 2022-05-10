import './App.css';
import NavBar from './components/NavBar';
import ZooAnimalPage from './components/ZooAnimalPage';
import React from "react";
import {Route, Switch} from "react-router-dom"
import ZooAnimalForm from './components/ZooAnimalForm';
import Home from "./components/Home";

function App() {

  return (
    <div>
      <NavBar/>
      <Switch>
        <Route path="/adopt">
          <ZooAnimalForm handleAddAnimal={handleAddAnimal}/>
        </Route>
        <Route path="/petList">
          <ZooAnimalPage/>
        </Route>
        <Route path="/">
          <Home/>
        </Route>
      </Switch>
    </div>
  );
}

export default App;
