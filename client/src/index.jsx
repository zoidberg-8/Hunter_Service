import React from "react";
import ReactDOM from "react-dom";
import Description from "./components/Description.jsx";
import Suggestions from "./components/suggestions.jsx";

class App extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <Description />
        <Suggestions />
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("app"));
