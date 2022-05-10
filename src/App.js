import './App.css';
import NavBar from './components/NavBar';
import ZooAnimalPage from './components/ZooAnimalPage';
// import React, {useEffect} from "react";
import {Route, Switch} from "react-router-dom"
import ZooAnimalForm from './components/ZooAnimalForm';
import Home from "./components/Home";

function App() {

  
  console.log("hello")
  return (
<<<<<<< HEAD
    <div className="App">
      <NavBar />
      <ZooAnimalPage />
=======
    <div>
      <NavBar/>
      <Switch>
        <Route path="/adopt">
          <ZooAnimalForm/>
        </Route>
        <Route path="/petList">
          <ZooAnimalPage/>
        </Route>
        <Route path="/">
          <Home/>
        </Route>
      </Switch>
      
      
>>>>>>> 421c061f42290f17c3579801e5791ddeff065832
    </div>
  );
}

export default App;
