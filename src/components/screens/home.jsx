import React from "react";
import PropTypes from "prop-types";

function Home(props) {
  return (
    <div className="home-page">
      <h1>You Totally Have Friends</h1>
      <h3>{props.userMessage}</h3>
      <button onClick={props.inviteClick}>Invite Friends</button>
    </div>
  );
}

Home.propTypes = {
  userMessage: PropTypes.string.isRequired,
  inviteClick: PropTypes.func.isRequired,
};

export default Home;
