import React from "react";
import ReactDOM from "react-dom";
import Description from "./components/Description.jsx";
import Suggestions from "./components/suggestions.jsx";
import axios from "axios";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      suggest: [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
      descript: []
    };
  }
  componentDidMount() {
    axios
      .get(`/api/suggestions`)
      .then(response => {
        this.setState({ suggest: response.data });
      })
      .catch(error => {
        console.log(error);
      });
    axios
      .get(`/api/description`)
      .then(response => {
        this.setState({ descript: response.data[0] });
      })
      .catch(error => {
        console.log(error);
      });
  }
  render() {
    return (
      <div>
        <Description describes={this.state.descript} />
        <Suggestions suggests={this.state.suggest} />
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("app"));
