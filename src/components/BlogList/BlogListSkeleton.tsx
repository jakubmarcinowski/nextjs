const BlogListSkeleton = ({ count = 3 }: { count?: number }) => {
  const renderPosts = () =>
    [...Array(count)].map((_, idx) => (
      <article
        key={idx}
        className="relative flex flex-col overflow-hidden rounded-xl bg-white shadow-sm"
      >
        <div className="relative h-64 w-full">
          <div className="bg-BlogListSkeleton h-64 w-full animate-pulse bg-skeleton" />
        </div>
        <div className="flex h-[280px] w-full max-w-xl flex-col justify-between gap-4 p-5">
          <div>
            <span className="block h-4 w-1/4 animate-pulse bg-skeleton" />
            <h3 className="mt-2 h-4 w-1/2 animate-pulse bg-skeleton" />
          </div>
          <p className="h-12 animate-pulse rounded-sm bg-skeleton" />
          <div className="flex h-12 gap-4 align-middle">
            <div className="h-full w-12 animate-pulse rounded-full bg-skeleton" />
            <figcaption className="flex w-3/4 flex-col justify-center gap-2">
              <header className="h-4 animate-pulse bg-skeleton" />
              <time className="block h-4 animate-pulse bg-skeleton" />
            </figcaption>
          </div>
        </div>
      </article>
    ));

  return (
    <div className="mx-auto mt-12 grid gap-x-8 gap-y-20 lg:grid-cols-3">
      {renderPosts()}
    </div>
  );
};

export default BlogListSkeleton;
