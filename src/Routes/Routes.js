import { useState } from "react";

import Public from "./Public";
import Private from "./Private";

const Routes = () => {
    const [auth, setAuth] = useState(false);

    return auth ? <Private /> : <Public />
}

export default Routes;