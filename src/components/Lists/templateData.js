import { nanoid } from 'nanoid'

export const templateData = [
  {
    id: nanoid(),
    title: 'Build computer',
    listItems: [
      {
        id: nanoid(),
        text: 'Install CPU & RAM',
        isComplete: false,
        color: '#ffff00',
      },
      {
        id: nanoid(),
        text: 'Mount PSU, SSD, and mobo in case',
        isComplete: false,
        color: '#ff0000',
      },
      {
        id: nanoid(),
        text: 'Wire up connections and enter bios',
        isComplete: false,
        color: '#00ff00',
      },
    ],
  },
  {
    id: nanoid(),
    title: 'Make portfolio website',
    listItems: [
      {
        id: nanoid(),
        text: 'Create some projects',
        isComplete: true,
        color: '#ffffff',
      },
      {
        id: nanoid(),
        text: 'Design websites',
        isComplete: true,
        color: '#ffffff',
      },
      {
        id: nanoid(),
        text: 'Develope website',
        isComplete: true,
        color: '#ffffff',
      },
    ],
  },
  {
    id: nanoid(),
    title: 'Backyard work',
    listItems: [
      {
        id: nanoid(),
        text: 'Cleanup random stuff',
        isComplete: true,
        color: '#ffffff',
      },
      {
        id: nanoid(),
        text: 'Mow the grass',
        isComplete: false,
        color: '#006400',
      },
      {
        id: nanoid(),
        text: 'Weed whacker',
        isComplete: false,
        color: '#808080',
      },
    ],
  },
]
