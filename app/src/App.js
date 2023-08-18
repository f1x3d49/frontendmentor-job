import TabComponent from "./components/TabComponent";

function App() {
  return (
    <div className="font-primary min-h-screen w-full flex flex-col">
      {/* Background Styles */}
      <div className="relative w-full h-[150px] bg-primary">
        <div className="w-full h-full bg-mobile desktop:bg-desktop z-10 bg-no-repeat bg-cover"></div>
      </div>
      {/* Content Section */}
      <div className="w-full h-full flex-1 bg-background flex flex-col px-4 py-8 desktop:px-36 desktop:py-16">
        <TabComponent />
      </div>
    </div>
  );
}

export default App;
