import { Modal, Button } from "react-bootstrap";
import { useTranslation } from "react-i18next";
import { Link } from "react-scroll";

const ModalSeven = ({
    showSeventhModal,
    setShowSeventhModal,
    selectedSumm,
    selectedTimeToInvest,
    selectedProfit,
}) => {
    const { t } = useTranslation();
    const profit = parseInt(selectedSumm, 10) * parseFloat(`0.${selectedProfit}`, 10);
    const profitByTime = profit * parseInt(selectedTimeToInvest, 10);
    const resultRevenue = profitByTime + parseInt(selectedSumm, 10)

    return <>
        <Modal
            className="modal-calculate-profit"
            size="xl"
            show={showSeventhModal}
            aria-labelledby="contained-modal-title-vcenter"
        >
            <svg width="27" height="27" viewBox="0 0 27 27" fill="none" xmlns="http://www.w3.org/2000/svg"
                className="section-five__block-full-close-btn"
                onClick={() => setShowSeventhModal(false)}
            >
                <path d="M1 1L26 26" stroke="black" strokeWidth="2" strokeLinecap="round" />
                <path d="M1 26L26 1.00002" stroke="black" strokeWidth="2" strokeLinecap="round" />
            </svg>

            <svg width="56" height="56" viewBox="0 0 56 56" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="27.9967" cy="27.9999" r="27.0358" fill="#A585FF" />
                <path d="M15.1328 27.2703L26.1042 38.2416L44.0626 16.5019" stroke="white" stroke-width="4" />
            </svg>

            <h1>
                {t('modalCalculateProfit:SLIDE_EIGHT_TITLE')}
            </h1>
            <div style={{ textAlign: 'left', marginTop: 20, fontSize: 20 }}>
                <p>
                    {t('modalCalculateProfit:SLIDE_EIGHT_INVESTMENT_AMOUNT')} <span>€{selectedSumm}</span>
                </p>
                <p>
                    {t('modalCalculateProfit:SLIDE_EIGHT_TERM')}
                    <span>
                        {selectedTimeToInvest == 1
                            ? selectedTimeToInvest + t('modalCalculateProfit:SLIDE_YEAR')
                            : (selectedTimeToInvest > 1 && selectedTimeToInvest < 5)
                                ? selectedTimeToInvest + t('modalCalculateProfit:SLIDE_YEARS')
                                : selectedTimeToInvest + t('modalCalculateProfit:SLIDE_YEARS_MORE')
                        }
                    </span>
                </p>
                <p>
                    {t('modalCalculateProfit:SLIDE_EIGHT_REVENUE')} <span>{selectedProfit}%</span>
                </p>
                <p>
                    {t('modalCalculateProfit:SLIDE_EIGHT_PROFIT_IS')} <span>€{resultRevenue}</span>
                </p>
            </div>
            <div style={{ marginTop: 10 }}>
                <p>{t('modalCalculateProfit:SLIDE_EIGHT_PROFIT_OFFERT')}</p>
                <p>{t('modalCalculateProfit:SLIDE_EIGHT_PROFIT_RETURN')}</p>
            </div>
            <Link to="estates">
                <Button onClick={() => {
                    setShowSeventhModal(false);
                }}
                    style={{ width: 430 }}
                    className="seven"
                >
                    {t('modalCalculateProfit:SLIDE_EIGHT_BTN')}
                    <svg width="36" height="13" viewBox="0 0 36 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M35.7492 7.07413C36.0849 6.73844 36.0849 6.19418 35.7492 5.85849L30.2788 0.388096C29.9431 0.0524054 29.3989 0.0524054 29.0632 0.388096C28.7275 0.723786 28.7275 1.26805 29.0632 1.60374L33.9257 6.46631L29.0632 11.3289C28.7275 11.6646 28.7275 12.2088 29.0632 12.5445C29.3989 12.8802 29.9431 12.8802 30.2788 12.5445L35.7492 7.07413ZM0.757812 7.3259H35.1414V5.60672H0.757812V7.3259Z" fill="white" />
                    </svg>
                </Button>
            </Link>
            <p style={{ fontSize: 10, marginTop: 30, textAlign: 'left' }}>
                {t('modalCalculateProfit:SLIDE_EIGHT_TEXT')} <a
                    href="/#"
                    style={{ color: '#8A0BFF' }}
                >
                    {t('modalCalculateProfit:SLIDE_EIGHT_TEXT_HREF')}
                </a>
                {t('modalCalculateProfit:SLIDE_EIGHT_TEXT_2')}
            </p>
        </Modal>
    </>
}

export default ModalSeven;