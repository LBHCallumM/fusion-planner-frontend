const data = [
  {
    name: "List One",
    cards: [
      {
        title: "First Task",
      },
      {
        title: "Second Task",
      },
    ],
  },
  {
    name: "List Two",
    cards: [
      {
        title: "Third Task",
      },
    ],
  },
];
const Board = () => {
  return (
    <div>
      {/* Taskbar */}
      <div>
        <h1>Board One</h1>

        <button>Edit Board</button>
      </div>

      {/* Board */}
      <ul className="flex space-x-2">
        {data.map(({ name, cards}, listIndex) => (
            <li key={listIndex}>
                <div className="bg-gray-200 w-56 p-2 rounded-sm">
                    <h2>{name}</h2>

                    <ul className="flex flex-col space-y-2 mt-2">
                    {
                        cards.map(({ title}, cardIndex) => (
                            <li key={cardIndex}>
                                <div className="bg-gray-50 p-1 rounded-sm">{title}</div>
                            </li>
                        ))
                    }
                    </ul>

                    <div className="mt-2">
                        <button className="text-gray-500 w-full rounded-sm hover:bg-gray-300 hover:text-gray-900">+ Add a Card</button>
                    </div>
                </div>
            </li>
        ))}
      </ul>
    </div>
  );
};

export default Board;
