interface Props {
  title: string;
  handleEditBoard: () => void;
}

const TaskBar = ({ title, handleEditBoard }: Props) => {
  return (
    <div className="bg-gray-400">
      <div className="p-2 container mx-auto flex text-white justify-between">
        <h1 className="text-xl font-bold ">{title}</h1>

        <button
          onClick={handleEditBoard}
          className=" bg-gray-600 rounded-sm px-3"
        >
          Edit Board
        </button>
      </div>
    </div>
  );
};

export default TaskBar;
