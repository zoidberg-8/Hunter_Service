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
            <b>WALKING ON AIR.</b>
          </p>
          <p>
            Boasting the largest-ever Max Air heel unit created by Nike, the
            Nike Air Max 270 SE delivers visible Air under every step. Inspired
            by iconic Air Max shoes from the early '90s, this modern
            interpretation delivers comfort solutions in a breathable, sleek
            silhouette.
          </p>
          <h2>Benefits</h2>
          <ul>
            <li>Large Max Air unit offers responsive cushioning.</li>
            <li>Bootie construction delivers a sock-like fit.</li>
            <li>
              Waffle-inspired rubber coverage on the outsole supplies durable
              traction.
            </li>
            <li>
              TPU heel clip adds support and a smooth transition to the Max Air
              unit.
            </li>
            <li>Heel pull tab allows for easy on and off.</li>
            <li>Shown: Anthracite/Black/Bright Crimson/Vol</li>
            <li>Style: AQ9164-005</li>
          </ul>
        </Modal>
      </div>
    );
  }
}

export default ModalDescription;
