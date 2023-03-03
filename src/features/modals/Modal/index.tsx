import Rodal from "rodal";

// include styles
import "rodal/lib/rodal.css";

interface Props {
  modalVisible: boolean;
  handleClose: Function;
  children: React.ReactNode;
  modalSize?: "large" | "normal";
}

const Modal = ({ modalVisible, handleClose, children, modalSize = "normal" }: Props) => {
  return (
    <Rodal
      customStyles={{
        width: "calc(100vw - 20px)",
        maxWidth: modalSize === "large" ? 1200 : 800,
        // maxHeight: "calc(100vh - 200px)",
        height: "auto",
        margin: "10px auto",
        overflowY: "auto",
        padding: 0,
        // background: "#f5f5f5"
      }}
      // className="bg-orange-600"
      visible={modalVisible}
      onClose={handleClose}
    >
      {children}
    </Rodal>
  );
};

export default Modal;
