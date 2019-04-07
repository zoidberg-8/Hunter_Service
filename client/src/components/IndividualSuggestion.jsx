import React from "react";
import ReactDOM from "react-dom";

class IndividualSuggestion extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="shoe">
        <p />
        <img src={this.props.data.url} width="370" height="450" />
        <p>{this.props.data.colors} colors</p>
        <p>{this.props.data.name}</p>
        <p>${this.props.data.price}</p>
      </div>
    );
  }
}

export default IndividualSuggestion;