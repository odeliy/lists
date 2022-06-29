import React from 'react'
import { FcCancel } from 'react-icons/fc'
import StyledListItem from './StyledListItem'

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
        <StyledListItem key={listItem.id}>
          <span className="list-item__index">{index + 1}</span>
          <input
            className="list-item__checkbox"
            type="checkbox"
            onChange={(e) => markDone(e, listItem.id)}
            checked={listItem.isComplete ? 'checked' : ''}
          />
          <div
            className="list-item__color-marker"
            style={{
              backgroundColor: listItem.color,
            }}
          />
          <input
            className="list-item__list-item"
            value={listItem.text}
            placeholder="what to do..."
            onChange={(e) => handleUserInput(e, listItem.id)}
            style={{
              textDecoration: listItem.isComplete ? 'line-through' : '',
            }}
          />
          <input
            className="list-item__color-picker"
            type="color"
            value={listItem.color}
            onChange={(e) => pickColor(e, listItem.id)}
          />
          <FcCancel
            className="list-item__delete-item"
            onClick={() => deleteListItem(listItem.id)}
          />
        </StyledListItem>
      ))}
    </>
  )
}

export default ListItem
