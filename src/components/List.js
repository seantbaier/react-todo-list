import React from "react";
import PropTypes from "prop-types";

//Import Compon
import ListItem from "./ListItem";

const List = props => {
  return (
    <ul>
      {props.list.map((item, index) => (
        <ListItem key={index} item={item.item} />
      ))}
    </ul>
  );
};

List.propTypes = {
  list: PropTypes.array.isRequired
};

export default List;
