import React from "react";

// Redux Tools
import { useDispatch, useSelector } from "react-redux";
import { addFilter } from "../redux/listingSlice";

const FilterComponent = ({ filter }) => {
  const filters = useSelector((state) => state.listing.filters);
  const dispatch = useDispatch();

  return (
    <button
      className="text-sm w-fit h-fit p-1 px-2  text-center  text-primary active:text-white bg-filter active:bg-primary rounded-md font-[700] flex items-center justify-center"
      onClick={() => {
        dispatch(addFilter(filter));
        console.log(filters);
      }}
    >
      {filter}
    </button>
  );
};

export default FilterComponent;
