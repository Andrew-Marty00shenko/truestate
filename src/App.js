import { useEffect } from "react";
import { useState } from "react";
import Header from "./Components/Header/Header";
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
    <Sidebar
      openSidebar={openSidebar}
    />
  </div>
}

export default App;