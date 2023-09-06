import { ChangeEvent, Dispatch } from "react";
import { ActionSearch, ActionSearchKind } from "./SearchTypes";

type Props = { value: string; dispatch: Dispatch<ActionSearch> };

const BlogSearch = ({ value, dispatch }: Props) => {
  const onSearch = (e: ChangeEvent<HTMLInputElement>) =>
    dispatch({ type: ActionSearchKind.SEARCH, payload: e.target.value });

  return (
    <div className="flex items-center gap-4">
      <div className="rounded-md shadow-sm">
        <input
          type="text"
          onChange={onSearch}
          placeholder="Search by title"
          value={value}
          className="block w-full rounded-md px-4 py-2 text-secondary-950 outline-none placeholder:text-gray-400 focus:ring-1 focus:ring-inset focus:ring-primary sm:text-sm sm:leading-6"
        />
      </div>
    </div>
  );
};

export default BlogSearch;
