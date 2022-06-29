import React, { useState } from 'react'
import { AiFillCheckCircle } from 'react-icons/ai'
import StyledListTitle from './StyledListTitle'

function ListTitle({ id, index, title, editTitle }) {
  const [titleEditMode, setTitleEditMode] = useState(false)

  function submitOnEnterKey(e) {
    if (e.key === 'Enter') {
      setTitleEditMode((prevMode) => !prevMode)
    }
  }

  return (
    <StyledListTitle>
      {titleEditMode ? (
        <div className="list-title">
          <input
            type="text"
            className="list-title__title"
            placeholder={`${title} ${index + 1}`}
            onChange={(e) => editTitle(e, id)}
            onKeyDown={(e) => submitOnEnterKey(e)}
          />
          <AiFillCheckCircle
            className="list-title__checkmark"
            onClick={() => setTitleEditMode((prevMode) => !prevMode)}
          />
        </div>
      ) : (
        <h2
          className="list-title__title"
          onClick={() => setTitleEditMode((prevMode) => !prevMode)}
        >{`${title} ${title === 'List' ? index + 1 : ''}`}</h2>
      )}
    </StyledListTitle>
  )
}

export default ListTitle
