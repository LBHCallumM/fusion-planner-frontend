import Modal from "../Modal";
import { useState, useEffect } from "react";
import { createState } from "@/features/board/state";
import ReorderColumns from "./ReorderColumns";
import BoardDetails from "./BoardDetails";
import DocumentIcon from "@/components/icons/DocumentIcon";
import TabRouter from "@/components/tabs/TabRouter";

interface Props {
  modalVisible: boolean;
  handleClose: Function;
}

const EditBoardModal = ({ modalVisible, handleClose }: Props) => {



  const updateBoard = (name: string, description: string) => {
    //
  };

  type TabView = "Edit details" | "Reorder columns";
  const tabOptions: TabView[] = ["Edit details", "Reorder columns"];
  const [currentTab, setCurrentTab] = useState<TabView>("Edit details");

  const tabs = [
    {name: "Board details", component: <BoardDetails updateBoard={updateBoard} />},
    {name: "Reorder columns", component: <ReorderColumns />}
  ]

  return (
    <Modal modalVisible={modalVisible} handleClose={handleClose}>
      <div className="p-6">
        <h2 className="text-2xl text-gray-900 mb flex items-center">
          <DocumentIcon className="w-6 h-6 mr-2" />

          <span className="font-medium">Edit Board</span>
        </h2>

        <TabRouter tabs={tabs} />
      </div>
    </Modal>
  );
};

export default EditBoardModal;

