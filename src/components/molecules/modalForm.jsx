import React from "react";
import Selection from "../atoms/selection";

function ModalForm(props) {
  <form onSubmit={props.handleSubmitClick}>
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
    <button type="submit">{props.buttonTextValue}</button>
  </form>;
}

export default ModalForm;