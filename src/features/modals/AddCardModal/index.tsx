// import Rodal from 'rodal';
import { ICard } from "@/features/board/types";
import { useEffect, useState } from "react";

import TextareaAutosize from "react-textarea-autosize";
import TimeAgo from "react-timeago";

import Modal from "../Modal";

interface Props {
  modalVisible: boolean;
  handleClose: Function;
  
}

interface IComment {
  author: string;
  time: Date;
  message: string;
}


const AddCardModal = ({
  modalVisible,
  columnId,
  columnName,
  handleClose,
  card,
  boardId,
}: Props) => {



  return (
      <Modal modalVisible={modalVisible} handleClose={handleClose}>
       
          <div className="sm:p-2 md:p-4 lg:p-8">
            <h2 className="text-xl text-gray-800 mb flex items-center">
             
              <span className="font-medium">Add a card</span>
            </h2>

            <div className="text-gray-400 mb-2 ml-8">
              in list <span className="underline">{columnName}</span>
            </div>

  
             
         

          
          </div>
    
      </Modal>
  );
};

export default AddCardModal;

