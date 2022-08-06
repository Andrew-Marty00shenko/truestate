import { useState } from "react";
import { Form, Button } from "react-bootstrap";
import { useTranslation } from "react-i18next";
import { toast } from "react-toastify";

import "./CallMeForm.scss";

const CallMeForm = ({ setOpenCallMeForm }) => {
    const { t, i18n } = useTranslation();
    const [checkboxValue, setCheboxValue] = useState({
        russian: false,
        english: false,
        ukranian: false
    });

    const changeCheckboxValue = e => {
        if (e.target.name === 'english') {
            setCheboxValue({
                english: e.target.checked,
                russian: false,
                ukranian: false
            });
        }
        if (e.target.name === 'russian') {
            setCheboxValue({
                russian: e.target.checked,
                english: false,
                ukranian: false
            });
        }
        if (e.target.name === 'ukranian') {
            setCheboxValue({
                ukranian: e.target.checked,
                russian: false,
                english: false
            });
        }
    };

    const notify = () => {
        toast.success(t('callMeBack:THANKS_FOR_CONTACTING'), {
            className: "toast-modal",
            autoClose: 3000,
            progressClassName: 'toast-modal-progress'
        });
    };

    const handleSubmit = () => {
        notify();
        setOpenCallMeForm(false);
    };

    return <form className="call-me-form">
        {i18n.language === "EN" ? (
            <>
                <p>
                    {t('callMeBack:SHOW_I_CALL')}
                </p>
                <Form.Select className="call-me-form__select">
                    <option>Mr</option>
                    <option>Mrs</option>
                </Form.Select>
            </>
        ) : null}
        <div className="call-me-form__block">
            <div>
                <p> {t('callMeBack:NAME')}</p>
                <input type="text"
                    placeholder={t('callMeBack:NAME')}
                />
            </div>
            <div>
                <p> {t('callMeBack:SECOND_NAME')}</p>
                <input type="text"
                    placeholder={t('callMeBack:SECOND_NAME')}
                />
            </div>
        </div>
        <div className="call-me-form__block">
            <div>
                <p> {t('callMeBack:PHONE_NUMBER')}</p>
                <input type="text"
                    placeholder={t('callMeBack:PHONE_NUMBER_PLACEHOLDER')}
                />
            </div>
            <div>
                <p> {t('callMeBack:COMMUNICATION_OPTION')}</p>
                <Form.Select className="call-me-form__block-select">
                    <option>WhatsApp</option>
                    <option>Telegram</option>
                    <option>Viber</option>
                    <option>{t('callMeBack:COMMUNICATION_OPTION_PHONE')}</option>
                </Form.Select>
            </div>
        </div>
        <div className="call-me-form__block">
            <div>
                <p> {t('callMeBack:TIMEZONE')}</p>
                <Form.Select className="call-me-form__block-select">
                    <option>GMT+3 (Киев)</option>
                    <option>GMT+3 (Киев)</option>
                </Form.Select>
            </div>
            <div>
                <p> {t('callMeBack:DESIRED_CALL_TIME')}</p>
                <Form.Select className="call-me-form__block-select">
                    <option>00:00</option>
                    <option>01:00</option>
                    <option>02:00</option>
                    <option>03:00</option>
                    <option>04:00</option>
                    <option>05:00</option>
                    <option>06:00</option>
                    <option>07:00</option>
                    <option>08:00</option>
                    <option>09:00</option>
                    <option>10:00</option>
                    <option>11:00</option>
                    <option>12:00</option>
                    <option>13:00</option>
                    <option>14:00</option>
                    <option>15:00</option>
                    <option>16:00</option>
                    <option>17:00</option>
                    <option>18:00</option>
                    <option>19:00</option>
                    <option>20:00</option>
                    <option>21:00</option>
                    <option>22:00</option>
                    <option>23:00</option>
                </Form.Select>
            </div>
        </div>

        <p style={{ marginTop: 13 }}>
            {t('callMeBack:CASE_APPEAL')}
        </p>
        <Form.Select className="call-me-form__select">
            <option value="" disabled selected> {t('callMeBack:CASE_APPEAL_PLACEHOLDER')}</option>
            <option> {t('callMeBack:CASE_APPEAL_OPTION_1')}</option>
            <option> {t('callMeBack:CASE_APPEAL_OPTION_2')}</option>
            <option> {t('callMeBack:CASE_APPEAL_OPTION_3')} </option>
            <option> {t('callMeBack:CASE_APPEAL_OPTION_4')}</option>
            <option> {t('callMeBack:CASE_APPEAL_OPTION_5')}</option>
        </Form.Select>

        <p style={{ marginTop: 13 }}>
            {t('callMeBack:YOUR_MESSAGE')}
        </p>
        <textarea className="call-me-form__textarea"
            placeholder={t('callMeBack:YOUR_MESSAGE_PLACEHOLDER')}
        />

        <p style={{ marginTop: 5 }}>
            Email*
        </p>
        <input className="call-me-form__input"
            type="email"
            placeholder="Email"
        />
        <span> {t('callMeBack:NOTIFICATION')}</span>

        <p style={{ marginTop: 12 }}>
            {t('callMeBack:CONSULTATION_LANGUAGE')}
        </p>
        <div className="call-me-form__block-checkboxes">
            <div>
                <input
                    type="checkbox"
                    className="custom-checkbox"
                    id="English"
                    name="english"
                    value={checkboxValue.english}
                    onChange={changeCheckboxValue}
                />
                <label htmlFor="English">English</label>
            </div>
            <div>
                <input
                    type="checkbox"
                    className="custom-checkbox"
                    id="Russian"
                    name="russian"
                    value={checkboxValue.russian}
                    onChange={changeCheckboxValue}
                />
                <label htmlFor="Russian">Русский</label>
            </div>
            <div>
                <input
                    type="checkbox"
                    className="custom-checkbox"
                    id="Ukranian"
                    name="ukranian"
                    value={checkboxValue.ukranian}
                    onChange={changeCheckboxValue}
                />
                <label htmlFor="Ukranian">Украинский</label>
            </div>
            {/* <div>
                <input type="checkbox" class="custom-checkbox" id="Deutsch" name="happy" value="yes" />
                <label htmlFor="Deutsch">Deutsch</label>
            </div> */}
        </div>

        <Button onClick={handleSubmit}>
            {t('callMeBack:CALL_ME_BACK_BUTTON')}
            <svg width="36" height="13" viewBox="0 0 36 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M35.2492 7.10782C35.5849 6.77213 35.5849 6.22787 35.2492 5.89218L29.7788 0.421787C29.4431 0.0860968 28.8989 0.0860968 28.5632 0.421787C28.2275 0.757478 28.2275 1.30174 28.5632 1.63743L33.4257 6.5L28.5632 11.3626C28.2275 11.6983 28.2275 12.2425 28.5632 12.5782C28.8989 12.9139 29.4431 12.9139 29.7788 12.5782L35.2492 7.10782ZM0.257812 7.35959H34.6414V5.64041H0.257812V7.35959Z" fill="white" />
            </svg>
        </Button>
    </form>
}

export default CallMeForm;