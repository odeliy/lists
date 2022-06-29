import React from 'react'
import ListItem from './ListItem/ListItem'
import ListTitle from './ListTitle/ListTitle'
import StyledList from './StyledList'

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
    <StyledList>
      <ListTitle id={id} index={index} title={title} editTitle={editTitle} />
      <div className="list__button-holder">
        <button className="button--primary" onClick={() => addListItem(id)}>
          Add List Item
        </button>
        <button className="button--secondary" onClick={() => deleteList(id)}>
          Delete List
        </button>
      </div>
      <ListItem
        listItems={listItems}
        handleUserInput={handleUserInput}
        pickColor={pickColor}
        markDone={markDone}
        deleteListItem={deleteListItem}
      />
    </StyledList>
  )
}

export default List
