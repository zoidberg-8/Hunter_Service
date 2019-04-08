import React from "react";
import ReactDOM from "react-dom";
import ModalDescription from "./Modal.description.jsx";

class Description extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="describe">
        <p>{this.props.describes.description}</p>
        <ul>
          <li>Shown: {this.props.describes.shown}</li>
          <li>Style: {this.props.describes.style}</li>
        </ul>
        <p />
        <div>
          <ModalDescription info={this.props.describes} />
        </div>
      </div>
    );
  }
}

export default Description;
