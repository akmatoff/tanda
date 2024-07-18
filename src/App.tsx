import Breadcrumbs from "./components/Breadcrumbs";
import Footer from "./components/Footer";
import Header from "./components/Header";
import MobileHeader from "./components/MobileHeader";
import Navbar from "./components/Navbar";
import ProductDetails from "./pages/ProductDetails";

function App() {
  return (
    <>
      <MobileHeader />
      <Header />
      <main className="px-5 py-28 md:px-[70px] lg:px-[120px] min-h-screen">
        <Navbar />
        <Breadcrumbs />
        <ProductDetails />
      </main>
      <Footer />
    </>
  );
}

export default App;
