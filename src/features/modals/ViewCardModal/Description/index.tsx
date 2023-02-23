import { useState } from "react";
import ReactTextareaAutosize from "react-textarea-autosize";

interface Props {
  description: string;
}

const Description = ({ description }: Props) => {
  const [editingDescription, setEditingDescription] = useState<boolean>(false);

  const handleEditDescription = () => {
    setEditingDescription(true);
  };

  const handleOnCancelEdit = () => {
    setEditingDescription(false);
  };

  return (
    <>
      <h2 className="text-lg text-gray-800 mb-2 flex items-center ">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-6 h-6 mr-2"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25H12"
          />
        </svg>
        <span className="font-medium">Description</span>{" "}
        {description && (
          <button className="bg-gray-200 ml-2 text-gray-600 px-2 py rounded-sm">
            Edit
          </button>
        )}
      </h2>

      <div className=" ml-8">
        {editingDescription ? (
          <div>
            <ReactTextareaAutosize
              minRows={6}
              maxRows={12}
              defaultValue={description}
              className="border border-solid border-gray-500 w-full block rounded-sm p-2 min-h-full"
            />

            <div className="mt-2 gap-x-2 flex">
              <button
                onClick={handleOnCancelEdit}
                className="bg-gray-600 text-gray-200 px-4 py-2 rounded-sm"
              >
                Save
              </button>
              <button
                onClick={handleOnCancelEdit}
                className="bg-gray-600 text-gray-200 px-4 py-2 rounded-sm"
              >
                Cancel
              </button>
            </div>
          </div>
        ) : (
          <div
            role="button"
            onClick={handleEditDescription}
            className="bg-gray-100 text-gray-600 p-3 rounded-sm"
          >
            {description ? description : "Add a more detailed description..."}
          </div>
        )}
      </div>
    </>
  );
};

export default Description;

