import React from "react";

function FriendsModal(props) {
  return (
    <div>
      <div className="modal-header">
        <span onClick={props.exitClick}>x</span>
        <h1>Invite Friends</h1>
      </div>
      <div className="modal-body">
        <form>
          {props.friendsList.map((friend, index) => {
            return (
              <div key={index} className="friend-select">
                <label className="info">
                  <div>
                    {friend.firstName} {friend.lastName}
                  </div>
                  <div>{friend.email}</div>
                </label>
                <input
                  type="checkbox"
                  name={friend.email}
                  value={friend.email}
                />
              </div>
            );
          })}
          <button>Invite Friends</button>
        </form>
      </div>
    </div>
  );
}

export default FriendsModal;
