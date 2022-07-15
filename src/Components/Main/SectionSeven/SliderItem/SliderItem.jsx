import Button from "../../../Button/Button";

const SliderItem = ({ setOpenModalAddress, ...object }) => {
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
        <p className="section-seven__block-btn">
            Подробнее
        </p>
        <Button text={'Инвестировать'}
            isSevenBlock={true}
            setOpenModalAddress={setOpenModalAddress}
            showIcon
        />
    </div >
}

export default SliderItem;