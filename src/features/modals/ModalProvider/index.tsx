import { useRouter } from "next/router";
import { Action, createHook, createStore } from "react-sweet-state";
import EditBoardModal from "../EditBoardModal";
import EditListModal from "../EditListModal";
import { createModalState } from "../State";
import ViewCardModal from "../ViewCardModal";

const ModalProvider = () => {
  const router = useRouter();

  const [
    { editColumnModal, showEditboardModal, viewCardModal },
    { toggleEditColumnModal, toggleEditBoardModal, toggleViewCardModal },
  ] = createModalState();

  const handleCloseViewCardModal = () => {
    router.push(`/boards/${viewCardModal?.boardId}/`);
    toggleViewCardModal(null);
  };

  return (
    <>
      <EditListModal
        handleClose={() => toggleEditColumnModal(null)}
        modalVisible={editColumnModal !== null}
        columnId={editColumnModal?.id || null}
      />

      <EditBoardModal
        handleClose={() => toggleEditBoardModal(false)}
        modalVisible={showEditboardModal}
      />

      <ViewCardModal
        modalVisible={viewCardModal !== null}
        handleClose={handleCloseViewCardModal}
        cardId={viewCardModal?.cardId || null}
        boardId={viewCardModal?.boardId || null}
        columnId={viewCardModal?.columnId || null}
      />
    </>
  );
};

export default ModalProvider;
