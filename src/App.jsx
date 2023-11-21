import Page1 from "./pages/Page1";
import Page3 from "./pages/Page3";
import Page2 from "./pages/Page2";
import Page4 from "./pages/Page4";
function App() {
  return (
    <>
      <div className="flex flex-col flex-wrap  min-h-screen  min-w-screen bg-neutral-900">
        <Page1 />
        <Page2 />
        <Page3 />
        <Page4 />
      </div>
    </>
  );
}

export default App;
  