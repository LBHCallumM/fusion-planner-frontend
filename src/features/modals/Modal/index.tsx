import Rodal from "rodal";

// include styles
import "rodal/lib/rodal.css";

interface Props {
    modalVisible: boolean;
    handleClose: Function;
    children: React.ReactNode
  }

const Modal = ({ modalVisible, handleClose, children }: Props) => {
    return (
        <Rodal
        customStyles={{
          width: "calc(100vw - 60px)",
          maxWidth: 800,
          // maxHeight: "calc(100vh - 200px)",
          height: "auto",
          margin: "30px auto",
          overflowY: "auto"
        }}
        visible={modalVisible}
        onClose={handleClose}
      >{children}</Rodal>
    )
}

export default Modal