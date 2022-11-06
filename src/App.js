import { useEffect, useState } from "react";
import { ToastContainer } from "react-toastify";
import { useTranslation } from "react-i18next";
import CookieConsent from "react-cookie-consent";

import Header from "./Components/Header/Header";
import Footer from "./Components/Footer/Footer";
import Sidebar from "./Components/Sidebar/Sidebar";
import Routes from "./Routes/Routes";

import "./Utils/translation/translation";

const App = () => {
  const { t, i18n } = useTranslation();
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
  };

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
      {t('buttonUp:BUTTON_UP')}
    </div>

    <CookieConsent
      location="top"
      cookieName="myAwesomeCookieName2"
      expires={150}
      buttonText={<svg width="27" height="27" viewBox="0 0 27 27" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M1 1L26 26" stroke="black" stroke-width="2" stroke-linecap="round" />
        <path d="M1 26L26 1.00002" stroke="black" stroke-width="2" stroke-linecap="round" />
      </svg>}
    >
      <p>
        Мы используем файлы cookie <br />
        на нашем сайте.
      </p>
      <p>
        Продолжая навигацию по сайту, <br /> вы автоматически соглашаетесь <br /> с их использованием
      </p>
    </CookieConsent>
  </div>
}

export default App;