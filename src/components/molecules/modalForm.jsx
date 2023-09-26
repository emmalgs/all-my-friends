import React from "react";
import Selection from "./selection";
import PropTypes from "prop-types";

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

ModalForm.propTypes = {
  handleSubmitClick: PropTypes.func.isRequired,
  list: PropTypes.array.isRequired,
  handleItemSelection: PropTypes.func.isRequired,
  buttonTextValue: PropTypes.string.isRequired,
  btnDisableValue: PropTypes.bool.isRequired,
};

export default ModalForm;
