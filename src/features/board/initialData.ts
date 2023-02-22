import { IBoardState } from "./types";

const initialData: IBoardState = {
  columns: {
    "1": {
      id: "1",
      name: "List One",
      cardIds: ["a", "b", "c", "d"],
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
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. At optio nihil, nesciunt nemo commodi quae aliquam doloremque consequatur officiis consectetur, cumque deserunt? Ducimus ut dolores est saepe eaque. Laudantium, nihil?",
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
      title: "Sixth Task to do something really really interesting",
    },
  },
  columnOrder: ["1", "2"],
};

export default initialData;

