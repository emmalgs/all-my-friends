import React, { useState, useEffect } from "react";
import Home from "./home";
import FriendsModal from "./inviteFriendsModal";
import { InviteApi } from "../../services/inviteApi";

function InviteController() {
  const [showFriendsModal, setShowFriendsModal] = useState(false);
  const [friends, setFriends] = useState([]);
  const [message, setMessage] = useState("");

  useEffect(() => {
    const inviteApi = new InviteApi();
    inviteApi.getCandidates().then((response) => {
      setFriends(response);
    });
  }, []);

  const toggleModal = () => {
    setShowFriendsModal(!showFriendsModal);
  };

  const handleInvite = (selectedFriends) => {
    const inviteApi = new InviteApi();
    inviteApi.sendInvites(selectedFriends).then((response) => {
      setMessage(response.message);
    });
  };

  let visibleScreen = null;
  if (showFriendsModal) {
    visibleScreen = <FriendsModal exitClick={toggleModal} friendsList={friends} inviteFriends={handleInvite} />;
  } else {
    visibleScreen = <Home inviteClick={toggleModal} userMessage={message} />;
  }
  return <div>{visibleScreen}</div>;
}

export { InviteController };
