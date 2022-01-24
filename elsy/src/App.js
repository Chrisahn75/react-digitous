import React from "react";
import './App.css';
import Steps from "./components/Steps"
import "./styles/global.css"

import "bootstrap/dist/css/bootstrap.min.css";


class App extends React.Component {
tempMin = -20;
tempMax = 40;
heartMin = 80;
heartMax = 180;
stepsMin = 0;
stepsMax = 50000;
  render() {
    return (
      <div className="container-fluid">
        <div className="row">
          <p> Temperature : {this.tempMin}</p>
          <p> Heart: {this.heartMin}</p>
          <p> Steps : {this.stepsMin}</p>
          <Steps />
        </div>
      </div>
    );
  }
}

export default App;
