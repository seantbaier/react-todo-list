import React from "react";
import PropTypes from "prop-types";

const ListItem = props => {
  return (
    <li>
      {props.item}
      <span>x</span>
    </li>
  );
};

ListItem.propTypes = {
  item: PropTypes.string.isRequired
};

export default ListItem;
