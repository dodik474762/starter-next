const ListViewItemsElement = (props: any) => {
  const { children, className, data = [], key } = props;
  return (
    <>
      <div key={key} className="flex px-4 py-2 text-sm hover:bg-gray-200">
        {data.map((item: any, key: number) => {
          if (typeof item === "string") {
            return (
              <p key={key} className="w-1/2 cursor-pointer hover:underline truncate text-left">
                {item}
              </p>
            );
          }

          return (
            <p key={key} className="w-1/2 cursor-pointer hover:underline text-blue-600  truncate text-right" onClick={item}>
              Detail
            </p>
          );
        })}
      </div>
    </>
  );
};

export default ListViewItemsElement;
