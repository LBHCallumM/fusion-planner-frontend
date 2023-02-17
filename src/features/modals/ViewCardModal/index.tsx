// import Rodal from 'rodal';
import { ICard } from "@/features/board/types";
import Rodal from "rodal";
import { useEffect, useRef, useState } from "react";

import TextareaAutosize from "react-textarea-autosize";

// include styles
import "rodal/lib/rodal.css";

interface Props {
  modalVisible: boolean;
  handleClose: Function;
  card: ICard | null;
  boardId: string;
}

interface IComment {
  author: string;
  time: string;
  message: string;
}

const placeholderComments: Array<IComment> = [
  {
    author: "Callum Macpherson",
    time: "15 minutes ago",
    message: "Blah blah something",
  },
  {
    author: "Callum Macpherson",
    time: "15 minutes ago",
    message: "Blah blah something",
  },
  {
    author: "Callum Macpherson",
    time: "15 minutes ago",
    message: "Blah blah something",
  },
];

const ViewCardModal = ({ modalVisible, handleClose, card, boardId }: Props) => {
  const [editingDescription, setEditingDescription] = useState<boolean>(false);
  const [comments, setComments] = useState<Array<IComment> | null>(null);
  const [loadingComments, setLoadingComments] = useState<boolean>(false);

  useEffect(() => {
    // reset edit state
    setEditingDescription(false);

    // fetch new comments
    setComments(null);

    setLoadingComments(true);
    setTimeout(() => {


      // check if still needed
      if (card?.id === null) return

      setComments(placeholderComments);
      setLoadingComments(false);
    }, 1000);

    // timeoutRef.current = ref;
  }, [card?.id]);

  const handleEditDescription = () => {
    setEditingDescription(true);
  };

  const handleOnCancelEdit = () => {
    setEditingDescription(false);
  };

  const handleCopyLink = () => {
    const link = `${window.location.origin}/boards/${boardId}/cards/${card.id}`;
    navigator.clipboard.writeText(link);
  };

  return (
    <div>
      <Rodal
        customStyles={{
          width: "calc(100vw - 200px)",
          maxWidth: 600,
          maxHeight: "calc(100vh - 200px)",
          height: "auto",
        }}
        visible={modalVisible}
        onClose={handleClose}
      >
        {card && (
          <div className="">
            <h2 className="text-xl text-gray-800 mb flex items-center">
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
                  d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m2.25 0H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z"
                />
              </svg>

              <span className="font-medium">{card.title}</span>
            </h2>

            <div className="text-gray-400 mb-2 ml-8">
              in list <span className="underline">List Two</span>
            </div>

            <div>
              <button
                className="flex items-center ml-8 text-gray-600"
                onClick={handleCopyLink}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-4 h-6 mr-1"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M13.19 8.688a4.5 4.5 0 011.242 7.244l-4.5 4.5a4.5 4.5 0 01-6.364-6.364l1.757-1.757m13.35-.622l1.757-1.757a4.5 4.5 0 00-6.364-6.364l-4.5 4.5a4.5 4.5 0 001.242 7.244"
                  />
                </svg>
                <span>Copy link</span>
              </button>
            </div>

            <div className=" grid md:space-x-4 grid-cols-[1fr] md:grid-cols-[3fr,1fr] mt-4">
              <div>
                <h2 className="text-lg text-gray-800 mb-2 flex items-center ">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-6 h-6 mr-2"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25H12"
                    />
                  </svg>
                  <span className="font-medium">Description</span>{" "}
                  {card.description && (
                    <button className="bg-gray-200 ml-2 text-gray-600 px-2 py rounded-sm">
                      Edit
                    </button>
                  )}
                </h2>

                <div className=" ml-8">
                  {editingDescription ? (
                    <div>
                      <TextareaAutosize
                        minRows={6}
                        maxRows={12}
                        defaultValue={card.description}
                        className="border border-solid border-gray-500 w-full block rounded-sm p-2 min-h-full"
                      />

                      <div className="mt-2 gap-x-2 flex">
                        <button
                          onClick={handleOnCancelEdit}
                          className="bg-gray-600 text-gray-200 px-4 py-2 rounded-sm"
                        >
                          Save
                        </button>
                        <button
                          onClick={handleOnCancelEdit}
                          className="bg-gray-600 text-gray-200 px-4 py-2 rounded-sm"
                        >
                          Cancel
                        </button>
                      </div>
                    </div>
                  ) : (
                    <div
                      role="button"
                      onClick={handleEditDescription}
                      className="bg-gray-100 text-gray-600 p-3 rounded-sm"
                    >
                      {card.description
                        ? card.description
                        : "Add a more detailed description..."}
                    </div>
                  )}
                </div>

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
                  <input
                    type="text"
                    name=""
                    id=""
                    placeholder="Write a comment..."
                    className="w-full px-2 py-2 rounded-sm border border-solid border-gray-400 block"
                  />

                  <div className="flex gap-x-2">
                    <button className="bg-gray-600 text-gray-50 px-4 py-2 rounded-sm mt-2">
                      Send
                    </button>
                    <button className="bg-gray-600 text-gray-50 px-4 py-2 rounded-sm mt-2">
                      Cancel
                    </button>
                  </div>
                </div>

                <div>
                  {loadingComments ? (
                    <>Loading...</>
                  ) : (
                    <ol className="ml-8 mt-4 flex flex-col gap-y-4">
                      {placeholderComments.map((comment, index) => (
                        <li key={index}>
                          <div className="">
                            <div>
                              <span className="font-semibold mr">
                                {comment.author}
                              </span>{" "}
                              <span className="font-light text-gray-500">
                                {comment.time}
                              </span>
                            </div>
                            <div className="bg-gray-50 rounded-sm p-2 my-1">
                              {comment.message}
                            </div>
                            <div className="flex gap-x-2 font-light underline text-gray-500">
                              <button>Edit</button>
                              <button>Delete</button>
                            </div>
                          </div>
                        </li>
                      ))}
                    </ol>
                  )}
                </div>
              </div>

              <div className="">
                <div className="text-lg text-gray-800 mb-2 mt-2 md:mt-0 font-medium">
                  Actions
                </div>

                <button className="bg-gray-100 px-2 py w-full rounded-sm text-gray-600 text-left hover:bg-gray-200 flex">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-4 h-6 mr-1"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
                    />
                  </svg>

                  <span>Delete card</span>
                </button>
              </div>
            </div>
          </div>
        )}
      </Rodal>
    </div>
  );
};

export default ViewCardModal;

