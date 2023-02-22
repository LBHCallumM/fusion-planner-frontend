export interface IColumn {
  name: string;
  id: string;
  cardIds: Array<string>
}

export interface ICard {
  id: string;
  title: string;
  description?: string;
}

export interface IBoardState {
  columns: {
    [key: string]: IColumn;
  }
  cards: {
    [key: string]: ICard
  }
  columnOrder: Array<string>  
}

export interface IBoard {
  id: string;
  name: string;
  description: string;
}
