import { useEffect, useState } from "react";
import Board from "../Board";
import TaskBar from "../TaskBar";
import { IBoard, ICard } from "../types";
import initialData from "../initialData";
import ViewCardModal from "../../modals/ViewCardModal";
import { useRouter } from "next/router";
// import Swal from 'sweetalert2'

interface Props {
  boardId: string;
  cardId?: string;
}

const BoardLayout = ({ boardId, cardId }: Props) => {
  const [boardData, setBoardData] = useState<IBoard | null>(null);

  const [modal, setModal] = useState<ICard | null>(null);

  const router = useRouter();

  useEffect(() => {
    setTimeout(() => {
      setBoardData(initialData);
    }, 0);
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

    router.push(`/boards/1/`);
  };

  return (
    <>
      <TaskBar title="Board One" />

      <p>BoardId: {boardId}</p>
      <p>CardId: {cardId}</p>

      <pre>{JSON.stringify(modal, null, 2)}</pre>

      {/* <button onClick={showModal}>Show Modal</button> */}

      <ViewCardModal
        card={modal}
        modalVisible={modal !== null}
        handleClose={closeModal}
      />

      {boardData === null ? (
        <>
          <p>Loading...</p>
        </>
      ) : (
        // Eventually add Skeleton
        <Board initialData={boardData} showModal={showModal} />
      )}
    </>
  );
};

export default BoardLayout;
