import { useState } from "react";
import ReactTextareaAutosize from "react-textarea-autosize";
import { getNextBoardId } from "../boardHelper";
import { IColumn } from "../types";

interface Props {
    handleAddNewColumn: (newColumn: IColumn) => void
}

const AddColumnForm = ({ handleAddNewColumn }:Props) => {
  const [isEditing, setIsEditing] = useState<boolean>(false);
  const [newColumnName, setNewColumnName] = useState<string>("");

  const handleClose = () => {
    setIsEditing(false);
    setNewColumnName("")
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (newColumnName === "") return

    const newColumn: IColumn = {
        cardIds: [],
        id: getNextBoardId(),
        name: newColumnName
    }

    handleAddNewColumn(newColumn)

    setNewColumnName("")
    setIsEditing(false)
  };

  return (
    <div className="w-72 shrink-0">
      {isEditing ? (
        <div className="bg-gray-200 p-2">
          <ReactTextareaAutosize
            name=""
            id=""
            cols={30}
            rows={10}
            className="bg-gray-50 w-full p-2 flex justify-between rounded-sm text-gray-700 shadow-sm hover:bg-gray-100 border-gray-300 group"
            value={newColumnName}
            onInput={(e) => setNewColumnName(e.target.value)}
          />

          <form onSubmit={handleSubmit}>
            <div className="mt-2 flex items-center">
              <button
                className=" bg-gray-600 rounded-sm px-3 text-white mr-2"
                type="submit"
              >
                Add column
              </button>
              <button onClick={handleClose} type="button">
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
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>
          </form>
        </div>
      ) : (
        <button className="block w-full bg-gray-200 py-2 rounded-sm hover:bg-gray-300" onClick={() => setIsEditing(true)}>
          <div className="font-semibold text-gray-700 ">
            + Add another column
          </div>
        </button>
      )}
    </div>
  );
};

export default AddColumnForm;

