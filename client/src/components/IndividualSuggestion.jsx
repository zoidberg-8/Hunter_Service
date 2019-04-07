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
          src="https://c.static-nike.com/a/images/t_PDP_1728_v1/f_auto,b_rgb:f5f5f5/a1j8vpllwihmgfgzweqx/air-jordan-1-mid-se-mens-shoe-P7bjRV.jpg"
          width="370"
          height="450"
        />
        <p>5 colors</p>
        <p>Air Jordan 1 Mid SE</p>
        <p>$120</p>
      </div>
    );
  }
}

export default IndividualSuggestion;
