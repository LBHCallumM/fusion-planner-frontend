import { DragDropContext } from "react-beautiful-dnd";



import Column from "../Column";
import useDraggable from "../useDraggable";
import { IBoard } from "../types";

interface Props {
  initialData: IBoard
}

const Board = ({ initialData }: Props ) => {
  const { handleDragEnd, columns, cards } = useDraggable(initialData);

  return (
    <div className="p-2 mt-2 overflow-auto">
      <DragDropContext onDragEnd={handleDragEnd}>
        <div className="flex space-x-2">
          {columns.map((column) => (
            <Column key={column.id} column={column} cards={cards} />
          ))}
        </div>
      </DragDropContext>
    </div>
  );
};

export default Board;

