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
        <div>
          <b>Shown:</b> {this.props.describes.shown}
        </div>
        <div>
          <b>Style:</b> {this.props.describes.style}
        </div>
        <p />
        <div>
          <ModalDescription info={this.props.describes} />
        </div>
      </div>
    );
  }
}

export default Description;
