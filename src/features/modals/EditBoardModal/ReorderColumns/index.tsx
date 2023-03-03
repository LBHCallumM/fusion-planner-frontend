import { createState } from "@/features/board/state";
import { useState, useEffect } from "react";
import {
  DragDropContext,
  Draggable,
  Droppable,
  DropResult,
} from "react-beautiful-dnd";
import Column from "./Column";

const ReorderColumns = () => {
  const [{ cards, columnOrder, columns }, { reorderColumns }] = createState();

  const [newColumnOrder, setNewColumnOrder] = useState<Array<string>>([]);

  useEffect(() => {
    setNewColumnOrder(columnOrder);
  }, []);

  useEffect(() => {
    setNewColumnOrder(columnOrder);
  }, [columnOrder]);

  // const handleMoveRight = () => {
  //   reorderColumn("right");
  // };

  // const handleMoveLeft = () => {
  //   reorderColumn("left");
  // };

  const onDragEnd = (result: DropResult) => {
    console.log({ result });

    const { source, destination } = result;

    if (destination === null) return;
    if (source.index === destination.index) return;

    updateOrder(newColumnOrder[source.index], source.index, destination.index);
  };

  const handleMoveUp = (columnId: string, index: number) => {
    if (index === 0) return;

    updateOrder(columnId, index, index - 1);
  };

  const handleMoveDown = (columnId: string, index: number) => {
    console.log({ index, len: newColumnOrder.length-1 })
    if (index === newColumnOrder.length - 1) return;

    updateOrder(columnId, index, index + 1);
  };

  const updateOrder = (
    columnId: string,
    sourceIndex: number,
    destinationIndex: number
  ) => {
    setNewColumnOrder((x) => {
      const newColumnOrder = [...x];

      newColumnOrder.splice(sourceIndex, 1);
      newColumnOrder.splice(destinationIndex, 0, columnId);

      return newColumnOrder;
    });
  };

  

  const handleUpdateColumnOrder = () => {
    reorderColumns(newColumnOrder);
  };

  return (
    <>

      <div className="flex items-start justify-between mt-4">
      <h3 className="text-xl text-gray-900 flex font-medium">
        Reorder columns
      </h3>
        <button
          type="button"
          onClick={handleUpdateColumnOrder}
          className="bg-gray-600 text-white py-2 px-4 rounded-sm mb-4 disabled:bg-gray-300"
          disabled={
            JSON.stringify(columnOrder) === JSON.stringify(newColumnOrder)
          }
        >
          Save changes
        </button>
      </div>

      <div className="flex gap-x-10">
        <div className="flex flex-col gap-y-2" >{newColumnOrder.map((id, index) => (
          <div className="h-16 flex items-center justify-center text-xl">

<span>{index +1}.</span>

          </div>
        ))}</div>
        <div className="flex-grow"><DragDropContext onDragEnd={onDragEnd}>
         
         <Droppable droppableId="col12">
           {(provided, snapshot) => (
             <div ref={provided.innerRef} {...provided.droppableProps} className=" flex flex-col gap-y-2">
               {newColumnOrder
                 .map((x) => columns[x])
                 .map((column, index) => (
               
                     <Draggable draggableId={`drag-${index}`} index={index}  key={index}>
                       {(provided, snapshot) => {
                  
                         return (
                           <div
                             className="draggable"
                             ref={provided.innerRef}
                             {...provided.draggableProps}
                             {...provided.dragHandleProps}
                           >
                             <Column
                               column={column}
                               handleMoveUp={() =>
                                 handleMoveUp(column.id, index)
                               }
                               handleMoveDown={() =>
                                 handleMoveDown(column.id, index)
                               }
                             />
                           </div>
                         );
                       }}
                     </Draggable>
               
                 ))}

               <div className="">{provided.placeholder}</div>
             </div>
           )}
         </Droppable>
  
     </DragDropContext></div>
      </div>

     
    </>
  );
};

export default ReorderColumns;

