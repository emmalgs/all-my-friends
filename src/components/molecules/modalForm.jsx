import React from "react";
import Selection from "./selection";

function ModalForm(props) {
  return (
  <form onSubmit={props.handleSubmitClick} className="modal-form">
    {props.list.map((item, index) => {
      return (
        <Selection
          key={index}
          class="friend-select"
          value={item.email}
          name={item.email}
          selectionAction={(event) => {
            props.handleItemSelection(event);
          }}
          labelClass="friend-select-label"
          title={`${item.firstName} ${item.lastName}`}
          subtitle={item.email}
        />
      );
    })}
    <button type="submit" disabled={props.btnDisableValue}>{props.buttonTextValue}</button>
  </form>
  );
}

export default ModalForm;