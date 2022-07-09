import SectionOne from "../../Components/Main/SectionOne/SectionOne";

import SectionOneImage from "../../assets/images/section-one-image.png";
import "./Main.scss";

const Main = () => {
    return <div className="main">
        <SectionOne />
        <div className="main__section-one-image">
            <img src={SectionOneImage} alt="section-one-image" width="100%" />
        </div>
    </div>
}

export default Main;