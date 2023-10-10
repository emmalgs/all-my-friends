import React from "react";
import PropTypes from "prop-types";

function Input(props) {
  return (
    <input type="checkbox"
      value={props.value}
      name={props.name}
      onChange={props.updateSelection}
    />
  )
}

Input.propTypes = {
  value: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  updateSelection: PropTypes.func.isRequired,
}

export default Input;