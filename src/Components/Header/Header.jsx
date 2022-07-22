import classNames from "classnames";
import { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import { Link as NavigationLink } from "react-scroll";

import { useOutside } from "../../Utils/helpers/useOutside";
import CallMeForm from "../CallMeForm/CallMeForm"

import Logo from "../../assets/images/logo.svg";
import "./Header.scss";

const languages = [
    {
        id: 1,
        name: 'Русский',
        abr: 'RU',
        icon: <svg width="23" height="24" viewBox="0 0 23 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect x="0.5" y="7.33569" width="16.0878" height="16.0878" rx="2.34797" stroke="black" />
            <path d="M4 13.2937L9.14074 18.4344L21.0848 3.79091" stroke="black" strokeWidth="1.5" />
        </svg>
    },
    {
        id: 2,
        name: 'English',
        abr: 'EN',
        icon: <svg width="23" height="24" viewBox="0 0 23 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect x="0.5" y="7.33569" width="16.0878" height="16.0878" rx="2.34797" stroke="black" />
            <path d="M4 13.2937L9.14074 18.4344L21.0848 3.79091" stroke="black" strokeWidth="1.5" />
        </svg>
    },
    {
        id: 3,
        name: 'Український',
        abr: 'UA',
        icon: <svg width="23" height="24" viewBox="0 0 23 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect x="0.5" y="7.33569" width="16.0878" height="16.0878" rx="2.34797" stroke="black" />
            <path d="M4 13.2937L9.14074 18.4344L21.0848 3.79091" stroke="black" strokeWidth="1.5" />
        </svg>
    },
    {
        id: 4,
        name: 'Deutsch',
        abr: 'DE',
        icon: <svg width="23" height="24" viewBox="0 0 23 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect x="0.5" y="7.33569" width="16.0878" height="16.0878" rx="2.34797" stroke="black" />
            <path d="M4 13.2937L9.14074 18.4344L21.0848 3.79091" stroke="black" strokeWidth="1.5" />
        </svg>
    }
];

const Header = ({ openSidebar, setOpenSidebar }) => {
    const [openCallMeForm, setOpenCallMeForm] = useState(false);
    const [openLanguagesMenu, setOpenLanguagesMenu] = useState(false);
    const [activeLanguage, setActiveLanguage] = useState(null);
    const headerRef = useRef();

    useEffect(() => {
        setActiveLanguage(languages[0]);
    }, []);

    useOutside(headerRef, () => {
        setOpenCallMeForm(false);
        setOpenLanguagesMenu(false);
    });

    const handleChangeLanguage = (lang) => {
        setActiveLanguage(lang);
        setOpenLanguagesMenu(false);
        setOpenCallMeForm(false);
    };

    return <header
        ref={headerRef}
        className={classNames("header", {
            "header--open-sidebar": openSidebar
        })}
    >
        <div className="header__background" />
        <div className="header__logo">
            <Link to='/'>
                <img src={Logo} alt="logo" />
            </Link>
        </div>
        <ul className="header__navigation">
            <li>
                <NavigationLink to="about">
                    О нас
                </NavigationLink>
            </li>
            <li>
                <NavigationLink to="benefits">
                    Преимущества
                </NavigationLink>
            </li>
            <li>
                <NavigationLink to="estates">
                    Объекты
                </NavigationLink>
            </li>
            <li>
                <NavigationLink to="faq">
                    FAQ
                </NavigationLink>
            </li>
            <li>
                <NavigationLink to="invest">
                    Инвестировать
                </NavigationLink>
            </li>
        </ul>
        <div className="header__button-burger"
            onClick={() => setOpenSidebar(!openSidebar)}
        >
            <svg width="40" height="21" viewBox="0 0 40 21" fill="none" xmlns="http://www.w3.org/2000/svg"
                className={classNames({ "active": openSidebar })}
            >
                <rect width="40" height="1" fill="black" />
                <rect y="10" width="40" height="1" fill="black" />
                <rect y="20" width="40" height="1" fill="black" />
            </svg>
        </div>
        <ul className="header__menu">
            <li
                onClick={() => {
                    setOpenCallMeForm(!openCallMeForm)
                    setOpenLanguagesMenu(false)
                }}
            >
                <svg className={classNames({ "active": openSidebar })}
                    width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M6.97588 7.88185C7.67889 9.51566 10.1087 12.0895 12.161 13.0229C12.2056 12.9594 12.2547 12.8615 12.3292 12.7883C12.7601 12.365 13.1802 11.9295 13.6349 11.5334C14.2963 10.9567 15.2872 10.9562 15.9254 11.5622C16.8144 12.4064 17.6826 13.2742 18.5255 14.1638C19.1307 14.8026 19.1626 15.7885 18.5889 16.452C18.0242 17.1044 17.417 17.7266 16.7779 18.3068C16.12 18.9047 15.2953 19.0571 14.4205 18.9825C12.8032 18.8442 11.3672 18.1918 9.97543 17.4243C8.25416 16.4752 6.72246 15.2764 5.38285 13.8424C3.75535 12.0996 2.40916 10.1716 1.56069 7.92878C1.25202 7.11137 1.02495 6.27529 1.00163 5.39481C0.978316 4.50778 1.20234 3.70904 1.84047 3.06117C2.34732 2.54701 2.83593 2.01014 3.38079 1.53938C4.22368 0.811277 5.14108 0.817332 5.95357 1.5757C6.81268 2.37848 7.63834 3.2196 8.44119 4.07838C9.05752 4.73786 9.04789 5.7137 8.44727 6.39034C8.02253 6.86918 7.55369 7.30866 7.10361 7.7653C7.06408 7.80516 7.02099 7.84098 6.97588 7.88185ZM2.08832 5.33427C2.10859 5.55022 2.12633 5.76669 2.15066 5.98264C2.1608 6.07498 2.18259 6.1658 2.20338 6.25662C2.50039 7.57255 3.05184 8.78504 3.75687 9.92638C5.63729 12.97 8.14266 15.347 11.3774 16.9314C12.3657 17.4152 13.3855 17.8058 14.4981 17.9047C15.195 17.9662 15.8062 17.8058 16.3035 17.2886C16.7089 16.8668 17.123 16.4535 17.5331 16.0357C17.5853 15.9823 17.635 15.9268 17.6821 15.8687C17.971 15.5105 17.9746 15.1492 17.6608 14.8111C17.3222 14.4463 16.9629 14.1007 16.6106 13.749C16.1747 13.3136 15.7409 12.8751 15.2979 12.4467C14.9669 12.1268 14.5954 12.1233 14.2446 12.4195C14.1782 12.4755 14.1164 12.538 14.0546 12.5991C13.6258 13.0245 13.2005 13.4533 12.7687 13.8757C12.4595 14.1779 12.1164 14.2334 11.7423 14.0447C11.4813 13.913 11.2187 13.7813 10.9678 13.6325C9.83858 12.9624 8.8563 12.1142 7.96931 11.154C7.18572 10.3058 6.47055 9.40819 5.98803 8.34808C5.73309 7.788 5.78681 7.51351 6.2298 7.08564C6.67735 6.65322 7.12642 6.2213 7.55623 5.77173C7.89683 5.415 7.88467 5.06836 7.55927 4.69548C7.51822 4.64855 7.47564 4.60314 7.43154 4.55924C6.72651 3.85587 6.02199 3.15148 5.31544 2.44912C4.85471 1.99147 4.45582 1.99198 3.99003 2.45114C3.58657 2.84874 3.19478 3.25845 2.78321 3.64748C2.29359 4.10967 2.06399 4.66571 2.08832 5.33427Z" fill="black" stroke="black" strokeWidth="0.5" />
                </svg>
                <span> Перезвоните мне</span>
            </li>
            <li
                className={classNames("language-menu-text",
                    { "language-menu-text--active": openLanguagesMenu },
                    { "active": openSidebar }
                )}
                onClick={() => {
                    setOpenLanguagesMenu(!openLanguagesMenu)
                    setOpenCallMeForm(false)
                }}
            >
                {activeLanguage?.abr}
                <svg className={classNames({ "active": openSidebar })}
                    width="11" height="7" viewBox="0 0 11 7" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M1.15625 1.22095L5.53014 5.59484L9.90403 1.22095" stroke="black" strokeWidth="1.17327" />
                </svg>
            </li>
            <li>
                <Link to='/dashboard'>
                    <svg className={classNames("third-desktop", { "active": openSidebar })}
                        width="19" height="19" viewBox="0 0 19 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M12.5688 10.4644C14.0198 9.53885 14.9814 7.95758 14.9814 6.16238C14.9814 3.31609 12.5688 1 9.60396 1C6.63908 1 4.22649 3.31609 4.22649 6.16238C4.22649 7.95758 5.18571 9.53885 6.63908 10.4644C3.35204 11.6294 1 14.6547 1 18.2079H2.43399C2.43399 14.4129 5.65079 11.3248 9.60396 11.3248C13.5571 11.3248 16.7739 14.4129 16.7739 18.2079H18.2079C18.2079 14.6547 15.8559 11.6294 12.5688 10.4644ZM9.60396 9.94812C7.42875 9.94812 5.66048 8.25058 5.66048 6.16238C5.66048 4.07417 7.42875 2.37663 9.60396 2.37663C11.7792 2.37663 13.5474 4.07417 13.5474 6.16238C13.5474 8.25058 11.7792 9.94812 9.60396 9.94812Z" fill="black" stroke="black" strokeWidth="0" />
                    </svg>
                    <svg className={classNames("third-mobile", { "active": openSidebar })}
                        width="19" height="19" viewBox="0 0 19 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M12.5688 10.5283C14.0198 9.60281 14.9814 8.02155 14.9814 6.22634C14.9814 3.38006 12.5688 1.06396 9.60396 1.06396C6.63908 1.06396 4.22649 3.38006 4.22649 6.22634C4.22649 8.02155 5.18571 9.60281 6.63908 10.5283C3.35204 11.6933 1 14.7187 1 18.2719H2.43399C2.43399 14.4768 5.65079 11.3887 9.60396 11.3887C13.5571 11.3887 16.7739 14.4768 16.7739 18.2719H18.2079C18.2079 14.7187 15.8559 11.6933 12.5688 10.5283ZM9.60396 10.0121C7.42875 10.0121 5.66048 8.31455 5.66048 6.22634C5.66048 4.13814 7.42875 2.4406 9.60396 2.4406C11.7792 2.4406 13.5474 4.13814 13.5474 6.22634C13.5474 8.31455 11.7792 10.0121 9.60396 10.0121Z" fill="black" stroke="white" strokeWidth="0.3" />
                    </svg>
                </Link>
            </li>
        </ul>

        {openLanguagesMenu && <ul className="language-menu">
            {languages.map(lang => {
                return <li
                    className={classNames({ "active": activeLanguage?.name === lang.name })}
                    key={lang.id}
                    onClick={() => handleChangeLanguage(lang)}
                >
                    <span>{lang.name}</span>
                    {activeLanguage?.name === lang.name && lang.icon}
                </li>
            })}
        </ul>
        }

        {openCallMeForm && <CallMeForm
            setOpenCallMeForm={setOpenCallMeForm}
        />}
    </header >
}

export default Header;