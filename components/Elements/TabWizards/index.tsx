import TabNodeElement from "./tabnode";

const TabWizardElement = (props: any) => {
  const { className, children, data = [] } = props;

  return (
    <div className="flex items-center justify-between px-10 mt-6 -mx-10 border-b select-none md:mt-4">
      <div className="flex">
        {data.map((item: any, index: number) => {
          return (
            <TabNodeElement
              key={index}
              title={item.title}
              keyNode={item.keyNode}
              keyNodeText={index + 1}
              className=""
              isActive={item.isActive}
              onClick={item.onClick}
            />
          );
        })}
      </div>
      <div className="flex items-start pb-2 cursor-pointer md:hidden">
        <svg
          className="w-5 h-5 text-gray-700 fill-current"
          fill="currentColor"
          viewBox="0 0 20 20"
        >
          <path d="M6 10a2 2 0 11-4 0 2 2 0 014 0zM12 10a2 2 0 11-4 0 2 2 0 014 0zM16 12a2 2 0 100-4 2 2 0 000 4z"></path>
        </svg>
      </div>
    </div>
  );
};

export default TabWizardElement;
