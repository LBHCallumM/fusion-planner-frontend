import { useEffect, useState } from "react";
import Board from "../Board";
import TaskBar from "../TaskBar";
import { IBoard, ICard } from "../types";
import initialData from "../initialData";
import ViewCardModal from "../../modals/ViewCardModal";
// import Swal from 'sweetalert2'





const BoardLayout = () => {
  const [boardData, setBoardData] = useState<IBoard | null>(null);
  const [modalVisible, setModalVisible] = useState<boolean>(true)

  const [modal, setModal] = useState<ICard | null>(null)

  useEffect(() => {
    setTimeout(() => {
      setBoardData(initialData);

      
    }, 0);
  }, []);

  const showModal = (card: ICard): void => {
    // setModalVisible(card)
    setModal(card)
    // Swal.fire({
    //   title: 'Error!',
    //   text: 'Do you want to continue',
    //   // icon: 'error',
    //   confirmButtonText: 'Cool',
    //   html: 
    //     <div>
    //       test
    //     </div>
      
    // })
  }

  const closeModal = (): void => {
    setModal(null)
  }

  return (
    <>
      <TaskBar title="Board One" />


      {/* <button onClick={showModal}>Show Modal</button> */}

      <ViewCardModal card={modal} modalVisible={modal !== null} handleClose={closeModal} />

      {boardData === null ? (
        <>
          <p>Loading...</p>
        </>
      ) : (
        // Eventually add Skeleton
        <Board initialData={boardData} showModal={showModal}  />
      )}
    </>
  );
};

export default BoardLayout;
