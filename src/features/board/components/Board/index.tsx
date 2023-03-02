import { DragDropContext } from "react-beautiful-dnd";

import Column from "../Column";
import { useEffect, useState } from "react";
import initialData from "../../state/initialData";
import AddColumnForm from "../AddColumnForm";
import TaskBar from "../TaskBar";
import { createState } from "../../state";
import ModalProvider from "@/features/modals/ModalProvider";
import { createModalState } from "@/features/modals/State";

interface Props {
  boardId: string;
  cardId: string | null;
  columnId: string | null;
}

const Board = ({ boardId, columnId, cardId }: Props) => {
  const [loading, setLoading] = useState<boolean>(true);

  const [{ cards, columnOrder, columns }, { initBoard, reorderCard }] =
    createState();

  const [state, { toggleEditBoardModal, toggleViewCardModal }] =
    createModalState();

  const handleShowBoard = () => {
    toggleEditBoardModal(true);
  };

  useEffect(() => {
    setTimeout(() => {
      initBoard(initialData);
      setLoading(false);
    }, 0);
  }, []);

  useEffect(() => {
    document.title = "Board One";
  }, [cardId]);

  useEffect(() => {
    if (cards === null) return;

    if (cardId === null || Object.keys(cards).length === 0) {
      return;
    }

    if (!cards.hasOwnProperty(cardId)) {
      return;
    }

    toggleViewCardModal({ cardId, boardId, columnId });
  }, [cardId, cards]);

  return (
    <>
      <ModalProvider />

      {loading ? (
        <>
          <p>Loading...</p>
        </>
      ) : (
        // Eventually add Skeleton
        <>
          <TaskBar title="Board One" handleEditBoard={handleShowBoard} />

          <div className="p-2 mt-2 overflow-auto">
            <DragDropContext onDragEnd={reorderCard}>
              <div className="flex space-x-2">
                {columnOrder
                  .map((x) => columns[x])
                  .map((column) => (
                    <Column
                      key={column?.id}
                      column={column}
                      boardId={boardId}
                    />
                  ))}

                <AddColumnForm />
              </div>
            </DragDropContext>
          </div>
        </>
      )}
    </>
  );
};

export default Board;

