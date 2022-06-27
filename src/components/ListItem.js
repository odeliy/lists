import React from "react";
import { FcCancel } from "react-icons/fc";

function ListItem({
  listItems,
  handleUserInput,
  pickColor,
  markDone,
  deleteListItem,
}) {
  return (
    <>
      {listItems.map((listItem, index) => (
        <div
          key={listItem.id}
          style={{ display: "flex", alignItems: "center" }}
        >
          <h5>{index + 1}</h5>
          <input
            type="checkbox"
            onChange={(e) => markDone(e, listItem.id)}
            checked={listItem.isComplete ? "checked" : ""}
          />
          <input
            value={listItem.text}
            onChange={(e) => handleUserInput(e, listItem.id)}
            style={{
              backgroundColor: listItem.color,
              textDecoration: listItem.isComplete ? "line-through" : "",
            }}
          />
          <input
            type="color"
            value={listItem.color}
            onChange={(e) => pickColor(e, listItem.id)}
          />
          <FcCancel onClick={() => deleteListItem(listItem.id)} />
        </div>
      ))}
    </>
  );
}

export default ListItem;
