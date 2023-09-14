import React from "react";

function Home(props) {
  return (
    <div>
      <h1>You Totally Have Friends</h1>
      <button onClick={props.inviteClick}>Invite Friends</button>
    </div>
  );
}

export default Home;
