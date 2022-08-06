import classNames from "classnames";
import { useTranslation } from "react-i18next";
import { Link } from "react-scroll";

import "./Sidebar.scss";

const Sidebar = ({ openSidebar, setOpenSidebar }) => {
    const { t } = useTranslation();

    return <div className={classNames("sidebar", {
        "sidebar--open": openSidebar
    })}>
        <div className="sidebar__menu">
            <li>
                <Link to='about'
                    onClick={() => setOpenSidebar(false)}
                >
                    {t('sidebar:SIDEBAR_MENU_1')}
                </Link>
            </li>
            <li>
                <Link to='benefits'
                    onClick={() => setOpenSidebar(false)}
                >
                    {t('sidebar:SIDEBAR_MENU_2')}
                </Link>
            </li>
            <li>
                <Link to='estates'
                    onClick={() => setOpenSidebar(false)}
                >
                    {t('sidebar:SIDEBAR_MENU_3')}
                </Link>
            </li>
            <li>
                <Link to='faq'
                    onClick={() => setOpenSidebar(false)}
                >
                    {t('sidebar:SIDEBAR_MENU_4')}
                </Link>
            </li>
            <li>
                <Link to='invest'
                    onClick={() => setOpenSidebar(false)}
                >
                    {t('sidebar:SIDEBAR_MENU_5')}
                </Link>
            </li>
        </div>

        <div className="sidebar__copyrights">
            ⓒ Truestate 2022
        </div>
    </div>
}

export default Sidebar;