import { IColumn } from "@/features/board/types";

interface Props {
  column: IColumn;
  handleMoveUp: () => void;
  handleMoveDown: () => void;
}

const Column = ({ column, handleMoveUp, handleMoveDown }: Props) => {
  return (
    <div className="bg-white border border-gray-200 shadow-sm flex justify-between items-center p-4 rounded-sm gap-x-4 cursor-grab">
      <div>
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
            d="M8.25 15L12 18.75 15.75 15m-7.5-6L12 5.25 15.75 9"
          />
        </svg>
      </div>

      <div className="text-left flex-grow text-gray-700 text-lg">
        {column.name}
      </div>

      <div className="flex gap-x-2">
        <button
          onClick={handleMoveUp}
          className="rounded-full w-8 h-8 border bg-gray-800  shadow-sm flex items-center justify-center text-gray-200 hover:bg-gray-700 outline-none focus:bg-gray-700 "
        >
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
              d="M4.5 15.75l7.5-7.5 7.5 7.5"
            />
          </svg>
        </button>
        <button
          onClick={handleMoveDown}
          className="rounded-full w-8 h-8 border bg-gray-800  shadow-sm flex items-center justify-center text-gray-200 hover:bg-gray-700 outline-none focus:bg-gray-700"
        >
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
              d="M19.5 8.25l-7.5 7.5-7.5-7.5"
            />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default Column;

