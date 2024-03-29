import { useState } from "react";
import { Modal, Button } from "react-bootstrap";
import { useTranslation } from "react-i18next";

import ModalThree from "../ModalThree/ModalThree";

const ModalTwo = ({
    showSecondModal,
    setShowSecondModal,
    selectedSumm,
    setSelectedSumm,
    selectedTimeToInvest,
    setSelectedTimeToInvest,
    selectedProfit,
    setSelectedProfit,
}) => {
    const { t } = useTranslation();
    const [showThirdModal, setShowThirdModal] = useState(false);

    return <>
        <Modal
            className="modal-calculate-profit"
            size="xl"
            show={showSecondModal}
            aria-labelledby="contained-modal-title-vcenter"
        >
            <svg width="27" height="27" viewBox="0 0 27 27" fill="none" xmlns="http://www.w3.org/2000/svg"
                className="section-five__block-full-close-btn"
                onClick={() => setShowSecondModal(false)}
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
            <h1 style={{ fontSize: 30 }}>
                {t('modalCalculateProfit:SLIDE_TWO_TITLE')}
            </h1>
            <Button style={{ width: 260 }}
                onClick={() => {
                    setShowSecondModal(false)
                    setShowThirdModal(true)
                }}
            >
                {t('modalCalculateProfit:SLIDE_TWO_BTN')}
                <svg width="36" height="13" viewBox="0 0 36 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M35.7492 7.07413C36.0849 6.73844 36.0849 6.19418 35.7492 5.85849L30.2788 0.388096C29.9431 0.0524054 29.3989 0.0524054 29.0632 0.388096C28.7275 0.723786 28.7275 1.26805 29.0632 1.60374L33.9257 6.46631L29.0632 11.3289C28.7275 11.6646 28.7275 12.2088 29.0632 12.5445C29.3989 12.8802 29.9431 12.8802 30.2788 12.5445L35.7492 7.07413ZM0.757812 7.3259H35.1414V5.60672H0.757812V7.3259Z" fill="white" />
                </svg>
            </Button>
        </Modal>

        <ModalThree
            showThirdModal={showThirdModal}
            setShowThirdModal={setShowThirdModal}
            selectedSumm={selectedSumm}
            setSelectedSumm={setSelectedSumm}
            selectedTimeToInvest={selectedTimeToInvest}
            setSelectedTimeToInvest={setSelectedTimeToInvest}
            selectedProfit={selectedProfit}
            setSelectedProfit={setSelectedProfit}
        />
    </>
}

export default ModalTwo;