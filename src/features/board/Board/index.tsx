import { DragDropContext } from "react-beautiful-dnd";

import Column from "../Column";
import useDraggable from "../useDraggable";
import { IBoardState } from "../types";

interface Props {
  initialData: IBoardState;
  boardId: string;
}

const Board = ({ initialData, boardId }: Props) => {
  const { handleDragEnd, columns, cards } = useDraggable(initialData);

  return (
    <div className="p-2 mt-2 overflow-auto">
      <DragDropContext onDragEnd={handleDragEnd}>
        <div className="flex space-x-2">
          {columns.map((column) => (
            <Column
              key={column.id}
              column={column}
              cards={cards}
              boardId={boardId}
            />
          ))}

          <div className="w-72">
            <button className="block w-full bg-gray-200 py-2 rounded-sm hover:bg-gray-300">+ Add another column</button>
          </div>
        </div>
      </DragDropContext>
    </div>
  );
};

export default Board;

