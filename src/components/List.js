import React from "react";
import ListItem from "./ListItem";

function List({
  id,
  index,
  listItems,
  addListItem,
  handleUserInput,
  pickColor,
  markDone,
  deleteListItem,
  deleteList,
}) {
  return (
    <>
      <h2>{`List #${index + 1}`}</h2>
      <div style={{ display: "flex", alignItems: "center" }}>
        <button onClick={() => addListItem(id)}>Add List Item</button>
        <button onClick={() => deleteList(id)}>Delete List</button>
      </div>
      <ListItem
        listItems={listItems}
        handleUserInput={handleUserInput}
        pickColor={pickColor}
        markDone={markDone}
        deleteListItem={deleteListItem}
      />
    </>
  );
}

export default List;
