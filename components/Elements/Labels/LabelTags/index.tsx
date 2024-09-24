const LabelTagsElement = (props: any) => {
  const { className, text } = props;

  return (
    <a
      href="#"
      className={`px-2 py-1 text-xs leading-none text-blue-600 bg-blue-100 rounded-full hover:bg-blue-200 ${className}`}
    >
      {text}
    </a>
  );
};

export default LabelTagsElement;
