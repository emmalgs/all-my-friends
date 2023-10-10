import React, { useState } from "react";
import ModalHeader from "../molecules/modalHeader";
import ModalForm from "../molecules/modalForm";
import PropTypes from "prop-types";

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
        onSubmit={handleSubmit}
        list={props.friendsList}
        handleItemSelection={handleSelection}
        buttonTextValue={buttonText}
        isSubmitDisabled={selected.length === 0}
      />
    </div>
  );
}

FriendsModal.propTypes = {
  exitClick: PropTypes.func.isRequired,
  friendsList: PropTypes.array.isRequired,
  inviteFriends: PropTypes.func.isRequired,
};

export default FriendsModal;
