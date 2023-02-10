interface Props {
  title: string;
}

const TaskBar = ({ title }: Props) => {
  return (
    <div className="bg-gray-400">
      <div className="p-2 container mx-auto flex text-white justify-between">
        <h1 className="text-xl font-bold ">{title}</h1>

        <button className=" bg-gray-600 rounded-sm px-3">Edit Board</button>
      </div>
    </div>
  );
};

export default TaskBar;
