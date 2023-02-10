import { IBoard } from "./types";

const initialData: IBoard = {
  columns: {
    "1": {
      id: "1",
      name: "List One",
      cardIds: ["a", "b", "c", "d", ],
    },
    "2": {
      id: "2",
      name: "List Two",
      cardIds: ["e", "f"],
    },
  },
  cards: {
    a: {
      id: "a",
      title: "First Task",
    },
    b: {
      id: "b",
      title: "Second Task",
    },
    c: {
      id: "c",
      title: "Third Task",
    },
    d: {
      id: "d",
      title: "Fourth Task",
    },
    e: {
      id: "e",
      title: "Fifth Task",
    },
    f: {
      id: "f",
      title: "Sixth Task",
    },
  },
  columnOrder: [
    "1", "2"
  ]
};

export default initialData;

