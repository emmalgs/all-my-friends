import React, { useState, useEffect } from "react";
import Home from "./home";
import FriendsModal from "./inviteFriendsModal";
import { InviteApi } from "../../services/inviteApi";

function InviteController() {
  const [showFriendsModal, setShowFriendsModal] = useState(false);
  const [friends, setFriends] = useState([]);
  const [message, setMessage] = useState("");
  const inviteApi = new InviteApi(
    process.env.REACT_APP_APIURL,
    process.env.REACT_APP_APICODE
  );

  useEffect(() => {
    inviteApi
      .getCandidates()
      .then((response) => {
        if (response.error) {
          throw new Error(response.error);
        }
        setFriends(response);
      })
      .catch((error) => {
        setMessage(`Error: ${error.message}`);
      });
  }, []);

  const toggleModal = () => {
    setShowFriendsModal(!showFriendsModal);
  };

  const handleInvite = (selectedFriends) => {
    inviteApi.sendInvites(selectedFriends).then((response) => {
      setMessage(response.message);
    });
  };

  if (showFriendsModal) {
    return (
      <FriendsModal
        exitClick={toggleModal}
        friendsList={friends}
        inviteFriends={handleInvite}
      />
    );
  }
  return <Home inviteClick={toggleModal} userMessage={message} />;
}

export { InviteController };
