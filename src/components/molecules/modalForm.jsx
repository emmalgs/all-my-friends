import React from "react";
import Selection from "./selection";
import PropTypes from "prop-types";

function ModalForm(props) {
  return (
    <form onSubmit={props.onSubmit} className="modal-form">
      <div className="modal-selections">
        {props.list.map((item, index) => {
          return (
            <Selection
              key={index}
              value={item.email}
              name={item.email}
              selectionAction={(event) => {
                props.onSelect(event);
              }}
              title={`${item.firstName} ${item.lastName}`}
              subtitle={item.email}
            />
          );
        })}
      </div>
      <button type="submit" disabled={props.isSubmitDisabled}>
        {props.buttonTextValue}
      </button>
    </form>
  );
}

ModalForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  list: PropTypes.array.isRequired,
  onSelect: PropTypes.func.isRequired,
  buttonTextValue: PropTypes.string.isRequired,
  isSubmitDisabled: PropTypes.bool.isRequired,
};

export default ModalForm;
