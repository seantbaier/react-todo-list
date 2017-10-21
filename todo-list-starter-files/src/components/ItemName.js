import React from "react";
import PropTypes from "prop-types";

const ItemName = props => {
  if (props.isEditing) {
    return (
      <input
        type="text"
        value={props.children}
        onChange={props.handleNameEdits}
      />
    );
  }
  return <span onClick={props.toggleIsEditingAt}>{props.children}</span>;
};

ItemName.propTypes = {
  item: PropTypes.string.isRequired,
  handleNameEdits: PropTypes.func.isRequired,
  toggleIsEditingAt: PropTypes.func.isRequired
};

export default ItemName;
