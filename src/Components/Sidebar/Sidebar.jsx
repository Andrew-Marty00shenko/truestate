import classNames from "classnames";
import { Link } from "react-scroll";

import "./Sidebar.scss";

const Sidebar = ({ openSidebar, setOpenSidebar }) => {
    return <div className={classNames("sidebar", {
        "sidebar--open": openSidebar
    })}>
        <div className="sidebar__menu">
            <li>
                <Link to='about'
                    onClick={() => setOpenSidebar(false)}
                >
                    О нас
                </Link>
            </li>
            <li>
                <Link to='benefits'
                    onClick={() => setOpenSidebar(false)}
                >
                    Преимущества
                </Link>
            </li>
            <li>
                <Link to='estates'
                    onClick={() => setOpenSidebar(false)}
                >
                    Объекты
                </Link>
            </li>
            <li>
                <Link to='faq'
                    onClick={() => setOpenSidebar(false)}
                >
                    FAQ
                </Link>
            </li>
            <li>
                <Link to='invest'
                    onClick={() => setOpenSidebar(false)}
                >
                    Инвестировать
                </Link>
            </li>
        </div>

        <div className="sidebar__copyrights">
            ⓒ Truestate 2022
        </div>
    </div>
}

export default Sidebar;