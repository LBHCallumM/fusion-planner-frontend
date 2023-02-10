import { Droppable } from "react-beautiful-dnd";

import { IColumn, ICard } from "../types";
import Card from "../Card";

interface Props {
  column: IColumn;
  cards: { [key: string]: ICard };
}
const Column = ({ column, cards }: Props) => {
  const handleAddCard = () => {};

  return (
    <div>
      <div className="bg-gray-200 w-72 p-2 rounded-sm">
        {/* <div> */}
        <div className="flex items-center justify-between mb-2 px-1 py-1">
          <h2 className="font-semibold text-gray-700 ">
            {column.name}
          </h2>
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
                    <Card key={card.id} card={card} index={index} />
                  ))}
              </ol>
              <div>{provided.placeholder}</div>
            </div>
          )}
        </Droppable>

        <div>
          <button
            className="block w-full rounded-sm py-1 px-1 mt-2 hover:bg-gray-300 text-left text-gray-500 hover:text-gray-700"
            onClick={handleAddCard}
          >
            + Add a card
          </button>
        </div>
      </div>
    </div>
  );
};

export default Column;

