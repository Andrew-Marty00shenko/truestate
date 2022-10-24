import { useTranslation } from "react-i18next";
import { Button } from "react-bootstrap";
import { useState } from "react";
import { useEffect } from "react";

import activeObjectsAPI from "../../../../API/activeObjectsAPI";
import useBalanceById from "../../../../Hooks/web3hooks/useBalanceById";

const SliderOne = ({
    sliderTwoRef,
    index,
    setActiveObjectEstate,
    setOpenModalAddress,
    setShowFirstSlider,
    setShowSecondSlider,
    ...object
}) => {
    const url = 'https://topmail.net.ua:8443';
    const { t, i18n } = useTranslation();
    const [photo, setPhoto] = useState(null);
    const { balance, getBalance } = useBalanceById();

    useEffect(() => {
        activeObjectsAPI.getPhotosActiveObjects(object.id)
            .then(({ data }) => {
                setPhoto(data[0]);
            });
    }, []);

    useEffect(() => {
        getBalance(object.id);
    }, [balance]);

    const handleShowInfo = () => {
        setShowSecondSlider(true);
        setShowFirstSlider(false);
        sliderTwoRef.current.slickGoTo(index);
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
        <img src={`${url}${photo?.url}`} alt="section-five" />
        <div className="section-seven__block-allow-amount">
            <p>
                {t('landing:SECTION_SEVEN_OBJECT_ALLOW_INVEST')}: <br />
                <span>
                    {balance?.substr(0, balance.length - 2)
                        + '.'
                        + balance?.substr(balance.length - 2, balance.length)}€
                </span>
            </p>
        </div>
        <div className="section-seven__block-info">
            <p>
                <span>{t('landing:SECTION_FIVE_OBJECT_LOCATION')}:</span> {i18n.language === "EN"
                    ? object.location.en
                    : i18n.language === "RU"
                        ? object.location.ru
                        : object.location.ua
                }
                <br />
                <span>{t('landing:SECTION_SEVEN_OBJECT_PROFIT_PERCENTAGE')}:</span> {object.profit}%<br />
                <span>{t('landing:SECTION_SEVEN_OBJECT_DEADLINE')}:</span> {i18n.language === "EN"
                    ? object.term.en
                    : i18n.language === "RU"
                        ? object.term.ru
                        : object.term.ua
                }
            </p>
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