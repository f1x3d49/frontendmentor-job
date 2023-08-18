import React from "react";

const FilterComponent = ({ filter }) => {
  return (
    <button className="text-sm w-fit h-fit p-1 px-2 ml-2 text-center  text-primary active:text-white bg-filter active:bg-primary rounded-md font-[700] flex items-center justify-center">
      {filter}
    </button>
  );
};

export default FilterComponent;
