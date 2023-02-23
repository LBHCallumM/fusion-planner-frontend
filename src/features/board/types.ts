export interface IColumn {
  name: string;
  id: string;
  cardIds: Array<string>
}

export interface ICard {
  id: string;
  title?: string;
  description?: string;
}

export interface IBoard {
  id: string;
  name: string;
  description: string;
}

export interface IComment {
  author: string;
  time: Date;
  message: string;
}