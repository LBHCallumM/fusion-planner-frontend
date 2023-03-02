import Modal from "../Modal";
import { useState, useEffect } from "react";
import { createState } from "@/features/board/state";
import ReorderColumns from "./ReorderColumns";
import BoardDetails from "./BoardDetails";

interface Props {
  modalVisible: boolean;
  handleClose: Function;
}

const EditBoardModal = ({ modalVisible, handleClose }: Props) => {
  const [selectedColumnId, setSelectedColumnId] = useState<string | null>(null);

  useEffect(() => {
    setSelectedColumnId(null);
  }, [modalVisible]);

  const updateBoard = (name: string, description: string) => {
    //
  };

  return (
    <Modal modalVisible={modalVisible} handleClose={handleClose}>
      <div className="sm:p-2 md:p-4 lg:p-8">
        <h2 className="text-2xl text-gray-800 mb flex items-center font-medium">
          Edit Board
        </h2>

        <BoardDetails updateBoard={updateBoard} />

        <ReorderColumns
          selectedColumnId={selectedColumnId}
          setSelectedColumnId={setSelectedColumnId}
        />
      </div>
    </Modal>
  );
};

export default EditBoardModal;
