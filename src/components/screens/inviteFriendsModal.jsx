import React, { useState } from "react";
import ModalHeader from "../molecules/modalHeader";
import ModalForm from "../molecules/modalForm";

function FriendsModal(props) {
  const [selected, setSelected] = useState([]);

  const handleSubmit = (event) => {
    event.preventDefault();
    props.inviteFriends(selected);
    props.exitClick();
  };

  const handleSelection = (event) => {
    if (event.target.checked) {
      setSelected([...selected, event.target.value]);
    } else {
      setSelected(selected.filter((email) => email !== event.target.value));
    }
  };

  const buttonText =
    selected.length === 1
      ? "Send invite to 1 person"
      : selected.length === 0
      ? `Send invites`
      : `Send invites to ${selected.length} people`;

  return (
    <div className="modal">
      <ModalHeader exit={props.exitClick} />
      <ModalForm
        handleSubmitClick={handleSubmit}
        list={props.friendsList}
        handleItemSelection={handleSelection}
        buttonTextValue={buttonText}
        btnDisableValue={selected.length === 0}
      />
    </div>
  );
}

export default FriendsModal;
