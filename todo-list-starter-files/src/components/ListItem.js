import React from "react";
import PropTypes from "prop-types";

//Import Compon
import ItemName from "./ItemName";
import Button from "./Button";

const ListItem = props => {
  return (
    <li>
      <ItemName
        isEditing={props.isEditing}
        item={props.item}
        toggleIsEditingAt={props.toggleIsEditingAt}
        handleNameEdits={e => props.setName(e.target.value)}
      >
        {props.item}
      </ItemName>
      <Button
        isEditing={props.isEditing}
        toggleIsEditingAt={props.toggleIsEditingAt}
        handleRemove={props.handleRemove}
      />
    </li>
  );
};

ListItem.propTypes = {
  item: PropTypes.string.isRequired,
  handleRemove: PropTypes.func.isRequired,
  toggleIsEditingAt: PropTypes.func.isRequired,
  isEditing: PropTypes.bool.isRequired,
  setName: PropTypes.func.isRequired
};

export default ListItem;
