import React, { useState, useEffect } from 'react'
import { nanoid } from 'nanoid'
import List from './List/List'
import StyledLists from './StyledLists'
import { templateData } from './templateData'

// Structure of lists state
// [
//   {
//     id: nanoid(),
//     listItems: [
//       {
//         id: nanoid(),
//         text: "",
//         isComplete: false,
//         ...
//       },
//       ...
//     ]
//   },
//   ...
// ]

function Lists() {
  const [lists, setLists] = useState(
    JSON.parse(localStorage.getItem('lists')) || [],
  )

  function addList() {
    setLists((prevLists) => {
      return [
        ...prevLists,
        {
          id: nanoid(),
          title: 'List',
          listItems: [createListItem()],
        },
      ]
    })
  }

  function addListItem(listId) {
    setLists((prevLists) =>
      prevLists.map((list) => {
        if (list.id === listId) {
          list.listItems.push(createListItem())
        }
        return list
      }),
    )
  }

  function createListItem() {
    return { id: nanoid(), text: '', isComplete: false, color: '#ffffff' }
  }

  function handleUserInput(e, id) {
    setLists((prevLists) =>
      prevLists.map((list) => {
        list.listItems.map((entries) => {
          if (entries.id === id) {
            entries.text = e.target.value
          }
          return entries
        })
        return list
      }),
    )
  }

  function pickColor(e, id) {
    setLists((prevLists) =>
      prevLists.map((list) => {
        list.listItems.map((entry) => {
          if (entry.id === id) {
            entry.color = e.target.value
          }
          return entry
        })
        return list
      }),
    )
  }

  function markDone(e, id) {
    setLists((prevLists) =>
      prevLists.map((list) => {
        list.listItems.map((entry) => {
          if (entry.id === id) {
            entry.isComplete = e.target.checked
          }
          return entry
        })
        return list
      }),
    )
  }

  function deleteListItem(id) {
    setLists((prevLists) =>
      prevLists.map((list) => {
        list.listItems = list.listItems.filter((entry) => entry.id !== id)
        return list
      }),
    )
  }

  function deleteList(id) {
    setLists((prevLists) => prevLists.filter((list) => list.id !== id))
  }

  function editTitle(e, id) {
    setLists((prevLists) =>
      prevLists.map((list) => {
        if (list.id === id) {
          return { ...list, title: e.target.value }
        } else {
          return list
        }
      }),
    )
  }

  useEffect(() => {
    localStorage.setItem('lists', JSON.stringify(lists))
  }, [lists])

  return (
    <StyledLists>
      {lists.length === 0 && (
        <h1 className="lists__title">
          Add a new list to get started or{' '}
          <a href="#" onClick={() => setLists(templateData)}>
            click here
          </a>{' '}
          to pre-populate some lists and play around.
        </h1>
      )}
      {lists.map((list, index) => (
        <List
          key={list.id}
          id={list.id}
          title={list.title}
          editTitle={editTitle}
          index={index}
          listItems={list.listItems}
          addListItem={addListItem}
          handleUserInput={handleUserInput}
          pickColor={pickColor}
          markDone={markDone}
          deleteListItem={deleteListItem}
          deleteList={deleteList}
        />
      ))}
      <div className="lists__button-holder">
        <button className="button--primary" onClick={addList}>
          Add List
        </button>
        <button className="button--secondary" onClick={() => setLists([])}>
          Clear All
        </button>
      </div>
    </StyledLists>
  )
}

export default Lists
