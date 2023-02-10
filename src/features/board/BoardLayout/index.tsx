import { useEffect, useState } from "react";
import Board from "../Board";
import TaskBar from "../TaskBar";
import { IBoard } from "../types";
import initialData from "../initialData";

const BoardLayout = () => {
  const [boardData, setBoardData] = useState<IBoard | null>(null);

  useEffect(() => {
    setTimeout(() => {
      setBoardData(initialData);
    }, 0);
  }, []);

  return (
    <>
      <TaskBar title="Board One" />

      {boardData === null ? (
        <>
          <p>Loading...</p>
        </>
      ) : (
        // Eventually add Skeleton
        <Board initialData={boardData} />
      )}
    </>
  );
};

export default BoardLayout;
