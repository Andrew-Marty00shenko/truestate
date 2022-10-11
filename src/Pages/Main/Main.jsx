import { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";

import SectionOne from "../../Components/Main/SectionOne/SectionOne";
import SectionTwo from "../../Components/Main/SectionTwo/SectionTwo";
import SectionThree from "../../Components/Main/SectionThree/SectionThree";
import SectionFour from "../../Components/Main/SectionFour/SectionFour";
import SectionFive from "../../Components/Main/SectionFive/SectionFive";
import SectionSix from "../../Components/Main/SectionSix/SectionSix";
import SectionSeven from "../../Components/Main/SectionSeven/SectionSeven";
import SectionEight from "../../Components/Main/SectionEight/SectionEight";
import SectionNine from "../../Components/Main/SectionNine/SectionNine";
import SectionOneImage from "../../assets/images/section-one-image.png";
import SectionOneImageMobile from "../../assets/images/section-one-image-mobile.png";

import completedObjectsAPI from "../../API/completedObjectsAPI";

import "./Main.scss";
import activeObjectsAPI from "../../API/activeObjectsAPI";

const Main = () => {
    const [openModalAddress, setOpenModalAddress] = useState(false);
    const [activeObjectEstate, setActiveObjectEstate] = useState(null);

    const [completedObjects, setCompletedObjects] = useState([]);
    const [skipCompletedObjects, setSkipCompletedObjects] = useState(0);
    const [limitCompletedObjects, setLimitCompletedObjects] = useState(10);
    const [totalCompletedObjects, setTotalCompletedObjects] = useState(null);

    const [activeObjects, setActiveObjects] = useState([]);
    const [skipActiveObjects, setSkipActiveObjects] = useState(0);
    const [limitActiveObjects, setLimitActiveObjects] = useState(10);
    const [totalActiveObjects, setTotalActiveObjects] = useState(null);

    useEffect(() => {
        completedObjectsAPI.getCompletedObjects(skipCompletedObjects, limitCompletedObjects)
            .then(({ data }) => {
                setCompletedObjects([...completedObjects, ...data.data]);
                setTotalCompletedObjects(data.total);
            });
    }, [skipCompletedObjects, limitCompletedObjects]);


    useEffect(() => {
        activeObjectsAPI.getActiveObjects(skipCompletedObjects, limitCompletedObjects)
            .then(({ data }) => {
                setActiveObjects([...completedObjects, ...data.data]);
                setTotalActiveObjects(data.total);
            });
    }, [skipActiveObjects, limitActiveObjects])

    return <div className="main">
        <Routes>
            <Route path='/' element={<>
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
                {completedObjects.length !== 0 &&
                    <SectionFive
                        objects={completedObjects}
                        total={totalCompletedObjects}
                        skip={skipCompletedObjects}
                        setSkip={setSkipCompletedObjects}
                        limit={limitCompletedObjects}
                        setLimit={setLimitCompletedObjects}
                    />}
                <SectionSix />
                {activeObjects.length !== 0 &&
                    <SectionSeven
                        objects={activeObjects}
                        total={totalActiveObjects}
                        skip={skipActiveObjects}
                        setSkip={setSkipActiveObjects}
                        limit={limitActiveObjects}
                        setLimit={setLimitActiveObjects}
                        setActiveObjectEstate={setActiveObjectEstate}
                        setOpenModalAddress={setOpenModalAddress}
                    />}

                <SectionEight
                    activeObjectEstate={activeObjectEstate}
                    openModalAddress={openModalAddress}
                    setOpenModalAddress={setOpenModalAddress}
                />
                <SectionNine />
            </>}
            />
        </Routes>
    </div>
}

export default Main;