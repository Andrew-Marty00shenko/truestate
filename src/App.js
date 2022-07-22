import { useEffect, useState } from "react";
import { ToastContainer } from "react-toastify";
import { useTranslation } from "react-i18next";

import Header from "./Components/Header/Header";
import Footer from "./Components/Footer/Footer";
import Sidebar from "./Components/Sidebar/Sidebar";
import Routes from "./Routes/Routes";

import "./Utils/translation/translation";

const App = () => {
  const { i18n } = useTranslation();

  const [openSidebar, setOpenSidebar] = useState(false);
  const [showBtn, setShowBtn] = useState(false);

  window.onscroll = function () {
    scrollFunction();
  };

  const scrollFunction = () => {
    if (
      document.body.scrollTop > 20 ||
      document.documentElement.scrollTop > 20
    ) {
      setShowBtn(true);
    } else {
      setShowBtn(false);
    }
  }

  const topFunction = () => {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  }

  useEffect(() => {
    if (openSidebar) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [openSidebar]);

  useEffect(() => {
    localStorage.setItem("language", i18n.language);
  }, [i18n.language]);

  return <div className="wrapper">
    <Header
      openSidebar={openSidebar}
      setOpenSidebar={setOpenSidebar}
    />
    <Routes />
    <Footer />
    <ToastContainer />
    <Sidebar
      openSidebar={openSidebar}
      setOpenSidebar={setOpenSidebar}
    />

    <div className="wrapper__button-top"
      onClick={topFunction}
      style={showBtn ? { display: 'flex' } : { display: 'none' }}
    >
      <svg width="23" height="13" viewBox="0 0 23 13" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M1 11.7285L11.6066 1.12191L22.2132 11.7285" stroke="black" />
      </svg>
      Наверх
    </div>
  </div>
}

export default App;