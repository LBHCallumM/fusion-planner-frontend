import TextInput from "@/components/form/TextInput";
import { createState } from "@/features/board/state";
import { useEffect, useState } from "react";

interface Props {
  columnId: string | null;
}

const ColumnDetails = ({ columnId }: Props) => {
  const [columnName, setColumnName] = useState<string>("");

  const [
    { cards, columnOrder, columns },
    { reorderColumns: reorderColumn, editColumn, deleteColumn },
  ] = createState();

  useEffect(() => {
    console.log({ columnId, columns });

    if (columnId !== null && columns.hasOwnProperty(columnId)) {
      setColumnName(columns[columnId].name);
      return;
    }

    setColumnName("");
  }, [columnId]);

  const handleUpdateColumn = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault();

    if (columnName === "") return;
    if (columnId === null) return;

    editColumn({
      ...columns[columnId],
      name: columnName,
    });
  };

  return (
    <>
      <h2 className="text-2xl text-gray-900 mb flex items-center font-medium mt-4">
       Column details
      </h2>

      <form onSubmit={handleUpdateColumn}>
       

        <TextInput
          name="name"
          label="Column name"
          value={columnName}
          handleOnInput={(e) => setColumnName(e.target.value)}
        />

        <div>
          <button
            type="submit"
            className="bg-gray-600 text-white py-2 px-4 rounded-sm mt-4"
          >
            Update column
          </button>
        </div>
      </form>
    </>
  );
};

export default ColumnDetails;
