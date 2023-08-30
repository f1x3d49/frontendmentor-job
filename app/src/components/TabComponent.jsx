import React from "react";

//Framer-motion
import { motion } from "framer-motion";

// Filter Component
import FilterComponent from "./FilterComponent";

// Badge Components
import BadgeNew from "./BadgeNew";
import BadgeFeatured from "./BadgeFeatured";

// Random Key ID
import { nanoid } from "nanoid";

const TabComponent = ({
  key,
  company,
  logo,
  isnew,
  featured,
  position,
  role,
  level,
  postedAt,
  contract,
  location,
  languages,
  tools,
}) => {
  return (
    <motion.div
      className={`w-full h-[200px] desktop:h-[120px] bg-white shadow-md shadow-dgcan rounded-md flex flex-col desktop:flex-row items-start desktop:items-center justify-between gap-2 pt-4 px-4 py-4 desktop:py-0 ${
        featured ? "border-l-4 border-primary" : null
      }`}
      transition={{ delay: 0.1 * key }}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 20 }}
    >
      <img src={logo} alt="logo" className="desktop:hidden w-10 h-10 -mt-8" />
      {/* Left Part */}
      <div className="flex items-start desktop:items-center justify-center gap-4">
        <img
          src={logo}
          alt=""
          className="desktop:w-16 desktop:h-16 hidden desktop:block"
        />
        {/* Text Container */}
        <div className="flex flex-col gap-1 items-start justify-center">
          {/* Name and Badges Container */}
          <div className="flex items-start justify-between gap-4">
            <p className="text-sm text-primary font-[700]">{company}</p>
            {/* Badges */}
            <div className="flex justify-between items-center gap-1">
              {isnew ? <BadgeNew /> : null}
              {featured ? <BadgeFeatured /> : null}
            </div>
          </div>
          {/* Position */}
          <h1 className="text-vdgcyan font-[700] text-xl hover:cursor-pointer hover:text-primary">
            {position}
          </h1>
          {/* Other Info Container */}
          <div className="flex items-center justify-between gap-4">
            <p className="text-sm text-dgcyan">{postedAt}</p>
            <div className="w-1 h-1 rounded-full bg-dgcyan">{/* Circle */}</div>
            <p className="text-sm text-dgcyan">{contract}</p>
            <div className="w-1 h-1 rounded-full bg-dgcyan">{/* Circle */}</div>
            <p className="text-sm text-dgcyan">{location}</p>
          </div>
        </div>
      </div>
      {/* Mobile Layout Line */}
      <div className="w-full h-[1px] bg-dgcyan desktop:hidden"></div>
      {/* Right Part */}
      <div className="flex items-start flex-wrap justify-start desktop:justify-between gap-2">
        {role && <FilterComponent filter={role} />}
        {level && <FilterComponent filter={level} />}
        {languages &&
          languages.map((language) => {
            return <FilterComponent filter={language} key={nanoid()} />;
          })}
        {tools &&
          tools.map((tool) => {
            return <FilterComponent filter={tool} key={nanoid()} />;
          })}
      </div>
    </motion.div>
  );
};

export default TabComponent;
