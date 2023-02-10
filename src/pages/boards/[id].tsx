import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";

const data = [
  {
    name: "List One",
    cards: [
      {
        id: "1",
        title: "First Task",
      },
      {
        id: "2",
        title: "Second Task",
      },
    ],
  },
  {
    name: "List Two",
    cards: [
      {
        id: "3",
        title: "Third Task",
      },
    ],
  },
];
const Board = () => {
  const handleDragEnd = () => {};

  return (
    <div>
      {/* Taskbar */}
      <div>
        <h1>Board One</h1>

        <button>Edit Board</button>
      </div>

      {/* <DragDropContext onDragEnd={handleDragEnd}> */}

      {/* Board */}
      {/* <ul className="flex space-x-2">
        {data.map(({ name, cards}, listIndex) => (
          <li key={listIndex}>
                <div className="bg-gray-200 w-56 p-2 rounded-sm">
                    <h2>{name}</h2>

                    <Droppable droppableId={`droppable-${listIndex}`}>
          {(provided, snapshot) => (
 <ul className="flex flex-col space-y-2 mt-2">
 {
     cards.map(({ title}, cardIndex) => (
        <Draggable draggableId={`draggable-${listIndex}-${cardIndex}`} index={cardIndex}>
          {( provided, snapshot) => (
            <li key={cardIndex}>
             <div className="bg-gray-50 p-1 rounded-sm">{title}</div>
         </li>
          )}
         
        </Draggable>
     ))
   }
 </ul>
          )}

                    </Droppable>
                   

                    <div className="mt-2">
                        <button className="text-gray-500 w-full rounded-sm hover:bg-gray-300 hover:text-gray-900">+ Add a Card</button>
                    </div>
                </div>
            </li>
        ))}
      </ul>
        </DragDropContext> */}
  
      <DragDropContext onDragEnd={handleDragEnd}>
        <Droppable droppableId="droppable">
          {(provided, snapshot) => (
            <div ref={provided.innerRef}>
              {
                data[0].cards.map(({title, id}, index) => (
<Draggable key={index} draggableId={id} index={index}>
                {(provided, snapshot) => (
                  <div
                    ref={provided.innerRef}
                    {...provided.draggableProps}
                    {...provided.dragHandleProps}
                    className="bg-green-200 p-3"
                  >
                    {title}
                  </div>
                )}
              </Draggable>
                ))
              }
              
              {provided.placeholder}
            </div>
          )}
        </Droppable>
      </DragDropContext>
    </div>
  );
};

export default Board;

