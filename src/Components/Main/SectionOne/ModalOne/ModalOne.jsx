import { useEffect } from "react";
import { useState } from "react";
import { Modal, Form, Button } from "react-bootstrap";
import { useTranslation } from "react-i18next";

import ModalTwo from "../ModalTwo/ModalTwo";

import "./ModalOne.scss";

const ModalOne = ({
    show,
    setModalShow,
    selectedSumm,
    setSelectedSumm,
    selectedTimeToInvest,
    setSelectedTimeToInvest,
    selectedProfit,
    setSelectedProfit,
}) => {
    const { t } = useTranslation();
    const [showSecondModal, setShowSecondModal] = useState(false);

    useEffect(() => {
        setSelectedSumm('100');
    }, []);

    return <>
        <Modal
            className="modal-calculate-profit"
            size="xl"
            show={show}
            aria-labelledby="contained-modal-title-vcenter"
        >
            <svg width="27" height="27" viewBox="0 0 27 27" fill="none" xmlns="http://www.w3.org/2000/svg"
                className="section-five__block-full-close-btn"
                onClick={() => setModalShow(false)}
            >
                <path d="M1 1L26 26" stroke="black" strokeWidth="2" strokeLinecap="round" />
                <path d="M1 26L26 1.00002" stroke="black" strokeWidth="2" strokeLinecap="round" />
            </svg>

            <div>
                <svg width="56" height="56" viewBox="0 0 56 56" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="27.9967" cy="27.9999" r="27.0358" fill="#A585FF" />
                    <path d="M31.125 16.0317V41H27.0063V20.9194L20.9053 22.9873V19.5864L30.6294 16.0317H31.125Z" fill="white" />
                </svg>
            </div>
            <h1>
                {t('modalCalculateProfit:SLIDE_ONE_TITLE')}
            </h1>
            <Form.Select onChange={(e) => setSelectedSumm(e.target.value)}>
                <option value="100">€100</option>
                <option value="500">€500</option>
                <option value="1000">€1000</option>
                <option value="5000">€5000</option>
                <option value="10000">€10000</option>
                <option value="15000">€15000</option>
            </Form.Select>
            <Button onClick={() => {
                setShowSecondModal(true)
                setModalShow(false)
            }}>
                {t('modalCalculateProfit:SLIDE_ONE_BTN')}
                <svg width="36" height="13" viewBox="0 0 36 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M35.7492 7.07413C36.0849 6.73844 36.0849 6.19418 35.7492 5.85849L30.2788 0.388096C29.9431 0.0524054 29.3989 0.0524054 29.0632 0.388096C28.7275 0.723786 28.7275 1.26805 29.0632 1.60374L33.9257 6.46631L29.0632 11.3289C28.7275 11.6646 28.7275 12.2088 29.0632 12.5445C29.3989 12.8802 29.9431 12.8802 30.2788 12.5445L35.7492 7.07413ZM0.757812 7.3259H35.1414V5.60672H0.757812V7.3259Z" fill="white" />
                </svg>
            </Button>
        </Modal>

        <ModalTwo
            showSecondModal={showSecondModal}
            setShowSecondModal={setShowSecondModal}
            selectedSumm={selectedSumm}
            setSelectedSumm={setSelectedSumm}
            selectedTimeToInvest={selectedTimeToInvest}
            setSelectedTimeToInvest={setSelectedTimeToInvest}
            selectedProfit={selectedProfit}
            setSelectedProfit={setSelectedProfit}
        />
    </>
}

export default ModalOne;