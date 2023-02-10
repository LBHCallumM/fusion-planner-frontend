import { Droppable } from "react-beautiful-dnd";

import { IColumn, ICard } from "../types";
import Card from "../Card";

interface Props {
  column: IColumn;
  cards: { [key: string]: ICard };
}
const Column = ({ column, cards }: Props) => {
  return (
    
      <div className="bg-gray-200 w-56 p-2 rounded-sm">
        <h2>{column.name}</h2>

        <Droppable droppableId={column.id}>
          {(provided) => (
            <div ref={provided.innerRef} {...provided.droppableProps}>
              {/* <ol className="flex flex-col space-y-2 mt-2"> */}
                {column.cardIds
                  .map((cardId) => cards[cardId])
                  .map((card, index) => (
                    <Card key={card.id} card={card} index={index} />
                  ))}
              {/* </ol> */}
              {provided.placeholder}
            </div>
          )}
        </Droppable>
      </div>
    
  );
};

export default Column;

