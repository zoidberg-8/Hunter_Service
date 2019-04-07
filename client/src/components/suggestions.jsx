import React from "react";
import ReactDOM from "react-dom";
import IndividualSuggestion from "./IndividualSuggestion";

class Suggestions extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      positions: [0, 1, 2]
    };
  }

  nextPosition() {
    var newArr = this.state.positions.map(data => {
      return data + 1;
    });
    this.setState({
      positions: newArr
    });
    if (this.state.positions[0] === 5) {
      this.setState({
        positions: [0, 1, 2]
      });
    }
  }

  render() {
    return (
      <div>
        <h1>YOU MAY ALSO LIKE</h1>
        <button>previous</button>
        <button onClick={this.nextPosition.bind(this)}>next</button>
        <div className="slide-show">
          <div className="slide-show-wrapper">
            <IndividualSuggestion
              data={this.props.suggests}
              position={this.state.positions[0]}
            />
            <IndividualSuggestion
              data={this.props.suggests}
              position={this.state.positions[1]}
            />
            <IndividualSuggestion
              data={this.props.suggests}
              position={this.state.positions[2]}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default Suggestions;
