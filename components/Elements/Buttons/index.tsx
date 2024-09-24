const ButtonElement = (props: any) => {
  const { className, children, text, suffixText, prefixIcon, onClick } = props;
  return (
    <div className="flex text-center border rounded-lg md:border-none" onClick={onClick}>
      <div
        className={`flex items-center px-2 py-1 bg-gray-200 border-gray-400 cursor-pointer md:rounded-l-md md:border-t md:border-l md:border-b hover:bg-gray-300 ${className}`}
      >
        {prefixIcon && (
          <svg
            className="hidden w-4 h-4 mr-1 text-gray-700 md:block"
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
        )}
        <span className="self-center text-sm font-medium">{text}</span>
      </div>
      {suffixText && (
        <div className="px-2 py-1 text-sm font-semibold border border-t border-gray-400 rounded-r-md cursor-pointer hover:text-blue-600">
          {suffixText}
        </div>
      )}

      {
        !suffixText &&
        <div className="px-1 py-1 text-sm font-semibold border border-t border-gray-400 rounded-r-md cursor-pointer hover:text-blue-600">
          {children}
        </div>
      }
    </div>
  );
};

export default ButtonElement;
