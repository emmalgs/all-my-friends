import React from "react";

function ModalHeader(props) {
  return (
    <div className="modal-header">
      <h2>Invite Your 'Friends'</h2>
      <span onClick={props.exit} style={{
        cursor: "pointer",
      }}>&#215;</span>
    </div>
  )
}

export default ModalHeader;