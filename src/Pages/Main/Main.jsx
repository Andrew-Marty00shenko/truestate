import SectionOne from "../../Components/Main/SectionOne/SectionOne";
import SectionTwo from "../../Components/Main/SectionTwo/SectionTwo";
import SectionThree from "../../Components/Main/SectionThree/SectionThree";
import SectionFour from "../../Components/Main/SectionFour/SectionFour";
import SectionFive from "../../Components/Main/SectionFive/SectionFive";
import SectionSix from "../../Components/Main/SectionSix/SectionSix";
import SectionSeven from "../../Components/Main/SectionSeven/SectionSeven";
import SectionEight from "../../Components/Main/SectionEight/SectionEight";

import SectionOneImage from "../../assets/images/section-one-image.png";
import SectionOneImageMobile from "../../assets/images/section-one-image-mobile.png";
import "./Main.scss";
import { useState } from "react";

const Main = () => {
    const [openModalAddress, setOpenModalAddress] = useState(false);

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
        <SectionThree />
        <SectionFour />
        <SectionFive />
        <SectionSix />
        <SectionSeven
            setOpenModalAddress={setOpenModalAddress}
        />
        <SectionEight
            openModalAddress={openModalAddress}
            setOpenModalAddress={setOpenModalAddress}
        />
    </div>
}

export default Main;