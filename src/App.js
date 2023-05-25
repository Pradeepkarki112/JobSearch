import Navbar from "./component/Navbar";
import Searchbar from "./component/Searchbar";
import Jobbar from "./component/Jobbar";
import Footer from "./component/Footer";
import Service from "./component/Service";

function App() {
  return (
    <div className="w-[85%] m-auto">
      <Navbar />
      <Searchbar />
      <Jobbar />
      <Service />
      <Footer />
    </div>
  );
}

export default App;
