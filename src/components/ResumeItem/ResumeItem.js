import React, { Component } from "react";
import PropTypes from "prop-types";

class ResumeItem extends Component {
  render() {
    const { name, price } = this.props;

    return (
      <div>
        <span style={{ fontSize: "20px", fontWeight: "bold" }}>{name}</span>{" "}
        <span
          style={{
            fontSize: "15px",
            fontWeight: "bold",
          }}
        >
          ${price}
        </span>
      </div>
    );
  }
}

ResumeItem.propTypes = {
  name: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
};
export default ResumeItem;
