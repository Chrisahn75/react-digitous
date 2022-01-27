import React from "react";
import './App.css';
import Box from "./components/Box"
import "./styles/global.css"

import "bootstrap/dist/css/bootstrap.min.css";

class App extends React.Component {
  constructor() {
		super();
		this.state = {
			water : 0,
      heart : 120,
      temperature : -10,
      steps  : 3000
		};
  }

  render() {
    return (
      <div className="container-fluid">
        <div className="row">
          {/* WATER */}
           <Box icon="local_drink" color="#3A85FF" value="1.5" unit="L" />

          {/* STEPS */}
          <Box icon="directions_walk" color="black" value="3000" unit="steps" />

          {/* HEART */}
          <Box icon="favorite" color="red" value="120" unit="bpm" />

          {/* TEMPERATURE */}
          <Box icon="wb_sunny" color="yellow" value="-10" unit="°C" />     
        </div>
      </div>
    );
  }
}

export default App;
