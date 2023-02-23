import { createState } from "@/features/board/state";
import { ICard } from "@/features/board/types";
import { useEffect } from "react";
import Modal from "../Modal";
import Actions from "./Actions";
import Activity from "./Activity";
import CopyLink from "./CopyLink";
import Description from "./Description";

interface Props {
  modalVisible: boolean;
  handleClose: Function;
  card: ICard | null;
  boardId: string;
  columnName: string | null;
  columnId: string | null;
}

const ViewCardModal = ({
  modalVisible,
  columnId,
  columnName,
  handleClose,
  card,
  boardId,
}: // handleDeleteCard,
Props) => {
  const [state, { deleteCard }] = createState();

  useEffect(() => {
    // set title
    if (card?.title) {
      document.title = card.title;
    }
  }, [card?.id]);

  const handleDeleteCard = () => {
    deleteCard(card.id, columnId);
    handleClose();
  };

  return (
    <Modal modalVisible={modalVisible} handleClose={handleClose}>
      {card && (
        <div className="sm:p-2 md:p-4 lg:p-8">
          <h2 className="text-xl text-gray-800 mb flex items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6 mr-2"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m2.25 0H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z"
              />
            </svg>

            <span className="font-medium">{card.title}</span>
          </h2>

          <div className="text-gray-400 mb-2 ml-8">
            in list <span className="underline">{columnName}</span>
          </div>

          <CopyLink boardId={boardId} cardId={card.id} columnId={columnId} />

          <div className=" grid md:space-x-4 grid-cols-[1fr] md:grid-cols-[3fr,1fr] mt-4">
            <div>
              <Description description={card.description} card={card} />

              <Activity cardId={card?.id} />
            </div>

            <Actions handleDeleteCard={handleDeleteCard} />
          </div>
        </div>
      )}
    </Modal>
  );
};

export default ViewCardModal;

