import Button from "../../../Button/Button";

const SliderOne = ({ setActiveObjectEstate, setOpenModalAddress, setShowFirstSlider, setShowSecondSlider, ...object }) => {

    const handleShowInfo = () => {
        setShowSecondSlider(true);
        setShowFirstSlider(false);
    }

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
                {object.description}
            </span>
        </div >
        <p className="section-seven__block-btn"
            onClick={handleShowInfo}
        >
            Подробнее
        </p>
        <Button text={'Инвестировать'}
            isSevenBlock={true}
            object={object}
            setOpenModalAddress={setOpenModalAddress}
            setActiveObjectEstate={setActiveObjectEstate}
            showIcon
        />
    </div >
}

export default SliderOne;