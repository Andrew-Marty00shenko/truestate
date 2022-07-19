import { Modal } from "react-bootstrap";

import "./ModalImage.scss";

const ModalImage = (props) => {
    return <Modal
        className="modal-image"
        {...props}
        size="xl"
        aria-labelledby="contained-modal-title-vcenter"
        centered
    >
        <svg width="27" height="27" viewBox="0 0 27 27" fill="none" xmlns="http://www.w3.org/2000/svg"
            className="section-five__block-full-close-btn"
            onClick={props.onHide}
        >
            <path d="M1 1L26 26" stroke="black" strokeWidth="2" strokeLinecap="round" />
            <path d="M1 26L26 1.00002" stroke="black" strokeWidth="2" strokeLinecap="round" />
        </svg>
        <img src={props.image} alt="big-image" />
    </Modal>
}

export default ModalImage;