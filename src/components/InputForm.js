import React from "react";
import PropTypes from "prop-types";

const InputForm = props => {
  return (
    <form onSubmit={props.newItemSubmitHandler} className="todoInput">
      <input
        className="input"
        type="text"
        onChange={props.handleItemInput}
        value={props.pendingItem}
        placeholder="Add an item"
      />
      <button type="submit" name="submit" value="submit">
        add
      </button>
    </form>
  );
};

InputForm.propTypes = {
  newItemSubmitHandler: PropTypes.func.isRequired,
  handleItemInput: PropTypes.func.isRequired,
  pendingItem: PropTypes.string.isRequired
};

export default InputForm;
