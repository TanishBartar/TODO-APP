import React,{useState,useEffect} from 'react';

import './App.css';
import db from './firebase'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Sidebar from './sidebar';
import Chat from './chat'
import Meeting from './meeting'
import Login from './login'
function App() {
return (
  <Router>
    <Switch>
      <Route path="/meeting" component={Meeting} />
      <Route path="/" component={Login}/>
    </Switch>
  </Router>
   
  );
}

export default App;
