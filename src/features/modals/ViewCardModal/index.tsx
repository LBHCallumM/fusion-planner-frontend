// import Rodal from 'rodal';
import { ICard } from "@/features/board/types";
import Rodal from "rodal";

// include styles
import "rodal/lib/rodal.css";

interface Props {
  modalVisible: boolean;
  handleClose: Function;
  card: ICard | null;
}

const ViewCardModal = ({ modalVisible, handleClose, card }: Props) => {
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

            <div className=" grid md:space-x-4 grid-cols-[1fr] md:grid-cols-[3fr,1fr] mt-4">
              <div>
                <h2 className="text-lg text-gray-800 mb-2 flex items-center ">
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
                      d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25H12"
                    />
                  </svg>

                  <span className="font-medium">Description</span>
                </h2>

                <div>
                  <div className="bg-gray-100 text-gray-600 p-3 rounded-sm ml-8">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. At
                    optio nihil, nesciunt nemo commodi quae aliquam doloremque
                    consequatur officiis consectetur, cumque deserunt? Ducimus
                    ut dolores est saepe eaque. Laudantium, nihil?
                  </div>
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
