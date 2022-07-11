import SectionOne from "../../Components/Main/SectionOne/SectionOne";
import SectionTwo from "../../Components/Main/SectionTwo/SectionTwo";

import SectionOneImage from "../../assets/images/section-one-image.png";
import SectionOneImageMobile from "../../assets/images/section-one-image-mobile.png";
import "./Main.scss";

const Main = () => {
    return <div className="main">
        <SectionOne />
        <div className="main__section-one-image">
            <img
                className="image-desktop"
                src={SectionOneImage}
                alt="section-one"
                width="100%"
            />
            <img
                className="image-mobile"
                src={SectionOneImageMobile}
                alt="section-one"
                width="100%"
            />
        </div>
        <SectionTwo />
    </div>
}

export default Main;