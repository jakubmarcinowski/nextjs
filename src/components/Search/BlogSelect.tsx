import { useCategories } from "@/context/categories";
import { CategorySchema } from "@/models/Blog";
import { ChangeEvent, Dispatch, memo, useMemo } from "react";
import Category from "./Category";
import { ActionSearch, ActionSearchKind } from "./SearchTypes";

const MemoizedCategory = memo(Category);

type Props = { value: number; dispatch: Dispatch<ActionSearch> };

const BlogSelect = ({ value, dispatch }: Props) => {
  const { categories } = useCategories();

  const onSelect = (e: ChangeEvent<HTMLSelectElement>) =>
    dispatch({ type: ActionSearchKind.SELECT, payload: e.target.value });

  const memoizedCategories = useMemo(
    () =>
      categories.map((category: CategorySchema, idx: number) => (
        <MemoizedCategory key={idx} {...category} />
      )),
    [categories],
  );

  return (
    <select
      className="block rounded-md px-2 py-2.5 text-sm text-secondary-950 outline-none focus:ring-1 focus:ring-inset focus:ring-primary"
      value={value}
      onChange={onSelect}
    >
      <option value={0}>Choose categories</option>
      {memoizedCategories}
    </select>
  );
};

export default BlogSelect;
