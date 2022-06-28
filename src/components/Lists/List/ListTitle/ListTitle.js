import React, { useState } from 'react'
import { AiFillCheckCircle } from 'react-icons/ai'

function ListTitle({ id, index, title, editTitle }) {
  const [titleEditMode, setTitleEditMode] = useState(false)

  function submitOnEnterKey(e) {
    if (e.key === 'Enter') {
      setTitleEditMode((prevMode) => !prevMode)
    }
  }

  return (
    <>
      {titleEditMode ? (
        <div>
          <input
            type="text"
            placeholder={title}
            onChange={(e) => editTitle(e, id)}
            onKeyDown={(e) => submitOnEnterKey(e)}
          />
          <AiFillCheckCircle
            onClick={() => setTitleEditMode((prevMode) => !prevMode)}
          />
        </div>
      ) : (
        <h2
          onClick={() => setTitleEditMode((prevMode) => !prevMode)}
        >{`${title} ${title === 'List' ? index + 1 : ''}`}</h2>
      )}
    </>
  )
}

export default ListTitle
