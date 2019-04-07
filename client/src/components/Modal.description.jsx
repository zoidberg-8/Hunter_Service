import React from "react";
import Modal from "react-modal";

class ModalDescription extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      modalstate: false
    };
  }

  toggle() {
    this.setState({
      modalstate: !this.state.modalstate
    });
  }

  render() {
    return (
      <div className="describe-body" onClick={this.toggle.bind(this)}>
        <u>Read more</u>
        <Modal
          isOpen={this.state.modalstate}
          style={{ flex: 1, alignItems: "center", justifyContent: "center" }}
        >
          <p>
            <b>{this.props.info.item_headline}</b>
          </p>
          <p>{this.props.info.description}</p>
          <h4>Benefits</h4>
          <ul>
            <li>{this.props.info.benefits}</li>
            <li>{this.props.info.benefits}</li>
            <li>{this.props.info.benefits}</li>
            <li>{this.props.info.benefits}</li>
          </ul>
        </Modal>
      </div>
    );
  }
}

export default ModalDescription;
