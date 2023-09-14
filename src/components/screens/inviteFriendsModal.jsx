import React from "react";

function FriendsModal(props) {
  return (
    <div>
      <div onClick={props.exitClick}>x</div>
      <h1>Invite Friends</h1>
      {props.friendsList.map((friend, index) => {
        return (
          <div key={index}>
            <div>{friend.firstName} {friend.lastName}</div>
            <div>{friend.email}</div>
          </div>
        );
      })}
      <button>Invite Friends</button>
    </div>
  );
}

export default FriendsModal;
