import Modal from "../Modal";
import TextInput from "@/components/form/TextInput";
import { useState } from "react";
import { IBoard } from "@/features/board/types";
import { getNextBoardId } from "@/features/board/boardHelper";

interface Props {
  modalVisible: boolean;
  handleClose: Function;
  handleAddBoard: (newBoard: IBoard) => void;
}

const CreateBoardModal = ({
  modalVisible,
  handleClose,
  handleAddBoard,
}: Props) => {
  const [name, setName] = useState<string>("");
  const [description, setDescription] = useState<string>("");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault();

    const newBoard: IBoard = {
      id: getNextBoardId(),
      name,
      description,
    };

    handleAddBoard(newBoard);
  };

  return (
    <Modal modalVisible={modalVisible} handleClose={handleClose}>
      <div className="sm:p-2 md:p-4 lg:p-8">
        <h2 className="text-2xl text-gray-800 mb flex items-center font-medium">
          Create modal
        </h2>

        <form onSubmit={handleSubmit}>
          <TextInput
            name="name"
            label="Board name"
            value={name}
            handleOnInput={(e) => setName(e.target.value)}
          />

          <TextInput
            name="description"
            label="Description"
            value={description}
            handleOnInput={(e) => setDescription(e.target.value)}
          />

          <button
            type="submit"
            className="bg-gray-600 text-white py-2 px-4 rounded-sm mt-4"
          >
            Create modal
          </button>
        </form>
      </div>
    </Modal>
  );
};

export default CreateBoardModal;
