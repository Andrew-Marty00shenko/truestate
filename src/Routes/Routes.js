import { useState } from "react";
import { useLocation } from "react-router-dom";

import Public from "./Public";
import Private from "./Private";

const Routes = () => {
    const location = useLocation();
    const [auth, setAuth] = useState(false);

    return location.pathname.includes('/dashboard') ? <Private /> : <Public />
}

export default Routes;