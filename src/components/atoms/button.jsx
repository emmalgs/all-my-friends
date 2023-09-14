import React from "react";

function Button(props) {
  return (
    <button
      className="btn btn-primary"
      onClick={() => props.handleClick()}
    >
      {props.buttonText}
    </button>
  );
}

export default Button;