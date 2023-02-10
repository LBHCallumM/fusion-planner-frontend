import {
  DragDropContext,
} from "react-beautiful-dnd";

import initialData from "../initialData";

import Column from "../Column";
import useDraggable from "../useDraggable";

const Board = () => {
  const { handleDragEnd, columns, cards } = useDraggable(initialData);

  return (
    <div>
      {/* Taskbar */}
      <div>
        <h1>Board One</h1>

        <button>Edit Board</button>
      </div>

      {/* Board */}

      {/* <pre>{JSON.stringify(boardData.columns, null, 2)}</pre> */}

      <DragDropContext onDragEnd={handleDragEnd}>
        <div className="flex space-x-2">
          {Object.keys(columns)
            .map((x) => columns[x])
            .map((column) => (
              <Column key={column.id} column={column} cards={cards} />
            ))}
        </div>
      </DragDropContext>
    </div>
  );
};

export default Board;

