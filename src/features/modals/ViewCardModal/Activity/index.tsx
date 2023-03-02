import { IComment } from "@/features/board/types";
import React, { useEffect, useState } from "react";
import ReactTimeago from "react-timeago";
import placeholderComments from "./placeholderComments";

interface Props {
  cardId: string | null;
}

const Activity = ({ cardId }: Props) => {
  const [newComment, setNewComment] = useState<string>("");
  const [comments, setComments] = useState<Array<IComment>>([]);
  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    // fetch new comments
    setComments([]);
    setLoading(true);

    setTimeout(() => {
      // check if still needed
      if (cardId === null) return;

      setComments(placeholderComments());
      setLoading(false);
    }, 1000);
  }, [cardId]);

  const handleSubmit = (e: React.SyntheticEvent) => {
    e.preventDefault();

    if (newComment === "") return;

    // add comment
    const newMessage: IComment = {
      author: "Callum Macpherson",
      message: newComment,
      time: new Date(),
    };

    setComments((x) => [newMessage, ...x]);

    // reset

    setNewComment("");
  };

  const handleCancel = () => {
    setNewComment("");
  };

  const handleOnInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNewComment(e.target.value);
  };

  const handleDeleteComment = (index: number) => {
    setComments((x) => x.filter((y, i) => i !== index));
  };

  return (
    <>
      {/* Refactor icons as components */}
      {/* Then create headings as components, with icons as an optional prop */}
      <h2 className="text-lg text-gray-800 mb-2 flex items-center mt-4">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-6 h-6 mr-2"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M7.5 8.25h9m-9 3H12m-9.75 1.51c0 1.6 1.123 2.994 2.707 3.227 1.129.166 2.27.293 3.423.379.35.026.67.21.865.501L12 21l2.755-4.133a1.14 1.14 0 01.865-.501 48.172 48.172 0 003.423-.379c1.584-.233 2.707-1.626 2.707-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0012 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018z"
          />
        </svg>

        <span className="font-medium">Activity</span>
      </h2>
      {/* Add Comment */}

      <div className="ml-8 bg-gray-100 p-2 rounded-sm">
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name=""
            id=""
            placeholder="Write a comment..."
            className="w-full px-2 py-2 rounded-sm border border-solid border-gray-400 block"
            value={newComment}
            onInput={handleOnInput}
          />

          <div className="flex gap-x-2">
            <button
              type="submit"
              className="bg-gray-600 text-gray-50 px-4 py-2 rounded-sm mt-2"
            >
              Send
            </button>
            <button
              type="button"
              onClick={handleCancel}
              className="bg-gray-600 text-gray-50 px-4 py-2 rounded-sm mt-2"
            >
              Cancel
            </button>
          </div>
        </form>
      </div>

      <div>
        {loading ? (
          <>Loading...</>
        ) : (
          <ol className="ml-8 mt-4 flex flex-col gap-y-4">
            {comments &&
              comments.map((comment, index) => (
                <li key={index}>
                  {/* Add EditComment functionality */}
                  <div className="">
                    <div>
                      <span className="font-semibold mr">{comment.author}</span>{" "}
                      <span className="font-light text-gray-500">
                        <ReactTimeago date={comment.time} />
                      </span>
                    </div>
                    <div className="bg-gray-50 rounded-sm p-2 my-1 shadow-sm">
                      {comment.message}
                    </div>
                    {comment.author === "Callum Macpherson" && (
                      <div className="flex gap-x-2 font-light underline text-gray-500">
                        <button>Edit</button>
                        <button onClick={() => handleDeleteComment(index)}>
                          Delete
                        </button>
                      </div>
                    )}
                  </div>
                </li>
              ))}
          </ol>
        )}
      </div>
    </>
  );
};

export default Activity;
