import React from 'react'
import ListItem from './ListItem/ListItem'
import ListTitle from './ListTitle/ListTitle'

function List({
  id,
  title,
  editTitle,
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
      <ListTitle id={id} index={index} title={title} editTitle={editTitle} />
      <div style={{ display: 'flex', alignItems: 'center' }}>
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
  )
}

export default List
