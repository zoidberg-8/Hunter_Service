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
        <p>
          The Nike Air Max 720 goes bigger than ever before with Nike’s tallest
          Air unit yet, offering more air underfoot for unimaginable, all-day
          comfort. Has Air Max gone too far? We hope so.
        </p>

        <div>
          <b>Shown:</b> Black/Volt/Bright Crimson
        </div>
        <div>
          <b>Style:</b> AO2924-008
        </div>
        <p />
        <div>
          <ModalDescription />
        </div>
      </div>
    );
  }
}

export default Description;
