import { DragDropContext } from "react-beautiful-dnd";

import Column from "../Column";
import { IBoard, ICard } from "../../types";
import ViewCardModal from "@/features/modals/ViewCardModal";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import initialData from "../../state/initialData";
import AddColumnForm from "../AddColumnForm";
import TaskBar from "../TaskBar";
import { createState } from "../../state";
import EditBoardModal from "@/features/modals/EditBoardModal";
import EditListModal from "@/features/modals/EditListModal";

interface Props {
  boardId: string;
  cardId: string | null;
  columnId: string | null;
}

const Board = ({ boardId, columnId, cardId }: Props) => {
  const [loading, setLoading] = useState<boolean>(true);
  const [viewCardModal, setViewCardModal] = useState<ICard | null>(null);
  const [editBoardModal, setEditBoardModall] = useState<IBoard | null>(null);
  const [editListModal, setEditListModal] = useState<string | null>(null);

  const [{ cards, columnOrder, columns }, { initBoard, reorderCard }] =
    createState();

  const router = useRouter();

  const handleShowBoard = () => {
    setEditBoardModall({
      id: boardId,
      description: "description",
      name: "Board One",
    });
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
    router.push(`/boards/${boardId}/`);
  };

  return (
    <>
      <ViewCardModal
        card={viewCardModal}
        modalVisible={viewCardModal !== null}
        handleClose={closeViewCardModal}
        boardId={boardId}
        columnName={columnId && columns[columnId]?.name}
        columnId={columnId}
      />

      <EditBoardModal
        handleClose={() => setEditBoardModall(null)}
        modalVisible={editBoardModal !== null}
      />

      <EditListModal
        handleClose={() => setEditListModal(null)}
        modalVisible={editListModal !== null}
        columnId={editListModal}
      />

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
                      handleEditColumn={() => setEditListModal(column?.id)}
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

