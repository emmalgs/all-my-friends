import  React, { useState } from "react";

function Selection(props) {
  const [selectionStyle, setSelectionStyle] = useState(disabled);

  const disabled = {
    border: "1px solid #a0a0a0",
  };

  const enabled = {
    border: "1px solid #3b82f6",
  };

  const handleSelectionDivClick = (event) => {
    event.target.checked
      ? setSelectionStyle(enabled)
      : setSelectionStyle(disabled);
  };

  return (
    <div
      className="selection-body"
      onChangeCapture={handleSelectionDivClick}
      style={selectionStyle}
    >
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
