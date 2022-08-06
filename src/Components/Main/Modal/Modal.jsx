import classNames from "classnames";
import { Button } from "react-bootstrap";
import { useTranslation } from "react-i18next";
import { toast } from "react-toastify";

import "./Modal.scss";

const Modal = ({ openModalAddress, setOpenModalAddress, activeObjectEstate }) => {
    const { t } = useTranslation();

    const notify = () => {
        toast.success(t('modalInvest:NOTIFICATION'), {
            className: "toast-modal",
            autoClose: 3000,
            progressClassName: 'toast-modal-progress'
        });
    };

    const handleCopyAddress = () => {
        notify();
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
        </p>
    </div>
}

export default Modal;