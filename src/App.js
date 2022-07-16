import { useEffect } from "react";
import { useState } from "react";
import Header from "./Components/Header/Header";
import Footer from "./Components/Footer/Footer";
import Sidebar from "./Components/Sidebar/Sidebar";
import Routes from "./Routes/Routes";

const App = () => {
  const [openSidebar, setOpenSidebar] = useState(false);

  useEffect(() => {
    if (openSidebar) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [openSidebar]);

  return <div className="wrapper">
    <Header
      openSidebar={openSidebar}
      setOpenSidebar={setOpenSidebar}
    />
    <Routes />
    <Footer />
    <Sidebar
      openSidebar={openSidebar}
    />
  </div>
}

export default App;