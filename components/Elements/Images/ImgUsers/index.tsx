const ImgUsersElement = (props: any) => {
  const { className, src, alt, onClick } = props;
  return (
    <img
      className={`inline-block object-cover w-10 h-10 text-white border-2 border-gray-400 rounded-full shadow-sm cursor-pointer ${className}`}
      src={src}
      alt=""
    />
  );
};

export default ImgUsersElement;
