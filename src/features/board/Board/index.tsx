import { DragDropContext } from "react-beautiful-dnd";

import Column from "../Column";
import useDraggable from "../useDraggable";
import { IBoardState, ICard } from "../types";
import ViewCardModal from "@/features/modals/ViewCardModal";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import initialData from "../initialData";
import AddColumnForm from "../AddColumnForm";

interface Props {
  boardId: string;
  cardId?: string;
  columnId?: string;
}

const Board = ({ boardId, columnId, cardId }: Props) => {
  const [boardData, setBoardData] = useState<IBoardState | null>(null);
  const { handleDragEnd, columns, cards, handleAddNewCard, handleAddNewColumn } = useDraggable(initialData);
  const [viewCardModal, setViewCardModal] = useState<ICard | null>(null);

  const router = useRouter();

  useEffect(() => {
    setTimeout(() => {
      setBoardData(initialData);
    }, 0);

    document.title = "Board One";
  }, [cardId]);

  useEffect(() => {
    if (cards === null) return;

    if (cardId === null) {
      showViewCardModal(null);
      return;
    }

    if (!cards.hasOwnProperty(cardId)) {
      closeViewCardModal();
      alert("Card not found");
      return;
    }

    const card = cards[cardId];

    showViewCardModal(card);
  }, [cardId, cards]);

  const showViewCardModal = (card: ICard | null): void => {
    setViewCardModal(card);
  };

  const closeViewCardModal = (): void => {
    // setModal(null)

    router.push(`/boards/${boardId}/`);
  };

  return (
    <>
    <ViewCardModal
        card={viewCardModal}
        modalVisible={viewCardModal !== null}
        handleClose={closeViewCardModal}
        boardId={boardId}
        columnName={boardData?.columns[columnId]?.name}
        columnId={columnId}
      />
      {boardData === null ? (
        <>
          <p>Loading...</p>
        </>
      ) : (
        // Eventually add Skeleton
        <div className="p-2 mt-2 overflow-auto">
      <DragDropContext onDragEnd={handleDragEnd}>
        <div className="flex space-x-2">
          {columns.map((column) => (
            <Column
              key={column.id}
              column={column}
              cards={cards}
              boardId={boardId}
              handleAddNewCard={handleAddNewCard}
            />
          ))}

          <AddColumnForm handleAddNewColumn={handleAddNewColumn} />
        </div>
      </DragDropContext>
    </div>
      )}
    </>
    
  );
};

export default Board;

