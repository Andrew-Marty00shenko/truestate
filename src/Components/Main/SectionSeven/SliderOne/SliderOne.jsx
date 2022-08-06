import { useTranslation } from "react-i18next";
import Button from "../../../Button/Button";

const SliderOne = ({
    setActiveObjectEstate,
    setOpenModalAddress,
    setShowFirstSlider,
    setShowSecondSlider,
    setActiveDescriptionObject,
    ...object }) => {
    const { t } = useTranslation();


    const handleShowInfo = () => {
        setShowSecondSlider(true);
        setShowFirstSlider(false);
        setActiveDescriptionObject(object);
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
        <Button text={t('landing:SECTION_SEVEN_OBJECT_INVEST_BUTTON')}
            isSevenBlock={true}
            object={object}
            setOpenModalAddress={setOpenModalAddress}
            setActiveObjectEstate={setActiveObjectEstate}
            showIcon
        />
    </div >
}

export default SliderOne;