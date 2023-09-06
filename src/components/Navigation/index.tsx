import Button from "../Button";

type Props = {
  pages: number;
  pageParam?: number;
  searchParam?: string;
  categoryParam?: number;
};

const Navigation = ({
  pageParam = 1,
  pages,
  searchParam,
  categoryParam,
}: Props) => {
  const nextPage = pageParam < pages + 1 ? pageParam + 1 : pages;
  const prevPage = pageParam > 1 ? pageParam - 1 : 1;

  return (
    <div className="mt-4 flex justify-end gap-4">
      <Button
        disabled={pageParam < 2}
        href={{
          pathname: "/",
          query: {
            query: searchParam,
            category: categoryParam,
            page: prevPage,
          },
        }}
      >
        Previous
      </Button>
      <Button
        disabled={pageParam > pages}
        href={{
          pathname: "/",
          query: {
            query: searchParam,
            category: categoryParam,
            page: nextPage,
          },
        }}
      >
        Next
      </Button>
    </div>
  );
};
export default Navigation;
