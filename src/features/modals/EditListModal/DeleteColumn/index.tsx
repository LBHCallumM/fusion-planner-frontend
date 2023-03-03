import RadioGroup from "@/components/form/RadioGroup";
import { createState } from "@/features/board/state";
import { useEffect, useState } from "react";

interface Props {
  columnId: string | null;
  handleClose: () => void;
}
const DeleteColumn = ({ columnId, handleClose }: Props) => {
  const [
    { columnOrder, columns },
    { deleteColumn },
  ] = createState();

  const [destinationColumnId, setDestinationColumnId] = useState<string | null>(
    columnOrder.filter((x) => x !== columnId)[0]
  );

  const [selectedRadioOption, setSelectedRadioOption] = useState("1");

  useEffect(() => {
    // set by default to first item
    setDestinationColumnId(columnOrder.filter((x) => x !== columnId)[0]);
  }, [columnOrder]);

  const handleDeleteColumn = () => {
    if (columnId === null) return;

    if (
      columns[columnId].cardIds.length > 0 &&
      destinationColumnId === null &&
      selectedRadioOption === "1"
    )
      return;

    if (!confirm("Permanently delete column?")) return;

    deleteColumn(columnId, destinationColumnId);
    handleClose();
    // setSelectedColumnId(null);
  };

  return (
    <div>
      <h2 className="text-2xl text-gray-900 mb flex items-center font-medium mt-4">
        Delete column
      </h2>
      <div>
        <div>
          <RadioGroup
            name="handleDeleteAction"
            options={[
              { label: "Copy to another list", value: "1" },
              { label: "Delete Cards", value: "2" },
            ]}
            handleOnChange={(option) => {
              setSelectedRadioOption(option);
            }}
          />
        </div>

        {selectedRadioOption === "1" && (
          <select
            name=""
            id=""
            value={destinationColumnId}
            onChange={(e) => setDestinationColumnId(e.target.value)}
            className="w-full px-2 py-2 mt-4 rounded-sm border border-solid border-gray-300 block outline-none focus:border-gray-500"
          >
            {columnOrder
              .filter((x) => x !== columnId)
              .map((x) => columns[x])
              .map((column, index) => (
                <option value={column?.id} key={index}>
                  {column?.name}
                </option>
              ))}
          </select>
        )}
      </div>

      <div>
        <button
          type="button"
          onClick={handleDeleteColumn}
          className="bg-gray-600 text-white py-2 px-4 rounded-sm mt-4"
        >
          Delete column
        </button>
      </div>
    </div>
  );
};

export default DeleteColumn;
