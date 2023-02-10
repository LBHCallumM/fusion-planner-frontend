import { useState } from "react";
import { IBoard, IColumn } from "./types";
import { DropResult } from "react-beautiful-dnd";



const useDraggable = (initialData: IBoard) => {
    const [boardData, setBoardData] = useState<IBoard>(initialData);

    const handleDragEnd = (result: DropResult): void => {
        const { destination, source, draggableId } = result;
    
        if (!destination) {
          return;
        }
    
        if (
          destination.droppableId === source.droppableId &&
          destination.index === source.index
        ) {
          return;
        }
    
        // Same Column
        if (source.droppableId === destination.droppableId) {
          setBoardData((currentState) => {
            const column: IColumn = JSON.parse(
              JSON.stringify(currentState.columns[source.droppableId])
            );
            const cardIds = column.cardIds.slice();
            const cardId = cardIds[source.index];
    
            cardIds.splice(source.index, 1);
    
            cardIds.splice(destination.index, 0, cardId);
    
            const updatedColumn = {
              ...column,
              cardIds: cardIds,
            };
    
            return {
              ...currentState,
              columns: {
                ...currentState.columns,
                [column.id]: updatedColumn,
              },
            };
          });
          return;
        }
    
        // Different column
        setBoardData((currentState) => {
          // 1. remove from first column
          const sourceColumn: IColumn = currentState.columns[source.droppableId];
          const destinationColumn: IColumn =
            currentState.columns[destination.droppableId];
    
          const sourceColumnCardIds = sourceColumn.cardIds;
          const cardId = sourceColumnCardIds[source.index];
    
          sourceColumnCardIds.splice(source.index, 1);
    
          // 2. add to second column
          const destinationColumnCardIds = destinationColumn.cardIds;
          destinationColumnCardIds.splice(destination.index, 0, cardId);
    
          const updatedSourceColumn = {
            ...sourceColumn,
            cardIds: sourceColumnCardIds,
          };
    
          const updatedDestinationColumn = {
            ...destinationColumn,
            cardIds: destinationColumnCardIds,
          };
    
          return {
            ...currentState,
            columns: {
              ...currentState.columns,
              [sourceColumn.id]: updatedSourceColumn,
              [destinationColumn.id]: updatedDestinationColumn,
            },
          };
        });
      };

      return {
        handleDragEnd,
        columns: boardData.columnOrder.map(x => boardData.columns[x]),
        cards: boardData.cards,
      }
}

export default useDraggable