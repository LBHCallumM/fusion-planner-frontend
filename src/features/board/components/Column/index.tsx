import { Droppable } from "react-beautiful-dnd";

import { IColumn, ICard } from "../../types";
import Card from "../Card";
import { useState } from "react";

import TextareaAutosize from "react-textarea-autosize";
import { getNextCardId } from "../../boardHelper";
import { createState } from "../../state";

interface Props {
  column: IColumn;
  boardId: string;
}

const Column = ({ column, boardId }: Props) => {
  const [isAddingCard, setIsAddingCard] = useState<boolean>(false);
  const [newCardName, setNewCardName] = useState<string>("");

  const [{ cards }, { addCard }] = createState();

  const handleOpenCardEditor = () => {
    setIsAddingCard(true);
  };

  const handleAddCard = (e) => {
    e.preventDefault();

    const newCard: ICard = { title: newCardName, id: getNextCardId() };
    addCard(newCard, column.id);

    setNewCardName("");
    setIsAddingCard(false);
  };

  const handleCancelCardEditor = () => {
    setIsAddingCard(false);
    setNewCardName("");
  };

  return (
    <div>
      <div className="bg-gray-200 w-72 p-2 rounded-sm">
        {/* <div> */}
        <div className="flex items-center justify-between mb-2 px-1 py-1">
          <h2 className="font-semibold text-gray-700 ">{column.name}</h2>
          <button>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6 text-gray-700"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
              />
            </svg>
          </button>
        </div>

        <Droppable droppableId={column.id}>
          {(provided, snapshot) => (
            <div ref={provided.innerRef} {...provided.droppableProps}>
              <ol className="space-y-2 min-h-[20px]">
                {column.cardIds
                  .map((cardId) => cards[cardId])
                  .map((card, index) => (
                    <Card
                      key={card?.id}
                      card={card}
                      index={index}
                      boardId={boardId}
                      columnId={column.id}
                    />
                  ))}
              </ol>
              <div>{provided.placeholder}</div>
            </div>
          )}
        </Droppable>

        <div>
          {isAddingCard ? (
            <div className="mt-2 ">
              <form onSubmit={handleAddCard}>
                <TextareaAutosize
                  name=""
                  id=""
                  cols={30}
                  rows={10}
                  className="bg-gray-50 w-full p-2 flex justify-between rounded-sm text-gray-700 shadow-sm hover:bg-gray-100 border-gray-300 group"
                  value={newCardName}
                  onInput={(e) => setNewCardName(e.target.value)}
                  autoFocus
                />

                <div className="mt-2 flex items-center">
                  <button
                    className=" bg-gray-600 rounded-sm px-3 text-white mr-2"
                    type="submit"
                  >
                    Add card
                  </button>
                  <button onClick={handleCancelCardEditor} type="button">
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
                        d="M6 18L18 6M6 6l12 12"
                      />
                    </svg>
                  </button>
                </div>
              </form>
            </div>
          ) : (
            <div>
              <button
                className="flex w-full items-center rounded-sm py-1 px-1 mt-2 hover:bg-gray-300 text-left text-gray-500 hover:text-gray-700"
                onClick={handleOpenCardEditor}
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
                    d="M12 4.5v15m7.5-7.5h-15"
                  />
                </svg>

                <span className="ml-1">Add a card</span>
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Column;

