import ButtonElement from "../../Buttons";

const TopsMenusElement = (props: any) => {
  const { children, title, subTitle } = props;
  return (
    <div className="flex flex-col md:flex-row md:justify-between">
      <div className="flex items-center">
        <span>
          <svg
            className="w-4 h-4 mr-2 text-gray-600 fill-current"
            viewBox="0 0 16 16"
            version="1.1"
            width="16"
            height="16"
            aria-hidden="true"
          >
            <path
              fill-rule="evenodd"
              d="M2 2.5A2.5 2.5 0 014.5 0h8.75a.75.75 0 01.75.75v12.5a.75.75 0 01-.75.75h-2.5a.75.75 0 110-1.5h1.75v-2h-8a1 1 0 00-.714 1.7.75.75 0 01-1.072 1.05A2.495 2.495 0 012 11.5v-9zm10.5-1V9h-8c-.356 0-.694.074-1 .208V2.5a1 1 0 011-1h8zM5 12.25v3.25a.25.25 0 00.4.2l1.45-1.087a.25.25 0 01.3 0L8.6 15.7a.25.25 0 00.4-.2v-3.25a.25.25 0 00-.25-.25h-3.5a.25.25 0 00-.25.25z"
            ></path>
          </svg>
        </span>
        <div className="text-xl font-medium text-blue-700 cursor-pointer hover:underline">
          {title}
        </div>
        <span className="mx-1 text-xl font-medium text-gray-800">/</span>
        <div className="text-xl font-semibold text-blue-700 cursor-pointer hover:underline">
          {subTitle}
        </div>
      </div>
      
      <div className="hidden md:block md:flex md:justify-between">
        <ButtonElement text="Watch" suffixText="423" />
        <ButtonElement text="Data" className="ml-2" />
        <ButtonElement text="Watch" suffixText="423" className="ml-2" />
      </div>
      <div className="flex justify-between md:hidden">
        <button
          type="button"
          className="flex justify-center w-1/2 py-1 mr-2 text-center bg-gray-100 border border-gray-400 rounded-lg focus:outline-none hover:bg-gray-200"
        >
          <div className="flex items-center px-2">
            <svg
              className="w-4 h-4 mr-1 text-gray-700"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
            </svg>
            <span className="self-center text-sm font-medium">Unstar</span>
          </div>
        </button>
        <button
          type="button"
          className="flex justify-center w-1/2 py-1 ml-2 text-center bg-gray-100 border border-gray-400 rounded-lg focus:outline-none hover:bg-gray-300"
        >
          <div className="flex items-center px-2">
            <svg
              className="w-4 h-4 mr-1 text-gray-700"
              fill="none"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path>
              <path d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"></path>
            </svg>
            <span className="self-center text-sm font-medium">Watch</span>
            <svg
              className="w-3 h-3 ml-1 text-gray-700 fill-current"
              fill="none"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path d="M19 9l-7 7-7-7"></path>
            </svg>
          </div>
        </button>
      </div>
    </div>
  );
};

export default TopsMenusElement;
