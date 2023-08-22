// Tab Component
import TabComponent from "./components/TabComponent";

// Redux Tools
import { useSelector } from "react-redux";

function App() {
  // Redux State
  const listings = useSelector((state) => state.listing.listings);
  const filters = useSelector((state) => state.listing.filters);

  return (
    <div className="font-primary min-h-screen w-full flex flex-col">
      {/* Background Styles */}
      <div className="relative w-full h-[150px] bg-primary">
        <div className="w-full h-full bg-mobile desktop:bg-desktop z-10 bg-no-repeat bg-cover"></div>
      </div>
      {/* Filter Search Bar */}
      {filters ? null : <div>hello</div>}
      {/* Content Section */}
      <div className="w-full h-full flex-1 bg-background flex flex-col gap-8 px-4 py-8 desktop:px-36 desktop:py-16">
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
