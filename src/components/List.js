import React from "react";
import PropTypes from "prop-types";

//Import Compon
import ListItem from "./ListItem";

const List = props => {
  return (
    <ul>
      {props.list.map((item, index) => (
        <ListItem
          key={index}
          item={item.name}
          isEditing={item.isEditing}
          handleRemove={() => props.removeItemAt(item.id)}
          toggleIsEditingAt={() => props.toggleIsEditingAt(item.id)}
          setName={text => props.setNameAt(text, item.id)}
        />
      ))}
    </ul>
  );
};

List.propTypes = {
  list: PropTypes.array.isRequired,
  removeItemAt: PropTypes.func.isRequired,
  toggleIsEditingAt: PropTypes.func.isRequired,
  setNameAt: PropTypes.func.isRequired
};

export default List;
