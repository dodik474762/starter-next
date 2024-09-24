const TabNodeElement = (props: any) => {
  const {
    className,
    children,
    title,
    keyNode,
    keyNodeText,
    onClick,
    isActive,
  } = props;

  let classNames = className;
  if (isActive) {
    classNames += " border-orange-400";
  } else {
    classNames += " hover:border-gray-300 border-transparent";
  }
  return (
    <div
      className={`flex items-center px-4 pb-2 text-sm border-b-2 cursor-pointer ${className} ${classNames}`}
      onClick={onClick}
    >
      {keyNode && (
        <div
          className={`flex items-center justify-center w-6 h-6 p-1 ml-1 text-xs bg-gray-200 rounded-full mr-2`}
        >
          {keyNodeText}
        </div>
      )}
      {title}
    </div>
  );
};
export default TabNodeElement;
