import { useState } from "react";
import classNames from "classnames";
import { Form, ButtonGroup, Button } from "react-bootstrap";
import { useTranslation } from "react-i18next";

import "./DataInput.scss";

const DataInput = () => {
    const { t } = useTranslation();

    const [residentOfUSA, setResidentOfUSA] = useState({
        yes: true,
        no: false
    });

    const handleClickYes = () => {
        setResidentOfUSA({
            yes: true,
            no: false
        });
    };

    const handleClickNo = () => {
        setResidentOfUSA({
            yes: false,
            no: true
        });
    };

    return <form className="data-input">
        <div className="data-input__block">
            <div className="data-input__block-left">
                <div>
                    <p>{t('dataInput:SEX')}</p>
                    <Form.Select className="data-input__block-select">
                        <option>{t('dataInput:MALE')}</option>
                        <option>{t('dataInput:FEMALE')}</option>
                    </Form.Select>
                </div>
                <div>
                    <p>{t('dataInput:SECOND_NAME')}</p>
                    <input type="text"
                        placeholder={t('dataInput:SECOND_NAME')}
                    />
                </div>
                <div>
                    <p>{t('dataInput:NAME')}</p>
                    <input type="text"
                        placeholder={t('dataInput:NAME')}
                    />
                </div>
            </div>
            <div className="data-input__block-right">
                <div className="data-input__block-right-flex">
                    <div>
                        <p>{t('dataInput:DATE_OF_BIRTH')}</p>
                        <input type="text"
                            placeholder={t('dataInput:DATE_OF_BIRTH_PLACEHOLDER')}
                        />
                    </div>
                    <div>
                        <p>{t('dataInput:COUNTRY')}</p>
                        <Form.Select className="data-input__block-select">
                            {/* <option>Мужчина</option>
                            <option>Женщина</option> */}
                        </Form.Select>
                    </div>
                </div>
                <div>
                    <p>{t('dataInput:ADDRESS')}</p>
                    <input type="text"
                        placeholder={t('dataInput:ADDRESS_PLACEHOLDER')}
                    />
                </div>
                <div className="data-input__block-right-flex">
                    <div>
                        <p>{t('dataInput:EMAIL')}</p>
                        <input type="email"
                            placeholder={t('dataInput:EMAIL')}
                        />
                    </div>
                    <div>
                        <p>{t('dataInput:PHONE_NUMBER')}</p>
                        <input type="text"
                            placeholder={t('dataInput:PHONE_NUMBER_PLACEHOLDER')}
                        />
                    </div>
                </div>
            </div>
        </div>

        <div className="data-input__text">
            {t('dataInput:QUESTION')}
            <ButtonGroup>
                <Button
                    className={classNames({ "active": residentOfUSA.yes })}
                    onClick={handleClickYes}
                >
                    {t('dataInput:ANSWER_YES')}
                </Button>
                <Button
                    className={classNames({ "active": residentOfUSA.no })}
                    onClick={handleClickNo}
                >
                    {t('dataInput:ANSWER_NO')}
                </Button>
            </ButtonGroup>
        </div>

        <div className="data-input__send-btn">
            <Button
                className="send-btn"
            >
                {t('dataInput:SEND_BTN')}
                <svg width="36" height="13" viewBox="0 0 36 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M35.2492 7.10782C35.5849 6.77213 35.5849 6.22787 35.2492 5.89218L29.7788 0.421787C29.4431 0.0860968 28.8989 0.0860968 28.5632 0.421787C28.2275 0.757478 28.2275 1.30174 28.5632 1.63743L33.4257 6.5L28.5632 11.3626C28.2275 11.6983 28.2275 12.2425 28.5632 12.5782C28.8989 12.9139 29.4431 12.9139 29.7788 12.5782L35.2492 7.10782ZM0.257812 7.35959H34.6414V5.64041H0.257812V7.35959Z" fill="white" />
                </svg>
            </Button>

            {residentOfUSA.yes ? <p>
                {t('dataInput:RESIDENT_OF_USA_ERROR')}
            </p> : ""}
        </div>
    </form>
}

export default DataInput;