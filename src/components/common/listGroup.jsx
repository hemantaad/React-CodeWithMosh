import React, { Component } from "react";

class ListGroup extends Component {
  render() {
    const { items, textProperty, idProperty, onItemSelect, currentItem } =
      this.props;

    return (
      <ul className="list-group">
        {items.map((item) => (
          <li
            key={item[idProperty]}
            onClick={() => onItemSelect(item)}
            className={
              currentItem === item
                ? "list-group-item active"
                : "list-group-item"
            }
          >
            {item[textProperty]}
          </li>
        ))}
      </ul>
    );
  }
}

ListGroup.defaultProps = {
  textProperty: "name",
  idProperty: "_id",
};

export default ListGroup;
