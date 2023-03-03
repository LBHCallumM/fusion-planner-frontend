import { createState } from "@/features/board/state";
import { useEffect } from "react";
import Modal from "../Modal";
import Actions from "./Actions";
import Activity from "./Activity";
import CopyLink from "./CopyLink";
import Description from "./Description";
import Layout from "./Layout";

interface Props {
  modalVisible: boolean;
  handleClose: Function;
  cardId: string | null;
  boardId: string | null;
  columnId: string | null;
}

const ViewCardModal = ({
  modalVisible,
  handleClose,
  cardId,
  boardId,
  columnId,
}: Props) => {
  const [{ cards, columns }, { deleteCard }] = createState();

  useEffect(() => {
    // set title
    if (cardId !== null && cards.hasOwnProperty(cardId)) {
      document.title = cards[cardId].title;
    }
  }, [cardId]);

  const handleDeleteCard = () => {
    deleteCard(cardId, columnId);
    handleClose();
  };

  return (
    <Modal modalVisible={modalVisible} handleClose={handleClose} modalSize="large">

<Layout 

    top={

<div className="p-6 sm:overflow-y-auto">


{cardId && (
        <div className="">
        
         <h2 className="text-2xl text-gray-900 mb flex items-center">
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

            <span className="font-medium">{cards[cardId]?.title}</span>
          </h2>

          <div className="text-gray-400 mb-2 ml-8">
            in list <span className="underline">{columns[columnId]?.name}</span>
          </div>

          <CopyLink boardId={boardId} cardId={cardId} columnId={columnId} />

         
        
              <Description
                description={cards[cardId]?.description}
                card={cards[cardId]}
              />

          
     
<Activity cardId={cardId} />
           
      
        </div>
      )}


</div>



    }

    right={
      <div className="p-6 pt-0 sm:pt-6 h-full sm:bg-gray-500">
  
      <Actions handleDeleteCard={handleDeleteCard} />
      
      </div>
    }

    // bottom={
    //   <div className="p-6 pt-12 md:overflow-y-auto">

      
    //   </div>
    // }
/>






      
    </Modal>
  );
};

export default ViewCardModal;
