import classNames from 'classnames';
import { Link, useLocation, Routes, Route } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { useSelector } from "react-redux";
import { toast } from "react-toastify";

import DashboardMain from '../../Components/Dashboard/DashboardMain/DashboardMain';
import Registration from '../../Components/Dashboard/Registration/Registration';
import Confirmation from '../../Components/Dashboard/Confirmation/Confirmation'
import ForgotPassword from '../../Components/Dashboard/ForgotPassword/ForgotPassword';
import ConnectWalletButton from '../../Components/Dashboard/ConnectWalletButton/ConnectWalletButton';
import DataInput from '../../Components/Dashboard/DataInput/DataInput';
import Login from '../../Components/Dashboard/Login/Login';
import Documents from '../../Components/Dashboard/Documents/Documents';
import Balance from '../../Components/Dashboard/Balance/Balance';

import "./Dashboard.scss";
import PasswordConfirmation from '../../Components/Dashboard/ForgotPassword/PasswordConfirmation/PasswordConfirmation';

const Dashboard = () => {
    const { t } = useTranslation();
    const location = useLocation();
    const isAuth = useSelector(state => state.user.isAuth);

    const clickLinks = () => {
        if (!isAuth) {
            toast.error(t('dashboardMain:CLICK_LINKS_ERROR'));
        }
    };

    const menu = [
        {
            id: 1,
            link: '/dashboard/login',
            icon: <svg width="26" height="36" viewBox="0 0 26 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M13.6699 1C14.4788 1.19462 15.3271 1.29442 16.0906 1.60048C19.0692 2.79479 20.8673 4.98713 21.4404 8.1301C21.5428 8.69232 21.5629 9.27367 21.5688 9.84671C21.5856 11.4169 21.5746 12.9863 21.5746 14.6081C22.1695 14.6081 22.746 14.5973 23.3216 14.6106C24.1329 14.6306 24.774 15.1496 24.9552 15.928C24.9946 16.0977 24.9971 16.279 24.998 16.4553C24.9997 22.021 25.0013 27.5867 24.9988 33.1524C24.998 34.301 24.2982 34.9987 23.147 34.9987C16.3826 35.0004 9.61813 35.0004 2.85368 34.9987C1.7025 34.9987 1.00273 34.3001 1.00189 33.1524C0.999371 27.5867 0.999371 22.021 1.00189 16.4553C1.00273 15.2876 1.69495 14.6106 2.87969 14.6057C3.37977 14.604 3.88068 14.6057 4.42523 14.6057C4.42523 14.4634 4.42523 14.3462 4.42523 14.2289C4.42523 12.7127 4.40341 11.1965 4.42942 9.6812C4.49235 5.99015 6.19647 3.30795 9.57114 1.73854C10.3238 1.3884 11.1905 1.28194 12.0061 1.06487C12.1126 1.03659 12.2226 1.02162 12.3308 1C12.7772 1 13.2235 1 13.6699 1ZM23.2947 33.2788C23.2947 33.1383 23.2947 33.0301 23.2947 32.9212C23.2947 27.4985 23.2922 22.0759 23.3014 16.6533C23.3023 16.3514 23.2083 16.289 22.9222 16.2898C16.3129 16.2973 9.70371 16.2973 3.09449 16.2898C2.79495 16.2898 2.69929 16.3589 2.69929 16.6716C2.70936 22.0834 2.70685 27.4944 2.70685 32.9062C2.70685 33.0251 2.70685 33.1432 2.70685 33.2788C9.5787 33.2788 16.4078 33.2788 23.2947 33.2788ZM19.8344 14.5899C19.8437 14.4984 19.8546 14.4443 19.8546 14.3894C19.8546 12.7526 19.8563 11.1159 19.8529 9.4791C19.8512 8.516 19.6633 7.58867 19.2496 6.71539C17.7561 3.56411 14.4561 2.06124 11.068 2.98192C8.34445 3.72213 6.23842 6.33198 6.16878 9.11981C6.12515 10.8664 6.14948 12.6146 6.14529 14.362C6.14529 14.4352 6.16291 14.5083 6.17381 14.5899C10.7341 14.5899 15.2708 14.5899 19.8344 14.5899Z" fill="black" stroke="black" />
            </svg>,
            name: t('dashboardMain:DASHBOARD_MENU_SIGNIN')
        },
        {
            id: 2,
            link: '/dashboard/data',
            icon: <svg width="33" height="35" viewBox="0 0 33 35" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M21.8412 19.15C24.4551 17.3751 26.1875 14.3427 26.1875 10.9C26.1875 5.44162 21.8412 1 16.5 1C11.1588 1 6.8125 5.44162 6.8125 10.9C6.8125 14.3427 8.54054 17.3751 11.1588 19.15C5.23719 21.3842 1 27.1859 1 34H3.58333C3.58333 26.7222 9.37838 20.8 16.5 20.8C23.6216 20.8 29.4167 26.7222 29.4167 34H32C32 27.1859 27.7628 21.3842 21.8412 19.15ZM16.5 18.16C12.5814 18.16 9.39583 14.9046 9.39583 10.9C9.39583 6.89541 12.5814 3.64 16.5 3.64C20.4186 3.64 23.6042 6.89541 23.6042 10.9C23.6042 14.9046 20.4186 18.16 16.5 18.16Z" fill="black" stroke="black" strokeWidth="0.3" />
            </svg>,
            name: t('dashboardMain:DASHBOARD_MENU_DATA')
        },
        {
            id: 3,
            link: '/dashboard/documents',
            icon: <svg width="31" height="41" viewBox="0 0 31 41" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M2.6186 40C1.85684 39.7448 1.25991 39.3134 1.06867 38.4843C1.01479 38.2534 1.00845 38.0065 1.00845 37.7682C1.00528 28.0604 1.0074 18.3526 1 8.64474C1 8.27453 1.10354 7.99924 1.36873 7.73661C3.50714 5.61764 5.6371 3.49129 7.75966 1.35756C8.01218 1.10442 8.27948 1 8.63658 1C14.7634 1.00844 20.8902 1.00527 27.017 1.00633C28.4676 1.00633 29.2537 1.79 29.2537 3.23921C29.2547 14.6599 29.2442 26.0806 29.2685 37.5013C29.2706 38.748 28.8691 39.6108 27.6414 40C19.3012 40 10.9599 40 2.6186 40ZM2.26044 9.00546C2.26044 9.20164 2.26044 9.35142 2.26044 9.50119C2.26044 18.8789 2.26044 28.2565 2.26044 37.6353C2.26044 38.5392 2.45273 38.7322 3.35289 38.7322C11.2082 38.7322 19.0645 38.7322 26.9198 38.7322C27.7988 38.7322 27.9996 38.5329 27.9996 37.6616C27.9996 26.2283 27.9996 14.7939 27.9996 3.3605C27.9996 2.47452 27.8052 2.27623 26.9335 2.27623C21.1247 2.27623 15.3149 2.27623 9.50611 2.27623C9.35713 2.27623 9.20816 2.27623 9.01799 2.27623C9.01799 2.45343 9.01799 2.58949 9.01799 2.72555C9.01799 4.04503 9.01799 5.36556 9.01799 6.68504C9.01799 8.23445 8.24989 9.00652 6.70736 9.00652C5.24619 9.00546 3.78606 9.00546 2.26044 9.00546ZM7.73431 3.31515C6.2594 4.78756 4.7866 6.25787 3.32119 7.72079C3.34866 7.72396 3.41945 7.73872 3.49024 7.73978C4.61966 7.74083 5.74804 7.74611 6.87746 7.73872C7.4089 7.73556 7.72057 7.5109 7.72691 7.07318C7.74699 5.80961 7.73431 4.54498 7.73431 3.31515Z" fill="black" stroke="black" strokeWidth="1.5" />
            </svg>,
            name: t('dashboardMain:DASHBOARD_MENU_DOCS')
        },
        {
            id: 4,
            link: '/dashboard/balance',
            icon: <svg width="25" height="26" viewBox="0 0 25 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M21.3807 25.0134C14.724 25.0134 8.06796 25.0134 1.41128 25.0134C0.79687 24.8013 0.591853 24.3588 0.593763 23.7265C0.606497 18.7867 0.600767 13.8469 0.600767 8.90702C0.600767 8.12001 0.998066 7.72332 1.78821 7.72078C2.06326 7.72014 2.33832 7.72078 2.63756 7.72078C2.63756 7.60298 2.63756 7.51702 2.63756 7.4317C2.63756 6.71664 2.63438 6.00222 2.6382 5.28716C2.64202 4.56828 3.04059 4.17414 3.76197 4.16841C4.05358 4.16586 4.34519 4.16777 4.66417 4.16777C4.66417 4.05443 4.66417 3.96911 4.66417 3.88379C4.66417 3.177 4.66226 2.47022 4.66481 1.76344C4.66799 1.007 5.07357 0.605213 5.83188 0.605213C7.43572 0.604576 9.03956 0.605213 10.6434 0.605213C13.8746 0.605213 17.1065 0.602666 20.3378 0.605849C22.4032 0.60776 24.0917 1.80356 24.7628 3.74307C24.8704 4.05443 24.9245 4.38426 25.0029 4.70518C25.0029 10.2671 25.0029 15.829 25.0029 21.3909C24.9869 21.4419 24.964 21.4922 24.9551 21.5444C24.7157 22.9382 23.9746 23.9729 22.7037 24.5906C22.2912 24.7899 21.8232 24.8758 21.3807 25.0134ZM22.9654 8.99999C22.8865 9.03883 22.8502 9.05284 22.8177 9.07321C21.9906 9.59343 21.0821 9.76408 20.1149 9.7628C14.3967 9.75325 8.67855 9.75835 2.96037 9.75835C2.85977 9.75835 2.75917 9.75835 2.65539 9.75835C2.65539 10.9573 2.65539 12.1277 2.65539 13.3215C2.76618 13.3215 2.85977 13.3215 2.95337 13.3215C3.91414 13.3241 4.87619 13.3037 5.8357 13.3336C7.67958 13.3909 9.05293 15.1643 8.67282 16.9669C8.36403 18.4314 7.15112 19.4081 5.60903 19.4221C4.71193 19.4304 3.81418 19.4234 2.91644 19.4241C2.83176 19.4241 2.74708 19.4241 2.65603 19.4241C2.65603 20.6224 2.65603 21.7915 2.65603 22.9662C2.72988 22.9701 2.78464 22.9758 2.8394 22.9758C8.84346 22.9764 14.8475 22.9796 20.8516 22.9675C21.1744 22.9669 21.5252 22.8968 21.8143 22.758C22.6261 22.3683 22.968 21.6762 22.9667 20.7854C22.9616 16.9484 22.9648 13.1114 22.9648 9.27442C22.9654 9.19547 22.9654 9.11651 22.9654 8.99999ZM20.9388 7.64819C22.2389 7.42979 23.1692 6.06971 22.9336 4.76694C22.7012 3.48391 21.6685 2.64405 20.3078 2.64342C15.8599 2.64151 11.4113 2.64278 6.96329 2.64278C6.88052 2.64278 6.79711 2.64278 6.71689 2.64278C6.71689 3.17 6.71689 3.65838 6.71689 4.16841C6.8334 4.16841 6.93528 4.16841 7.03715 4.16841C11.2788 4.16841 15.5205 4.16777 19.7622 4.16904C20.5409 4.16904 20.9363 4.56382 20.9388 5.33874C20.9407 5.83921 20.9394 6.33969 20.9394 6.84017C20.9388 7.10823 20.9388 7.3763 20.9388 7.64819ZM4.67882 7.70231C9.42222 7.70231 14.1542 7.70231 18.888 7.70231C18.888 7.19547 18.888 6.70709 18.888 6.21043C14.1472 6.21043 9.42031 6.21043 4.67882 6.21043C4.67882 6.71346 4.67882 7.2012 4.67882 7.70231ZM2.6573 15.3617C2.6573 16.05 2.6573 16.7109 2.6573 17.3801C3.70722 17.3801 4.73803 17.3903 5.76884 17.3744C6.11393 17.3693 6.38389 17.1789 6.55962 16.8752C6.96329 16.1767 6.46985 15.3642 5.61922 15.3515C4.675 15.3375 3.73014 15.3483 2.78591 15.3489C2.74771 15.3496 2.70887 15.3566 2.6573 15.3617Z" fill="black" />
            </svg>,
            name: t('dashboardMain:DASHBOARD_MENU_BALANCE')
        },
    ];

    return <div className={classNames("dashboard", {
        "dashboard--registration": location.pathname === '/dashboard/registration',
        "dashboard--forgot-password": location.pathname === '/dashboard/forgot-password'
    })}>
        {location.pathname === '/dashboard' ||
            location.pathname === '/dashboard/registration' ||
            location.pathname.includes('/dashboard/forgot-password') ||
            location.pathname.includes('/dashboard/confirmation')
            ? (
                <>
                    <Routes>
                        <Route path='/dashboard' element={<DashboardMain />} />
                        <Route path='/dashboard/registration' element={<Registration />} />
                        <Route path='/dashboard/forgot-password' element={<ForgotPassword />} />
                        <Route path='/dashboard/forgot-password/confirmation/:code' element={<PasswordConfirmation />} />
                        <Route path='/dashboard/confirmation/:code' element={<Confirmation />} />
                    </Routes>
                    {(location.pathname === '/dashboard/registration' ||
                        location.pathname === '/dashboard/forgot-password') &&
                        <Link to='/dashboard'>
                            <svg className="close-btn" width="27" height="28" viewBox="0 0 27 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M1 1.47607L26 26.4761" stroke="black" strokeWidth="2" strokeLinecap="round" />
                                <path d="M1 26.4761L26 1.47609" stroke="black" strokeWidth="2" strokeLinecap="round" />
                            </svg>
                        </Link>
                    }
                    {location.pathname === '/dashboard' &&
                        <Link to='/' className="dashboard-close__btn-main">
                            <svg className="close-btn" width="27" height="28" viewBox="0 0 27 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M1 1.47607L26 26.4761" stroke="black" strokeWidth="2" strokeLinecap="round" />
                                <path d="M1 26.4761L26 1.47609" stroke="black" strokeWidth="2" strokeLinecap="round" />
                            </svg>
                        </Link>
                    }
                </>
            ) : (
                <>
                    <div className="dashboard__block">
                        <ul className="dashboard__block-menu">
                            {menu.map(m => {
                                return <Link
                                    to={isAuth ? `${m.link}` : '/dashboard/login'}
                                    key={m.id}
                                    onClick={clickLinks}
                                >
                                    <li className={classNames(
                                        { "active": location.pathname === m.link },
                                        { "disabled": !isAuth && m.id !== 1 }
                                    )}>
                                        {m.icon}
                                        {m.name}
                                    </li>
                                </Link>
                            })}
                        </ul>
                        <div className="dashboard__block-screen">
                            <Routes>
                                <Route path='/dashboard/login' element={<Login />} />
                                <Route path='/dashboard/data' element={<DataInput />} />
                                <Route path='/dashboard/documents' element={<Documents />} />
                                <Route path='/dashboard/balance' element={<Balance />} />
                            </Routes>
                        </div>
                        <Link to='/dashboard'>
                            <svg className="close-btn" width="27" height="28" viewBox="0 0 27 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M1 1.47607L26 26.4761" stroke="black" strokeWidth="2" strokeLinecap="round" />
                                <path d="M1 26.4761L26 1.47609" stroke="black" strokeWidth="2" strokeLinecap="round" />
                            </svg>
                        </Link>
                    </div>

                    <ConnectWalletButton />
                </>
            )}
    </div >
}

export default Dashboard;