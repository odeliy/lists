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
        color: '#ffffff',
      },
      {
        id: nanoid(),
        text: 'Mount PSU, SSD, and mobo in case',
        isComplete: false,
        color: '#ffffff',
      },
      {
        id: nanoid(),
        text: 'Wire up connections and enter bios',
        isComplete: false,
        color: '#ffffff',
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
]
