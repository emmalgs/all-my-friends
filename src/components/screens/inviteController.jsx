import React, { useState, useEffect } from "react";
import Home from "./home";
import FriendsModal from "./inviteFriendsModal";
import { InviteApi } from "../../services/inviteApi";

function InviteController() {
  const [showFriendsModal, setShowFriendsModal] = useState(false);
  const [friends, setFriends] = useState([]);

  useEffect(() => {
    const inviteApi = new InviteApi();
    inviteApi.getCandidates().then((response) => {
      setFriends(response);
    });
  }, []);

  const toggleModal = () => {
    setShowFriendsModal(!showFriendsModal);
  };

  let visibleScreen = null;
  if (showFriendsModal) {
    visibleScreen = <FriendsModal exitClick={toggleModal} friendsList={friends} />;
  } else {
    visibleScreen = <Home inviteClick={toggleModal} />;
  }
  return <div>{visibleScreen}</div>;
}

export { InviteController };
