import { useEffect } from "react";
import { useState } from "react";
import { Modal, Form, Button } from "react-bootstrap";
import { useTranslation } from "react-i18next";

import ModalSix from "../ModalSix/ModalSix";

const ModalFive = ({
    showFifthModal,
    setShowFifthModal,
    selectedSumm,
    setSelectedSumm,
    selectedTimeToInvest,
    setSelectedTimeToInvest,
    selectedProfit,
    setSelectedProfit,
}) => {
    const { t } = useTranslation();
    const [showSixthModal, setShowSixthModal] = useState(false);

    useEffect(() => {
        setSelectedProfit('25');
    }, []);

    return <>
        <Modal
            className="modal-calculate-profit"
            size="xl"
            show={showFifthModal}
            aria-labelledby="contained-modal-title-vcenter"
        >
            <svg width="27" height="27" viewBox="0 0 27 27" fill="none" xmlns="http://www.w3.org/2000/svg"
                className="section-five__block-full-close-btn"
                onClick={() => setShowFifthModal(false)}
            >
                <path d="M1 1L26 26" stroke="black" strokeWidth="2" strokeLinecap="round" />
                <path d="M1 26L26 1.00002" stroke="black" strokeWidth="2" strokeLinecap="round" />
            </svg>

            <svg width="56" height="56" viewBox="0 0 56 56" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="27.9967" cy="27.9999" r="27.0358" fill="#A585FF" />
                <path d="M24.7163 26.6958H27.1772C28.1343 26.6958 28.9261 26.5306 29.5527 26.2002C30.1908 25.8698 30.6636 25.4141 30.9712 24.833C31.2788 24.252 31.4326 23.5854 31.4326 22.8335C31.4326 22.0474 31.2902 21.3752 31.0054 20.8169C30.7319 20.2472 30.3104 19.8086 29.7407 19.501C29.1825 19.1934 28.4704 19.0396 27.6045 19.0396C26.8753 19.0396 26.2145 19.1877 25.6221 19.4839C25.041 19.7687 24.5796 20.1789 24.2378 20.7144C23.896 21.2384 23.7251 21.8651 23.7251 22.5942H19.5894C19.5894 21.2726 19.9368 20.0991 20.6318 19.0737C21.3268 18.0483 22.2725 17.2451 23.4688 16.6641C24.6764 16.0716 26.0322 15.7754 27.5361 15.7754C29.1426 15.7754 30.5439 16.0431 31.7402 16.5786C32.9479 17.1027 33.8879 17.8888 34.5601 18.937C35.2323 19.9852 35.5684 21.284 35.5684 22.8335C35.5684 23.5399 35.4032 24.2576 35.0728 24.9868C34.7424 25.716 34.2524 26.3825 33.603 26.9863C32.9536 27.5788 32.1447 28.063 31.1763 28.439C30.2078 28.8035 29.0856 28.9858 27.8096 28.9858H24.7163V26.6958ZM24.7163 29.9087V27.6528H27.8096C29.2679 27.6528 30.5098 27.8237 31.5352 28.1655C32.5719 28.5073 33.415 28.9801 34.0645 29.584C34.7139 30.1764 35.1867 30.8543 35.4829 31.6177C35.7905 32.381 35.9443 33.1899 35.9443 34.0444C35.9443 35.2065 35.7336 36.2433 35.312 37.1548C34.9019 38.0549 34.3151 38.8182 33.5518 39.4448C32.7884 40.0715 31.894 40.5443 30.8687 40.8633C29.8547 41.1823 28.7495 41.3418 27.5532 41.3418C26.4823 41.3418 25.4569 41.1937 24.4771 40.8975C23.4972 40.6012 22.62 40.1626 21.8452 39.5815C21.0705 38.9891 20.4552 38.2542 19.9995 37.377C19.5552 36.4883 19.333 35.4629 19.333 34.3008H23.4517C23.4517 35.0413 23.6226 35.6965 23.9644 36.2661C24.3175 36.8244 24.8075 37.263 25.4341 37.582C26.0721 37.901 26.8013 38.0605 27.6216 38.0605C28.4875 38.0605 29.2337 37.9067 29.8604 37.5991C30.487 37.2915 30.9655 36.8358 31.2959 36.2319C31.6377 35.6281 31.8086 34.8989 31.8086 34.0444C31.8086 33.076 31.6206 32.2899 31.2446 31.686C30.8687 31.0822 30.3332 30.6379 29.6382 30.353C28.9432 30.0568 28.1229 29.9087 27.1772 29.9087H24.7163Z" fill="white" />
            </svg>

            <h1>
                {t('modalCalculateProfit:SLIDE_SIX_TITLE')}
            </h1>
            <Form.Select onChange={e => setSelectedProfit(e.target.value)}>
                <option value="25">25%</option>
                <option value="30">30%</option>
                <option value="35">35%</option>
                <option value="40">40%</option>
                <option value="45">45%</option>
                <option value="50">50%</option>
                <option value="55">55%</option>
            </Form.Select>
            <Button onClick={() => {
                setShowFifthModal(false);
                setShowSixthModal(true);
            }}>
                {t('modalCalculateProfit:SLIDE_SIX_BTN')}
                <svg width="36" height="13" viewBox="0 0 36 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M35.7492 7.07413C36.0849 6.73844 36.0849 6.19418 35.7492 5.85849L30.2788 0.388096C29.9431 0.0524054 29.3989 0.0524054 29.0632 0.388096C28.7275 0.723786 28.7275 1.26805 29.0632 1.60374L33.9257 6.46631L29.0632 11.3289C28.7275 11.6646 28.7275 12.2088 29.0632 12.5445C29.3989 12.8802 29.9431 12.8802 30.2788 12.5445L35.7492 7.07413ZM0.757812 7.3259H35.1414V5.60672H0.757812V7.3259Z" fill="white" />
                </svg>
            </Button>
        </Modal>

        <ModalSix
            showSixthModal={showSixthModal}
            setShowSixthModal={setShowSixthModal}
            selectedSumm={selectedSumm}
            setSelectedSumm={setSelectedSumm}
            selectedTimeToInvest={selectedTimeToInvest}
            setSelectedTimeToInvest={setSelectedTimeToInvest}
            selectedProfit={selectedProfit}
            setSelectedProfit={setSelectedProfit}
        />
    </>
}

export default ModalFive;