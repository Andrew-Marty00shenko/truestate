import classNames from "classnames";
import { Button } from "react-bootstrap";
import { toast } from "react-toastify";

import "./Modal.scss";

const Modal = ({ openModalAddress, setOpenModalAddress }) => {

    const notify = () => {
        toast.success("Адрес скопирован!", {
            className: "toast-modal",
            autoClose: 3000,
            className: 'toast-modal-address',
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
                <path d="M1 1L26 26" stroke="black" strokeWidth="2" stroke-linecap="round" />
                <path d="M1 26L26 1.00002" stroke="black" strokeWidth="2" stroke-linecap="round" />
            </svg>
        </div>
        <h3>
            Переведи с твоего кошелька <br />
            <span> Metamask</span> желаемую сумму инвестиций в ETH на адрес смартконтракта:
        </h3>
        <div className="section-seven__modal-copy-block">
            <span>ххххххххххххххх</span>
            <Button onClick={handleCopyAddress}>
                Скопировать
            </Button>
        </div>
        <p className="section-seven__modal-info">
            В ответ ты получишь токены TRUESTATE
            по текущему курсу € - ETH
        </p>
        <p className="section-seven__modal-instructions">
            Подробная инструкция - <a href="#">здесь</a>
        </p>
    </div>
}

export default Modal;