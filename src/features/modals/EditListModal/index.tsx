import RadioGroup from "@/components/form/RadioGroup";
import TextInput from "@/components/form/TextInput";
import { createState } from "@/features/board/state";
import { useEffect, useState } from "react";
import Modal from "../Modal";

interface Props {
  modalVisible: boolean;
  handleClose: Function;
  columnId: string | null;
}

const EditListModal = ({ modalVisible, handleClose, columnId }: Props) => {
  const [columnName, setColumnName] = useState<string>("");
 

  const [
    { cards, columnOrder, columns },
    { reorderColumns: reorderColumn, editColumn, deleteColumn },
  ] = createState();

  const [destinationColumnId, setDestinationColumnId] = useState<string | null>(columnOrder
    .filter((x) => x !== columnId)[0]);

  const [selectedRadioOption, setSelectedRadioOption] = useState("1");

  useEffect(() => {
    // set by default to first item
    setDestinationColumnId(columnOrder
        .filter((x) => x !== columnId)[0])
  }, [columnOrder])

  useEffect(() => {
    console.log({ columnId, columns })

    if (columnId !== null && columns.hasOwnProperty(columnId)) {
        setColumnName(columns[columnId].name)
        return
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
    <Modal modalVisible={modalVisible} handleClose={handleClose}>
      <div className="sm:p-2 md:p-4 lg:p-8">
        <h2 className="text-2xl text-gray-800 mb flex items-center font-medium">
          {columns[columnId]?.name}
        </h2>

        <>
          {columnId === null ? (
            <></>
          ) : (
            <form onSubmit={handleUpdateColumn}>
              <h3 className="text-xl text-gray-800 mb flex items-center font-medium mt-4">
                Edit column
              </h3>

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
                    className="border-2 border-black mt-2 p-2 rounded-none w-full "
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
            </form>
          )}
        </>
      </div>
    </Modal>
  );
};

export default EditListModal;

