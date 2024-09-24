import LabelLinkElement from "../Labels/LabelLink";
import ListViewItemsElement from "./ListViewItems";

const ListViewElement = (props: any) => {
  const {
    className,
    children,
    title,
    subTitle,
    onClick,
    onRefreshClick,
    data = [],
  } = props;
  return (
    <div className={`my-4 ${className}`}>
      <div className="flex justify-between px-4 py-3 bg-indigo-100 border border-indigo-200 rounded-t-lg">
        <div className="flex items-center">
          <img
            className="w-6 h-6 mr-2 rounded-md"
            src="https://avatars3.githubusercontent.com/in/2141?s=60&v=4"
            alt=""
          />
          <p className="text-sm font-semibold">{title}</p>
          <span className="ml-2 text-sm text-gray-600">/ {subTitle}</span>
        </div>
        <div className="hidden md:block md:flex">
          <LabelLinkElement
            text="Refresh data"
            prefixIcon={true}
            onClick={onRefreshClick}
          />
        </div>
      </div>
      <div className="hidden text-center border-b border-l border-r rounded-b-lg md:block">
        {data.map((item: any) => {
            const items = Object.values(item);
            return (
                <ListViewItemsElement key={items[0]} data={items} />
            );
        })}
      </div>
      <div className="py-2 text-center border-b border-l border-r rounded-b-lg md:hidden">
        <p className="text-blue-600 cursor-pointer hover:underline">
          View code
        </p>
      </div>
    </div>
  );
};

export default ListViewElement;
