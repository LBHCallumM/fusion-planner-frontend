import { Action, createHook, createStore } from "react-sweet-state";

export type State = {
  editColumnModal: { id: string } | null;
  showEditboardModal: boolean;
  viewCardModal: {
    cardId: string;
    boardId: string;
    columnId: string;
  } | null;
};

const initialState: State = {
  editColumnModal: null,
  showEditboardModal: false,
  viewCardModal: null,
};

type Actions = typeof actions;

const actions = {
  toggleEditColumnModal:
    (columnId: string | null): Action<State> =>
    ({ getState, setState }) => {
      setState({
        editColumnModal: columnId === null ? null : { id: columnId },
      });
    },
  toggleEditBoardModal:
    (show: boolean): Action<State> =>
    ({ getState, setState }) => {
      setState({
        showEditboardModal: show,
      });
    },
  toggleViewCardModal:
    (
      modalOptions: { cardId: string; boardId: string; columnId: string } | null
    ): Action<State> =>
    ({ getState, setState }) => {
      setState({
        viewCardModal: modalOptions,
      });
    },
};

const Store = createStore<State, Actions>({
  initialState,
  actions,
});

export const createModalState = createHook(Store);
