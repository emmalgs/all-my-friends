import React from "react";

function Selection(props) {
  return (
    <div>
      <label>{props.title}</label>
      <input type="checkbox" value={props.value} />
    </div>
  );
}
