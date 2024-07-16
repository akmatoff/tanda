import Footer from "./components/Footer";
import Header from "./components/Header";
import MobileHeader from "./components/MobileHeader";
import ProductDetails from "./pages/ProductDetails";

function App() {
  return (
    <>
      <MobileHeader />
      <Header />
      <main className="px-5 py-28 md:px-[70px] lg:px-[120px] min-h-screen">
        <ProductDetails />
      </main>
      <Footer />
    </>
  );
}

export default App;
