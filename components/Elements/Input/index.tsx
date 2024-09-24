const InputElement = (props: any) => {
  const { className, placeholder } = props;
  return (
    <input
      type="text"
      className={`rounded-md focus:outline-none focus:shadow-none lg:block ${className}`}
      placeholder={placeholder}
    />
  );
};

export default InputElement;
