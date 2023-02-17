import { Draggable } from "react-beautiful-dnd";
import { ICard } from "../types";

import { useRouter } from "next/router";

interface Props {
  card: ICard;
  index: number;
  boardId: string
}

const Card = ({ card, index, boardId }: Props) => {
  const router = useRouter();

  const handleViewCard = () => {

    router.push(`/boards/${boardId}/cards/${card.id}`);
  };

  return (
    <Draggable draggableId={card.id} index={index}>
      {(provided, snapshot) => (
        <li
          ref={provided.innerRef}
          {...provided.draggableProps}
          {...provided.dragHandleProps}
          className={`bg-gray-50 p-2 flex justify-between rounded-sm text-gray-700 shadow-sm hover:bg-gray-100 border-gray-300 group  ${
            snapshot.isDragging ? "border-2" : ""
          }`}
          onClick={handleViewCard}
        >
          <div>
            <div>{card.title}</div>
            <div>
              {card.description && (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-4 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25H12"
                  />
                </svg>
              )}
            </div>
          </div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6 text-gray-600 w-4 shrink-0 opacity-0 group-hover:opacity-100"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10"
            />
          </svg>
        </li>
      )}
    </Draggable>
  );
};

export default Card;

