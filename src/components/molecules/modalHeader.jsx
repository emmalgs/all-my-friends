import React from "react";

function ModalHeader(props) {
  return (
    <div className="modal-header">
      <span onClick={props.exit} style={{
        cursor: "pointer",
        fontSize: "3em",
        padding: "0 0.5em",
      }}>&#215;</span>
      <h2>Invite your 'friends'</h2>
    </div>
  )
}

export default ModalHeader;