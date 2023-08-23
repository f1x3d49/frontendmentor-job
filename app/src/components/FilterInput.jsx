import React from "react";

// Filter Component
import FilterInputComponent from "./FilterInputComponent";

// Redux Tools
import { useSelector } from "react-redux";

// Random Key ID
import { nanoid } from "nanoid";

const FilterInput = () => {
  const filters = useSelector((state) => state.listing.filters);

  return (
    <div className="flex items-center justify-between w-full mobile:-mt-16 desktop:-mt-24 h-auto desktop:h-[60px] drop-shadow-md rounded-sm p-4 z-10 bg-white">
      {/* Filter Container */}
      <div className="flex items-center justify-start desktop:justify-between flex-wrap mobile:gap-2 desktop:gap-4">
        {filters.map((filter) => {
          return <FilterInputComponent filter={filter} key={nanoid()} />;
        })}
      </div>
      {/* Clear Button */}
      <button className="font-[700] text-dgcyan hover:text-primary hover:underline underline-offset-2 decoration-1s">
        Clear
      </button>
    </div>
  );
};

export default FilterInput;
