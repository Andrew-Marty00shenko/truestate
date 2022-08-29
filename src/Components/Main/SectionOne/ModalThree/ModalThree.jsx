import { useEffect } from "react";
import { useState } from "react";
import { Modal, Form, Button } from "react-bootstrap";
import { useTranslation } from "react-i18next";

import ModalFour from "../ModalFour/ModalFour";

const ModalThree = ({
    showThirdModal,
    setShowThirdModal,
    selectedSumm,
    setSelectedSumm,
    selectedTimeToInvest,
    setSelectedTimeToInvest,
    selectedProfit,
    setSelectedProfit,
}) => {
    const { t } = useTranslation();
    const [showFourthModal, setShowFourthModal] = useState(false);

    useEffect(() => {
        setSelectedTimeToInvest('1');
    }, []);

    return <>
        <Modal
            className="modal-calculate-profit"
            size="xl"
            show={showThirdModal}
            aria-labelledby="contained-modal-title-vcenter"
        >
            <svg width="27" height="27" viewBox="0 0 27 27" fill="none" xmlns="http://www.w3.org/2000/svg"
                className="section-five__block-full-close-btn"
                onClick={() => setShowThirdModal(false)}
            >
                <path d="M1 1L26 26" stroke="black" strokeWidth="2" strokeLinecap="round" />
                <path d="M1 26L26 1.00002" stroke="black" strokeWidth="2" strokeLinecap="round" />
            </svg>

            <svg width="56" height="56" viewBox="0 0 56 56" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="27.9967" cy="27.9999" r="27.0358" fill="#A585FF" />
                <path d="M36.5596 37.7188V41H19.8799V38.1802L27.9805 29.3447C28.8691 28.3421 29.5698 27.4762 30.0825 26.7471C30.5952 26.0179 30.9541 25.3628 31.1592 24.7817C31.3757 24.1893 31.4839 23.6139 31.4839 23.0557C31.4839 22.2695 31.3358 21.5802 31.0396 20.9878C30.7547 20.384 30.3332 19.9111 29.7749 19.5693C29.2166 19.2161 28.5387 19.0396 27.7412 19.0396C26.8184 19.0396 26.0436 19.2389 25.417 19.6377C24.7904 20.0365 24.3175 20.589 23.9985 21.2954C23.6795 21.9904 23.52 22.7879 23.52 23.688H19.4014C19.4014 22.241 19.7318 20.9194 20.3926 19.7231C21.0534 18.5155 22.0104 17.5584 23.2637 16.8521C24.5169 16.1343 26.0265 15.7754 27.7925 15.7754C29.4559 15.7754 30.8687 16.0545 32.0308 16.6128C33.1929 17.1711 34.0758 17.9629 34.6797 18.9883C35.2949 20.0137 35.6025 21.2271 35.6025 22.6284C35.6025 23.4032 35.4772 24.1722 35.2266 24.9355C34.9759 25.6989 34.617 26.4622 34.1499 27.2256C33.6942 27.9775 33.153 28.7352 32.5264 29.4985C31.8997 30.2505 31.2104 31.0138 30.4585 31.7886L25.0752 37.7188H36.5596Z" fill="white" />
            </svg>

            <h1>
                {t('modalCalculateProfit:SLIDE_THREE_TITLE')}
            </h1>
            <Form.Select onChange={e => setSelectedTimeToInvest(e.target.value)}>
                <option value="1"> {t('modalCalculateProfit:SLIDE_THREE_OPTION_1')}</option>
                <option value="2"> {t('modalCalculateProfit:SLIDE_THREE_OPTION_2')}</option>
                <option value="3"> {t('modalCalculateProfit:SLIDE_THREE_OPTION_3')}</option>
                <option value="4"> {t('modalCalculateProfit:SLIDE_THREE_OPTION_4')}</option>
                <option value="5"> {t('modalCalculateProfit:SLIDE_THREE_OPTION_5')}</option>
                <option value="6"> {t('modalCalculateProfit:SLIDE_THREE_OPTION_6')}</option>
            </Form.Select>
            <Button onClick={() => {
                setShowThirdModal(false);
                setShowFourthModal(true);
            }}>
                {t('modalCalculateProfit:SLIDE_THREE_BTN')}
                <svg width="36" height="13" viewBox="0 0 36 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M35.7492 7.07413C36.0849 6.73844 36.0849 6.19418 35.7492 5.85849L30.2788 0.388096C29.9431 0.0524054 29.3989 0.0524054 29.0632 0.388096C28.7275 0.723786 28.7275 1.26805 29.0632 1.60374L33.9257 6.46631L29.0632 11.3289C28.7275 11.6646 28.7275 12.2088 29.0632 12.5445C29.3989 12.8802 29.9431 12.8802 30.2788 12.5445L35.7492 7.07413ZM0.757812 7.3259H35.1414V5.60672H0.757812V7.3259Z" fill="white" />
                </svg>
            </Button>
        </Modal>

        <ModalFour
            showFourthModal={showFourthModal}
            setShowFourthModal={setShowFourthModal}
            selectedSumm={selectedSumm}
            setSelectedSumm={setSelectedSumm}
            selectedTimeToInvest={selectedTimeToInvest}
            setSelectedTimeToInvest={setSelectedTimeToInvest}
            selectedProfit={selectedProfit}
            setSelectedProfit={setSelectedProfit}
        />
    </>
}

export default ModalThree;