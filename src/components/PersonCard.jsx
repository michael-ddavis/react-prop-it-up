import React, { Component } from "react";

class PersonCard extends Component {
  render() {
    const { firstName, lastName, age, hairColor } = this.props;
    return (
      <div className="card section">
        <div className="card-body">
          <h1>
            {firstName} {lastName}
          </h1>
          <p>Age: {age}</p>
          <p>Hair Color: {hairColor}</p>
        </div>
      </div>
    );
  }
}

export default PersonCard;
