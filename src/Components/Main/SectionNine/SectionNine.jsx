import { Button } from "react-bootstrap";
import { toast } from "react-toastify";
import { useTranslation } from "react-i18next";

import SectionNineImage from "../../../assets/images/section-nine-image.png";
import SectionNineImageMobile from "../../../assets/images/section-nine-image-mobile.png";

import "./SectionNine.scss";
import { useState } from "react";

const SectionNine = () => {
    const { t } = useTranslation();
    const [checkbox, setCheckbox] = useState(false);
    const [value, setValue] = useState('');

    const notify = () => {
        toast.success(t('landing:SECTION_NINE_THANKS_SUBSCRIPTION'), {
            className: "toast-modal",
            autoClose: 3000,
            progressClassName: 'toast-modal-progress'
        });
    };

    const handleFollowing = () => {
        if (!checkbox) {
            toast.error(t('landing:SECTION_NINE_PRIVACY_POLICY'), {
                className: "toast-modal",
                autoClose: 3000,
                progressClassName: 'toast-modal-progress'
            });
        } else if (!value) {
            toast.error(t('landing:SECTION_NINE_THANKS_EMAIL_ERROR'), {
                className: "toast-modal",
                autoClose: 3000,
                progressClassName: 'toast-modal-progress'
            });
        } else {
            notify();
        }
    };

    return <section className="section-nine">
        <div className="section-nine__block">
            <div className="section-nine__block-info">
                <h2>
                    {t('landing:SECTION_NINE_TITLE')}
                </h2>
                <div className="section-nine__block-info-input">
                    {t('landing:SECTION_NINE_EMAIL')}
                    <input
                        type="email"
                        name="email"
                        value={value}
                        onChange={e => setValue(e.target.value)}
                    />
                </div>
                <Button onClick={handleFollowing}>
                    {t('landing:SECTION_NINE_BUTTON')}
                    <svg width="41" height="16" viewBox="0 0 41 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M40.7071 8.45711C41.0976 8.06658 41.0976 7.43342 40.7071 7.04289L34.3431 0.678932C33.9526 0.288408 33.3195 0.288408 32.9289 0.678932C32.5384 1.06946 32.5384 1.70262 32.9289 2.09315L38.5858 7.75L32.9289 13.4069C32.5384 13.7974 32.5384 14.4305 32.9289 14.8211C33.3195 15.2116 33.9526 15.2116 34.3431 14.8211L40.7071 8.45711ZM0 8.75H40V6.75H0V8.75Z" fill="white" />
                    </svg>
                </Button>
                <div className="section-nine__block-info-checkbox">
                    <input
                        id="check"
                        type="checkbox"
                        checked={checkbox}
                        onChange={() => setCheckbox(!checkbox)}
                    />
                    <label htmlFor="check">{t('landing:SECTION_NINE_CONFIDENTIAL_TEXT_1')} <a href="#">{t('landing:SECTION_NINE_CONFIDENTIAL_TEXT_2')}</a>{t('landing:SECTION_NINE_CONFIDENTIAL_TEXT_3')}</label>
                </div>
            </div>
            <div className="section-nine__block-image">
                <img src={SectionNineImage} alt="section-nine" />
                <img src={SectionNineImageMobile} alt="section-nine-mobile" />
            </div>
        </div>
    </section>
}

export default SectionNine;