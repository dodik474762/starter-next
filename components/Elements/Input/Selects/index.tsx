import { useEffect, useState } from "react";

const SelectElement = (props: any) => {
  const { className, placeholder, data = [], name, handleChange } = props;

  return (
    <>
      {data && data.length > 0 && (
        <select
          id={name}
          onChange={handleChange}
          className={`lign-middle select-none font-sans font-bold text-center uppercase transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-xs py-2 px-4 rounded-md bg-gray-900 text-white shadow-md shadow-gray-900/10 hover:shadow-lg hover:shadow-gray-900/20 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none ${className}`}
        >
          <option value="">{placeholder}</option>
          {data.map((item: any) => {
            return <option value={item.value}>{item.text}</option>;
          })}
        </select>
      )}
    </>
  );
};

export default SelectElement;
