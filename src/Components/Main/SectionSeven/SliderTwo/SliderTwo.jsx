// import Button from "../../../Button/Button";

const SliderTwo = ({ setActiveObjectEstate, setOpenModalAddress, setShowFirstSlider, setShowSecondSlider, ...object }) => {

    const handleShowInfo = () => {
        setShowSecondSlider(false);
        setShowFirstSlider(true);
    };

    return <div
        className="section-five__block-full"
        key={object.id}
    >
        <div className="section-five__block-full-info">
            {object.subInfo?.map(info => {
                return <>
                    <p>{info.location}: <span> {info.locationCountry}</span></p>
                    <p>{info.square}: <span> {info.square}</span></p>
                    <p>{info.typeOfRealEstate}: <span> {info.typeOfRealEstate}</span></p>
                    <p>{info.price}: <span> {info.price}</span></p>
                    <p>{info.repairAndImprovements}: <span> {info.repairAndImprovementsNubmer}</span></p>
                    <p>{info.fee}: <span> {info.feeNumber}</span></p>
                    <p>{info.priceOfSell}: <span> {info.priceOfSell}</span></p>
                    <p>{info.deadline}: <span> {info.deadlineTime}</span></p>
                    <p>{info.profitPercents}: <span> {info.profitPercentsNumber}</span></p>
                </>
            })}
        </div>
        <div className="section-five__block-full-gallery">
            <div className="gallery-top">
                <img
                    src={object.image}
                    // onClick={() => setActiveBigImage(object.image)}
                    alt="section-five"
                />
                <img
                    src={object.image}
                    alt="section-five"
                // onClick={() => setActiveBigImage(object.image)}
                />
                <img
                    src={object.image}
                    alt="section-five"
                // onClick={() => setActiveBigImage(object.image)}
                />
            </div>
            <div
                className="gallery-bottom"
            // onClick={() => setModalShow(true)}
            >
                {/* <img src={activeBigImage} alt="section-five" /> */}
                <svg width="26" height="28" viewBox="0 0 26 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" clipRule="evenodd" d="M10.9189 2.71758C8.97631 2.95247 7.38879 3.51905 5.8974 4.50983C3.34535 6.20529 1.6353 8.85757 1.117 11.9244C1.00278 12.6004 0.962868 14.0641 1.0393 14.7736C1.21399 16.3946 1.72723 17.9515 2.52254 19.273C4.35277 22.3143 7.41893 24.2654 10.9116 24.6112C13.7276 24.89 16.6602 24.0052 18.8504 22.2158L19.2604 21.8808L21.7374 24.3665C23.0998 25.7336 24.2761 26.885 24.3513 26.925C24.6882 27.1044 25.1049 26.9497 25.2535 26.5902C25.394 26.2503 25.385 26.2395 22.6758 23.5262L20.1469 20.9935L20.4678 20.6048C22.0414 18.6988 22.923 16.2105 22.923 13.6747C22.923 9.96509 21.1091 6.57651 18.0181 4.51156C16.7421 3.65913 15.2667 3.07728 13.7046 2.81051C13.2419 2.73144 11.3313 2.66774 10.9189 2.71758ZM12.8221 3.95858C16.2581 4.29468 19.1915 6.32553 20.6982 9.41136C21.9006 11.874 21.9987 14.7841 20.9651 17.3291C19.74 20.3454 17.1011 22.5415 13.8836 23.2224C13.0467 23.3995 11.4783 23.4473 10.615 23.3221C7.6974 22.8987 5.17346 21.2314 3.64175 18.7153C1.36781 14.9802 1.89346 10.1187 4.91276 6.96001C6.98465 4.79248 9.92803 3.67553 12.8221 3.95858Z" fill="white" stroke="white" strokeWidth="0.9" />
                    <path d="M15.7172 12.6877V14.4042H7.82285V12.6877H15.7172ZM12.6955 9.46035V17.8451H10.8524V9.46035H12.6955Z" fill="white" />
                </svg>
            </div>
        </div>

        <svg width="27" height="27" viewBox="0 0 27 27" fill="none" xmlns="http://www.w3.org/2000/svg"
            className="section-five__block-full-close-btn"
            onClick={handleShowInfo}
        >
            <path d="M1 1L26 26" stroke="black" strokeWidth="2" strokeLinecap="round" />
            <path d="M1 26L26 1.00002" stroke="black" strokeWidth="2" strokeLinecap="round" />
        </svg>

    </div >
}

export default SliderTwo;