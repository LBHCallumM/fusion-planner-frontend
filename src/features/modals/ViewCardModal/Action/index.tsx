interface Props {
  label: string;
  onClick: () => void;
}

const Action = ({ label, onClick }: Props) => {
  return (
    <>
      <div className="flex items-center justify-between">
        <div className="text-gray-700 sm:hidden">{label}</div>

        <button
          className=" sm:text-lg  max-w-[12rem] sm:max-w-none sm:w-full bg-gray-100 rounded-sm shadow-sm px-2 py-1 text-left shadow-sm font-normal text-gray-700 hover:bg-gray-200 flex items-center"
          onClick={onClick}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-4 h-4 sm:w-6 sm:h-6 mr-1"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
            />
          </svg>

          <span className="hidden sm:inline-block">{label}</span>
        </button>
      </div>
      <hr className="h-px my-2 border-gray-200 sm:hidden"></hr>
    </>
  );
};

export default Action;
