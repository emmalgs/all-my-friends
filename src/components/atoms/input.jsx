import React from "react";

function Input(props) {
  return (
    <input type="checkbox"
      value={props.value}
      name={props.name}
      onChange={props.updateSelection}
    />
  )
}

export default Input;