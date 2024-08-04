import Header from "../src/components/Header";
import Footer from "../src/components/Footer";
import { Outlet } from "react-router-dom";
import FetchItems from "../src/components/Fetchitems";
import { useSelector } from "react-redux";
import LoadingSpinner from "../src/components/LoadingSpinner";

function App() {
  const fetchStatus = useSelector((store) => store.fetchStatus);

  return (
    <>
      <Header />
      <FetchItems />
      {fetchStatus.currentlyFetching ? <LoadingSpinner /> : <Outlet />}
      <Footer />
    </>
  );
}

export default App;