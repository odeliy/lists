import React, { useState, useEffect } from "react";
import { nanoid } from "nanoid";
import List from "./List";

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
    JSON.parse(localStorage.getItem("lists")) || []
  );

  function addList() {
    setLists((prevLists) => {
      return [
        ...prevLists,
        {
          id: nanoid(),
          listItems: [
            {
              id: nanoid(),
              text: "",
              isComplete: false,
              color: "#ffffff",
            },
          ],
        },
      ];
    });
  }

  function addListItem(listId) {
    setLists((prevLists) =>
      prevLists.map((list) => {
        if (list.id === listId) {
          list.listItems.push({
            id: nanoid(),
            text: "",
            isComplete: false,
            color: "#ffffff",
          });
        }
        return list;
      })
    );
  }

  function handleUserInput(e, id) {
    setLists((prevLists) =>
      prevLists.map((list) => {
        list.listItems.map((entries) => {
          if (entries.id === id) {
            entries.text = e.target.value;
          }
          return entries;
        });
        return list;
      })
    );
  }

  function pickColor(e, id) {
    setLists((prevLists) =>
      prevLists.map((list) => {
        list.listItems.map((entry) => {
          if (entry.id === id) {
            entry.color = e.target.value;
          }
          return entry;
        });
        return list;
      })
    );
  }

  function markDone(e, id) {
    setLists((prevLists) =>
      prevLists.map((list) => {
        list.listItems.map((entry) => {
          if (entry.id === id) {
            entry.isComplete = e.target.checked;
          }
          return entry;
        });
        return list;
      })
    );
  }

  function deleteListItem(id) {
    setLists((prevLists) =>
      prevLists.map((list) => {
        list.listItems = list.listItems.filter((entry) => entry.id !== id);
        return list;
      })
    );
  }

  function deleteList(id) {
    setLists((prevLists) => prevLists.filter((list) => list.id !== id));
  }

  useEffect(() => {
    localStorage.setItem("lists", JSON.stringify(lists));
  }, [lists]);

  return (
    <>
      {lists.map((list, index) => (
        <List
          key={list.id}
          id={list.id}
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
      <button onClick={() => setLists([])}>Clear All</button>
      <button onClick={addList}>Add List</button>
    </>
  );
}

export default Lists;
