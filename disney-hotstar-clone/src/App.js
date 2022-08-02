import React from 'react';
import {BrowserRouter as Router, Routes, Route} from "react-router-dom" ; //advantage of react-router is that the page does not have to be refreshed when a link to another page is clicked
import Login from "./components/Login";
import Header from "./components/Header";
import './App.css';

function App() {
  return(
    <div className= "app">
      <Router>
        <Header />
        <Routes>
          <Route exact path= "/" element = {<Login/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;