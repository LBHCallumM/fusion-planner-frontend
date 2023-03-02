import Modal from "../Modal";
import TextInput from "@/components/form/TextInput";
import { useState, useEffect } from "react";
import { IBoard } from "@/features/board/types";
import { getNextBoardId } from "@/features/board/boardHelper";
import { createState } from "@/features/board/state";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
import ReorderColumns from "./ReorderColumns";
import BoardDetails from "./BoardDetails";
import EditColumn from "../EditListModal/EditColumn";

interface Props {
  modalVisible: boolean;
  handleClose: Function;
  // handleAddBoard: (newBoard: IBoard) => void;

  // board: IBoard;
}

const EditBoardModal = ({
  modalVisible,
  handleClose,
}: Props) => {
  const [columnName, setColumnName] = useState<string>("");

  const [
    {  columns },
  
  ] = createState();

  const [selectedColumnId, setSelectedColumnId] = useState<string | null>(null);


  useEffect(() => {
    setSelectedColumnId(null)
  }, [modalVisible])

  useEffect(() => {
    setColumnName((selectedColumnId && columns[selectedColumnId]?.name) || "");
  }, [selectedColumnId]);

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

