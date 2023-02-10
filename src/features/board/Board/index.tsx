import {
  DragDropContext,
} from "react-beautiful-dnd";

import initialData from "../initialData";

import Column from "../Column";
import useDraggable from "../useDraggable";

const Board = () => {
  const { handleDragEnd, columns, cards } = useDraggable(initialData);

  return (
    <>
      {/* Taskbar */}
      <div className="bg-gray-400">

      <div className="p-2 container mx-auto flex text-white justify-between">
        <h1 className="text-xl font-bold ">Board One</h1>

        <button className=" bg-gray-600 rounded-sm px-3">Edit Board</button>
      </div>
      </div>

      {/* Board */}

      {/* <pre>{JSON.stringify(boardData.columns, null, 2)}</pre> */}

     <div className="p-2 mt-2 overflow-auto">
     <DragDropContext onDragEnd={handleDragEnd}>
        <div className="flex space-x-2">
          {columns
            .map((column) => (
              <Column key={column.id} column={column} cards={cards} />
            ))}
        </div>
      </DragDropContext>
     </div>
    </>
  );
};

export default Board;

