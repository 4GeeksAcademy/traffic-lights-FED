//import react into the bundle
import React from "react";
import ReactDOM from "react-dom";

// include your styles into the webpack bundle
import "../styles/index.css";

//import your own components
import TrafficLights from "./component/TrafficLights.jsx";

const App = () => {
    return (
      <div className="App">
        <TrafficLights />
      </div>
    );
  }

//render your react application
ReactDOM.render(<App />, document.querySelector("#app"));
