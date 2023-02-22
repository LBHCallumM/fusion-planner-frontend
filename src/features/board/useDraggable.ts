import { useEffect, useState } from "react";
import { IBoardState, ICard, IColumn } from "./types";
import { DropResult } from "react-beautiful-dnd";

const useDraggable = (initialData: IBoardState) => {
  const [boardData, setBoardData] = useState<IBoardState>(initialData);

  const handleAddNewCard = (newCard: ICard, columnId: string): void => {
    setBoardData((x: IBoardState) => {
      const cards = {
        ...x.cards,
        [newCard.id]: newCard,
      };

      const column = {
        ...x.columns[columnId],
        cardIds: [...x.columns[columnId].cardIds, newCard.id],
      };

      const columns = {
        ...x.columns,
        [columnId]: column,
      };

      return {
        ...x,
        cards: cards,
        columns: columns,
      };
    });
  };
  
  const handleAddNewColumn = (newColumn: IColumn) => {
    setBoardData(x => {

      const columns = {
        ...x.columns,
        [newColumn.id]: newColumn
      }

      const columnOrder = [
        ...x.columnOrder,
        newColumn.id
      ]

      return {
        ...x,
        columns,
        columnOrder
      }
    })
  }

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
    handleAddNewCard,
    handleAddNewColumn,
    columns: boardData.columnOrder.map((x) => boardData.columns[x]),
    cards: boardData.cards,
  };
};

export default useDraggable;
