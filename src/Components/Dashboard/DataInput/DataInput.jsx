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
    </form>
}

export default DataInput;