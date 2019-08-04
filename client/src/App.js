import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import MainPage from "./pages/MainPage";
import MenuPage from "./pages/MenuPage";

function App() {
  return (
   <Router>
      <div>
         <Switch>
            <Route exact path="/" component={MainPage} />
            <Route exact path="/MenuPage" component={MenuPage} />
            <Route component={MainPage} />
         </Switch>
      </div>
   </Router>
  );
}

export default App;