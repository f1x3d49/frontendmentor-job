import React from "react";

// Remove Icon
import remove from "../images/icon-remove.svg";

// Redux Tools
import { useDispatch } from "react-redux";
import { filterListings, removeFilter } from "../redux/listingSlice";

const FilterInputComponent = ({ filter }) => {
  const dispatch = useDispatch();
  return (
    <div className="flex items-center justify-center">
      {/* Filter Name */}
      <div className="w-fit h-fit bg-filter font-[700] text-primary p-1 px-2 text-sm rounded-l-sm">
        {filter}
      </div>
      {/* Filter Remove Button */}
      <button
        className="w-full h-full flex-1 px-2 py-[7px] bg-primary hover:bg-vdgcyan rounded-r-sm"
        onClick={() => {
          dispatch(removeFilter(filter));
          dispatch(filterListings());
        }}
      >
        <img src={remove} alt="remove" />
      </button>
    </div>
  );
};

export default FilterInputComponent;
