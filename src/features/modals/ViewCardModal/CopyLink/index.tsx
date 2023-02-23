interface Props {
  boardId: string;
  columnId: string;
  cardId: string;
}

const CopyLink = ({ boardId, columnId, cardId }: Props) => {
  const handleCopyLink = () => {
    const link = `${window.location.origin}/boards/${boardId}/cards/${columnId}/${cardId}`;
    navigator.clipboard.writeText(link);
  };

  return (
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
  );
};

export default CopyLink;
