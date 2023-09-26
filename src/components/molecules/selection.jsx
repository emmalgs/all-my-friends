import React from "react";

function Selection(props) {
  return (
    <div className="selection-body">
      <input
        type="checkbox"
        value={props.value}
        name={props.name}
        id={props.name}
        className="selection-input"
        onChange={props.selectionAction}
      />
      <label htmlFor={props.name} className="selection-label">
        <div className="selection-title">{props.title}</div>
        <div className="selection-subtitle">{props.subtitle}</div>
      </label>
    </div>
  );
}

export default Selection;
