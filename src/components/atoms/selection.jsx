import React from "react";

function Selection(props) {
  return (
    <div className={props.class}>
      <input
        type="checkbox"
        value={props.value}
        name={props.name}
        onChange={props.selectionAction}
      />
      <label className={props.labelClass}>
        <div>{props.title}</div>
        <div>{props.subtitle}</div>
      </label>
    </div>
  );
}

export default Selection;
