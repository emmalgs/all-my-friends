import React from "react";

function ModalHeader(props) {
  return (
    <div className="modal-header">
      <span onClick={props.exit}>&#215;</span>
      <h2>Invite Your 'Friends'</h2>
    </div>
  )
}

export default ModalHeader;