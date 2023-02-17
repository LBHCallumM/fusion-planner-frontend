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
            <h2 className="text-xl text-gray-800 mb">{card.title}</h2>
            <div className="text-gray-400 mb-2">
              in list <span className="underline">List Two</span>
            </div>

            <div className=" grid md:space-x-4 grid-cols-[1fr] md:grid-cols-[3fr,1fr]">
              <div>
                <h2 className="text-lg text-gray-800 mb-2">Description</h2>

                <div>
                  <div className="bg-gray-100 text-gray-600 p-3 rounded-sm">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. At
                    optio nihil, nesciunt nemo commodi quae aliquam doloremque
                    consequatur officiis consectetur, cumque deserunt? Ducimus
                    ut dolores est saepe eaque. Laudantium, nihil?
                  </div>
                </div>
              </div>

              <div className="">
                <div className="text-lg text-gray-800 mb-2 mt-2 md:mt-0">
                  Actions
                </div>

                <button className="bg-gray-100 px-2 w-full rounded-sm text-gray-600 text-left hover:bg-gray-200">
                  Delete Card
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
