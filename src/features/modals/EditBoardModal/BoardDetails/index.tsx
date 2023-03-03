import TextInput from "@/components/form/TextInput";
import { useState } from "react";

interface Props {
  updateBoard: (name: string, description: string) => void;
}

const BoardDetails = ({ updateBoard }: Props) => {
  const [name, setName] = useState<string>("");
  const [description, setDescription] = useState<string>("");

  const handleUpdateBoard = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault();

    updateBoard(name, description);
  };

  return (
    <form onSubmit={handleUpdateBoard}>
 <h3 className="text-xl text-gray-900 mb-4 flex items-center font-medium mt-4">
        Edit Details
      </h3>

      <TextInput
        name="name"
        placeholder="Board name"
        value={name}
        handleOnInput={(e) => setName(e.target.value)}
      />

      <TextInput
        name="description"
        placeholder="Description"
        value={description}
        handleOnInput={(e) => setDescription(e.target.value)}
      />

      <button
        type="submit"
        className="bg-gray-500 outline-none text-white py-2 px-4 rounded-sm mt-4 hover:bg-gray-600 focus:bg-gray-600"
      >
        Save changes
      </button>
    </form>
  );
};

export default BoardDetails;
