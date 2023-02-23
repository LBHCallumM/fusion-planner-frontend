import Board from "../Board";

interface Props {
  boardId: string;
  cardId: string | null;
  columnId: string | null;
}

const BoardLayout = ({ boardId, cardId, columnId }: Props) => {

  return (
    <Board boardId={boardId} cardId={cardId} columnId={columnId} />
  )
  
};

export default BoardLayout;

