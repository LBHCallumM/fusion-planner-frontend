import RadioGroup from "@/components/form/RadioGroup";
import TextInput from "@/components/form/TextInput";
import TabRouter from "@/components/tabs/TabRouter";
import { createState } from "@/features/board/state";
import { useEffect, useState } from "react";
import Modal from "../Modal";
import ColumnDetails from "./ColumnDetails";
import DeleteColumn from "./DeleteColumn";

interface Props {
  modalVisible: boolean;
  handleClose: () => void;
  columnId: string | null;
}

const EditListModal = ({ modalVisible, handleClose, columnId }: Props) => {
  const tabs = [
    {
      name: "Column details",
      component: <ColumnDetails columnId={columnId} />,
    },
    {
      name: "Delete column",
      component: <DeleteColumn columnId={columnId} handleClose={handleClose} />,
    },
  ];

  return (
    <Modal modalVisible={modalVisible} handleClose={handleClose}>
      <div className="p-6">
        <TabRouter tabs={tabs} />
      </div>
    </Modal>
  );
};

export default EditListModal;

