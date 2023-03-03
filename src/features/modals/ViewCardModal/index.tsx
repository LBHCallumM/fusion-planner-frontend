import { createState } from "@/features/board/state";
import DocumentIcon from "@/components/icons/DocumentIcon";
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
            <DocumentIcon className="w-6 h-6 mr-2" />

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
