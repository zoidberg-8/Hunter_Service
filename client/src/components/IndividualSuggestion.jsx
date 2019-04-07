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
        <img
          src={this.props.data[this.props.position].url}
          width="370"
          height="450"
        />
        <p>{this.props.data[this.props.position].colors} colors</p>
        <p>{this.props.data[this.props.position].name}</p>
        <p>${this.props.data[this.props.position].price}</p>
      </div>
    );
  }
}

export default IndividualSuggestion;
