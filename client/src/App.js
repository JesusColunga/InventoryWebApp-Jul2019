import React from 'react';
import './App.css';
import Button from 'react-bootstrap/Button';
import SignUpBtn from "./components/SignUpBtn";

function App() {
  return (
    <div className="App">
       <h1> Inventory Management </h1>

       <div className="imgContainer">
         <img src="warehouse.jpg" alt="Warehouse" id="imgW"/>
       </div>

       <div>
         <Button variant="outline-success"> Log In  </Button>
       </div>

       <SignUpBtn />

       <p>
          This is a web app to controll your inventory <br></br>
          from any place you are <br></br>
          and any device you have
       </p>
       
    </div>
  );
}

export default App;