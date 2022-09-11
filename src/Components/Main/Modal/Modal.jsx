import classNames from "classnames";
import { Button, Form } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { useTranslation } from "react-i18next";
import { toast } from "react-toastify";

import "./Modal.scss";

const Modal = ({ openModalAddress, setOpenModalAddress, activeObjectEstate }) => {
    const { t } = useTranslation();
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const watchAllFields = watch();

    const notify = () => {
        toast.success(t('modalInvest:NOTIFICATION'), {
            className: "toast-modal",
            autoClose: 3000,
            progressClassName: 'toast-modal-progress'
        });
    };

    const onSubmit = (data) => {
        if (watchAllFields.amount < 100) {
            toast.error(t('modalInvest:LITTLE_AMOUNT'), { autoClose: 5000 });
            return;
        }
    };

    return <div className={classNames("section-seven__modal", {
        "section-seven__modal--active": openModalAddress,
        "section-seven__modal--hidden": !openModalAddress,
    })}>
        <div className="section-seven__modal-close-btn"
            onClick={() => setOpenModalAddress(false)}
        >
            <svg width="27" height="27" viewBox="0 0 27 27" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M1 1L26 26" stroke="black" strokeWidth="2" strokeLinecap="round" />
                <path d="M1 26L26 1.00002" stroke="black" strokeWidth="2" strokeLinecap="round" />
            </svg>
        </div>
        <h3>
            {t('modalInvest:YOU_HAVE_CHOOSEN')} №{`00${activeObjectEstate?.id}`}.
        </h3>
        <form onSubmit={handleSubmit(onSubmit)}>
            <div>
                <p> {t('modalInvest:CONTRACT_NUMBER')}</p>
                <input
                    {...register("contract_number", { required: true })}
                    type="text"
                    placeholder={t('modalInvest:CONTRACT_NUMBER')}
                />
            </div>
            <div className="form__input">
                <div>
                    <p>{t('modalInvest:AMOUNT_INVEST')}</p>
                    <input
                        {...register("amount", { required: true })}
                        type="text"
                        placeholder={t('modalInvest:AMOUNT_INVEST')}
                    />
                </div>
                <div>
                    <p>{t('modalInvest:CURRENCY')}</p>
                    <Form.Select
                        placeholder={t('modalInvest:CURRENCY')}
                        {...register("currency", { required: true })}
                    >
                        <option value="$">
                            $
                        </option>
                        <option value="ETH">
                            ETH
                        </option>
                    </Form.Select>
                </div>
            </div>
            <div className="form__checkbox">
                <input
                    id="check"
                    type="checkbox"
                    {...register("privacy_policy", { required: true })}
                />
                <label htmlFor="check"> {t('modalInvest:PRIVACY_POLICY')}</label>
            </div>
            <Button type="submit">
                {t('modalInvest:INVEST')}
                <svg width="35" height="14" viewBox="0 0 35 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M34.7514 7.5444C35.075 7.22075 35.075 6.696 34.7514 6.37235L29.4771 1.09811C29.1535 0.774452 28.6287 0.774452 28.3051 1.09811C27.9814 1.42176 27.9814 1.94651 28.3051 2.27016L32.9933 6.95837L28.3051 11.6466C27.9814 11.9702 27.9814 12.495 28.3051 12.8186C28.6287 13.1423 29.1535 13.1423 29.4771 12.8186L34.7514 7.5444ZM0.832031 7.78714H34.1654V6.12961H0.832031V7.78714Z" fill="white" />
                </svg>
            </Button>
        </form>
        {/* <h3>
            {t('modalInvest:YOU_HAVE_CHOOSEN')} №{`00${activeObjectEstate?.id}`}. {t('modalInvest:FOR_INVEST_TEXT_1')}
            <span> {t('modalInvest:FOR_INVEST_TEXT_SPAN')}</span>  {t('modalInvest:FOR_INVEST_TEXT_2')}
        </h3>
        <div className="section-seven__modal-copy-block">
            <span>ххххххххххххххх</span>
            <Button onClick={handleCopyAddress}>
                {t('modalInvest:COPY_BUTTON')}
            </Button>
        </div>
        <p className="section-seven__modal-info">
            {t('modalInvest:INFO_TOKEN_TEXT')}
        </p>
        <p className="section-seven__modal-instructions">
            {t('modalInvest:DETAIL_INSTRUCTION')} <a href="#">{t('modalInvest:DETAIL_INSTRUCTION_HREF')}</a>
        </p> */}
    </div>
}

export default Modal;