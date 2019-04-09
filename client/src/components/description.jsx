import React from "react";
import ReactDOM from "react-dom";
import ModalDescription from "./Modal.description.jsx";
import SizeButton from "./SizeButton.jsx";

class Description extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="describe">
        <div>Select Size</div>
        <div className="size">
          {this.props.size.map(data => (
            <SizeButton data={data} />
          ))}
        </div>
        <div className="shopping-buttons">
          <button className="add-cart">Add to Cart</button>
          <button className="heart">&lt;3</button>
        </div>

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
