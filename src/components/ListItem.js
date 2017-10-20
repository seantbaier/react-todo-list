import React from "react";
import PropTypes from "prop-types";

const ListItem = props => {
  return (
    <li>
      {props.item}
      <button className="action" onClick={props.handleRemove}>
        x
      </button>
    </li>
  );
};

ListItem.propTypes = {
  item: PropTypes.string.isRequired,
  handleRemove: PropTypes.func.isRequired
};

export default ListItem;
