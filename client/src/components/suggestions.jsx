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

  prevPosition() {
    var newArr = this.state.positions.map(data => {
      return data - 1;
    });
    if (this.state.positions[0] === 0) {
      this.setState({
        positions: [0, 1, 2]
      });
    }
    if (this.state.positions[0] !== 0) {
      this.setState({
        positions: newArr
      });
    }
  }

  render() {
    return (
      <div>
        <h3>
          <b>YOU MAY ALSO LIKE</b>
        </h3>
        <div className="slide-show">
          <button className="prev" onClick={this.prevPosition.bind(this)}>
            &lt;
          </button>
          <button className="next" onClick={this.nextPosition.bind(this)}>
            &gt;
          </button>
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
