import { Draggable } from "react-beautiful-dnd";
import { ICard } from "../types";

interface Props {
  card: ICard;
  index: number;
}

const Card = ({ card, index }: Props) => {



  return (
    <Draggable draggableId={card.id} index={index}>
      {(provided) => (
        <div
          ref={provided.innerRef}
          {...provided.draggableProps}
          {...provided.dragHandleProps}
          className="bg-gray-50 p-1 rounded-sm mb-2"
        >
          {card.title}
        </div>
      )}
    </Draggable>
  );
};

export default Card;

