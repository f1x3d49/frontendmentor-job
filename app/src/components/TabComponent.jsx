import React from "react";

// Filter Component
import FilterComponent from "./FilterComponent";

// Badge Components
import BadgeNew from "./BadgeNew";
import BadgeFeatured from "./BadgeFeatured";

const TabComponent = ({
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
    <div
      className={`w-full h-[200px] desktop:h-[120px] bg-white shadow-md shadow-dgcan rounded-md flex items-center justify-between gap-2 pt-4 px-8 ${
        featured ? "border-l-4 border-primary" : null
      }`}
    >
      {/* Left Part */}
      <div className="flex items-center jsutify-center gap-4">
        <img
          src={logo}
          alt=""
          className="w-16 h-16 mobile:hidden desktop:block"
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
          <h1 className="text-vdgcyan font-[700] text-xl">{position}</h1>
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
      {/* Right Part */}
      <div className="flex items-center justify-between gap-2"></div>
    </div>
  );
};

export default TabComponent;
