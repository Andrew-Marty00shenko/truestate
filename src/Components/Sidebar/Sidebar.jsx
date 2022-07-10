import classNames from "classnames";

import "./Sidebar.scss";

const Sidebar = ({ openSidebar, setOpenSidebar }) => {
    return <div className={classNames("sidebar", {
        "sidebar--open": openSidebar
    })}>
        <div className="sidebar__menu">
            <li> О нас </li>
            <li> Преимущества  </li>
            <li> Объекты </li>
            <li> FAQ  </li>
            <li> Инвестировать</li>
        </div>

        <div className="sidebar__copyrights">
            ⓒ Truestate 2022
        </div>
    </div>
}

export default Sidebar;