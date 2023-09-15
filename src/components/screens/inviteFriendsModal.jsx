import React, { useState } from "react";
import Selection from "../atoms/selection";
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
      setSelected(
        selected.filter((email) => email !== event.target.value)
      );
    }
  };

  const buttonText =
    selected.length === 1
      ? "Send invite to 1 person"
      : selected.length === 0
      ? `Send invites`
      : `Send invites to ${selected.length} people`;

  return (
    <div>
      <div className="modal-header">
        <span onClick={props.exitClick}>x</span>
        <h1>Invite Friends</h1>
      </div>
      <div className="modal-body">
        <form onSubmit={handleSubmit}>
          {props.friendsList.map((friend, index) => {
            return (
              <Selection 
                key={index}
                class="friend-select"
                value={friend.email}
                name={friend.email}
                selectionAction={(event) => {handleSelection(event)}}
                labelClass="friend-select-label"
                title={`${friend.firstName} ${friend.lastName}`}
                subtitle={friend.email}
              />
            );
          })}
          <button type="submit" disabled={selected.length === 0}>{buttonText}</button>
        </form>
      </div>
    </div>
  );
}

export default FriendsModal;
