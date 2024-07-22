import Header from "../components/page1 components/Header";
import Body from "../components/page1 components/Body";
import Footer from "../components/page1 components/Footer";
function Page1() {
  return (
    <>
      <div className="w-screen h-screen   overflow-y-auto">
        <Header />
        <Body />
        <Footer />
      </div>
    </>
  );
}

export default Page1;
