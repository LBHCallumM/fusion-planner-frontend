import Modal from "../Modal";
import TextInput from "@/components/form/TextInput";
import { useState, useEffect } from "react";
import { IBoard } from "@/features/board/types";
import { getNextBoardId } from "@/features/board/boardHelper";
import { createState } from "@/features/board/state";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";

interface Props {
  modalVisible: boolean;
  handleClose: Function;
  // handleAddBoard: (newBoard: IBoard) => void;

  board: IBoard;
}

const EditBoardModal = ({
  modalVisible,
  handleClose,
  // handleAddBoard,
  board,
}: Props) => {
  const [name, setName] = useState<string>("");
  const [description, setDescription] = useState<string>("");

  const [columnName, setColumnName] = useState<string>("");


  const [{ cards, columnOrder, columns }, { reorderColumn, editColumn }] =
    createState();

  const [selectedColumn, setSelectedColumn] = useState<string | null>(null);


  useEffect(() => {
  setColumnName(selectedColumn && columns[selectedColumn]?.name || "")
  }, [selectedColumn])

  const handleUpdateBoard = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault();

  
  };

  const handleUpdateColumn = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault();

    if (columnName === "") return

    editColumn({
      ...columns[selectedColumn],
      name: columnName
    })
  
  };

  const handleMoveRight = (selectedColumn: string) => {
    reorderColumn(selectedColumn, "right")
  }

  const handleMoveLeft = (selectedColumn: string) => {
    reorderColumn(selectedColumn, "left")

  }


  return (
    <Modal modalVisible={modalVisible} handleClose={handleClose}>
      <div className="sm:p-2 md:p-4 lg:p-8">
        <h2 className="text-2xl text-gray-800 mb flex items-center font-medium">
          Edit Board
        </h2>

        <form onSubmit={handleUpdateBoard}>
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
            Update board
          </button>
        </form>

        <h3 className="text-xl text-gray-800 mb flex items-center font-medium mt-4">
          Edit columns
        </h3>

        <ol className="flex space-x-2  mt-3 p-2 overflow-x-auto">
          {columnOrder
            .map((x) => columns[x])
            .map((column, index) => (
              <li key={index} className="shrink-0 ">
                <button
                                onClick={() => setSelectedColumn(column.id)}
                              >
                <div
                  className={`bg-gray-200 w-48 h-12 p-2 rounded-sm flex justify-between items-center ${
                    selectedColumn === column.id ? "border border-gray-600" : ""
                  }`}
                >
                    <div className="overflow-hidden text-ellipsis pr-1 whitespace-nowrap">
                      
                    

                      {column.name}
                                
                      </div>
               
                </div>
                </button>
              </li>
            ))}
        </ol>

       

       <form onSubmit={handleUpdateColumn}>
       <h3 className="text-xl text-gray-800 mb flex items-center font-medium mt-4">
          Selected Column: {selectedColumn}
        </h3>

        {selectedColumn !== null && (
          <>
            <div>{columns[selectedColumn].name}</div>

            <div className="shrink-0 flex gap-x-1">
                <button className="bg-gray-500 rounded-sm text-white " onClick={() => handleMoveLeft(selectedColumn)}>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="w-6 h-6"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M15.75 19.5L8.25 12l7.5-7.5"
                      />
                    </svg>
                  </button>
                  <button className="bg-gray-500 rounded-sm text-white" onClick={() => handleMoveRight(selectedColumn)}>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="w-6 h-6"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M8.25 4.5l7.5 7.5-7.5 7.5"
                      />
                    </svg>
                  </button>
                </div>

            <TextInput
              name="name"
              label="Column name"
              value={columnName}
              handleOnInput={(e) => setColumnName(e.target.value)}
            />

<button type="submit" className="bg-gray-600 text-white py-2 px-4 rounded-sm mt-4">
              Update column
            </button>

            <button type="button" className="bg-gray-600 text-white py-2 px-4 rounded-sm mt-4">
              Delete column
            </button>
          </>
        )}
       </form>
      </div>
    </Modal>
  );
};

export default EditBoardModal;

