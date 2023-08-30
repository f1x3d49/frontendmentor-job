import React from "react";

// Filter Component
import FilterInputComponent from "./FilterInputComponent";

// Redux Tools
import { useSelector, useDispatch } from "react-redux";

// Framer-motion
import { motion } from "framer-motion";

// Random Key ID
import { nanoid } from "nanoid";
import { removeAllTag } from "../redux/tagSlice";
import { resetJobs } from "../redux/listingSlice";

const FilterInput = () => {
  const tags = useSelector((state) => state.tag);
  const dispatch = useDispatch();

  return (
    <motion.div
      className="flex items-center justify-between w-full mobile:-mt-16 desktop:-mt-24 h-auto desktop:h-[60px] drop-shadow-md rounded-sm p-4 z-10 bg-white"
      initial={{ y: -200, scale: 0.5, opacity: 0 }}
      animate={{ y: 0, scale: 1, opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      {/* Filter Container */}
      <div className="flex items-center justify-start desktop:justify-between flex-wrap mobile:gap-2 desktop:gap-4">
        {tags.map((tag) => {
          return <FilterInputComponent filter={tag} key={nanoid()} />;
        })}
      </div>
      {/* Clear Button */}
      <button
        className="font-[700] text-dgcyan hover:text-primary hover:underline underline-offset-2 decoration-1s"
        onClick={() => {
          dispatch(removeAllTag());
          dispatch(resetJobs());
        }}
      >
        Clear
      </button>
    </motion.div>
  );
};

export default FilterInput;
