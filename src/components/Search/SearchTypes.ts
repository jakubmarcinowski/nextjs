export enum ActionSearchKind {
  SEARCH = "SEARCH",
  SELECT = "SELECT",
  PAGE = "PAGE",
}

export interface ActionSearch {
  type: ActionSearchKind;
  payload: number | string;
}

export interface StateSearch {
  selected: number;
  search: string;
  page: number;
}
