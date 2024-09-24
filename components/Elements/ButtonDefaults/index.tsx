const ButtonDefaultElement = (props: any) => {
  const { className, children, text, onClick, suffixIcon } = props;

  return (
    <button
      type="button"
      onClick={onClick}
      className={`flex items-center justify-center px-4 py-1 ml-2 text-center rounded-md focus:outline-none hover:bg-gray-300 ${className}`}
    >
      <span className="self-center text-sm font-medium">{text}</span>
      {suffixIcon && (
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
      )}
    </button>
  );
};

export default ButtonDefaultElement;
