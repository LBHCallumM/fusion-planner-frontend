import { useEffect, useState } from "react";
import Board from "../Board";
import TaskBar from "../TaskBar";
import { IBoardState, ICard } from "../types";
import initialData from "../initialData";
import ViewCardModal from "../../modals/ViewCardModal";
import { useRouter } from "next/router";

interface Props {
  boardId: string;
  cardId?: string;
  columnId?: string;
}

const BoardLayout = ({ boardId, cardId, columnId }: Props) => {
  const [boardData, setBoardData] = useState<IBoardState | null>(null);

  const [modal, setModal] = useState<ICard | null>(null);

  const router = useRouter();

  useEffect(() => {
    setTimeout(() => {
      setBoardData(initialData);
    }, 0);

    document.title = "Board One";
  }, [cardId]);

  useEffect(() => {
    if (boardData === null) return;

    if (cardId === null) {
      showModal(null);
      return;
    }

    if (!boardData.cards.hasOwnProperty(cardId)) {
      closeModal();
      alert("Card not found");
      return;
    }

    const card = boardData?.cards[cardId];

    showModal(card);
  }, [cardId, boardData]);

  const showModal = (card: ICard | null): void => {
    setModal(card);
  };

  const closeModal = (): void => {
    // setModal(null)

    router.push(`/boards/${boardId}/`);
  };

  return (
    <>
      <TaskBar title="Board One" />

      <ViewCardModal
        card={modal}
        modalVisible={modal !== null}
        handleClose={closeModal}
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
        <Board initialData={boardData} boardId={boardId} />
      )}
    </>
  );
};

export default BoardLayout;

