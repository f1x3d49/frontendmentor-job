import React from "react";
import FilterComponent from "./FilterComponent";
import BadgeNew from "./BadgeNew";
import BadgeFeatured from "./BadgeFeatured";

const TabComponent = () => {
  return (
    <div
      className={`w-full h-[200px] desktop:h-[120px] bg-white shadow-md shadow-dgcan rounded-md hover:cursor-pointer flex gap-2 pt-4`}
    >
      TabComponent
      <FilterComponent filter="Frontend" />
      <BadgeNew />
      <BadgeFeatured />
    </div>
  );
};

export default TabComponent;
