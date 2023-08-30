// React Hooks
import { useState, useEffect } from "react";

// Tab Component
import TabComponent from "./components/TabComponent";

// Redux Tools
import { useSelector, useDispatch } from "react-redux";
import FilterInput from "./components/FilterInput";
import { filterListings, resetJobs } from "./redux/listingSlice";

function App() {
  // Redux State
  const listings = useSelector((state) => state.listing);
  const tags = useSelector((state) => state.tag);

  // Redux Dispatch
  const dispatch = useDispatch();

  // React State
  const [show, setShow] = useState(false);

  // Using this hooks in order to render filter input
  useEffect(() => {
    if (tags.length === 0) {
      setShow(false);
      dispatch(resetJobs());
    } else if (tags.length > 0) {
      setShow(true);
      dispatch(filterListings(tags));
    }
  }, [tags, dispatch]);

  return (
    <div className="font-primary min-h-screen w-full flex flex-col">
      {/* Background Styles */}
      <div className="relative w-full h-[150px] bg-primary">
        <div className="w-full h-full bg-mobile desktop:bg-desktop z-10 bg-no-repeat bg-cover"></div>
      </div>
      {/* Content Section */}
      <div className="w-full h-full flex-1 bg-background flex flex-col gap-8 px-4 py-8 desktop:px-36 desktop:py-16">
        {/* Filter Search Bar */}
        {show ? <FilterInput /> : null}
        {listings.map((listing) => {
          return (
            <TabComponent
              key={listing.id}
              company={listing.company}
              logo={listing.logo}
              isnew={listing.new}
              featured={listing.featured}
              position={listing.position}
              role={listing.role}
              level={listing.level}
              postedAt={listing.postedAt}
              contract={listing.contract}
              location={listing.location}
              languages={listing.languages}
              tools={listing.tools}
            />
          );
        })}
      </div>
    </div>
  );
}

export default App;
