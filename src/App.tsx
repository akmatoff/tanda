import Header from "./components/Header";
import MobileHeader from "./components/MobileHeader";
import ProductDetails from "./pages/ProductDetails";

function App() {
  return (
    <>
      <MobileHeader />
      <Header />
      <main className="px-5 py-6 md:px-[70px] lg:px-[120px]">
        <ProductDetails />
      </main>
    </>
  );
}

export default App;
