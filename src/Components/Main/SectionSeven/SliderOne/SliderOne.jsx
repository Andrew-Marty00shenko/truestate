import { useTranslation } from "react-i18next";
import { Button } from "react-bootstrap";

const SliderOne = ({
    sliderTwoRef,
    setActiveObjectEstate,
    setOpenModalAddress,
    setShowFirstSlider,
    setShowSecondSlider,
    setActiveDescriptionObject,
    ...object
}) => {
    const { t } = useTranslation();

    const handleShowInfo = () => {
        setShowSecondSlider(true);
        setShowFirstSlider(false);
        setActiveDescriptionObject(object);
        sliderTwoRef.current.slickGoTo(object.id - 1);
    };

    const handleClick = () => {
        setOpenModalAddress(true);
        setActiveObjectEstate(object);
    };

    return <div
        className="section-seven__block"
        style={{ width: 386 }}
        key={object.id}
    >
        <img src={object.image} alt="section-five" />
        <div className="section-seven__block-allow-amount">
            <p>
                {object.allowAmount} <br />
                <span>
                    {object.allowAmountNumber}
                </span>
            </p>
        </div>
        <div className="section-seven__block-info">
            <p>
                <span>{object.location}:</span> {object.locationCountry} <br />
                <span>{object.price}:</span> {object.priceNumber}<br />
                <span>{object.profit}:</span> {object.profitNumber} <br />
            </p>
            <span className="section-seven__block-info-desc">
                {/* {object.description} */}
            </span>
        </div >
        <a className="section-seven__block-btn"
            onClick={handleShowInfo}
        >
            {t('landing:SECTION_SEVEN_OBJECT_DESC')}
        </a><br />
        <Button onClick={handleClick}>
            {t('landing:SECTION_SEVEN_OBJECT_INVEST_BUTTON')}
            <svg width="35" height="14" viewBox="0 0 35 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M34.7514 7.5444C35.075 7.22075 35.075 6.696 34.7514 6.37235L29.4771 1.09811C29.1535 0.774452 28.6287 0.774452 28.3051 1.09811C27.9814 1.42176 27.9814 1.94651 28.3051 2.27016L32.9933 6.95837L28.3051 11.6466C27.9814 11.9702 27.9814 12.495 28.3051 12.8186C28.6287 13.1423 29.1535 13.1423 29.4771 12.8186L34.7514 7.5444ZM0.832031 7.78714H34.1654V6.12961H0.832031V7.78714Z" fill="white" />
            </svg>
        </Button>
    </div >
}

export default SliderOne;