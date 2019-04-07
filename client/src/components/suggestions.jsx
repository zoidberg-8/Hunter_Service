import React from "react";
import ReactDOM from "react-dom";
import IndividualSuggestion from "./IndividualSuggestion";

class Suggestions extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <h1>YOU MAY ALSO LIKE</h1>
        <div className="slide-show">
          <div className="slide-show-wrapper">
            {this.props.suggests.map((data) => (
              <IndividualSuggestion data={data}/>
            ))}
          </div>
        </div>
      </div>
    );
  }
}

{
  /* <div className="shoes">
  {this.state.suggest.map(arg => (
    <IndividualSuggestion arg={arg} />
  ))}
</div>; */
}

export default Suggestions;
