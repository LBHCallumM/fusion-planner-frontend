import { createState } from "@/features/board/state";
import { useState, useEffect } from "react";

interface Props {
  selectedColumnId: string | null;
  setSelectedColumnId: (id: string) => void;
}

const ReorderColumns = ({ selectedColumnId, setSelectedColumnId }: Props) => {
  const [{ cards, columnOrder, columns }, { reorderColumns }] = createState();

  const [newColumnOrder, setNewColumnOrder] = useState<Array<string>>([]);

  useEffect(() => {
    setNewColumnOrder(columnOrder);
  }, []);

  useEffect(() => {
    setNewColumnOrder(columnOrder);
  }, [columnOrder]);

  const handleMoveRight = () => {
    reorderColumn("right");
  };

  const handleMoveLeft = () => {
    reorderColumn("left");
  };

  const reorderColumn = (direction: "left" | "right") => {
    setNewColumnOrder((x) => {
      const newColumnOrder = [...x];

      const index = newColumnOrder.indexOf(selectedColumnId);

      // cannot move left
      if (direction === "left" && index === 0) {
        return;
      }

      // cannot move right
      if (direction === "right" && index === columnOrder.length - 1) {
        return;
      }

      newColumnOrder.splice(index, 1);

      if (direction === "right") {
        newColumnOrder.splice(index + 1, 0, selectedColumnId);
      } else {
        newColumnOrder.splice(index - 1, 0, selectedColumnId);
      }

      return newColumnOrder;
    });
  };

  const handleUpdateColumnOrder = () => {
    reorderColumns(newColumnOrder);
  };

  return (
    <>
      <h3 className="text-xl text-gray-800 mb flex items-center font-medium mt-4">
        Reorder columns
      </h3>

      <div className="shrink-0 flex gap-x-1">
        <button
          disabled={
            selectedColumnId === null ||
            newColumnOrder.indexOf(selectedColumnId) === 0
          }
          className="bg-gray-500 rounded-sm text-white disabled:bg-gray-300"
          onClick={handleMoveLeft}
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
              d="M15.75 19.5L8.25 12l7.5-7.5"
            />
          </svg>
        </button>
        <button
          className="bg-gray-500 rounded-sm text-white disabled:bg-gray-300"
          onClick={handleMoveRight}
          disabled={
            selectedColumnId === null ||
            newColumnOrder.indexOf(selectedColumnId) ===
              newColumnOrder.length - 1
          }
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
              d="M8.25 4.5l7.5 7.5-7.5 7.5"
            />
          </svg>
        </button>
      </div>

      <ol className="flex space-x-2  mt-3 p-2 overflow-x-auto">
        {newColumnOrder
          .map((x) => columns[x])
          .map((column, index) => (
            <li key={index} className="shrink-0 ">
              <button onClick={() => setSelectedColumnId(column.id)}>
                <div
                  className={`bg-gray-200 w-48 h-12 p-2 rounded-sm flex justify-between items-center ${
                    selectedColumnId === column?.id
                      ? "border border-gray-600"
                      : ""
                  }`}
                >
                  <div className="overflow-hidden text-ellipsis pr-1 whitespace-nowrap">
                    {column?.name}
                  </div>
                </div>
              </button>
            </li>
          ))}
      </ol>

      <div>
        <button
          type="button"
          onClick={handleUpdateColumnOrder}
          className="bg-gray-600 text-white py-2 px-4 rounded-sm mt-4 disabled:bg-gray-300"
          disabled={
            JSON.stringify(columnOrder) === JSON.stringify(newColumnOrder)
          }
        >
          Save changes
        </button>
      </div>
    </>
  );
};

export default ReorderColumns;
