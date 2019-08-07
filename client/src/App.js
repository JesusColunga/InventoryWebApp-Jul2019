// /client/src/App.js

import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import MainPage      from "./pages/MainPage";
import MenuPage      from "./pages/MenuPage";
import ProdsDetPage  from "./pages/ProdsDetPage";
import ProdsListPage from "./pages/ProdsListPage";
import ProvsDetPage  from "./pages/ProvsDetPage";
import ProvsListPage from "./pages/ProvsListPage";
import CliDetPage    from "./pages/CliDetPage";
import CliListPage   from "./pages/CliListPage";
import PurDetPage    from "./pages/PurDetPage";
import PurListPage   from "./pages/PurListPage";
import SalesDetPage  from "./pages/SalesDetPage";
import SalesListPage from "./pages/SalesListPage";
import KardDetPage   from "./pages/KardDetPage";
import KardListPage  from "./pages/KardListPage";

function App() {
  return (
   <Router>
      <div>
         <Switch>
            <Route exact path="/"                   component={MainPage} />
            <Route exact path="/MenuPage"           component={MenuPage} />
            <Route exact path="/productsDetail"     component={ProdsDetPage} />
            <Route exact path="/productsDetail/:id" component={ProdsDetPage} />
            <Route exact path="/productsList"       component={ProdsListPage} />
            <Route exact path="/providersDetail"    component={ProvsDetPage} />
            <Route exact path="/providersList"      component={ProvsListPage} />
            <Route exact path="/clientsDetail"      component={CliDetPage} />
            <Route exact path="/clientsList"        component={CliListPage} />
            <Route exact path="/purchasesDetail"    component={PurDetPage} />
            <Route exact path="/purchasesList"      component={PurListPage} />
            <Route exact path="/salesDetail"        component={SalesDetPage} />
            <Route exact path="/salesList"          component={SalesListPage} />
            <Route exact path="/kardexDetail"       component={KardDetPage} />
            <Route exact path="/kardexList"         component={KardListPage} />
            <Route component={MainPage} />
         </Switch>
      </div>
   </Router>
  );
}

export default App;