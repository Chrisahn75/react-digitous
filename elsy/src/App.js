import React from "react";
import './App.css';
import Box from "./components/Box.js"
import "./styles/global.css"

import "bootstrap/dist/css/bootstrap.min.css";

const tempMin = -20;
const tempMax = 40;
const heartMin = 80;
const heartMax = 190;
const stepsMin = 0;
const stepsMax = 50000;

class App extends React.Component {
  constructor() {
    super();
    this.onHeartChange = this.onHeartChange.bind(this);
    this.changeSteps = this.changeSteps.bind(this);
    this.changeTemp = this.changeTemp.bind(this);

    this.state = {
      water: 0,
      heart: 120,
      temperature: -10,
      steps: 3000,
    };
  }

  onHeartChange = (value) => {
    this.setState({ heart: value });
  };

  changeSteps = (value) => {
    this.setState({ steps: value });
  };

  changeTemp = (value) => {
    this.setState({ temperature: value });
  };

  render() {
    return (
      <div className="container-fluid">
        <div className="row">
          {/* WATER*/}
          <Box icon="local_drink" color="#3A85FF" value="1.5" unit="L" />

          {/* STEPS*/}
          <Box icon="directions_walk" color="black" value={this.state.steps} max={stepsMax} min={stepsMin} unit="steps" onChangeVal={this.changeSteps} />

          {/* HEART*/}
          <Box icon="favorite" color="red" value={this.state.heart} max={heartMax} min={heartMin} unit="BPM" onChangeVal={this.onHeartChange}/>

          {/* TEMPERATURE */}
          <Box icon="wb_sunny" color="yellow" value={this.state.temperature} max={tempMax} min={tempMin} unit="°C" onChangeVal={this.changeTemp}/>
        </div>
      </div>
    );
  }
}

export default App;