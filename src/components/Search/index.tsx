"use client";

import { useReducer } from "react";
import Button from "../Button";
import BlogSelect from "./BlogSelect";
import { ActionSearch, ActionSearchKind, StateSearch } from "./SearchTypes";
import BlogSearch from "./BlogSearch";

function stateReducer(state: StateSearch, action: ActionSearch) {
  const { type, payload } = action;
  switch (type) {
    case ActionSearchKind.SEARCH:
      return { ...state, search: payload as string };
    case ActionSearchKind.SELECT:
      return { ...state, selected: payload as number };
    case ActionSearchKind.PAGE:
      return { ...state, page: payload as number };
    default:
      return state;
  }
}

type Props = {
  searchParam?: string;
  categoryParam?: number;
};

const Search = ({ searchParam, categoryParam }: Props) => {
  const initialState: StateSearch = {
    selected: categoryParam || 0,
    search: searchParam || "",
    page: 0,
  };
  const [state, dispatch] = useReducer(stateReducer, initialState);

  const query = {
    query: state.search.trim().toLowerCase(),
    category: state.selected,
  };

  return (
    <div className="mt-12 flex items-center justify-end gap-4">
      <BlogSelect value={state.selected} dispatch={dispatch} />
      <BlogSearch value={state.search} dispatch={dispatch} />
      <Button
        href={{
          pathname: "/",
          query,
        }}
      >
        Search
      </Button>
    </div>
  );
};

export default Search;
