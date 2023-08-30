import React from "react";

//Framer-motion
import { motion } from "framer-motion";

// Redux Tools
import { useDispatch } from "react-redux";
import { addTag } from "../redux/tagSlice";

const FilterComponent = ({ filter }) => {
  const dispatch = useDispatch();

  return (
    <motion.button
      className="text-sm w-fit h-fit p-1 px-2  text-center  text-primary active:text-white bg-filter active:bg-primary rounded-md font-[700] flex items-center justify-center"
      onClick={() => {
        dispatch(addTag(filter));
      }}
      whileHover={{ scale: 1.1 }}
    >
      {filter}
    </motion.button>
  );
};

export default FilterComponent;
