import React from "react";
import Selection from "./selection";

function ModalForm(props) {
  return (
    <form onSubmit={props.handleSubmitClick} className="modal-form">
      <div className="modal-selections">
        {props.list.map((item, index) => {
          return (
            <Selection
              key={index}
              value={item.email}
              name={item.email}
              selectionAction={(event) => {
                props.handleItemSelection(event);
              }}
              title={`${item.firstName} ${item.lastName}`}
              subtitle={item.email}
            />
          );
        })}
      </div>
      <button type="submit" disabled={props.btnDisableValue}>
        {props.buttonTextValue}
      </button>
    </form>
  );
}

export default ModalForm;
