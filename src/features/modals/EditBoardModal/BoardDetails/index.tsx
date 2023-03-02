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
  );
};

export default BoardDetails;
