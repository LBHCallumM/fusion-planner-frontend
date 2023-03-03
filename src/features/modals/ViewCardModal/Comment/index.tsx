import { IComment } from "@/features/board/types";
import ReactTimeago from "react-timeago";

interface Props {
  comment: IComment;
  handleDeleteComment: () => void;
}

const Comment = ({ comment, handleDeleteComment }: Props) => {
  return (
    <div className="flex items-start">
      <div className="rounded-full bg-gray-900 w-10 h-10 text-white flex items-center justify-center mr-4 shrink-0">
        <span>CM</span>
      </div>
      <div>
      <div>
        <span className="font-semibold mr-2 text-gray-900">{comment.author}</span>{" "}
        <span className="font-light text-gray-500">
          <ReactTimeago date={comment.time}   />
        </span>
      </div>
      <div className="my-1 text-gray-700">
        {comment.message}
      </div>
      {comment.author === "Callum Macpherson" && (
        <div className="flex gap-x-2 font-light text-gray-500 ">
          <button className="hover:underline">Edit</button>
          <button className="hover:underline"  onClick={handleDeleteComment}>Delete</button>
        </div>
      )}
      </div>
    </div>
  );
};

export default Comment;
