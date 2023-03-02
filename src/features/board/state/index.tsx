import { DropResult } from "react-beautiful-dnd";
import { Action, createHook, createStore } from "react-sweet-state";
import { ICard, IColumn } from "../types";

export type State = {
  columns: {
    [key: string]: IColumn;
  };
  cards: {
    [key: string]: ICard;
  };
  columnOrder: Array<string>;
};

const initialState: State = {
  columns: {},
  cards: {},
  columnOrder: [],
};

type Actions = typeof actions;

const actions = {
  initBoard:
    (initialState: State): Action<State> =>
    ({ getState, setState }) => {
      setState({
        ...initialState,
      });
    },
  addCard:
    (newCard: ICard, columnId: string): Action<State> =>
    ({ getState, setState }) => {
      const cards = {
        ...getState().cards,
        [newCard.id]: newCard,
      };

      const column = {
        ...getState().columns[columnId],
        cardIds: [...getState().columns[columnId].cardIds, newCard.id],
      };

      const columns = {
        ...getState().columns,
        [columnId]: column,
      };

      setState({
        cards,
        columns,
      });
    },
  deleteCard:
    (cardId: string, columnId: string): Action<State> =>
    ({ getState, setState }) => {
      const cards = {
        ...getState().cards,
      };

      delete cards[cardId];

      const cardIds = getState().columns[columnId].cardIds.filter(
        (x) => x !== cardId
      );

      const column = {
        ...getState().columns[columnId],
        cardIds,
      };

      const columns = {
        ...getState().columns,
        [columnId]: column,
      };

      setState({ columns });
    },
  editCard:
    (card: ICard): Action<State> =>
    ({ getState, setState }) => {
      const cards = {
        ...getState().cards,
        [card.id]: card,
      };

      setState({ cards });
    },
  reorderCard:
    (result: DropResult): Action<State> =>
    ({ getState, setState }) => {
      const { destination, source } = result;

      // not dropped in a valid location
      if (!destination) {
        return;
      }

      // dropped in the same location
      if (
        destination.droppableId === source.droppableId &&
        destination.index === source.index
      ) {
        return;
      }

      // Same Column
      if (source.droppableId === destination.droppableId) {
        const column = getState().columns[source.droppableId];

        const cardIds = column.cardIds.slice();
        const cardId = cardIds[source.index];

        cardIds.splice(source.index, 1);

        cardIds.splice(destination.index, 0, cardId);

        const updatedColumn = {
          ...column,
          cardIds: cardIds,
        };

        const columns = {
          ...getState().columns,
          [column.id]: updatedColumn,
        };

        setState({
          columns,
        });

        return;
      }

      // Different column
      const sourceColumn: IColumn = getState().columns[source.droppableId];
      const destinationColumn: IColumn =
        getState().columns[destination.droppableId];

      const sourceColumnCardIds = sourceColumn.cardIds;
      const cardId = sourceColumnCardIds[source.index];

      sourceColumnCardIds.splice(source.index, 1);

      // 2. add to second column
      const destinationColumnCardIds = destinationColumn.cardIds;
      destinationColumnCardIds.splice(destination.index, 0, cardId);

      const updatedSourceColumn = {
        ...sourceColumn,
        cardIds: sourceColumnCardIds,
      };

      const updatedDestinationColumn = {
        ...destinationColumn,
        cardIds: destinationColumnCardIds,
      };

      const columns = {
        ...getState().columns,
        [sourceColumn.id]: updatedSourceColumn,
        [destinationColumn.id]: updatedDestinationColumn,
      };

      setState({
        columns,
      });
    },
  addColumn:
    (newColumn: IColumn): Action<State> =>
    ({ getState, setState }) => {
      const columns = {
        ...getState().columns,
        [newColumn.id]: newColumn,
      };

      const columnOrder = [...getState().columnOrder, newColumn.id];

      setState({ columns, columnOrder });
    },
  deleteColumn:
    (columnId: string, destinationColumnId?: string): Action<State> =>
    ({ getState, setState }) => {
      const columns = { ...getState().columns };

      if (destinationColumnId !== null) {
        // take card ids from source column
        const cardIds = columns[columnId].cardIds;

        // add to destination column
        const destinationColumn = columns[destinationColumnId];

        const newColumnCardIds = [...destinationColumn.cardIds, ...cardIds];

        columns[destinationColumnId] = {
          ...destinationColumn,
          cardIds: newColumnCardIds,
        };
      }

      delete columns[columnId];

      const columnOrder = getState().columnOrder.filter((x) => x !== columnId);

      setState({ columns, columnOrder });
    },
  editColumn:
    (column: IColumn): Action<State> =>
    ({ getState, setState }) => {
      const columns = {
        ...getState().columns,
        [column.id]: column,
      };
      setState({ columns });
    },
  reorderColumns:
    (newOrder: Array<string>): Action<State> =>
    ({ getState, setState }) => {
      setState({
        columnOrder: newOrder,
      });
    },
};

const Store = createStore<State, Actions>({
  initialState,
  actions,
});

export const createState = createHook(Store);
