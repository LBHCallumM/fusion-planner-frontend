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

export interface IBoard {
  columns: {
    [key: string]: IColumn;
  }
  cards: {
    [key: string]: ICard
  }
  columnOrder: Array<string>
  
}
