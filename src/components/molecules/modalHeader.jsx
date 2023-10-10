import React from "react";
import PropTypes from "prop-types";

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

ModalHeader.propTypes = {
  exit: PropTypes.func.isRequired,
};

export default ModalHeader;