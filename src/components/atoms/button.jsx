import React from "react";
import PropTypes from "prop-types";

function Button(props) {
  return (
    <button
      className="btn btn-primary"
      onClick={props.handleClick()}
    >
      {props.buttonText}
    </button>
  );
}

Button.propTypes = {
  handleClick: PropTypes.func.isRequired,
  buttonText: PropTypes.string.isRequired,
};

export default Button;