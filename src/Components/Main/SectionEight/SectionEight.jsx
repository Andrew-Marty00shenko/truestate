import { Accordion } from "react-bootstrap";
import { Element, Link } from "react-scroll";
import { useTranslation } from "react-i18next";
import { useDispatch } from "react-redux";

import { opened } from "../../../Redux/slices/callMeBack";
import Modal from "../Modal/Modal";
import WhitePapperEn from "../../../assets/pdfs/white_papper_en.pdf";
import WhitePapperRu from "../../../assets/pdfs/white_papper_ru.pdf";
import WhitePapperUa from "../../../assets/pdfs/white_papper_ua.pdf";
import SectionEightImage from "../../../assets/images/section-eight-image.png";

import "./SectionEight.scss";

const SectionEight = ({ openModalAddress, setOpenModalAddress, activeObjectEstate }) => {
    const { t, i18n } = useTranslation();
    const dispatch = useDispatch();

    const scrollToTop = () => {
        document.body.scrollTop = 0;
        document.documentElement.scrollTop = 0;
        dispatch(opened());
    };

    return <section className="section-eight">
        <div className="section-eight__faq">
            <div className="section-eight__faq-image">
                <img src={SectionEightImage} alt="section-eight" />
            </div>
            <div className="section-eight__faq-info">
                <h3>
                    <Element name="faq" />
                    FAQ
                </h3>
                <span>
                    {t('landing:SECTION_EIGHT_TITLE')}
                </span>
                <Accordion>
                    <Accordion.Item eventKey="0">
                        <Accordion.Header>{t('landing:SECTION_EIGHT_QUESTION_1')}</Accordion.Header>
                        <Accordion.Body>
                            {t('landing:SECTION_EIGHT_ANSWER_1')}<a target="_blank" href={
                                i18n.language === 'EN'
                                    ? `${WhitePapperEn}#page=5`
                                    : i18n.language === 'RU'
                                        ? `${WhitePapperRu}#page=5`
                                        : `${WhitePapperUa}#page=5`
                            }>
                                {t('landing:SECTION_EIGHT_HREF')}
                            </a>.
                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="1">
                        <Accordion.Header>{t('landing:SECTION_EIGHT_QUESTION_2')}</Accordion.Header>
                        <Accordion.Body>
                            {t('landing:SECTION_EIGHT_ANSWER_2')}
                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="2">
                        <Accordion.Header>{t('landing:SECTION_EIGHT_QUESTION_3')}</Accordion.Header>
                        <Accordion.Body>
                            {t('landing:SECTION_EIGHT_ANSWER_3_TEXT')}
                            <Link
                                to="estates"
                                className="section_href"
                                style={{ border: 0, cursor: "pointer", borderBottom: '1px solid #8A0BFF' }}
                            >{t('landing:SECTION_EIGHT_ANSWER_3_HREF')}</Link>
                            {t('landing:SECTION_EIGHT_ANSWER_3_TEXT_2')}
                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="3">
                        <Accordion.Header>{t('landing:SECTION_EIGHT_QUESTION_4')}</Accordion.Header>
                        <Accordion.Body>
                            {t('landing:SECTION_EIGHT_ANSWER_4')} <a href="https://metamask.io/download/" target="_blank">{t('landing:SECTION_EIGHT_HREF')}</a>.
                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="4">
                        <Accordion.Header>{t('landing:SECTION_EIGHT_QUESTION_5')}</Accordion.Header>
                        <Accordion.Body>
                            {t('landing:SECTION_EIGHT_ANSWER_5')}
                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="5">
                        <Accordion.Header>{t('landing:SECTION_EIGHT_QUESTION_6')}</Accordion.Header>
                        <Accordion.Body>
                            {t('landing:SECTION_EIGHT_ANSWER_6')} <span className="href-to-call-me-back" onClick={scrollToTop} style={{ fontWeight: 300, color: '#8A0BFF', borderBottom: '1px solid #8A0BFF', fontSize: 18, cursor: 'pointer' }}>
                                {t('landing:SECTION_EIGHT_ANSWER_6_HREF')}
                            </span>
                            {t('landing:SECTION_EIGHT_ANSWER_6_NEXT')}
                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="6">
                        <Accordion.Header>{t('landing:SECTION_EIGHT_QUESTION_7')}</Accordion.Header>
                        <Accordion.Body>
                            <h4>
                                {t('landing:SECTION_EIGHT_ANSWER_7')}
                            </h4>
                            <ul>
                                <li>{t('landing:SECTION_EIGHT_ANSWER_7_TEXT_1')}</li>
                                <li>{t('landing:SECTION_EIGHT_ANSWER_7_TEXT_2')}</li>
                                <li>{t('landing:SECTION_EIGHT_ANSWER_7_TEXT_3')}</li>
                                <li>{t('landing:SECTION_EIGHT_ANSWER_7_TEXT_4')}</li>
                            </ul>
                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="7">
                        <Accordion.Header>{t('landing:SECTION_EIGHT_QUESTION_8')}</Accordion.Header>
                        <Accordion.Body>
                            {t('landing:SECTION_EIGHT_ANSWER_8')} <Link to="estates">
                                {t('landing:SECTION_EIGHT_HREF')}
                            </Link>).
                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="8">
                        <Accordion.Header>{t('landing:SECTION_EIGHT_QUESTION_9')}</Accordion.Header>
                        <Accordion.Body>
                            {t('landing:SECTION_EIGHT_ANSWER_9')}
                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="9">
                        <Accordion.Header>{t('landing:SECTION_EIGHT_QUESTION_10')}</Accordion.Header>
                        <Accordion.Body>
                            {t('landing:SECTION_EIGHT_ANSWER_10')}
                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="10">
                        <Accordion.Header>{t('landing:SECTION_EIGHT_QUESTION_11')}</Accordion.Header>
                        <Accordion.Body>
                            {t('landing:SECTION_EIGHT_ANSWER_11')} <a target="_blank" href={
                                i18n.language === 'EN'
                                    ? `${WhitePapperEn}#page=5`
                                    : i18n.language === 'RU'
                                        ? `${WhitePapperRu}#page=5`
                                        : `${WhitePapperUa}#page=5`
                            }>
                                {t('landing:SECTION_EIGHT_HREF')}
                            </a>.
                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="11">
                        <Accordion.Header>{t('landing:SECTION_EIGHT_QUESTION_12')}</Accordion.Header>
                        <Accordion.Body>
                            {t('landing:SECTION_EIGHT_ANSWER_12')} <a target="_blank" href={
                                i18n.language === 'EN'
                                    ? `${WhitePapperEn}#page=5`
                                    : i18n.language === 'RU'
                                        ? `${WhitePapperRu}#page=5`
                                        : `${WhitePapperUa}#page=5`
                            }>
                                {t('landing:SECTION_EIGHT_HREF')}
                            </a>.
                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="12">
                        <Accordion.Header>{t('landing:SECTION_EIGHT_QUESTION_13')}</Accordion.Header>
                        <Accordion.Body>
                            {t('landing:SECTION_EIGHT_ANSWER_13')} <a target="_blank" href={
                                i18n.language === 'EN'
                                    ? `${WhitePapperEn}#page=1`
                                    : i18n.language === 'RU'
                                        ? `${WhitePapperRu}#page=1`
                                        : `${WhitePapperUa}#page=1`
                            }>
                                {t('landing:SECTION_EIGHT_ANSWER_13_HREF')}
                            </a> {t('landing:SECTION_EIGHT_ANSWER_13_TEXT')}
                            <span className="href-to-call-me-back" onClick={scrollToTop} style={{ fontWeight: 300, color: '#8A0BFF', borderBottom: '1px solid #8A0BFF', fontSize: 18, cursor: 'pointer' }}>
                                {t('landing:SECTION_EIGHT_ANSWER_13_HREF_FORM')}
                            </span>
                            {t('landing:SECTION_EIGHT_ANSWER_13_TEXT_NEXT')}
                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="13">
                        <Accordion.Header>{t('landing:SECTION_EIGHT_QUESTION_14')}</Accordion.Header>
                        <Accordion.Body>
                            {t('landing:SECTION_EIGHT_ANSWER_14')}
                        </Accordion.Body>
                    </Accordion.Item>
                </Accordion>
            </div>
        </div>

        <Modal
            activeObjectEstate={activeObjectEstate}
            openModalAddress={openModalAddress}
            setOpenModalAddress={setOpenModalAddress}
        />
    </section >
}

export default SectionEight;